#!/usr/bin/env bash
set -e

TARGET_BRANCH="pages"
EXCLUDE_FOLDER="archive"

ORIGIN_URL=$(git remote get-url origin 2>/dev/null || true)
CODEBERG_URL=$(git remote get-url codeberg 2>/dev/null || true)

TEMP_DIR=$(mktemp -d)
trap 'rm -rf "$TEMP_DIR"' EXIT

rsync -a --progress ./ "$TEMP_DIR" \
    --exclude='.git' \
    --exclude="$EXCLUDE_FOLDER"

cd "$TEMP_DIR"
git init -b "$TARGET_BRANCH"
git add .
git commit -m "Deploy to $TARGET_BRANCH - $(date +'%Y-%m-%d %H:%M:%S')"

# 5. Push to both remotes
if [ -n "$ORIGIN_URL" ]; then
    git remote add origin "$ORIGIN_URL"
    git push -f origin "$TARGET_BRANCH"
fi

if [ -n "$CODEBERG_URL" ]; then
    git remote add codeberg "$CODEBERG_URL"
    git push -f codeberg "$TARGET_BRANCH"
fi

