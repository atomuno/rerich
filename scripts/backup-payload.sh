#!/usr/bin/env bash
# Архив «источник правды» Payload: SQLite + public/media (для переноса на другой сервер или бэкапа).
# Результат: backups/payload-bundle-ГГГГММДД-ЧЧММ.tar.gz (папка backups в .gitignore).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

mkdir -p backups
STAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE="backups/payload-bundle-${STAMP}.tar.gz"

ITEMS=()
for f in payload.sqlite payload.sqlite-wal payload.sqlite-shm; do
  if [[ -f "$f" ]]; then
    ITEMS+=("$f")
  fi
done

if [[ -d public/media ]]; then
  ITEMS+=("public/media")
fi

if [[ ${#ITEMS[@]} -eq 0 ]]; then
  echo "Нечего архивировать: нет файлов payload.sqlite* и нет каталога public/media."
  exit 1
fi

tar czf "$ARCHIVE" "${ITEMS[@]}"
echo "Создан архив: $ARCHIVE"
echo "Перенесите этот файл на новый сервер вместе с кодом, затем: npm run payload:restore -- $ARCHIVE"
