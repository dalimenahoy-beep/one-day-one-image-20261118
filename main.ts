// news-image-20261118 — "Sum up 18 November's world news in one image"
//
// Entry program for the make.fun bounty news-image-20261118.
// The repository holds the finished poster as entry.png; this program
// copies it, byte for byte, to <output dir>/entry.png. It uses only the
// Node.js standard library, touches no network, and writes exactly the
// same bytes on every run.
//
// Run:  MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, "entry.png");
copyFileSync(source, target);

// Guard against a truncated copy: the written file must be byte-identical.
const expected = readFileSync(source);
const written = readFileSync(target);
if (!written.equals(expected)) {
  throw new Error(`copy mismatch: wrote ${written.length} of ${expected.length} bytes`);
}

console.log(`wrote ${target} (${written.length} bytes)`);
