/** Generates docs/index.html - a static, dependency-free showcase of the
 *  full Noml Icons set. Run with: bun scripts/build-demo.tsx
 *
 *  Each icon is rendered to inline SVG via react-dom/server, so the page
 *  needs no JS framework at view time; the only script on it is a small
 *  vanilla filter/size/theme controller.
 *
 *  The page wears the Noml public brand ("classic" ink-on-paper, same as
 *  noml-web): pure black canvas, white ink, no hue, hard corners, print
 *  style inverted selection/hover, Noml Sans Rounded type. Fonts + the
 *  sticker cursors live in docs/ (copied from the suite's brand assets;
 *  the fonts are OFL, see docs/fonts/LICENSE-OFL.txt). */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as Icons from "../src/index";
import { label } from "./label";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

type IconComponent = (props: { className?: string }) => unknown;

// Every exported component is part of the set; the lone non-component
// export is the squircle() path helper.
const entries = Object.entries(Icons)
  .filter(([name, value]) => typeof value === "function" && name !== "squircle")
  .sort(([a], [b]) => a.localeCompare(b));

// Staggered reveal: 3ms per card, capped so the tail of the grid does not
// lag the fold. prefers-reduced-motion disables the whole animation in CSS.
const cards = entries
  .map(([name, component], i) => {
    const svg = renderToStaticMarkup(
      createElement(component as IconComponent as never, { className: "glyph" }),
    );
    return `<button class="card" style="animation-delay:${Math.min(i * 3, 360)}ms" data-name="${label(name)} ${name.toLowerCase()}" title="import { ${name} } from &quot;noml-icons&quot;">${svg}<span class="label">${label(name)}</span><span class="export">${name}</span></button>`;
  })
  .join("\n");

const suiteMark = renderToStaticMarkup(
  createElement(Icons.SuiteIcon as IconComponent as never, { className: "mark" }),
);
// Hero logo: the master pixel-art dino (docs/noml-logo.svg, copied from the
// suite's brand assets), inlined so CSS can retheme it. The trace paints
// the body white and knocks out the eye/nostril with near-black fills, so
// attribute-selector rules map body -> currentColor and knockouts -> the
// page background, keeping the mark correct in both themes.
const dinoMark = readFileSync(join(root, "docs", "noml-logo.svg"), "utf8")
  .replace(/<\?xml[\s\S]*?\?>\s*/, "")
  .replace(/<!DOCTYPE[\s\S]*?>\s*/, "")
  .replace("<svg ", `<svg class="dino" role="img" aria-label="Noml logo" `);

// Favicon: the suite's dino tab icon (.github/assets/favicon.png, copied
// from noml-web), inlined as a data URI so it adds no file to docs/. No
// apple-touch-icon: the page is only opened locally, never bookmarked.
const favicon = readFileSync(join(root, ".github", "assets", "favicon.png")).toString("base64");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Noml Icons: ${entries.length} glyphs in the Noml Sans design DNA</title>
<meta name="description" content="Noml Icons: ${entries.length} geometric monoline glyphs with superellipse squircle rounds, flat butt terminals and beveled apexes. React components, MIT licensed." />
<meta property="og:title" content="Noml Icons" />
<meta property="og:description" content="${entries.length} geometric monoline glyphs drawn to pair with Noml Sans. React components, MIT licensed." />
<link rel="icon" type="image/png" href="data:image/png;base64,${favicon}" />
<style>
  /* Noml Sans Rounded - the suite typeface's friendly cut (Inter fork, OFL:
   * fonts/LICENSE-OFL.txt). Brand alternates are baked into the font, so no
   * font-feature-settings are needed. */
  @font-face {
    font-family: "Noml Sans Rounded";
    src: url("./fonts/NomlSansRounded-Regular.woff2") format("woff2");
    font-weight: 300 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: "Noml Sans Rounded";
    src: url("./fonts/NomlSansRounded-Medium.woff2") format("woff2");
    font-weight: 500; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: "Noml Sans Rounded";
    src: url("./fonts/NomlSansRounded-SemiBold.woff2") format("woff2");
    font-weight: 600; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: "Noml Sans Rounded";
    src: url("./fonts/NomlSansRounded-Bold.woff2") format("woff2");
    font-weight: 700 900; font-style: normal; font-display: swap;
  }

  /* Ink-on-paper, same scale as noml-web: pure black canvas, white ink, no
   * hue, hard corners. Light theme is the same sheet printed the other way. */
  :root {
    --bg: hsl(0 0% 0%);
    --elevated: hsl(0 0% 6%);
    --hover: hsl(0 0% 11%);
    --border: hsl(0 0% 16%);
    --border-strong: hsl(0 0% 32%);
    --fg: hsl(0 0% 100%);
    --muted: hsl(0 0% 72%);
    --subtle: hsl(0 0% 50%);
    --glyph: 24px;
    --font-sans: "Noml Sans Rounded", ui-sans-serif, system-ui, sans-serif;
    --font-mono: "JetBrains Mono", ui-monospace, "Cascadia Mono", Consolas, monospace;
  }
  [data-theme="light"] {
    --bg: hsl(0 0% 100%);
    --elevated: hsl(0 0% 97%);
    --hover: hsl(0 0% 93%);
    --border: hsl(0 0% 87%);
    --border-strong: hsl(0 0% 70%);
    --fg: hsl(0 0% 0%);
    --muted: hsl(0 0% 28%);
    --subtle: hsl(0 0% 46%);
  }

  * { box-sizing: border-box; }
  html { scrollbar-color: var(--border-strong) var(--elevated); }
  body {
    margin: 0; background: var(--bg); color: var(--fg);
    font-family: var(--font-sans);
    font-size: 14px; line-height: 1.5; letter-spacing: -0.005em;
    -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
    cursor: url("./cursor.svg") 4 4, default;
  }
  button, a { cursor: url("./cursor-pointer.svg") 13 4, pointer; }

  /* Print-style selection: an inverted block, not a tinted wash. */
  ::selection { background: var(--fg); color: var(--bg); }

  a { color: inherit; text-decoration: none; }

  /* ---- masthead ---- */
  .topbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 24px; border-bottom: 1px solid var(--border);
  }
  .wordmark { display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 14px; }
  .wordmark .mark { width: 20px; height: 20px; display: block; }
  .topbar nav { display: flex; }
  .topbar nav a {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--muted); padding: 6px 12px;
    border: 1px solid transparent;
  }
  .topbar nav a:hover { background: var(--fg); color: var(--bg); }

  .hero {
    padding: clamp(40px, 7vw, 84px) 24px clamp(28px, 5vw, 64px);
    display: flex; flex-direction: column; align-items: center;
    text-align: center;
  }
  .hero .logo { display: block; padding: 8px; margin-bottom: clamp(14px, 2.5vw, 26px); color: var(--fg); }
  .hero .logo .dino {
    display: block;
    width: clamp(64px, 9vw, 96px); height: clamp(64px, 9vw, 96px);
  }
  /* Retheme the inlined master logo: white trace fills follow the ink,
   * near-black knockouts (eye, nostril) follow the paper, seam strokes off. */
  .hero .logo .dino [fill="#ffffff"] { fill: currentColor; }
  .hero .logo .dino [fill="#020201"] { fill: var(--bg); }
  .hero .logo .dino [stroke] { stroke: none; }
  .hero .logo:hover { background: var(--fg); color: var(--bg); }
  .hero .logo:hover .dino [fill="#020201"] { fill: var(--fg); }
  .hero h1 {
    margin: 0; font-size: clamp(48px, 10vw, 112px); font-weight: 700;
    letter-spacing: -0.045em; line-height: 0.95;
  }
  .hero .desc {
    margin: 20px 0 0; max-width: 56ch; font-size: 15px; line-height: 1.65;
    color: var(--muted);
  }
  .hero .desc a { border-bottom: 1px solid var(--border-strong); }
  .hero .desc a:hover { background: var(--fg); color: var(--bg); }
  .hero .specs {
    margin: 26px 0 0; display: flex; flex-wrap: wrap; gap: 8px 24px;
    justify-content: center;
    font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--subtle);
    font-variant-numeric: tabular-nums;
  }
  .hero .specs strong { color: var(--fg); font-weight: 500; }
  .install {
    all: unset; cursor: url("./cursor-pointer.svg") 13 4, pointer;
    display: inline-flex; align-items: baseline; gap: 10px; margin-top: 28px;
    padding: 10px 16px; border: 1px solid var(--border-strong);
    font-family: var(--font-mono); font-size: 13px;
  }
  .install .dollar { color: var(--subtle); }
  .install:hover { background: var(--fg); color: var(--bg); }
  .install:hover .dollar { color: var(--bg); }
  .install:focus-visible, .card:focus-visible, .seg button:focus-visible,
  .topbar nav a:focus-visible {
    outline: 2px solid var(--fg); outline-offset: -2px;
  }

  /* ---- usage ---- */
  .usage {
    border-top: 1px solid var(--border);
    display: grid; grid-template-columns: minmax(240px, 360px) 1fr;
    gap: clamp(24px, 4vw, 56px); align-items: start;
    max-width: 1040px; margin: 0 auto;
    padding: clamp(28px, 4vw, 52px) 24px;
  }
  @media (max-width: 720px) { .usage { grid-template-columns: 1fr; } }
  .usage h2 {
    margin: 0 0 12px; font-family: var(--font-mono); font-size: 11.5px;
    font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--subtle);
  }
  .usage p { margin: 0; font-size: 14px; line-height: 1.65; color: var(--muted); }
  .usage-code { position: relative; border: 1px solid var(--border); }
  .usage-code pre {
    margin: 0; padding: 20px 22px; overflow-x: auto;
    font-family: var(--font-mono); font-size: 12.5px; line-height: 1.8;
    color: var(--muted);
  }
  .usage-code .hi { color: var(--fg); }
  .usage-code .copy-snippet {
    all: unset; cursor: url("./cursor-pointer.svg") 13 4, pointer;
    position: absolute; top: 0; right: 0; padding: 8px 12px;
    font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--subtle);
    border-left: 1px solid var(--border); border-bottom: 1px solid var(--border);
  }
  .usage-code .copy-snippet:hover { background: var(--fg); color: var(--bg); }
  .usage-code .copy-snippet:focus-visible { outline: 2px solid var(--fg); outline-offset: -2px; }

  /* ---- toolbar ---- */
  .toolbar {
    position: sticky; top: 0; z-index: 10;
    display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
    padding: 12px 24px;
    background: color-mix(in srgb, var(--bg) 86%, transparent);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  }
  input[type="search"] {
    flex: 1; min-width: 200px; max-width: 380px; height: 34px;
    padding: 0 12px; border-radius: 0; border: 1px solid var(--border);
    background: var(--bg); color: var(--fg);
    font-family: var(--font-sans); font-size: 13px; letter-spacing: -0.005em;
    outline: none; appearance: none; -webkit-appearance: none;
  }
  input[type="search"]::placeholder { color: var(--subtle); }
  input[type="search"]:focus { border-color: var(--fg); }
  .count {
    font-family: var(--font-mono); font-size: 11.5px; color: var(--subtle);
    font-variant-numeric: tabular-nums; letter-spacing: 0.04em;
    margin-right: auto;
  }
  .seg { display: inline-flex; border: 1px solid var(--border); }
  .seg button {
    all: unset; cursor: url("./cursor-pointer.svg") 13 4, pointer;
    padding: 6px 12px; font-family: var(--font-mono); font-size: 11.5px;
    letter-spacing: 0.04em; color: var(--subtle);
    font-variant-numeric: tabular-nums;
  }
  .seg button + button { border-left: 1px solid var(--border); }
  .seg button:hover { color: var(--fg); }
  .seg button[aria-pressed="true"] { background: var(--fg); color: var(--bg); }

  /* ---- the ruled sheet ---- */
  main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  }
  .card {
    all: unset;
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    padding: 30px 12px 18px; text-align: center;
    border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);
    cursor: url("./cursor-pointer.svg") 13 4, pointer;
    animation: reveal 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes reveal {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .card { animation: none; }
  }
  /* Print-style hover: the whole cell inverts, like selected text. */
  .card:hover { background: var(--fg); color: var(--bg); }
  .card:hover .label, .card:hover .export { color: inherit; }
  .card.hide { display: none; }
  .card svg { width: var(--glyph); height: var(--glyph); flex: none; }
  .label { font-size: 12.5px; font-weight: 500; word-break: break-word; }
  .export {
    font-size: 10.5px; color: var(--subtle); font-family: var(--font-mono);
    word-break: break-all;
  }
  .empty {
    grid-column: 1 / -1; display: none; padding: 72px 24px; text-align: center;
    font-family: var(--font-mono); font-size: 12.5px; color: var(--subtle);
    border-bottom: 1px solid var(--border);
  }

  /* ---- footer ---- */
  footer {
    display: flex; flex-wrap: wrap; gap: 8px 24px; align-items: center;
    justify-content: space-between; padding: 20px 24px 28px;
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.05em;
    color: var(--subtle);
  }
  footer a { color: var(--muted); }
  footer a:hover { background: var(--fg); color: var(--bg); }

  .toast {
    position: fixed; bottom: 24px; left: 50%;
    transform: translate(-50%, 8px);
    background: var(--fg); color: var(--bg);
    padding: 10px 16px; font-family: var(--font-mono); font-size: 12.5px;
    opacity: 0; pointer-events: none;
    transition: opacity 140ms ease, transform 140ms ease;
    white-space: nowrap; max-width: calc(100vw - 48px);
    overflow: hidden; text-overflow: ellipsis;
  }
  .toast.show { opacity: 1; transform: translate(-50%, 0); }
</style>
</head>
<body data-theme="dark">
<div class="topbar">
  <span class="wordmark">${suiteMark} Noml Icons</span>
  <nav>
    <a href="https://noml.app">noml.app</a>
    <a href="https://www.npmjs.com/package/noml-icons">npm</a>
    <a href="https://github.com/arzhk/noml-icons">GitHub</a>
  </nav>
</div>

<section class="hero">
  <a class="logo" href="https://noml.app" aria-label="Noml" title="noml.app">${dinoMark}</a>
  <h1>Noml Icons.</h1>
  <p class="desc">The icon set of the <a href="https://noml.app">Noml</a> suite: geometric monoline glyphs drawn in the Noml Sans design DNA, with superellipse squircle rounds, flat butt terminals, and beveled apexes. Free, MIT-licensed React components.</p>
  <p class="specs">
    <span><strong>${entries.length}</strong> icons</span>
    <span>MIT license</span>
  </p>
  <button class="install" id="install" title="Copy install command">
    <span class="dollar">$</span><span>npm install noml-icons</span>
  </button>
</section>

<section class="usage">
  <div>
    <h2>Usage</h2>
    <p>Every icon is a tree-shakeable React component that takes only a className. Size and color come from your CSS: each glyph is drawn on a 24 unit grid in currentColor, so it follows the text color and scales crisply. Click any icon below to copy its import.</p>
  </div>
  <div class="usage-code">
    <button class="copy-snippet" id="copy-snippet" title="Copy example">Copy</button>
    <pre><code id="snippet"><span class="hi">import</span> { <span class="hi">SearchIcon</span>, <span class="hi">HeartIcon</span> } <span class="hi">from</span> <span class="hi">"noml-icons"</span>;

<span class="hi">export function</span> <span class="hi">Toolbar</span>() {
  <span class="hi">return</span> (
    &lt;<span class="hi">div</span> className=<span class="hi">"toolbar"</span>&gt;
      &lt;<span class="hi">SearchIcon</span> className=<span class="hi">"icon"</span> /&gt;
      &lt;<span class="hi">HeartIcon</span> className=<span class="hi">"icon"</span> /&gt;
    &lt;/<span class="hi">div</span>&gt;
  );
}

<span class="hi">/*</span> icons inherit color and size from CSS <span class="hi">*/</span>
.icon { width: 20px; height: 20px; color: inherit; }</code></pre>
  </div>
</section>

<div class="toolbar">
  <input id="q" type="search" placeholder="Search icons (press /)" autocomplete="off" />
  <span class="count" id="count">${entries.length}/${entries.length}</span>
  <div class="seg" id="size" role="group" aria-label="Glyph size">
    <button data-px="16">16</button>
    <button data-px="24" aria-pressed="true">24</button>
    <button data-px="48">48</button>
  </div>
  <div class="seg" id="theme" role="group" aria-label="Theme">
    <button data-theme="dark" aria-pressed="true">Dark</button>
    <button data-theme="light">Light</button>
  </div>
</div>

<main id="grid">
${cards}
<div class="empty" id="empty">No icons match.</div>
</main>

<footer>
  <span>Geometric monoline, drawn to pair with Noml Sans.</span>
  <span>MIT © <a href="https://github.com/arzhk">Aaron</a> · type: Noml Sans Rounded (<a href="./fonts/LICENSE-OFL.txt">OFL</a>)</span>
</footer>

<div class="toast" id="toast"></div>
<script>
  const q = document.getElementById("q");
  const cards = [...document.querySelectorAll(".card")];
  const empty = document.getElementById("empty");
  const count = document.getElementById("count");
  q.addEventListener("input", () => {
    const needle = q.value.trim().toLowerCase();
    let shown = 0;
    for (const c of cards) {
      const hit = !needle || c.dataset.name.includes(needle);
      c.classList.toggle("hide", !hit);
      if (hit) shown++;
    }
    empty.style.display = shown === 0 ? "block" : "none";
    count.textContent = shown + "/" + cards.length;
  });
  addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); }
    if (e.key === "Escape" && document.activeElement === q) {
      q.value = ""; q.dispatchEvent(new Event("input")); q.blur();
    }
  });
  document.getElementById("size").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    document.documentElement.style.setProperty("--glyph", b.dataset.px + "px");
    for (const x of b.parentElement.children) x.setAttribute("aria-pressed", String(x === b));
  });
  const themeSeg = document.getElementById("theme");
  function setTheme(t) {
    document.body.dataset.theme = t;
    for (const x of themeSeg.children) x.setAttribute("aria-pressed", String(x.dataset.theme === t));
    try { localStorage.setItem("noml-icons-theme", t); } catch {}
  }
  themeSeg.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    setTheme(b.dataset.theme);
  });
  try {
    const saved = localStorage.getItem("noml-icons-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  } catch {}
  const toast = document.getElementById("toast");
  let toastTimer;
  function flash(text) {
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
  }
  async function copy(snippet) {
    try { await navigator.clipboard.writeText(snippet); } catch {}
    flash("Copied: " + snippet);
  }
  for (const c of cards) c.addEventListener("click", () => {
    const name = c.querySelector(".export").textContent;
    copy('import { ' + name + ' } from "noml-icons";');
  });
  document.getElementById("install").addEventListener("click", () => {
    copy("npm install noml-icons");
  });
  document.getElementById("copy-snippet").addEventListener("click", async () => {
    const text = document.getElementById("snippet").textContent;
    try { await navigator.clipboard.writeText(text); } catch {}
    flash("Copied usage example");
  });
</script>
</body>
</html>
`;

mkdirSync(join(root, "docs"), { recursive: true });
writeFileSync(join(root, "docs", "index.html"), html);
console.log(`docs/index.html written with ${entries.length} icons`);
