# SPDX-FileCopyrightText: 2026 Xquik Contributors
# SPDX-License-Identifier: MIT

"""Bounded public tweet search through Xquik."""

from __future__ import annotations

import json
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

from lfx.custom.custom_component.component import Component
from lfx.io import IntInput, MessageTextInput, Output, SecretStrInput
from lfx.schema.data import Data


class XquikTweetSearch(Component):
    display_name = "Xquik Tweet Search"
    description = "Search public X/Twitter posts through Xquik. Not affiliated with X Corp."
    icon = "search"
    documentation = "https://docs.xquik.com/api-reference/overview"
    name = "XquikTweetSearch"

    inputs = [
        SecretStrInput(
            name="api_key",
            display_name="Xquik API Key",
            info="Read from XQUIK_API_KEY. Never paste an X password.",
            required=True,
        ),
        MessageTextInput(
            name="query",
            display_name="Query",
            info="Tweet search query",
            required=True,
        ),
        IntInput(
            name="limit",
            display_name="Limit",
            info="Maximum public results to return",
            value=20,
        ),
    ]
    outputs = [Output(display_name="Tweets", name="tweets", method="search_tweets")]

    def search_tweets(self) -> Data:
        query = str(self.query or "").strip()
        if not query:
            raise ValueError("query is required")
        limit = min(max(int(self.limit or 20), 1), 100)
        api_key = str(self.api_key or "").strip()
        if not api_key:
            raise ValueError("Xquik API key is required")

        params = urlencode({"q": query, "limit": str(limit)})
        request = Request(
            f"https://xquik.com/api/v1/x/tweets/search?{params}",
            headers={
                "x-api-key": api_key,
                "accept": "application/json",
                "user-agent": "lfx-xquik/0.1.0",
            },
            method="GET",
        )
        try:
            with urlopen(request, timeout=30) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except HTTPError as error:
            raise ValueError(f"Xquik search failed with HTTP {error.code}") from error
        except URLError as error:
            raise ValueError("Xquik search could not reach xquik.com") from error

        return Data(data={"query": query, "limit": limit, "result": payload})
