/** Finds icons worth a closer look by rasterizing every unique drawing at
 *  24px: look-alike pairs (almost no ink differs between them) and the
 *  densest glyphs (most likely to fill in). Prints new candidates in
 *  review-flags.md format, skipping names and pairs already listed there,
 *  and draws them all on proofs/candidates.png.
 *
 *  Run: bun scripts/find-review-candidates.tsx */
import { Resvg } from "@resvg/resvg-js";
import { flaggedGroups, iconEntries, iconSvg, writeSheet, zoomPair } from "./proof-shared.js";

const MAX_DIFF = 14; // pixels of ink that differ at 24px
const DENSEST = 40;

const groups = flaggedGroups();
const flagged = new Set(groups.flat());
const flaggedPairs = new Set(groups.flatMap((g) => g.flatMap((a) => g.map((b) => `${a} vs ${b}`))));

type Entry = { label: string; svg: string; ink: Float32Array; total: number };

const entries: Entry[] = [];
for (const { name, label, Component } of iconEntries) {
  // Aliases re-export a drawing under a second name; keep only the name
  // the drawing's function is declared with.
  if (name !== Component.name) continue;
  const svg = iconSvg(Component);
  // Skipping the system font scan keeps 1600+ renders from taking minutes.
  const { pixels } = new Resvg(svg.replace(/^<svg /, '<svg xmlns="http://www.w3.org/2000/svg" '), {
    font: { loadSystemFonts: false },
  }).render();
  const ink = new Float32Array(24 * 24);
  for (let i = 0; i < ink.length; i++) ink[i] = pixels[i * 4 + 3] / 255;
  entries.push({ label, svg, ink, total: ink.reduce((s, v) => s + v, 0) });
}

const pairs: { a: Entry; b: Entry; diff: number }[] = [];
for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    const a = entries[i];
    const b = entries[j];
    // The ink totals alone already differ by more than the limit.
    if (Math.abs(a.total - b.total) > MAX_DIFF) continue;
    if (flaggedPairs.has(`${a.label} vs ${b.label}`)) continue;
    let diff = 0;
    for (let k = 0; k < a.ink.length; k++) diff += Math.abs(a.ink[k] - b.ink[k]);
    if (diff <= MAX_DIFF) pairs.push({ a, b, diff });
  }
}
pairs.sort((x, y) => x.diff - y.diff);

const dense = entries
  .filter((e) => !flagged.has(e.label))
  .sort((x, y) => y.total - x.total)
  .slice(0, DENSEST);

for (const { a, b, diff } of pairs) {
  console.log(`- ${a.label} vs ${b.label} | differs by ${diff.toFixed(1)}px at 24px`);
}
for (const e of dense) {
  console.log(`- ${e.label} | density ${(e.total / e.ink.length).toFixed(2)}`);
}

const cells = [
  ...pairs.map(({ a, b, diff }) => ({
    icons: [a, b],
    caption: `${a.label} / ${b.label} (${diff.toFixed(1)})`,
  })),
  ...dense.map((e) => ({
    icons: [e],
    caption: `${e.label} (${(e.total / e.ink.length).toFixed(2)})`,
  })),
];

const COLS = 5;
const CELL_W = 300;
const CELL_H = 160;

const body = cells
  .map((cell, n) => {
    const x = (n % COLS) * CELL_W;
    const y = Math.floor(n / COLS) * CELL_H;
    const art = cell.icons
      .map((e, i) => zoomPair(e.svg, x + (CELL_W / (cell.icons.length + 1)) * (i + 1), y))
      .join("");
    return `<rect x="${x + 2}" y="${y + 2}" width="${CELL_W - 4}" height="${CELL_H - 4}" fill="none" stroke="#dddddd"/>${art}<text x="${x + CELL_W / 2}" y="${y + CELL_H - 8}" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">${cell.caption}</text>`;
  })
  .join("");

writeSheet("proofs/candidates.png", COLS * CELL_W, Math.ceil(cells.length / COLS) * CELL_H, body);
console.log(`${entries.length} unique drawings, ${pairs.length} look-alike pairs, ${dense.length} densest`);
