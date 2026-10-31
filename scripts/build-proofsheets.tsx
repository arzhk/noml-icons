/** Renders every icon in src/icons.tsx onto labeled contact-sheet PNGs for
 *  visual review. Each cell shows the glyph at 4x zoom plus actual 24px size
 *  and its export name. Output: proofs/sheets/sheet-NN.png.
 *
 *  Run: bun scripts/build-proofsheets.tsx */
import { mkdirSync } from "node:fs";
import { iconEntries, iconSvg, writeSheet, zoomPair } from "./proof-shared.js";

const COLS = 10;
const ROWS = 10;
const CELL_W = 150;
const CELL_H = 160;
const PAD = 20;
const SHEET_W = PAD * 2 + COLS * CELL_W;
const SHEET_H = PAD * 2 + ROWS * CELL_H;

const entries = iconEntries.map((e) => ({ label: e.label, svg: iconSvg(e.Component) }));

function cell(entry: (typeof entries)[number], index: number): string {
  const x = PAD + (index % COLS) * CELL_W;
  const y = PAD + Math.floor(index / COLS) * CELL_H;
  return `<rect x="${x + 2}" y="${y + 2}" width="${CELL_W - 4}" height="${CELL_H - 4}" fill="none" stroke="#dddddd"/>${zoomPair(entry.svg, x + CELL_W / 2, y)}<text x="${x + CELL_W / 2}" y="${y + CELL_H - 8}" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">${entry.label}</text>`;
}

mkdirSync("proofs/sheets", { recursive: true });
const perSheet = COLS * ROWS;
const sheetCount = Math.ceil(entries.length / perSheet);
for (let s = 0; s < sheetCount; s++) {
  const slice = entries.slice(s * perSheet, (s + 1) * perSheet);
  const num = String(s + 1).padStart(2, "0");
  writeSheet(`proofs/sheets/sheet-${num}.png`, SHEET_W, SHEET_H, slice.map(cell).join(""));
  console.log(`sheet-${num}.png (${slice.length} icons)`);
}
console.log(`${entries.length} icons across ${sheetCount} sheets`);
