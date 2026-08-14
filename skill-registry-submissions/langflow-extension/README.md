# Xquik Langflow Extension

Langflow plugin for bounded public tweet search through Xquik.

Xquik is an independent third-party service. Not affiliated with X Corp.

This is a pip-installable Langflow extension. Do not open a core pull request against `langflow-ai/langflow` until `lfx extension validate` passes on a machine with Langflow installed.

## Install

```bash
pip install lfx-xquik
langflow run
```

Local development:

```bash
lfx extension validate .
lfx extension dev .
```

The component reads `XQUIK_API_KEY` and calls `GET https://xquik.com/api/v1/x/tweets/search` with a bounded `limit`.
