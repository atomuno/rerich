#!/usr/bin/env bash
# Восстановление БД и public/media из архива, созданного backup-payload.sh (перезаписывает существующие файлы).
# Пример: npm run payload:restore -- backups/payload-bundle-20260514-1200.tar.gz
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

ARCHIVE="${1:-}"
if [[ -z "$ARCHIVE" || ! -f "$ARCHIVE" ]]; then
  echo "Укажите путь к .tar.gz: npm run payload:restore -- backups/payload-bundle-....tar.gz"
  exit 1
fi

if [[ "$ARCHIVE" != /* ]]; then
  ARCHIVE="$ROOT/$ARCHIVE"
fi

echo "Распаковка $ARCHIVE в $ROOT (существующие payload.sqlite* и public/media будут перезаписаны)…"
tar xzf "$ARCHIVE" -C "$ROOT"
echo "Готово. Перезапустите приложение (pm2 restart / npm run dev)."
