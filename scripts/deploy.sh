#!/usr/bin/env bash
# DRAFT, not used yet: publishing needs the owner's approval. Never run from CI.
# Syncs the built site (dist/) to the web root on the server.
# Default is a dry run; pass --apply to really copy. --delete only removes files inside the target directory.
#
# Usage: npm run build && scripts/deploy.sh [--apply]
set -euo pipefail

# The target is deliberately not hard-coded (this repository is public). Example:
#   DEPLOY_TARGET=user@host:/var/www/vervechka-landing/ scripts/deploy.sh
: "${DEPLOY_TARGET:?set DEPLOY_TARGET=user@host:/var/www/vervechka-landing/}"

cd "$(dirname "$0")/.."
[[ -f dist/index.html ]] || { echo "dist/ is missing: run npm run build first" >&2; exit 1; }
[[ "$DEPLOY_TARGET" == */vervechka-landing/ ]] || { echo "refusing: target must end with /vervechka-landing/" >&2; exit 1; }

mode=(--dry-run)
if [[ "${1:-}" == "--apply" ]]; then mode=(); else echo "Dry run. Pass --apply to deploy." >&2; fi

rsync -rlptvz --delete --chmod=D755,F644 "${mode[@]}" dist/ "$DEPLOY_TARGET"
