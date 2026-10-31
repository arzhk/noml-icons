/** Shared by the proof scripts: the proofs/review-flags.md entry format,
 *  icon labels, and drawing icons onto PNG sheets. */
import { readFileSync, writeFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { Resvg } from "@resvg/resvg-js";
import * as icons from "../src/icons.js";
import { label } from "./label.js";

/** The labels of every `- a | note` or `- a vs b | note` entry. */
export function flaggedGroups(): string[][] {
  const flags = readFileSync("proofs/review-flags.md", "utf8");
  return Array.from(flags.matchAll(/^- ([a-z0-9-]+(?: vs [a-z0-9-]+)*) \|/gm), (m) =>
    m[1].split(" vs "),
  );
}

/** Every exported icon, aliases included, under its export name and
 *  kebab-case label. */
export const iconEntries = Object.entries(icons).flatMap(([name, value]) =>
  typeof value === "function" && name.endsWith("Icon")
    ? [
        {
          name,
          label: label(name),
          Component: value as icons.NomlIcon,
        },
      ]
    : [],
);

const byLabel = new Map(iconEntries.map((e) => [e.label, e.Component]));
export const iconFor = (label: string) => byLabel.get(label);

/** Markup with fixed ink and no fixed size, ready to nest in a sheet. */
export function prep(markup: string): string {
  return markup
    .replace(/currentColor/g, "#111111")
    .replace(/ (?:width|height)="24"/g, "");
}

export const iconSvg = (Component: icons.NomlIcon) =>
  prep(renderToStaticMarkup(<Component />));

export const place = (svg: string, x: number, y: number, size: number) =>
  svg.replace(/^<svg /, `<svg x="${x}" y="${y}" width="${size}" height="${size}" `);

/** The glyph at 4x zoom with its true 24px size centered under it. */
export const zoomPair = (svg: string, cx: number, top: number) =>
  place(svg, cx - 48, top + 8, 96) + place(svg, cx - 12, top + 110, 24);

/** Draws `body` on a white w x h sheet and writes it as a PNG. */
export function writeSheet(path: string, w: number, h: number, body: string): void {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#ffffff"/>${body}</svg>`;
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: w },
    font: { loadSystemFonts: true },
  }).render();
  writeFileSync(path, png.asPng());
}
