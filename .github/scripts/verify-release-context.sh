#!/usr/bin/env bash

# SPDX-FileCopyrightText: 2026 Xquik Contributors
# SPDX-License-Identifier: MIT

set -euo pipefail

: "${GITHUB_REF_TYPE:?}"
: "${GITHUB_REF_NAME:?}"
: "${GITHUB_SHA:?}"
: "${DEFAULT_BRANCH:?}"

if [[ "$GITHUB_REF_TYPE" != "tag" ]]; then
  echo "Release failed. Run this workflow from a tag." >&2
  exit 1
fi

if [[ ! "$GITHUB_REF_NAME" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Release tag is invalid. Use vMAJOR.MINOR.PATCH." >&2
  exit 1
fi

package_version="$(bun -e "process.stdout.write(require('./package.json').version)")"
expected_tag="v${package_version}"
if [[ "$GITHUB_REF_NAME" != "$expected_tag" ]]; then
  echo "Release tag does not match package version ${package_version}. Use ${expected_tag}." >&2
  exit 1
fi

tag_commit="$(git rev-parse "refs/tags/${GITHUB_REF_NAME}^{commit}")"
if [[ "$tag_commit" != "$GITHUB_SHA" ]]; then
  echo "Release failed. The tag and workflow commit differ." >&2
  exit 1
fi

git fetch --no-tags origin "$DEFAULT_BRANCH"
if ! git merge-base --is-ancestor "$GITHUB_SHA" "origin/${DEFAULT_BRANCH}"; then
  echo "Release commit is not on ${DEFAULT_BRANCH}. Merge it first." >&2
  exit 1
fi

bun run check-versions
