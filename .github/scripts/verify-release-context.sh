#!/usr/bin/env bash

set -euo pipefail

: "${GITHUB_REF_TYPE:?}"
: "${GITHUB_REF_NAME:?}"
: "${GITHUB_SHA:?}"
: "${DEFAULT_BRANCH:?}"

if [[ "$GITHUB_REF_TYPE" != "tag" ]]; then
  echo "Release workflows require a tag event." >&2
  exit 1
fi

if [[ ! "$GITHUB_REF_NAME" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Release tags must use vMAJOR.MINOR.PATCH." >&2
  exit 1
fi

package_version="$(node -p "require('./package.json').version")"
expected_tag="v${package_version}"
if [[ "$GITHUB_REF_NAME" != "$expected_tag" ]]; then
  echo "Tag ${GITHUB_REF_NAME} does not match package version ${package_version}." >&2
  exit 1
fi

tag_commit="$(git rev-parse "refs/tags/${GITHUB_REF_NAME}^{commit}")"
if [[ "$tag_commit" != "$GITHUB_SHA" ]]; then
  echo "The release tag does not resolve to the workflow commit." >&2
  exit 1
fi

git fetch --no-tags origin "$DEFAULT_BRANCH"
if ! git merge-base --is-ancestor "$GITHUB_SHA" "origin/${DEFAULT_BRANCH}"; then
  echo "The release commit is not on ${DEFAULT_BRANCH}." >&2
  exit 1
fi

npm run check-versions
