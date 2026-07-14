/** Brand mark for the Noml Suite: a 2x2 grid of squircles carrying the
 *  Noml Sans superellipse DNA (exponent 2.55). The launcher glyph - its
 *  round k=0.7 tiles read as app dots at small sizes, distinct from
 *  LayoutGridIcon's boxier pane tiles. */
import { squircle } from "./squircle";

const TILES = [
  squircle(6.5, 6.5, 3.5),
  squircle(17.5, 6.5, 3.5),
  squircle(6.5, 17.5, 3.5),
  squircle(17.5, 17.5, 3.5),
].join("");

export function SuiteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      <path d={TILES} />
    </svg>
  );
}
