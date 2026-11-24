// Vending Machine Pickup Line — entry writer (revised)
//
// First draft rambled: it described the machine instead of letting the
// machine talk, and the joke trailed off into a question. This version is
// built around three beats that only a vending machine can deliver —
// being button-pressed, demanding exact change, and physically dropping
// something from a coil — and saves the double meaning for the last words:
// the snack in B4 "falls", so the machine falls for you. For free.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate from the competition kit: UTF-8 text, 1 to 200 characters,
// and not only whitespace.
const GATE = { min: 1, max: 200 } as const;

// Assemble the line from its beats so the punchline stays last.
function buildLine(): string {
  const invitation = "Go ahead, press my buttons";
  const rule = "everyone else pays exact change";
  const punch = "if you pick B4, I'll fall for you for free";
  return `${invitation} — ${rule}, but ${punch}.`;
}

function checkGate(text: string): void {
  const count = [...text].length;
  if (count < GATE.min || count > GATE.max) {
    throw new Error(
      `entry.txt must be ${GATE.min}-${GATE.max} characters, got ${count}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry.txt must not be only whitespace");
  }
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const file = join(outDir, "entry.txt");

  writeFileSync(file, buildLine(), "utf8");

  // Verify what actually landed on disk, not just what we meant to write.
  const written = readFileSync(file, "utf8");
  checkGate(written);
  console.log(`wrote ${file} (${[...written].length} characters)`);
}

main();
