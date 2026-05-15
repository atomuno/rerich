#!/usr/bin/env bash
# Файлы в public/media, на которые нет записи в таблице media (кандидаты на удаление после бэкапа).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

DB="${DATABASE_URL:-file:./payload.sqlite}"
DB_FILE="${DB#file:}"

if [[ ! -f "$DB_FILE" ]]; then
  echo "Нет БД: $DB_FILE"
  exit 1
fi

if ! command -v sqlite3 >/dev/null 2>&1; then
  echo "Нужен sqlite3."
  exit 1
fi

MEDIA_DIR="public/media"
if [[ ! -d "$MEDIA_DIR" ]]; then
  echo "Нет каталога $MEDIA_DIR"
  exit 0
fi

USED_LIST="$(mktemp)"
trap 'rm -f "$USED_LIST"' EXIT

sqlite3 "$DB_FILE" "SELECT filename FROM media WHERE filename IS NOT NULL AND filename != '';" >"$USED_LIST"

orphan_count=0
while IFS= read -r -d '' f; do
  base="$(basename "$f")"
  if ! grep -qxF "$base" "$USED_LIST" 2>/dev/null; then
    echo "$f"
    orphan_count=$((orphan_count + 1))
  fi
done < <(find "$MEDIA_DIR" -type f ! -name '.gitkeep' -print0)

echo "---"
echo "Осиротевших файлов: $orphan_count (удаляйте только после npm run payload:backup)"
