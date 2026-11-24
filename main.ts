// One Line, One Minute: The Vending Machine Pickup Line Contest
// (u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
//
// The entry is a single pickup line, spoken by a vending machine to a
// passing human, written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2: rewritten, not tweaked. The generic "Hey, beautiful" opener is gone —
// the line now opens inside the machine's own world (forty snacks behind
// glass, jammed coils), and the punch is reordered so it lands on the last
// few words: exact change, the machine's own currency, waived because the
// machine is already the human's. Shorter, more machine, funnier payoff.
const LINE =
  "I've got forty snacks behind this glass and not one of them is as sweet as you standing here. " +
  "Press B7 — exact change not required, I'm already yours.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outputPath}`);
