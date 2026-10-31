/** Renders a before/after compare sheet for a list of icon labels.
 *  Before = proofs/before-snapshot.json, after = current src/icons.tsx.
 *  Each row: label | before 96px + 24px | after 96px + 24px.
 *
 *  Run: bun scripts/build-compare.tsx <out.png> <label> [label...] */
import { readFileSync } from "node:fs";
import { iconFor, iconSvg, place, prep, writeSheet } from "./proof-shared.js";

const [out, ...labels] = process.argv.slice(2);
if (!out || labels.length === 0) {
  console.error("usage: bun scripts/build-compare.tsx <out.png> <label...>");
  process.exit(1);
}

const before: Record<string, string> = JSON.parse(
  readFileSync("proofs/before-snapshot.json", "utf8"),
);

const ROW_H = 120;
const W = 560;
const H = 40 + labels.length * ROW_H;

let body = `<text x="170" y="28" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">before</text><text x="420" y="28" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">after</text><line x1="280" y1="10" x2="280" y2="${H - 10}" stroke="#dddddd"/>`;
for (let i = 0; i < labels.length; i++) {
  const label = labels[i];
  const y = 40 + i * ROW_H;
  const Component = iconFor(label);
  const cellPair = (svg: string, cx: number) =>
    svg
      ? place(svg, cx - 66, y + 8, 96) + place(svg, cx + 42, y + 44, 24)
      : `<text x="${cx}" y="${y + 60}" font-family="Arial" font-size="12" fill="#cc0000" text-anchor="middle">missing</text>`;
  body += `<text x="12" y="${y + 62}" font-family="Arial" font-size="12" fill="#333333">${label}</text>`;
  body += cellPair(before[label] ? prep(before[label]) : "", 170);
  body += cellPair(Component ? iconSvg(Component) : "", 420);
  body += `<line x1="0" y1="${y + ROW_H}" x2="${W}" y2="${y + ROW_H}" stroke="#eeeeee"/>`;
}

writeSheet(out, W, H, body);
console.log(`${out}: ${labels.length} rows`);
