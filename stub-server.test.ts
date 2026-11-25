import { expect, test } from "bun:test";
import fc, { type JsonValue } from "fast-check";

import { createMessageHandler, processLine } from "./stub-server";

const MAX_LINE_LENGTH = 64 * 1024;
const METHOD_NOT_FOUND = -32_601;
const METHODS = ["server/discover", "initialize", "tools/list", "tools/call", "ping"];
const REPLY_SHAPES = [
  ["error", "id", "jsonrpc"],
  ["id", "jsonrpc", "result"],
];

type Reply = {
  readonly fields: readonly string[];
  readonly jsonrpc: unknown;
  readonly id: unknown;
  readonly result: unknown;
  readonly error: unknown;
};

function isUnknownArray(value: unknown): value is readonly unknown[] {
  return Array.isArray(value);
}

function parsed(text: string): unknown {
  const value: unknown = JSON.parse(text);
  return value;
}

function repliesTo(message: object): readonly Reply[] {
  const lines: string[] = [];
  createMessageHandler((line) => {
    lines.push(line);
  })(message);
  return lines.map((line) => {
    expect(line.endsWith("\n")).toBe(true);
    const reply = parsed(line);
    if (typeof reply !== "object" || reply === null || isUnknownArray(reply)) {
      throw new TypeError(`The stub server wrote a reply that is not a JSON object: ${line}`);
    }
    return {
      fields: Object.keys(reply).sort(),
      jsonrpc: "jsonrpc" in reply ? reply.jsonrpc : undefined,
      id: "id" in reply ? reply.id : undefined,
      result: "result" in reply ? reply.result : undefined,
      error: "error" in reply ? reply.error : undefined,
    };
  });
}

function handedOver(line: string): readonly unknown[] {
  const received: unknown[] = [];
  processLine(line, (message) => {
    received.push(message);
  });
  return received;
}

function toolNames(result: unknown): readonly string[] {
  if (typeof result !== "object" || result === null || !("tools" in result) || !isUnknownArray(result.tools)) {
    return [];
  }
  return result.tools.flatMap((tool) =>
    typeof tool === "object" && tool !== null && "name" in tool && typeof tool.name === "string" ? [tool.name] : [],
  );
}

function paddedLine(id: JsonValue, length: number): string {
  const bare = JSON.stringify({ id, method: "ping", padding: "" });
  return JSON.stringify({ id, method: "ping", padding: "x".repeat(Math.max(0, length - bare.length)) });
}

test("each line that holds a JSON object reaches the handler once, as that object", () => {
  fc.assert(
    fc.property(fc.dictionary(fc.string(), fc.jsonValue()), (object) => {
      const line = JSON.stringify(object);
      expect(handedOver(line)).toEqual([parsed(line)]);
    }),
  );
});

test("a line that holds JSON other than an object never reaches the handler", () => {
  const notAnObject = fc
    .jsonValue()
    .filter((value) => typeof value !== "object" || value === null || Array.isArray(value));
  fc.assert(
    fc.property(notAnObject, (value) => {
      expect(handedOver(JSON.stringify(value))).toEqual([]);
    }),
  );
});

test("any line reaches the handler at most once and never throws", () => {
  fc.assert(
    fc.property(fc.string({ unit: "binary" }), (line) => {
      expect(handedOver(line).length).toBeLessThanOrEqual(1);
    }),
  );
});

test("a line of up to 64 KiB reaches the handler and a longer one is dropped", () => {
  fc.assert(
    fc.property(fc.jsonValue({ maxDepth: 2 }), fc.integer({ min: 1, max: 1024 }), (id, extra) => {
      const fits = paddedLine(id, MAX_LINE_LENGTH);
      const tooLong = paddedLine(id, MAX_LINE_LENGTH + extra);
      fc.pre(fits.length === MAX_LINE_LENGTH);
      expect(handedOver(fits)).toHaveLength(1);
      expect(handedOver(tooLong)).toEqual([]);
    }),
  );
});

test("each request with an id gets exactly 1 JSON-RPC 2.0 reply that carries that id", () => {
  fc.assert(
    fc.property(fc.jsonValue(), fc.oneof(fc.constantFrom(...METHODS), fc.string()), (id, method) => {
      const replies = repliesTo({ jsonrpc: "2.0", id, method });
      expect(replies).toHaveLength(1);
      const [reply] = replies;
      expect(reply?.jsonrpc).toBe("2.0");
      expect(reply?.id).toEqual(parsed(JSON.stringify(id)));
      expect(REPLY_SHAPES).toContainEqual(reply?.fields);
    }),
  );
});

test("a message with no id gets no reply", () => {
  const notification = fc.dictionary(
    fc.string().filter((key) => key !== "id"),
    fc.jsonValue(),
  );
  fc.assert(
    fc.property(notification, fc.constantFrom(...METHODS), (message, method) => {
      expect(repliesTo({ ...message, method })).toEqual([]);
    }),
  );
});

test("a method the server lacks gets the method-not-found error that names it", () => {
  const unknownMethod = fc.string().filter((method) => !METHODS.includes(method));
  fc.assert(
    fc.property(fc.jsonValue(), unknownMethod, (id, method) => {
      const [reply] = repliesTo({ id, method });
      expect(reply?.error).toEqual({ code: METHOD_NOT_FOUND, message: `Method not found: ${method}` });
    }),
  );
});

test("tools/call answers each listed tool with the live server notice and refuses any other name", () => {
  const [listed] = repliesTo({ id: 1, method: "tools/list" });
  const names = toolNames(listed?.result);
  expect(names.length).toBeGreaterThan(0);
  fc.assert(
    fc.property(fc.oneof(fc.constantFrom(...names), fc.string()), (name) => {
      const [reply] = repliesTo({ id: 1, method: "tools/call", params: { name } });
      if (names.includes(name)) {
        expect(reply?.result).toMatchObject({ isError: true });
      } else {
        expect(reply?.error).toEqual({ code: METHOD_NOT_FOUND, message: `Unknown tool: ${name}` });
      }
    }),
  );
});
