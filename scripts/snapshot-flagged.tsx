/** Captures the current SVG markup of the icons flagged in
 *  proofs/review-flags.md into proofs/before-snapshot.json, so later
 *  compare sheets can show before/after even after src edits.
 *
 *  Run once BEFORE fixing: bun scripts/snapshot-flagged.tsx
 *  An existing baseline is kept unless --force is passed, since a re-run
 *  after edits would turn every compare sheet into after-vs-after. */
import { existsSync, writeFileSync } from "node:fs";
import { flaggedGroups, iconFor, iconSvg } from "./proof-shared.js";

const OUT = "proofs/before-snapshot.json";
if (existsSync(OUT) && !process.argv.includes("--force")) {
  console.error(`${OUT} already holds a baseline; pass --force to replace it.`);
  process.exit(1);
}

const snapshot: Record<string, string> = {};
const missing: string[] = [];
for (const label of new Set(flaggedGroups().flat())) {
  const Component = iconFor(label);
  if (Component) snapshot[label] = iconSvg(Component);
  else missing.push(label);
}

writeFileSync(OUT, JSON.stringify(snapshot, null, 1));
console.log(`snapshotted ${Object.keys(snapshot).length} icons`);
if (missing.length) console.log("NOT FOUND:", missing.join(", "));
