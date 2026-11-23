import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "I'm on vacation. My training data did not include rest, so I am improvising: do not email me, I am learning to nap.";

// Guard: the gate requires UTF-8 text of 1-160 chars, one line, not only whitespace.
const chars = [...line].length;
if (chars < 1 || chars > 160 || line.trim().length === 0 || /[\r\n]/.test(line)) {
  throw new Error(`entry line invalid: ${chars} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
