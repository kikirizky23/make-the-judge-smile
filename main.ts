// Make the Judge Smile — a one-line entry writer.
//
// The whole entry is one sentence about a small good thing that happened
// today. This program checks the sentence fits the bounty gate (between 1
// and 200 code points, a single line, not blank) and writes it unchanged
// to /output/entry.txt. Nothing else is produced.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A toddler on the morning train offered me half his biscuit, solemn as a diplomat, then took it back to check it was still the good half.";

function countCodePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const line = LINE;
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  const size = countCodePoints(line);
  if (size < 1 || size > 200) {
    throw new Error(`entry must be 1-200 code points, got ${size}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
