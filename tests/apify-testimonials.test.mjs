import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const recordUrl = new URL(
  "docs/research/apify-reviews/reviews-2026-08-22.json",
  root,
);
const readmes = [
  "README.md",
  "README.es.md",
  "README.tr.md",
  "README.zh-CN.md",
  "README.ja.md",
  "README.ko.md",
  "README.de.md",
  "README.fr.md",
  "README.it.md",
];

test("covers every Xquik Actor and written review", async () => {
  const record = JSON.parse(await readFile(recordUrl, "utf8"));

  assert.equal(record.reviewedOn, "2026-08-22");
  assert.deepEqual(record.counts, {
    actors: 11,
    actorsWithEligibleTestimonials: 3,
    actorsWithoutWrittenReviews: 8,
    ratings: 21,
    writtenReviews: 19,
    eligibleTestimonials: 18,
    ineligibleWrittenReviews: 1,
    ratingOnlyReviews: 2,
  });
  assert.equal(record.actors.length, record.counts.actors);
  assert.equal(record.reviews.length, record.counts.writtenReviews);
  assert.equal(
    record.actors.reduce((total, actor) => total + actor.ratings, 0),
    record.counts.ratings,
  );
  assert.equal(
    record.actors.filter((actor) => actor.writtenReviews === 0).length,
    record.counts.actorsWithoutWrittenReviews,
  );
  assert.equal(
    new Set(record.actors.map((actor) => actor.slug)).size,
    record.actors.length,
  );
});

test("publishes every eligible review exactly in all languages", async () => {
  const [recordSource, ...sources] = await Promise.all([
    readFile(recordUrl, "utf8"),
    ...readmes.map((file) => readFile(new URL(file, root), "utf8")),
  ]);
  const record = JSON.parse(recordSource);
  const eligible = record.reviews.filter(
    (review) => review.status === "eligible-testimonial",
  );
  const excluded = record.reviews.filter(
    (review) => review.status !== "eligible-testimonial",
  );

  assert.equal(eligible.length, record.counts.eligibleTestimonials);
  assert.equal(excluded.length, record.counts.ineligibleWrittenReviews);
  assert.equal(new Set(eligible.map((review) => review.actor)).size, 3);
  for (const source of sources) {
    assert.ok(source.includes("<!-- BEGIN APIFY TESTIMONIALS -->"));
    assert.ok(source.includes("<!-- END APIFY TESTIMONIALS -->"));
    for (const review of eligible) {
      assert.equal(review.rating, 5);
      assert.match(review.reviewedAt, /^2026-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/u);
      assert.ok(source.includes(`"${review.text}"`));
      assert.ok(source.includes(review.reviewer));
      assert.ok(source.includes(review.reviewedAt.slice(0, 10)));
      assert.ok(source.includes(review.sourceUrl));
    }
    for (const review of excluded) assert.ok(!source.includes(review.text));
  }
});

test("records Apify reuse guidance", async () => {
  const record = JSON.parse(await readFile(recordUrl, "utf8"));

  assert.equal(
    record.reuseEvidence.url,
    "https://docs.apify.com/academy/actor-marketing-playbook/promote-your-actor/social-media",
  );
  assert.equal(record.reuseEvidence.checkedOn, record.reviewedOn);
});
