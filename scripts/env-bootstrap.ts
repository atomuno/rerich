/**
 * Должен импортироваться первым в seed-скриптах, до `payload.config`:
 * иначе `process.env.PAYLOAD_SECRET` ещё пуст, и Payload падает с «missing secret key».
 */
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

function applyEnvFile(filePath: string, overrideExisting: boolean): void {
  if (!existsSync(filePath)) return;
  const raw = readFileSync(filePath, "utf8");
  for (const line of raw.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (overrideExisting || process.env[k] === undefined) {
      process.env[k] = v;
    }
  }
}

const root = process.cwd();
applyEnvFile(path.join(root, ".env"), false);
applyEnvFile(path.join(root, ".env.local"), true);
