#!/usr/bin/env bash
# GA4 query runner — reads config.sh, subs values into a .sql file, runs via bq
#
# Usage:  ./run.sh <query-name> [days]
# Example: ./run.sh video-dropoff 30
#          ./run.sh overview
#          ./run.sh list           (shows available queries)

set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck disable=SC1091
source "$DIR/config.sh"

QUERY_NAME="${1:-help}"
DAYS="${2:-$DEFAULT_DAYS}"

if [[ "$QUERY_NAME" == "list" || "$QUERY_NAME" == "help" || "$QUERY_NAME" == "-h" ]]; then
  echo ""
  echo "GA4 query runner"
  echo ""
  echo "Usage: ./run.sh <query-name> [days]"
  echo ""
  echo "Available queries:"
  for f in "$DIR"/*.sql; do
    name=$(basename "$f" .sql)
    printf "  %s\n" "$name"
  done
  echo ""
  echo "Default lookback: $DEFAULT_DAYS days (override by passing a number)"
  echo ""
  exit 0
fi

SQL_FILE="$DIR/${QUERY_NAME}.sql"
if [[ ! -f "$SQL_FILE" ]]; then
  echo "Unknown query: $QUERY_NAME" >&2
  echo "Run './run.sh list' to see available queries." >&2
  exit 1
fi

if [[ -z "$PROPERTY_ID" ]]; then
  echo "❌ PROPERTY_ID is empty in config.sh." >&2
  echo "Find it by running: bq ls" >&2
  echo "Look for a dataset named analytics_XXXXXXXX — the digits are your PROPERTY_ID." >&2
  exit 1
fi

END_DATE=$(date -u +%Y%m%d)
START_DATE=$(date -u -v-"${DAYS}"d +%Y%m%d)

echo "📊  Query: $QUERY_NAME"
echo "📅  Range: $START_DATE → $END_DATE ($DAYS days)"
echo "🗂   Table: $PROJECT_ID.analytics_$PROPERTY_ID.events_*"
echo ""

# Strip SQL comment lines (leading `--`) before passing to bq — its flag
# parser mistakes them for CLI options otherwise.
SQL=$(cat "$SQL_FILE" \
  | sed "s/{{PROJECT_ID}}/$PROJECT_ID/g" \
  | sed "s/{{PROPERTY_ID}}/$PROPERTY_ID/g" \
  | sed "s/{{START_DATE}}/$START_DATE/g" \
  | sed "s/{{END_DATE}}/$END_DATE/g" \
  | grep -v '^[[:space:]]*--')

bq query --use_legacy_sql=false --format=pretty "$SQL"
