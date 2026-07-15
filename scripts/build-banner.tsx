/** Generates the README artwork sources: .github/assets/banner.html and
 *  preview.html, styled after noml-app's banner (black frame, mono corner
 *  labels, dino tile) but dressed with glyphs from the set instead of
 *  scenery. Screenshot them at 1200x440 / 1200x460 with device scale 2 to
 *  produce banner.png / preview.png. Run with: bun scripts/build-banner.tsx */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as Icons from "../src/index";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, ".github", "assets");

type IconComponent = (props: { className?: string }) => unknown;
const svg = (name: keyof typeof Icons) =>
  renderToStaticMarkup(
    createElement(Icons[name] as IconComponent as never, {}),
  );

const count = Object.entries(Icons).filter(
  ([n, v]) => typeof v === "function" && n !== "squircle",
).length;

/* Scattered set glyphs standing in for the app banner's pixel scenery. */
const SCATTER: Array<[keyof typeof Icons, number, number, number, string]> = [
  ["CloudIcon", 150, 68, 40, "#2e2e2e"],
  ["HeartIcon", 265, 88, 28, "#2a2a2a"],
  ["StarIcon", 425, 78, 28, "#303030"],
  ["BugIcon", 620, 88, 26, "#2a2a2a"],
  ["ZapIcon", 705, 58, 32, "#2e2e2e"],
  ["SparkIcon", 862, 92, 24, "#343434"],
  ["MoonIcon", 1002, 64, 38, "#303030"],
  ["GhostIcon", 1082, 152, 38, "#2c2c2c"],
  ["RocketIcon", 1058, 250, 42, "#2e2e2e"],
  ["BranchIcon", 84, 348, 34, "#2c2c2c"],
  ["GearIcon", 300, 352, 38, "#2e2e2e"],
  ["SearchIcon", 522, 356, 32, "#2a2a2a"],
  ["BulbIcon", 742, 348, 34, "#2e2e2e"],
  ["EggIcon", 942, 356, 28, "#2c2c2c"],
  ["PawPrintIcon", 1082, 348, 32, "#303030"],
];

const scatter = SCATTER.map(
  ([name, x, y, size, color]) =>
    `<span class="glyph" style="left:${x}px;top:${y}px;width:${size}px;height:${size}px;color:${color}">${svg(name)}</span>`,
).join("\n");

const banner = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  @font-face {
    font-family: "Noml Sans Rounded";
    src: url("../../docs/fonts/NomlSansRounded-Bold.woff2") format("woff2");
    font-weight: 700;
  }
  @font-face {
    font-family: "Noml Sans Rounded";
    src: url("../../docs/fonts/NomlSansRounded-Medium.woff2") format("woff2");
    font-weight: 500;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; width: 1200px; height: 440px; background: #000;
    font-family: "Cascadia Mono", ui-monospace, Consolas, monospace;
    position: relative; overflow: hidden;
  }
  .frame { position: absolute; inset: 12px; border: 1px solid #262626; }
  .corner {
    position: absolute; font-size: 12px; letter-spacing: 0.14em;
    text-transform: uppercase; color: #8a8a8a;
  }
  .tl { top: 34px; left: 60px; }
  .tr { top: 34px; right: 60px; }
  .bl { bottom: 34px; left: 60px; }
  .br { bottom: 34px; right: 60px; }
  .glyph { position: absolute; }
  .glyph svg { width: 100%; height: 100%; }
  .tile {
    position: absolute; left: 64px; top: 138px; width: 164px; height: 164px;
    background: #131313; border-radius: 38px;
    display: flex; align-items: center; justify-content: center;
  }
  .tile svg { width: 104px; height: 104px; color: #fff; }
  .text { position: absolute; left: 296px; top: 138px; }
  h1 {
    margin: 0; font-family: "Noml Sans Rounded", sans-serif;
    font-size: 74px; font-weight: 700; line-height: 1; color: #fff;
    letter-spacing: -0.03em;
  }
  .tagline { margin: 26px 0 0; font-size: 21px; color: #e8e8e8; letter-spacing: 0.01em; }
  .sub { margin: 14px 0 0; font-size: 15.5px; color: #7a7a7a; letter-spacing: 0.01em; }
</style></head>
<body>
  <div class="frame"></div>
${scatter}
  <span class="corner tl">noml.app</span>
  <span class="corner tr">react / typescript</span>
  <span class="corner bl">$ npm install noml-icons</span>
  <span class="corner br">${count} icons · mit</span>
  <div class="tile">${svg("DinoIcon")}</div>
  <div class="text">
    <h1>Noml Icons</h1>
    <p class="tagline">The Noml suite's icon set, drawn to pair with Noml Sans.</p>
    <p class="sub">${count} geometric monoline glyphs. Squircle rounds, flat terminals, beveled apexes.</p>
  </div>
</body></html>`;

/* Grid preview: a slice of the set in the demo's ruled-sheet style. */
const PREVIEW: Array<keyof typeof Icons> = [
  "DinoIcon", "SearchIcon", "GearIcon", "HeartIcon", "StarIcon", "ZapIcon", "CloudIcon", "GhostIcon",
  "BranchIcon", "CommitIcon", "MergeIcon", "PullRequestIcon", "BugIcon", "TerminalTileIcon", "EditorIcon", "BracesIcon",
  "FolderIcon", "FileTextIcon", "ClipboardIcon", "BellIcon", "LockIcon", "KeyIcon", "ShieldCheckIcon", "EyeIcon",
  "PlayIcon", "PauseIcon", "MicIcon", "CameraIcon", "MailIcon", "CalendarIcon", "MapPinIcon", "RocketIcon",
];

const cells = PREVIEW.map((name) => {
  const label = name
    .replace(/Icon$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
  return `<div class="cell"><span class="i">${svg(name)}</span><span class="l">${label}</span></div>`;
}).join("\n");

const preview = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  @font-face {
    font-family: "Noml Sans Rounded";
    src: url("../../docs/fonts/NomlSansRounded-Medium.woff2") format("woff2");
    font-weight: 500;
  }
  * { box-sizing: border-box; }
  body { margin: 0; width: 1200px; background: #000; }
  .grid {
    display: grid; grid-template-columns: repeat(8, 1fr);
    border-top: 1px solid #292929; border-left: 1px solid #292929;
  }
  .cell {
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    padding: 28px 8px 18px; color: #fff;
    border-right: 1px solid #292929; border-bottom: 1px solid #292929;
  }
  .cell .i svg { width: 26px; height: 26px; display: block; }
  .cell .l {
    font-family: "Noml Sans Rounded", sans-serif; font-size: 12px;
    font-weight: 500; color: #9a9a9a; letter-spacing: 0.01em;
  }
</style></head>
<body><div class="grid">
${cells}
</div></body></html>`;

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "banner.html"), banner);
writeFileSync(join(out, "preview.html"), preview);
console.log(`banner.html + preview.html written to .github/assets (${count} icons)`);
