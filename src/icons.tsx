/** Noml Icons - the Noml suite's icon set, drawn in the Noml Sans design
 *  DNA: geometric monoline, flat butt terminals, beveled apexes, and
 *  superellipse squircle rounds. 24-unit grid, stroke 2, currentColor.
 *  Every icon takes only a className. */
import type { ComponentType, ReactNode } from "react";
import { squircle } from "./squircle.js";

/** Portrait page with its top-right corner folded down. */
const fileTile = (
  <path
    strokeLinejoin="bevel"
    d="M13.5 3H7.5C4.74 3 4.5 3.24 4.5 6V18C4.5 20.76 4.74 21 7.5 21H16.5C19.26 21 19.5 20.76 19.5 18V9ZM13.5 3V7.5C13.5 8.6 13.9 9 15 9H19.5"
  />
);

/** Clock badge over a tile's bottom-right corner. */
const CLOCK_BADGE = squircle(16.75, 16.75, 5) + "M16.75 13.5V16.75H19.25";

/** Squircle tile left open along the bottom middle, one dash in the gap. */
const dashedBottomTile = (
  <path d="M8.43 20.4C3.96 20.02 3.5 18.41 3.5 12C3.5 4.18 4.18 3.5 12 3.5C19.82 3.5 20.5 4.18 20.5 12C20.5 18.41 20.04 20.02 15.57 20.4M10.75 20.5H13.25" />
);

/* Family base outlines, shared so a tweak reaches every member. */

/** Shield: flat top, sides tapering to a point. */
const SHIELD_OUTLINE =
  "M12 21.5C8 19.5 4.75 17 4.75 12.5V6.75C4.75 4.91 4.91 4.75 6.75 4.75H17.25C19.09 4.75 19.25 4.91 19.25 6.75V12.5C19.25 17 16 19.5 12 21.5Z";

/** Calendar page below the ring tabs. */
const CALENDAR_OUTLINE =
  "M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V7C3.5 5.16 3.66 5 5.5 5Z";

/** Handset, earpiece top-left. */
const PHONE_OUTLINE =
  "M20.5 16.75V18.9C20.5 20 19.6 20.9 18.5 20.8C9.2 20 4 14.8 3.2 5.5C3.1 4.4 4 3.5 5.1 3.5H7.25C7.9 3.5 8.45 3.95 8.6 4.58L9.35 7.7C9.47 8.2 9.3 8.72 8.9 9.05L7.4 10.3C8.7 13.1 10.9 15.3 13.7 16.6L14.95 15.1C15.28 14.7 15.8 14.53 16.3 14.65L19.42 15.4C20.05 15.55 20.5 16.1 20.5 16.75Z";

/** Scan viewfinder: four rounded corner brackets. */
const SCAN_CORNERS =
  "M3.5 8V5.5C3.5 4.16 4.16 3.5 5.5 3.5H8M16 3.5H18.5C19.84 3.5 20.5 4.16 20.5 5.5V8M20.5 16V18.5C20.5 19.84 19.84 20.5 18.5 20.5H16M8 20.5H5.5C4.16 20.5 3.5 19.84 3.5 18.5V16";

/** Folder with its tab top-left. */
const FOLDER_OUTLINE =
  "M11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3Z";

/** Envelope body (also the credit card). */
const MAIL_OUTLINE =
  "M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V17C20.5 18.84 20.34 19 18.5 19H5.5C3.66 19 3.5 18.84 3.5 17V7C3.5 5.16 3.66 5 5.5 5Z";

/** Receipt with a zigzag hem. */
const RECEIPT_OUTLINE =
  "M4.75 21.25V4.75C4.75 2.91 4.91 2.75 6.75 2.75H17.25C19.09 2.75 19.25 2.91 19.25 4.75V21.25L16.85 20 14.45 21.25 12 20 9.55 21.25 7.15 20Z";

/** Badge: eight-point rosette. */
const BADGE_OUTLINE =
  "M21.5 12 19.62 15.16 18.72 18.72 15.16 19.62 12 21.5 8.84 19.62 5.28 18.72 4.38 15.16 2.5 12 4.38 8.84 5.28 5.28 8.84 4.38 12 2.5 15.16 4.38 18.72 5.28 19.62 8.84Z";

/** Ticket with side notches. */
const TICKET_OUTLINE =
  "M3.5 9.5V7C3.5 5.16 3.66 5 5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V9.5C19.12 9.5 18 10.62 18 12C18 13.38 19.12 14.5 20.5 14.5V17C20.5 18.84 20.34 19 18.5 19H5.5C3.66 19 3.5 18.84 3.5 17V14.5C4.88 14.5 6 13.38 6 12C6 10.62 4.88 9.5 3.5 9.5Z";

/** Laptop screen above the base line. */
const LAPTOP_OUTLINE =
  "M6.5 4.5H17.5C19.34 4.5 19.5 4.66 19.5 6.5V14.5C19.5 16.34 19.34 16.5 17.5 16.5H6.5C4.66 16.5 4.5 16.34 4.5 14.5V6.5C4.5 4.66 4.66 4.5 6.5 4.5Z";

/** Cigarette body, filter end on the right. */
const CIGARETTE_OUTLINE =
  "M3.5 15.5H18.5C19.42 15.5 19.5 15.58 19.5 16.5V17.5C19.5 18.42 19.42 18.5 18.5 18.5H3.5C2.58 18.5 2.5 18.42 2.5 17.5V16.5C2.5 15.58 2.58 15.5 3.5 15.5Z";

/** The contract every icon here satisfies - for code that passes icons
 *  around as values. */
export type NomlIcon = ComponentType<{ className?: string }>;

function Icon({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
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
      {children}
    </svg>
  );
}

/** Squircle ring with eight attached teeth and a filled hub. Teeth are
 *  short and thicker than the ring stroke - long thin monoline ticks read
 *  as a sun, stubby wide ones read as a cog. */
export function GearIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 5.5)} />
      <path
        strokeWidth={3}
        d={
          "M12 6.25V3.25M12 17.75v3M17.75 12h3M6.25 12h-3" +
          "M16.38 7.62l1.81-1.81M16.38 16.38l1.81 1.81" +
          "M7.62 16.38l-1.81 1.81M7.62 7.62L5.81 5.81"
        }
      />
      <path d={squircle(12, 12, 1.5)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function MinimizeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 12h14" />
    </Icon>
  );
}

/** Same glyph as MinimizeIcon, under the arithmetic name so non-chrome
 *  call sites (zoom out, counters) don't couple to window chrome. */
export const MinusIcon = MinimizeIcon;

export function MaximizeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
    </Icon>
  );
}

/** Two stacked tiles: front squircle plus the top-right sweep of the one
 *  behind it (top stub, quadrant curve, right stub). */
export function RestoreIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(9, 15, 6, 0.92) +
          "M10 3H15C20.52 3 21 3.48 21 9V14"
        }
      />
    </Icon>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 5 19 19M19 5 5 19" />
    </Icon>
  );
}

/** Commit & push: up arrow rising out of an open squircle-cornered box
 *  (the repo tile). Beveled apex per the font's flat-apex rule. */
export function PushIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 11V18C5 20.76 5.24 21 8 21H16C18.76 21 19 20.76 19 18V11" />
      <path strokeLinejoin="bevel" d="M12 15V3.25M7.75 7.5 12 3.25 16.25 7.5" />
    </Icon>
  );
}

/** Open with: squircle-cornered tile, 45-degree arrow leaving through the
 *  open top-right corner with a flat-capped bracket head. */
export function OpenWithIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 6H7C4.24 6 4 6.24 4 9V17C4 19.76 4.24 20 7 20H15C17.76 20 18 19.76 18 17V13" />
      <path d="M13 11 20 4M14.5 4H20V9.5" />
    </Icon>
  );
}

/** Flat-capped chevron with the font's beveled apex. */
export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6 9 12 15 18 9" />
    </Icon>
  );
}

/** Diff: plus over minus inside a portrait squircle-cornered tile. A
 *  folded-corner file variant was tried and crowded the strokes at 14px;
 *  the plain tile keeps the symbols legible and matches the set's tiles.
 *  Symbols are 8 units wide - lucide's round caps stretch its 6-unit
 *  strokes to an optical 8, so flat caps need the extra length to match. */
export function DiffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M12 5.5V13.5M8 9.5H16M8 17.5H16" />
    </Icon>
  );
}

/** Generate view: squircle-cornered chat bubble with a filled four-point
 *  spark inside - the conversation surface plus the generative bit. The
 *  bubble tail is the beveled bottom-left point. */
export function GenerateIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path
        fill="currentColor"
        stroke="none"
        d="M12 7.25C12.3 9.4 13.35 10.45 15.5 10.75C13.35 11.05 12.3 12.1 12 14.25C11.7 12.1 10.65 11.05 8.5 10.75C10.65 10.45 11.7 9.4 12 7.25Z"
      />
    </Icon>
  );
}

/** Review view: the pull-request arrow rebuilt with squircle nodes and a
 *  flat-capped, bevel-apex arrow. */
export function ReviewIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(5, 6, 3) + squircle(19, 18, 3)} />
      <path d="M5 9V21" />
      <path d="M19 15V8C19 5.24 18.76 5 16 5H12.5" />
      <path strokeLinejoin="bevel" d="M15.5 1.5 12 5 15.5 8.5" />
    </Icon>
  );
}

/** CLI view: prompt chevron and cursor underscore, flat caps. */
export function CliIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M5 6.5 10.5 12 5 17.5" />
      <path d="M13.5 17.5H19.5" />
    </Icon>
  );
}

/** Editor view: code chevrons with a slash, flat caps and beveled apexes. */
export function EditorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M8.5 6.5 3 12 8.5 17.5M15.5 6.5 21 12 15.5 17.5" />
      <path d="M13.75 4.5 10.25 19.5" />
    </Icon>
  );
}

/** Fetch/sync: two arcs forming a circle, each sweeping into a corner-
 *  bracket arrowhead. Brackets stay axis-aligned so the heads survive
 *  12px (freestanding chevron heads mushed into a plain ring there). */
export function RefreshIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.25 12A8.75 8.75 0 0 1 12 3.25C14.6 3.25 16.95 4.25 18.8 6.05L20.75 8" />
      <path d="M20.75 3.25V8H16" />
      <path d="M20.75 12A8.75 8.75 0 0 1 12 20.75C9.4 20.75 7.05 19.75 5.2 17.95L3.25 16" />
      <path d="M3.25 20.75V16H8" />
    </Icon>
  );
}

/** Commit: squircle node on the branch line. */
export function CommitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 3.5)} />
      <path d="M2.75 12H7.25M16.75 12H21.25" />
    </Icon>
  );
}

export function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.75V3.5" />
      <path strokeLinejoin="bevel" d="M5.75 9.75 12 3.5 18.25 9.75" />
    </Icon>
  );
}

export function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.25V20.5" />
      <path strokeLinejoin="bevel" d="M5.75 14.25 12 20.5 18.25 14.25" />
    </Icon>
  );
}

/** Sync (pull then push): paired down/up arrows. */
export function SyncIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 20V4.5M16.5 4V19.5" />
      <path strokeLinejoin="bevel" d="M4.25 7.75 7.5 4.5 10.75 7.75M13.25 16.25 16.5 19.5 19.75 16.25" />
    </Icon>
  );
}

/** Merge: two squircle nodes, stem, and a quarter sweep between them. */
export function MergeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(18, 18, 3)} />
      <path d="M6 21V9C6 15.3 8.7 18 15 18" />
    </Icon>
  );
}

/** Tag: classic label silhouette with our corner rounding and a filled
 *  squircle eyelet. */
export function TagIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.37 2.5H5C3.16 2.5 2.5 3.16 2.5 5V11.37C2.5 12.03 2.76 12.67 3.23 13.14L10.86 20.77C11.83 21.74 13.4 21.74 14.37 20.77L20.77 14.37C21.74 13.4 21.74 11.83 20.77 10.86L13.14 3.23C12.67 2.76 12.03 2.5 11.37 2.5Z" />
      <path d={squircle(7.5, 7.5, 1.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Pull request: ReviewIcon's cousin without the arrowhead. */
export function PullRequestIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(18, 18, 3)} />
      <path d="M6 9V21" />
      <path d="M12.5 5H15C17.76 5 18 5.24 18 8V15" />
    </Icon>
  );
}

/** Stash: archive box - squircle-cornered lid and body, flat handle. */
export function StashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 8.5V5C3 3.62 3.12 3.5 4.5 3.5H19.5C20.88 3.5 21 3.62 21 5V8.5Z" />
      <path d="M4.75 8.5V17.5C4.75 20.26 4.99 20.5 7.75 20.5H16.25C19.01 20.5 19.25 20.26 19.25 17.5V8.5" />
      <path d="M9.5 12.5H14.5" />
    </Icon>
  );
}

/** Pop stash: the archive box opened at the top with an up arrow out. */
export function StashPopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 8.5V5C3 3.62 3.12 3.5 4.5 3.5H19.5C20.88 3.5 21 3.62 21 5V8.5Z" />
      <path d="M4.75 8.5V17.5C4.75 20.26 4.99 20.5 7.75 20.5H8.75M19.25 8.5V17.5C19.25 20.26 19.01 20.5 16.25 20.5H15.25" />
      <path d="M12 21.5V12" />
      <path strokeLinejoin="bevel" d="M9.25 14.75 12 12 14.75 14.75" />
    </Icon>
  );
}

/** Amend/history: rewind clock - 270-degree arc, corner bracket, hands.
 *  Hands run 6.75->12->15.75 (not shorter) so they survive 14px renders -
 *  stubbier hands vanish and the face reads as an empty ring. */
export function HistoryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.25 12A8.75 8.75 0 1 0 12 3.25C9.4 3.25 7.05 4.25 5.2 6.05L3.25 8" />
      <path d="M3.25 3.25V8H8" />
      <path d="M12 6.75V12H15.75" />
    </Icon>
  );
}

/** Discard: trash can with squircle-cornered body. */
export function TrashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 5.5H21" />
      <path d="M5 5.5V18C5 20.76 5.24 21 8 21H16C18.76 21 19 20.76 19 18V5.5" />
      <path d="M9 5.5V4.5C9 3.12 9.12 3 10.5 3H13.5C14.88 3 15 3.12 15 4.5V5.5" />
      <path d="M10 9.5V16.5M14 9.5V16.5" />
    </Icon>
  );
}

/** Copy: two stacked portrait tiles - RestoreIcon's shape stretched into
 *  documents (front page plus the top-right sweep of the one behind). */
export function CopyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7.5H12C14.3 7.5 14.5 7.7 14.5 10V19C14.5 21.3 14.3 21.5 12 21.5H7C4.7 21.5 4.5 21.3 4.5 19V10C4.5 7.7 4.7 7.5 7 7.5Z" />
      <path d="M7.5 4H17C19.3 4 19.5 4.2 19.5 6.5V16" />
    </Icon>
  );
}

/** Export to file: the folded portrait tile with a down arrow inside. */
export function FileDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M12 10.5V18" />
      <path strokeLinejoin="bevel" d="M8.75 14.75 12 18 15.25 14.75" />
    </Icon>
  );
}

/** Open folder (file manager): lucide folder-open's topology - back
 *  folder with tab, tilted open flap - redrawn with flat caps and our
 *  corner rounding. */
export function FolderOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 14L7.45 11.1C7.79 10.43 8.48 10 9.24 10H20C21.3 10 22.2 11.3 21.94 12.5L20.39 18.5C20.16 19.38 19.37 20 18.45 20H4C2.16 20 2 19.84 2 18V5C2 3.62 2.12 3.5 3.5 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3H18C19.38 6.3 19.5 6.42 19.5 7.8V10" />
    </Icon>
  );
}

/** Branch: squircle nodes with the fork sweep. */
export function BranchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(18, 6, 3) + squircle(6, 18, 3)} />
      <path d="M6 3V15" />
      <path d="M18 9C18 15.3 15.3 18 9 18" />
    </Icon>
  );
}

/** Checkmark: flat caps, beveled elbow. */
export function CheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 12.5 9.25 17.25 19.5 7" />
    </Icon>
  );
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5V19M5 12H19" />
    </Icon>
  );
}

/** Search: squircle lens, flat-capped handle. */
export function SearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 6)} />
      <path d="M15.6 15.6 20.75 20.75" />
    </Icon>
  );
}

/** Filled squircle status dot (colored via text-* classes). It fills the
 *  tile so the className size is the dot size: callers render it tiny
 *  (Noml's status bar uses size-2), where a radius-2 dot would vanish. */
export function DotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Warning triangle: rounded apex/corners, flat-capped bang with a
 *  squircle dot. */
export function AlertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5C12.6 3.5 13.15 3.82 13.45 4.35L21.4 18.35C22.06 19.5 21.23 20.5 20 20.5H4C2.77 20.5 1.94 19.5 2.6 18.35L10.55 4.35C10.85 3.82 11.4 3.5 12 3.5Z" />
      <path d="M12 9V13.5" />
      <path d={squircle(12, 17, 1.25)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Remote branches: cloud with a flat-capped down arrow. */
export function CloudDownloadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.39 15.27A7 7 0 1 1 15.71 8H17.5A4.5 4.5 0 0 1 19.94 16.28" />
      <path d="M12 13V21" />
      <path strokeLinejoin="bevel" d="M8.75 17.75 12 21 15.25 17.75" />
    </Icon>
  );
}

/** Bug: squircle body (r=7, grid-filling like lucide's), wing split,
 *  splayed legs and antennae. Appendages are angled and thicker than the
 *  body stroke (2.5) - short axis-aligned stubs at stroke 2 vanished at
 *  14px, the same fix as the gear teeth. */
export function BugIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7)} />
      <path d="M12 6.5V20.5" />
      <path strokeWidth={2.5} d="M7 3.5 9.75 7M17 3.5 14.25 7" />
      <path
        strokeWidth={2.5}
        d="M5.4 11.5 2 10M18.6 11.5 22 10M5.6 16.5 2.25 18.75M18.4 16.5 21.75 18.75"
      />
    </Icon>
  );
}

/** Activity: heartbeat zigzag, flat caps, beveled peaks. */
export function ActivityIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.5 12H6.5L9.5 4.75 14.5 19.25 17.5 12H21.5" />
    </Icon>
  );
}

/** Claude process: bot head - squircle-cornered face, antenna, bar eyes. */
export function BotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 8H16.5C19.26 8 19.5 8.24 19.5 11V17C19.5 19.76 19.26 20 16.5 20H7.5C4.74 20 4.5 19.76 4.5 17V11C4.5 8.24 4.74 8 7.5 8Z" />
      <path d="M12 8V4" />
      <path d="M9.5 12.5V15.5M14.5 12.5V15.5" />
    </Icon>
  );
}

/** Nothing running / blocked: squircle ring with an inner slash. */
export function BanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M5.5 5.5 18.5 18.5" />
    </Icon>
  );
}

/** Terminal process: squircle tile with the prompt-and-cursor inside. */
export function TerminalTileIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3.5H16.5C19.26 3.5 19.5 3.74 19.5 6.5V17.5C19.5 20.26 19.26 20.5 16.5 20.5H7.5C4.74 20.5 4.5 20.26 4.5 17.5V6.5C4.5 3.74 4.74 3.5 7.5 3.5Z" />
      <path strokeLinejoin="bevel" d="M8 8.5 11 11.5 8 14.5" />
      <path d="M12.5 15.5H16" />
    </Icon>
  );
}

/** Flat-capped right chevron with the font's beveled apex. */
export function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9 6 15 12 9 18" />
    </Icon>
  );
}

/** Clock: squircle face with HistoryIcon's hands. */
export function ClockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V12H15.75" />
    </Icon>
  );
}

/** Download: PushIcon's open box with the arrow dropping in. */
export function DownloadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 11V18C5 20.76 5.24 21 8 21H16C18.76 21 19 20.76 19 18V11" />
      <path d="M12 3.25V14.75" />
      <path strokeLinejoin="bevel" d="M7.75 10.5 12 14.75 16.25 10.5" />
    </Icon>
  );
}

/** Document: portrait tile with text lines. */
export function FileTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M8 10H10.5M8 13.5H16M8 17H16" />
    </Icon>
  );
}

/** Closed folder with tab, FolderOpenIcon's sibling. */
export function FolderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
    </Icon>
  );
}

/** New folder: the closed folder with a plus inside. */
export function FolderPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M12 9.75V16.25M8.75 13H15.25" />
    </Icon>
  );
}

/** Home: gable roof with rounded apex over a squircle-cornered body. */
export function HomeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 18V9.6L11.05 3.98C11.6 3.51 12.4 3.51 12.95 3.98L19.5 9.6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18Z" />
      <path d="M9.75 21V16.75C9.75 15.37 9.87 15.25 11.25 15.25H12.75C14.13 15.25 14.25 15.37 14.25 16.75V21" />
    </Icon>
  );
}

/** Desktop: screen tile on a stem and base. */
export function MonitorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
    </Icon>
  );
}

/** Rename: 45-degree pencil - flat butt end, sharp tip, ferrule line. */
export function PencilIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.55 4.2 19.8 6.45 7.35 18.9 3.6 20.4 5.1 16.65Z" />
      <path d="M15.3 6.45 17.55 8.7" />
    </Icon>
  );
}

/** Plain squircle status ring. r=10 across the status family, matching
 *  lucide's circle icons exactly - the first cut at 8.5 read a size small. */
export function RingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
    </Icon>
  );
}

/** Status ring with a check. */
export function CircleCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path strokeLinejoin="bevel" d="M8.25 11.75 11 14.5 16 9.5" />
    </Icon>
  );
}

/** Status ring with a bang. */
export function CircleAlertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M12 7V13.25" />
      <path d={squircle(12, 16.75, 1.25)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Status ring with an x. */
export function CircleXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M8.5 8.5 15.5 15.5M15.5 8.5 8.5 15.5" />
    </Icon>
  );
}

/** Eye: almond outline with a squircle pupil. */
export function EyeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 12C5 7.17 8.5 5.25 12 5.25C15.5 5.25 19 7.17 21.5 12C19 16.83 15.5 18.75 12 18.75C8.5 18.75 5 16.83 2.5 12Z" />
      <path d={squircle(12, 12, 3)} />
    </Icon>
  );
}

/** Hidden: the eye with a flat-capped slash across. */
export function EyeOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 12C5 7.17 8.5 5.25 12 5.25C15.5 5.25 19 7.17 21.5 12C19 16.83 15.5 18.75 12 18.75C8.5 18.75 5 16.83 2.5 12Z" />
      <path d={squircle(12, 12, 3)} />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Browse for a project: closed folder with a search lens inside. */
export function FolderSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d={squircle(11.5, 11.75, 2.9)} />
      <path d="M13.7 13.95 16.25 16.5" />
    </Icon>
  );
}

/** Drag handle: two columns of squircle dots. */
export function GripIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(9, 5.75, 1.3) +
          squircle(15, 5.75, 1.3) +
          squircle(9, 12, 1.3) +
          squircle(15, 12, 1.3) +
          squircle(9, 18.25, 1.3) +
          squircle(15, 18.25, 1.3)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Layers: beveled diamond over two bands. */
export function LayersIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 3.75 20.5 8 12 12.25 3.5 8Z" />
      <path strokeLinejoin="bevel" d="M3.5 12.5 12 16.75 20.5 12.5" />
      <path strokeLinejoin="bevel" d="M3.5 16.75 12 21 20.5 16.75" />
    </Icon>
  );
}

/** Palette: the classic thumb-notch disc with squircle paint wells. */
export function PaletteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5C6.75 21.5 2.5 17.25 2.5 12C2.5 6.75 6.75 2.5 12 2.5C17.25 2.5 21.5 6.55 21.5 11.25C21.5 14.15 19.15 16.5 16.25 16.5H14.4C13.45 16.5 12.9 17.58 13.46 18.35L13.7 18.68C14.5 19.78 13.71 21.5 12 21.5Z" />
      <path
        d={
          squircle(13.5, 6.5, 1.3) +
          squircle(17.25, 10.75, 1.3) +
          squircle(8.5, 7.5, 1.3) +
          squircle(6.5, 12, 1.3)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Play: right-pointing triangle with rounded corners. */
export function PlayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.9 4.86 19.28 10.5C20.4 11.17 20.4 12.83 19.28 13.5L9.9 19.14C8.75 19.83 7.25 19 7.25 17.64V6.36C7.25 5 8.75 4.17 9.9 4.86Z" />
    </Icon>
  );
}

/** Restart: single clockwise arrow into a corner-bracket head. */
export function RotateCwIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.75 12A8.75 8.75 0 1 1 12 3.25C14.6 3.25 16.95 4.25 18.8 6.05L20.75 8" />
      <path d="M20.75 3.25V8H16" />
    </Icon>
  );
}

/** Speed launch: upright rocket - domed body, squircle window, swept
 *  fins, exhaust line. */
export function RocketIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C14.9 4.6 16.25 7.6 16.25 11V16H7.75V11C7.75 7.6 9.1 4.6 12 2.75Z" />
      <path d={squircle(12, 9.5, 2)} />
      <path d="M7.75 11.75 4.75 14.75V18L7.75 16.5M16.25 11.75 19.25 14.75V18L16.25 16.5" />
      <path d="M12 18.25V21.5" />
    </Icon>
  );
}

/** Stop: a lone squircle tile. */
export function StopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 7.5, 0.92)} />
    </Icon>
  );
}

/** Plain chat bubble - GenerateIcon's shell without the spark. */
export function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
    </Icon>
  );
}

/** Keyboard: wide tile, a row of key dots, spacebar. */
export function KeyboardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 6H20C21.84 6 22 6.16 22 8V16C22 17.84 21.84 18 20 18H4C2.16 18 2 17.84 2 16V8C2 6.16 2.16 6 4 6Z" />
      <path
        d={
          squircle(6, 10, 0.9) +
          squircle(10, 10, 0.9) +
          squircle(14, 10, 0.9) +
          squircle(18, 10, 0.9)
        }
        fill="currentColor"
        stroke="none"
      />
      <path d="M8 14.5H16" />
    </Icon>
  );
}

/** CPU: outer tile, inner die, pins. */
export function CpuIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 4.5H17.5C19.34 4.5 19.5 4.66 19.5 6.5V17.5C19.5 19.34 19.34 19.5 17.5 19.5H6.5C4.66 19.5 4.5 19.34 4.5 17.5V6.5C4.5 4.66 4.66 4.5 6.5 4.5Z" />
      <path d="M10 9H14C14.92 9 15 9.08 15 10V14C15 14.92 14.92 15 14 15H10C9.08 15 9 14.92 9 14V10C9 9.08 9.08 9 10 9Z" />
      <path d="M9 2V4.5M15 2V4.5M9 19.5V22M15 19.5V22M2 9H4.5M2 15H4.5M19.5 9H22M19.5 15H22" />
    </Icon>
  );
}

/** Sessions: two figures - squircle heads, flat-shouldered bodies. */
export function UsersIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9, 7.5, 3.5)} />
      <path d="M2.75 21V19.75C2.75 17.4 3.4 16.25 6 16.25H12C14.6 16.25 15.25 17.4 15.25 19.75V21" />
      <path d="M16.75 4.4C18.3 4.85 19.25 6.05 19.25 7.5C19.25 8.95 18.3 10.15 16.75 10.6" />
      <path d="M21.25 21V19.75C21.25 17.9 20.55 16.85 19 16.4" />
    </Icon>
  );
}

/** Context: symmetric brain lobes with a center seam. */
export function BrainIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 4.75C11.4 3.9 10.35 3.5 9.35 3.75C8.2 4.05 7.4 5.1 7.45 6.3C6.1 6.6 5.1 7.8 5.1 9.2C5.1 9.9 5.35 10.55 5.8 11.05C5 11.6 4.5 12.5 4.5 13.5C4.5 14.9 5.5 16.1 6.85 16.4C6.9 18.1 8.3 19.5 10 19.5C10.75 19.5 11.45 19.24 12 18.8" />
      <path d="M12 4.75C12.6 3.9 13.65 3.5 14.65 3.75C15.8 4.05 16.6 5.1 16.55 6.3C17.9 6.6 18.9 7.8 18.9 9.2C18.9 9.9 18.65 10.55 18.2 11.05C19 11.6 19.5 12.5 19.5 13.5C19.5 14.9 18.5 16.1 17.15 16.4C17.1 18.1 15.7 19.5 14 19.5C13.25 19.5 12.55 19.24 12 18.8" />
      <path d="M12 4.75V18.8" />
    </Icon>
  );
}

/** Notifications: bell dome with flared skirt and clapper arc. */
export function BellIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3C8.7 3 6.25 5.45 6.25 8.75C6.25 12.9 5.1 14.35 4 15.5C3.4 16.13 3.84 17 4.75 17H19.25C20.16 17 20.6 16.13 20 15.5C18.9 14.35 17.75 12.9 17.75 8.75C17.75 5.45 15.3 3 12 3Z" />
      <path d="M10.4 20.25C10.75 20.9 11.35 21.25 12 21.25C12.65 21.25 13.25 20.9 13.6 20.25" />
    </Icon>
  );
}

/** Skills: the four-point concave-superellipse spark. */
export function SparkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C12.7 7.8 16.2 11.3 21.25 12C16.2 12.7 12.7 16.2 12 21.25C11.3 16.2 7.8 12.7 2.75 12C7.8 11.3 11.3 7.8 12 2.75Z" />
    </Icon>
  );
}

/** Prompts: the chat bubble with text lines inside. */
export function PromptIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M8.5 9H15.5M8.5 12.5H13" />
    </Icon>
  );
}

/** MCP servers: plug - flat-bottomed body, two prongs, cord. */
export function PlugIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 8H18V12.5C18 15.26 16.26 17 13.5 17H10.5C7.74 17 6 15.26 6 12.5Z" />
      <path d="M9 8V2.5M15 8V2.5M12 21.5V17" />
    </Icon>
  );
}

/** Landmarks: map pin with a squircle well. */
export function MapPinIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5C10.15 19.9 4.75 14.85 4.75 10.15C4.75 6.1 8 2.9 12 2.9C16 2.9 19.25 6.1 19.25 10.15C19.25 14.85 13.85 19.9 12 21.5Z" />
      <path d={squircle(12, 10.15, 2.9)} />
    </Icon>
  );
}

/** Info: plain circle ring (deliberately not a squircle - the glyph is
 *  typographic and reads better in a true round) with a bold i: thicker
 *  stem and a full dot so it stays legible at 14px. */
export function InfoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx={12} cy={12} r={10} />
      <path strokeWidth={2.5} d="M12 10.75V17" />
      <circle cx={12} cy={7.25} r={1.5} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Dev tools: C-spanner - open ring head, thick 45-degree handle. */
export function WrenchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18.41 5.13A3.75 3.75 0 1 0 19.52 9.28" />
      <path strokeWidth={2.75} d="M13.35 10.65 4.6 19.4" />
    </Icon>
  );
}

/** Download-to-disk: down arrow onto a base line. */
export function ArrowDownToLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.25V14.25" />
      <path strokeLinejoin="bevel" d="M7.75 10 12 14.25 16.25 10" />
      <path d="M5 19.5H19" />
    </Icon>
  );
}

export function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 12H3.25" />
      <path strokeLinejoin="bevel" d="M9.75 5.75 3.5 12 9.75 18.25" />
    </Icon>
  );
}

/** Idea: bulb dome with base bars. */
export function BulbIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C8.55 2.75 6 5.3 6 8.5C6 10.4 6.9 11.7 7.8 12.75C8.5 13.55 9 14.3 9 15.25H15C15 14.3 15.5 13.55 16.2 12.75C17.1 11.7 18 10.4 18 8.5C18 5.3 15.45 2.75 12 2.75Z" />
      <path d="M9.5 18.25H14.5M10.25 21.25H13.75" />
    </Icon>
  );
}

export function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6 15 12 9 18 15" />
    </Icon>
  );
}

/** Clipboard: board tile with a clip tab. */
export function ClipboardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
    </Icon>
  );
}

/** Publish: CloudDownloadIcon's cloud with the arrow going up. */
export function CloudUploadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.39 15.27A7 7 0 1 1 15.71 8H17.5A4.5 4.5 0 0 1 19.94 16.28" />
      <path d="M12 13V21" />
      <path strokeLinejoin="bevel" d="M8.75 16.25 12 13 15.25 16.25" />
    </Icon>
  );
}

/** Database: the classic cylinder. */
export function DatabaseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 8C16.14 8 19.5 6.88 19.5 5.5C19.5 4.12 16.14 3 12 3C7.86 3 4.5 4.12 4.5 5.5C4.5 6.88 7.86 8 12 8Z" />
      <path d="M4.5 5.5V18.5C4.5 19.88 7.86 21 12 21C16.14 21 19.5 19.88 19.5 18.5V5.5" />
      <path d="M4.5 12C4.5 13.38 7.86 14.5 12 14.5C16.14 14.5 19.5 13.38 19.5 12" />
    </Icon>
  );
}

/** New file: the portrait tile with a plus. */
export function FilePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M12 11.75V18.25M8.75 15H15.25" />
    </Icon>
  );
}

/** Git repo folder: the closed folder with a commit node inside. */
export function FolderGitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d={squircle(12, 13, 2.4)} />
      <path d="M6 13H9.6M14.4 13H18" />
    </Icon>
  );
}

/** Folder tree: spine with two branch stubs into mini folders. */
export function FolderTreeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.4 4H14.6C15 4 15.36 4.19 15.6 4.5L16.15 5.2C16.39 5.51 16.75 5.7 17.15 5.7H20C20.92 5.7 21 5.78 21 6.7V9C21 9.92 20.92 10 20 10H12.4C11.48 10 11.4 9.92 11.4 9V5C11.4 4.08 11.48 4 12.4 4Z" />
      <path d="M12.4 15H14.6C15 15 15.36 15.19 15.6 15.5L16.15 16.2C16.39 16.51 16.75 16.7 17.15 16.7H20C20.92 16.7 21 16.78 21 17.7V20C21 20.92 20.92 21 20 21H12.4C11.48 21 11.4 20.92 11.4 20V16C11.4 15.08 11.48 15 12.4 15Z" />
      <path d="M3.5 2.5V16C3.5 17.84 3.66 18 5.5 18H8.4" />
      <path d="M3.5 5C3.5 6.84 3.66 7 5.5 7H8.4" />
    </Icon>
  );
}

/** Globe: squircle ring, equator, meridian lens. */
export function GlobeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5)} />
      <path d="M2.75 12H21.25" />
      <path d="M12 2.5C14.9 5.5 15.4 9 15.4 12C15.4 15 14.9 18.5 12 21.5C9.1 18.5 8.6 15 8.6 12C8.6 9 9.1 5.5 12 2.5Z" />
    </Icon>
  );
}

/** Hash: flat-capped slanted grid. */
export function HashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.75 3.5 8.25 20.5M15.75 3.5 14.25 20.5M4.5 8.75H20M4 15.25H19.5" />
    </Icon>
  );
}

/** Auth key: squircle bow, 45-degree shaft, one tooth. */
export function KeyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(16.25, 7.75, 4.75)} />
      <path d="M12.7 11.3 3.5 20.5" />
      <path d="M6 18 8.1 20.1" />
    </Icon>
  );
}

/** Announcement: beveled horn with handle arc. */
export function MegaphoneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 10.75 21 5.25V17.75L3 12.5Z" />
      <path d="M11.6 16.8A3 3 0 1 1 5.8 15.2" />
    </Icon>
  );
}

/** Package: beveled cube with fold lines. */
export function PackageIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.5 7.25V16.75L12 21.25 3.5 16.75V7.25Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.25 12 11.75 20.5 7.25" />
      <path d="M12 11.75V21.25" />
    </Icon>
  );
}

/** Pushpin: flat head bar, flared body, needle. */
export function PinIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 3H16" />
      <path d="M14.5 3V9.5C14.5 10.5 15 11.2 15.9 11.8L17.1 12.6C17.85 13.1 18.25 13.7 18.25 14.6V15.5H5.75V14.6C5.75 13.7 6.15 13.1 6.9 12.6L8.1 11.8C9 11.2 9.5 10.5 9.5 9.5V3" />
      <path d="M12 15.5V21.5" />
    </Icon>
  );
}

/** Unpin: the pushpin with a slash. */
export function PinOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 3H16" />
      <path d="M14.5 3V9.5C14.5 10.5 15 11.2 15.9 11.8L17.1 12.6C17.85 13.1 18.25 13.7 18.25 14.6V15.5H5.75V14.6C5.75 13.7 6.15 13.1 6.9 12.6L8.1 11.8C9 11.2 9.5 10.5 9.5 9.5V3" />
      <path d="M12 15.5V21.5" />
      <path d="M3.5 3.5 20.5 20.5" />
    </Icon>
  );
}

/** Cursor pointer: beveled arrowhead with a trailing line. */
export function PointerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4 4 10.4 19.6 12.5 12.5 19.6 10.4Z" />
      <path d="M12.5 12.5 19.75 19.75" />
    </Icon>
  );
}

/** Undo/reset: RotateCwIcon mirrored counterclockwise. */
export function RotateCcwIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.25 12A8.75 8.75 0 1 0 12 3.25C9.4 3.25 7.05 4.25 5.2 6.05L3.25 8" />
      <path d="M3.25 3.25V8H8" />
    </Icon>
  );
}

/** Save: floppy - clipped-corner tile, top slot, bottom door. */
export function SaveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.75 3.5H6.5C4.66 3.5 4.5 3.66 4.5 5.5V18.5C4.5 20.34 4.66 20.5 6.5 20.5H17.5C19.34 20.5 19.5 20.34 19.5 18.5V8.25L14.75 3.5Z" />
      <path d="M8 3.5V7C8 7.92 8.08 8 9 8H15" />
      <path d="M17 20.5V14.5C17 13.58 16.92 13.5 16 13.5H8C7.08 13.5 7 13.58 7 14.5V20.5" />
    </Icon>
  );
}

/** Changelog: scroll with rolled ends and text lines. */
export function ScrollIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19 17V5C19 3.62 18.88 3.5 17.5 3.5H4.5" />
      <path d="M8 21H19.5C20.6 21 21.25 20.35 21.25 19.25V18.75C21.25 18.2 20.8 17.75 20.25 17.75H11.25C10.7 17.75 10.25 18.2 10.25 18.75V19C10.25 20.1 9.35 21 8.25 21C7.15 21 6.25 20.1 6.25 19V5.5C6.25 4.4 5.35 3.5 4.25 3.5C3.15 3.5 2.25 4.4 2.25 5.5V7.25C2.25 7.8 2.7 8.25 3.25 8.25H6.25" />
      <path d="M10.5 8.25H15.5M10.5 11.75H15.5" />
    </Icon>
  );
}

/** Workflow: two squircle tiles joined by an elbow connector. */
export function WorkflowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H8.5C10.34 3.5 10.5 3.66 10.5 5.5V8.5C10.5 10.34 10.34 10.5 8.5 10.5H5.5C3.66 10.5 3.5 10.34 3.5 8.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M15.5 13.5H18.5C20.34 13.5 20.5 13.66 20.5 15.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H15.5C13.66 20.5 13.5 20.34 13.5 18.5V15.5C13.5 13.66 13.66 13.5 15.5 13.5Z" />
      <path d="M7 10.5V15C7 16.84 7.16 17 9 17H13.5" />
    </Icon>
  );
}

/** Link: two chain stubs and a bar. */
export function LinkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 17H7.5C4.7 17 2.5 14.8 2.5 12C2.5 9.2 4.7 7 7.5 7H9" />
      <path d="M15 7H16.5C19.3 7 21.5 9.2 21.5 12C21.5 14.8 19.3 17 16.5 17H15" />
      <path d="M8 12H16" />
    </Icon>
  );
}

/** Eyedropper: needle, ferrule band, arced bulb. */
export function PipetteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13.25 8.75 3.75 18.25C3.1 18.9 2.75 21.25 2.75 21.25C2.75 21.25 5.1 20.9 5.75 20.25L15.25 10.75" />
      <path d="M11.75 7.25 16.75 12.25" />
      <path d="M15.25 6.25 17.9 3.6C18.9 2.6 20.4 2.6 21.4 3.6C22.4 4.6 22.4 6.1 21.4 7.1L18.75 9.75" />
    </Icon>
  );
}

/** Missing image: frame tile with a slash. */
export function ImageOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d="M3.5 2.75 20.5 21.25" />
    </Icon>
  );
}

/** Panel-position toggles: window tile with a divider. */
export function PanelLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M9.5 4V20" />
    </Icon>
  );
}

export function PanelRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M14.5 4V20" />
    </Icon>
  );
}

export function PanelTopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.5H20.5" />
    </Icon>
  );
}

/** Fork: two squircle nodes joining into one. */
export function ForkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(18, 6, 3) + squircle(12, 18, 3)} />
      <path d="M6 9V10C6 11.84 6.16 12 8 12H16C17.84 12 18 11.84 18 10V9" />
      <path d="M12 12V15" />
    </Icon>
  );
}

/** Expand: opposed corner brackets with outward diagonals. */
export function ExpandIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15 3.25H20.75V9" />
      <path d="M20.75 3.25 14.25 9.75" />
      <path d="M9 20.75H3.25V15" />
      <path d="M3.25 20.75 9.75 14.25" />
    </Icon>
  );
}

/** Collapse: ExpandIcon's brackets folded inward. */
export function CollapseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.25 14.25H9.75V19.75" />
      <path d="M9.75 14.25 3.25 20.75" />
      <path d="M19.75 9.75H14.25V4.25" />
      <path d="M14.25 9.75 20.75 3.25" />
    </Icon>
  );
}

/** Lightning bolt with beveled points. */
export function ZapIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M13 2.75 4.5 13.25H11L10.5 21.25 19.5 10.75H12.75Z" />
    </Icon>
  );
}

/** Curly braces, flat caps. */
export function BracesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 3.5H9C7.62 3.5 7.5 3.62 7.5 5V8.9C7.5 10 7 10.9 6 11.5L5.25 12L6 12.5C7 13.1 7.5 14 7.5 15.1V19C7.5 20.38 7.62 20.5 9 20.5H9.5" />
      <path d="M14.5 3.5H15C16.38 3.5 16.5 3.62 16.5 5V8.9C16.5 10 17 10.9 18 11.5L18.75 12L18 12.5C17 13.1 16.5 14 16.5 15.1V19C16.5 20.38 16.38 20.5 15 20.5H14.5" />
    </Icon>
  );
}

/** Attachment: upright single-wire paperclip (a 45-degree version read as
 *  flipped/rotated oddly next to the other glyphs). */
export function PaperclipIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7.75V15.5A5 5 0 0 0 17 15.5V6.25A3.5 3.5 0 0 0 10 6.25V15A2 2 0 0 0 14 15V8" />
    </Icon>
  );
}

/** Enter/return: corner-down-left arrow with a beveled chevron head. */
export function EnterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 4V11C20.5 14.68 20.18 15 16.5 15H4.25" />
      <path strokeLinejoin="bevel" d="M8.75 10.5 4.25 15 8.75 19.5" />
    </Icon>
  );
}

/** Plan mode: ring-bound notebook with a pen over the corner. */
export function NotebookPenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13.5 2.5H7C4.9 2.5 4.5 2.9 4.5 5V19C4.5 21.1 4.9 21.5 7 21.5H17C19.1 21.5 19.5 21.1 19.5 19V12.5" />
      <path d="M2.25 6.5H4.5M2.25 11H4.5M2.25 15.5H4.5" />
      <path d="M18.85 2.9 21.1 5.15 15.1 11.15 12.15 11.85 12.85 8.9Z" />
    </Icon>
  );
}

/** Ask-first mode: open hand - three fingers, thumb-palm sweep. */
export function HandIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 12V5.75C8 4.92 8.67 4.25 9.5 4.25C10.33 4.25 11 4.92 11 5.75V10.5" />
      <path d="M11 10.5V4C11 3.17 11.67 2.5 12.5 2.5C13.33 2.5 14 3.17 14 4V10.5" />
      <path d="M14 10.5V5.25C14 4.42 14.67 3.75 15.5 3.75C16.33 3.75 17 4.42 17 5.25V10.5" />
      <path d="M17 10.5V7.5C17 6.67 17.65 6 18.5 6C19.35 6 20 6.67 20 7.5V15.5C20 18.54 17.54 21 14.5 21H13.2C11.37 21 9.65 20.1 8.5 18.7L4.35 13.63C3.85 13.03 3.9 12.15 4.45 11.6C5.05 11 6 11 6.6 11.6L8 13" />
    </Icon>
  );
}

/** Ask-first mode: the chat bubble with a question mark - "asks before
 *  acting", and keeps the mode in the bubble family with Chat/Prompts. */
export function AskIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M9.9 8.35C9.9 7.05 10.85 6.15 12 6.15C13.15 6.15 14.1 6.95 14.1 8.1C14.1 9.9 12 9.9 12 11.6" />
      <path d={squircle(12, 14.35, 1.15)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Auto-accept mode: two parallel stacked checks (a tile-with-check read
 *  too close to the Auto shield; lucide's version overlaps its checks at
 *  an angle - ours stack clean and parallel). */
export function AcceptIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 9.5 8.25 13.25 16.5 5" />
      <path strokeLinejoin="bevel" d="M7.5 15.75 11.25 19.5 19.5 11.25" />
    </Icon>
  );
}

/** Auto mode: flat-topped shield with squircle shoulders and a check -
 *  deliberately not lucide's swoop-top silhouette. */
export function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path strokeLinejoin="bevel" d="M8.75 11.75 11 14 15.5 9.5" />
    </Icon>
  );
}

/** User: squircle head over a continuous shoulder dome (a flat-topped
 *  shoulder bar read as a tub under the small head). */
export function UserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 7, 4)} />
      <path d="M4.75 20.75C4.75 16.6 7.9 14.6 12 14.6C16.1 14.6 19.25 16.6 19.25 20.75" />
    </Icon>
  );
}

/** Explore: squircle ring with a beveled needle. */
export function CompassIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5)} />
      <path strokeLinejoin="bevel" d="M15.5 8.5 13.75 13.75 8.5 15.5 10.25 10.25Z" />
    </Icon>
  );
}

/** Task list: the clipboard with text lines. */
export function ClipboardListIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path d="M9.5 11H14.5M9.5 15H13" />
    </Icon>
  );
}

/** File search: portrait tile with a lens. */
export function FileSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(11.25, 14.25, 2.5)} />
      <path d="M13.15 16.15 15.25 18.25" />
    </Icon>
  );
}

/** Build: tilted hammer - squared striking face, wedge peen on the other
 *  end, hollow rounded handle. A single-stroke handle read as a marker
 *  pen at 14px; a symmetric upright mallet read as the letter T. */
export function HammerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M15.02 3.89 21.07 9.93C21.95 10.81 21.95 10.96 21.07 11.84L19.64 13.27C18.76 14.15 18.61 14.15 17.73 13.27L11.68 7.23 9.93 3.89 11.68 2.14Z"
      />
      <path d="M13.27 8.82 6.27 15.82C5.74 16.35 5.74 17.2 6.27 17.73C6.8 18.26 7.65 18.26 8.18 17.73L15.18 10.73" />
    </Icon>
  );
}

/** Todos: checked box, empty box, item lines. */
export function ListTodoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H8C8.92 4.5 9 4.58 9 5.5V9C9 9.92 8.92 10 8 10H4.5C3.58 10 3.5 9.92 3.5 9V5.5C3.5 4.58 3.58 4.5 4.5 4.5Z" />
      <path strokeLinejoin="bevel" d="M5 7.5 6.25 8.75 9.25 5.75" />
      <path d="M4.5 14H8C8.92 14 9 14.08 9 15V18.5C9 19.42 8.92 19.5 8 19.5H4.5C3.58 19.5 3.5 19.42 3.5 18.5V15C3.5 14.08 3.58 14 4.5 14Z" />
      <path d="M12.5 7.25H20.75M12.5 16.75H20.75" />
    </Icon>
  );
}

/** Edit: the pencil over a baseline. */
export function PenLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.55 4.2 19.8 6.45 7.35 18.9 3.6 20.4 5.1 16.65Z" />
      <path d="M15.3 6.45 17.55 8.7" />
      <path d="M12.75 20.5H21.25" />
    </Icon>
  );
}

/** Pending/untracked: the status ring, dashed. */
export function CircleDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} strokeDasharray="4.5 3.5" />
    </Icon>
  );
}

/** Deleted file: portrait tile with an x. */
export function FileXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M9.25 12.25 14.75 17.75M14.75 12.25 9.25 17.75" />
    </Icon>
  );
}

/** No remote: the cloud with a slash. */
export function CloudOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.39 15.27A7 7 0 1 1 15.71 8H17.5A4.5 4.5 0 0 1 19.94 16.28" />
      <path d="M3.5 3 20.5 21" />
    </Icon>
  );
}

/** Code file: portrait tile with chevrons. */
export function FileCodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path strokeLinejoin="bevel" d="M10.25 12.25 7.75 15 10.25 17.75M13.75 12.25 16.25 15 13.75 17.75" />
    </Icon>
  );
}

/** Unsaved/conflicted file: portrait tile with a bang. */
export function FileWarningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M12 10.75V15" />
      <path d={squircle(12, 18, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Tests: conical flask with a fill line. */
export function FlaskIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.75 3H14.25M10.5 3V8.6L4.9 18.2C4.15 19.5 4.9 21 6.4 21H17.6C19.1 21 19.85 19.5 19.1 18.2L13.5 8.6V3" />
      <path d="M7.25 14.5H16.75" />
    </Icon>
  );
}

/** Locate: crosshair - squircle ring, axis ticks, center dot. */
export function LocateIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 6.5)} />
      <path d="M12 2.25V5.5M12 18.5V21.75M2.25 12H5.5M18.5 12H21.75" />
      <path d={squircle(12, 12, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** AI fix-it wand: shaft, spark tip, trailing dots. */
export function WandIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.5 12.9 11.1" />
      <path d="M16.5 3C16.84 5.46 18.54 7.16 21 7.5C18.54 7.84 16.84 9.54 16.5 12C16.16 9.54 14.46 7.84 12 7.5C14.46 7.16 16.16 5.46 16.5 3Z" />
      <path
        d={squircle(7.5, 4.5, 1.4) + squircle(19.5, 16.5, 1.4)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Mention: at-sign - squircle inner ring, open outer sweep with tail. */
export function AtSignIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 4)} />
      <path d="M16 8V13C16 14.66 17 15.5 18.25 15.5C20.25 15.5 21.5 13.9 21.5 12C21.5 6.75 17.25 2.5 12 2.5C6.75 2.5 2.5 6.75 2.5 12C2.5 17.25 6.75 21.5 12 21.5C14 21.5 15.8 20.9 17.3 19.85" />
    </Icon>
  );
}

/** Collapse all: chevrons folding toward the center. */
export function CollapseAllIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.75 4 12 9.25 17.25 4" />
      <path strokeLinejoin="bevel" d="M6.75 20 12 14.75 17.25 20" />
    </Icon>
  );
}

/** Paste: the clipboard with a down arrow dropping in. */
export function PasteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path d="M12 10V16.5" />
      <path strokeLinejoin="bevel" d="M9.5 14 12 16.5 14.5 14" />
    </Icon>
  );
}

/** Locked path: body tile, shackle, keyhole dot. */
export function LockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 10.5H17.5C19.34 10.5 19.5 10.66 19.5 12.5V18.5C19.5 20.34 19.34 20.5 17.5 20.5H6.5C4.66 20.5 4.5 20.34 4.5 18.5V12.5C4.5 10.66 4.66 10.5 6.5 10.5Z" />
      <path d="M8 10.5V7.5C8 5.29 9.79 3.5 12 3.5C14.21 3.5 16 5.29 16 7.5V10.5" />
      <path d={squircle(12, 15.5, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Panel toggles: PanelLeft/Right tiles with a fold chevron. */
export function PanelLeftCloseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M9.5 4V20" />
      <path strokeLinejoin="bevel" d="M16 9.5 13.5 12 16 14.5" />
    </Icon>
  );
}

export function PanelLeftOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M9.5 4V20" />
      <path strokeLinejoin="bevel" d="M13.5 9.5 16 12 13.5 14.5" />
    </Icon>
  );
}

export function PanelRightOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M14.5 4V20" />
      <path strokeLinejoin="bevel" d="M10.5 9.5 8 12 10.5 14.5" />
    </Icon>
  );
}

/** Cut: scissors - squircle pivot rings, crossing blades. */
export function ScissorsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 2.9) + squircle(6, 18, 2.9)} />
      <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
    </Icon>
  );
}

/** Search toggle: match case - big A, small a. */
export function CaseSensitiveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 16.5 7 7.5 11 16.5" />
      <path d="M4.4 13.5H9.6" />
      <path d={squircle(16.5, 13.75, 2.75)} />
      <path d="M19.25 11V16.5" />
    </Icon>
  );
}

/** Search toggle: regex - asterisk and a dot. */
export function RegexIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17 3.5V12.5M13.1 5.75 20.9 10.25M20.9 5.75 13.1 10.25" />
      <path d={squircle(7, 17.5, 1.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Search toggle: replace - tile with an arrow sweeping up and out. */
export function ReplaceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 12.5H10C11.84 12.5 12 12.66 12 14.5V19C12 20.84 11.84 21 10 21H5.5C3.66 21 3.5 20.84 3.5 19V14.5C3.5 12.66 3.66 12.5 5.5 12.5Z" />
      <path d="M12 8.25H15.25C17.9 8.25 19 7.15 19 4.5V3.75" />
      <path strokeLinejoin="bevel" d="M14.75 6 12 8.25 14.75 10.5" />
    </Icon>
  );
}

/** Search toggle: replace all - ReplaceIcon with a second tile behind. */
export function ReplaceAllIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 12.5H10C11.84 12.5 12 12.66 12 14.5V19C12 20.84 11.84 21 10 21H5.5C3.66 21 3.5 20.84 3.5 19V14.5C3.5 12.66 3.66 12.5 5.5 12.5Z" />
      <path d="M8 9.5H12.75C14.59 9.5 14.75 9.66 14.75 11.5V16" />
      <path d="M14.75 8.25H15.25C17.9 8.25 19 7.15 19 4.5V3.75" />
      <path strokeLinejoin="bevel" d="M17 6 14.75 8.25 17 10.5" />
    </Icon>
  );
}

/** Search toggle: whole word - "ab" over a bracket baseline. */
export function WholeWordIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(7.5, 11, 2.5)} />
      <path d="M10 8.5V13.5" />
      <path d="M14 5.5V13.5" />
      <path d={squircle(16.5, 11, 2.5)} />
      <path d="M3 16.5V19.5H21V16.5" />
    </Icon>
  );
}

/** Terminal layouts: four boxy tiles (k=0.92) - the pane-layout glyph,
 *  deliberately squarer than SuiteIcon's round launcher dots. */
export function LayoutGridIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(6.5, 6.5, 3.5, 0.92) +
          squircle(17.5, 6.5, 3.5, 0.92) +
          squircle(6.5, 17.5, 3.5, 0.92) +
          squircle(17.5, 17.5, 3.5, 0.92)
        }
      />
    </Icon>
  );
}

/** Clear terminal: tilted eraser block with a split line. */
export function EraserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21 21H8.25C7.7 21 7.2 20.8 6.8 20.4L3.35 16.95C2.55 16.15 2.55 15 3.35 14.2L13.3 4.25C14.1 3.45 15.25 3.45 16.05 4.25L20.75 8.95C21.55 9.75 21.55 10.9 20.75 11.7L11.5 20.95" />
      <path d="M5.6 11.95 13.05 19.4" />
    </Icon>
  );
}

export function PanelRightCloseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M14.5 4V20" />
      <path strokeLinejoin="bevel" d="M8 9.5 10.5 12 8 14.5" />
    </Icon>
  );
}

/** Split panes: the window tile with a center divider. */
export function ColumnsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M12 4V20" />
    </Icon>
  );
}

export function RowsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 12H20.5" />
    </Icon>
  );
}

/** Image: landscape frame, squircle sun, beveled mountains. */
export function ImageIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d={squircle(8.5, 9, 1.6)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M3.5 16.5 8.75 11.25 12.5 15 15.5 12 20.5 17" />
    </Icon>
  );
}

export function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M15 6 9 12 15 18" />
    </Icon>
  );
}

/** Plain file: the empty portrait tile. */
export function FileIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
    </Icon>
  );
}

/** Waypoints: node triangle with connectors. */
export function WaypointsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(12, 4.75, 2.5) +
          squircle(4.75, 19.25, 2.5) +
          squircle(19.25, 19.25, 2.5)
        }
      />
      <path d="M10.55 6.85 6.2 17.15M13.45 6.85 17.8 17.15" />
    </Icon>
  );
}

/** Undo: sweep back into a left-pointing beveled head. */
export function UndoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 9.25H14.25C17.3 9.25 19.75 11.5 19.75 14.5C19.75 17.5 17.3 19.75 14.25 19.75H11" />
      <path strokeLinejoin="bevel" d="M8.75 4.5 4 9.25 8.75 14" />
    </Icon>
  );
}

/** Checked tile: the boxy squircle with a check. */
export function CheckSquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M8.25 12.25 10.75 14.75 15.75 9.75" />
    </Icon>
  );
}

/** Status ring with a filled center dot. */
export function CircleDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d={squircle(12, 12, 2.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Status ring with a question mark. */
export function CircleHelpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M9.9 9C9.9 7.6 10.85 6.65 12 6.65C13.15 6.65 14.1 7.5 14.1 8.65C14.1 10.5 12 10.5 12 12.25" />
      <path d={squircle(12, 15.75, 1.25)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Shield with a bang - the risky-action marker. */
export function ShieldAlertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M12 8.5V12.75" />
      <path d={squircle(12, 15.75, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** No results: the search lens with an x inside. */
export function SearchXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 6)} />
      <path d="M15.6 15.6 20.75 20.75" />
      <path d="M9 9 13 13M13 9 9 13" />
    </Icon>
  );
}

/** App window: tile with a title bar and window dots. */
export function AppWindowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.5H20.5" />
      <path d="M6.5 6.75H8M10 6.75H11.5" />
    </Icon>
  );
}

/** Usage gauge: open dial arc, needle, hub. */
export function GaugeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.65 18.35A9 9 0 1 1 18.35 18.35" />
      <path d="M12 13 15.75 9.25" />
      <path d={squircle(12, 13, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 12H20.75" />
      <path strokeLinejoin="bevel" d="M14.25 5.75 20.5 12 14.25 18.25" />
    </Icon>
  );
}

/** Picture-in-picture: open host window, docked mini tile. */
export function PipIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 9V6C20.5 4.16 20.34 4 18.5 4H5.5C3.66 4 3.5 4.16 3.5 6V16C3.5 17.84 3.66 18 5.5 18H8.5" />
      <path d="M13.5 13H19C20.38 13 20.5 13.12 20.5 14.5V18.5C20.5 19.88 20.38 20 19 20H13.5C12.12 20 12 19.88 12 18.5V14.5C12 13.12 12.12 13 13.5 13Z" />
    </Icon>
  );
}

/** Preset bookmark: flag with a notched tail. */
export function BookmarkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6.5 21V5C6.5 3.16 6.66 3 8.5 3H15.5C17.34 3 17.5 3.16 17.5 5V21L12 16.75Z"
      />
    </Icon>
  );
}

/** Dock-to-edge arrows: arrow into a terminal line. */
export function ArrowLeftToLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 4.75V19.25" />
      <path d="M7.75 12H21" />
      <path strokeLinejoin="bevel" d="M12.5 7.25 7.75 12 12.5 16.75" />
    </Icon>
  );
}

export function ArrowRightToLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 4.75V19.25" />
      <path d="M3 12H16.25" />
      <path strokeLinejoin="bevel" d="M11.5 7.25 16.25 12 11.5 16.75" />
    </Icon>
  );
}

export function ArrowUpToLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.75 3.5H19.25" />
      <path d="M12 21V7.75" />
      <path strokeLinejoin="bevel" d="M7.25 12.5 12 7.75 16.75 12.5" />
    </Icon>
  );
}

/** Open-elsewhere: corner bracket with the outbound diagonal. */
export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 6.5H17.5V15.5" />
      <path d="M17.5 6.5 6.5 17.5" />
    </Icon>
  );
}

/** New plan/thread: the chat bubble with a plus. */
export function MessageSquarePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M12 7.5V14M8.75 10.75H15.25" />
    </Icon>
  );
}

/** Local install: hard drive - sloped shoulders, split line, LED dots. */
export function HardDriveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 12 5.6 5.9C5.93 5.2 6.63 4.75 7.4 4.75H16.6C17.37 4.75 18.07 5.2 18.4 5.9L21.25 12V17.25C21.25 19.09 21.09 19.25 19.25 19.25H4.75C2.91 19.25 2.75 19.09 2.75 17.25Z" />
      <path d="M2.75 12H21.25" />
      <path
        d={squircle(6, 15.6, 1.1) + squircle(10, 15.6, 1.1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Phone: narrow portrait tile with a home bar. */
export function SmartphoneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 2.5H15.5C17.34 2.5 17.5 2.66 17.5 4.5V19.5C17.5 21.34 17.34 21.5 15.5 21.5H8.5C6.66 21.5 6.5 21.34 6.5 19.5V4.5C6.5 2.66 6.66 2.5 8.5 2.5Z" />
      <path d="M10.5 18.25H13.5" />
    </Icon>
  );
}

/** Randomize: a die showing five. */
export function DiceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path
        d={
          squircle(8.25, 8.25, 1.2) +
          squircle(15.75, 8.25, 1.2) +
          squircle(12, 12, 1.2) +
          squircle(8.25, 15.75, 1.2) +
          squircle(15.75, 15.75, 1.2)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Add image: the frame opened at top-right for a plus. */
export function ImagePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 4.5H5.5C3.66 4.5 3.5 4.66 3.5 6.5V17.5C3.5 19.34 3.66 19.5 5.5 19.5H18.5C20.34 19.5 20.5 19.34 20.5 17.5V11" />
      <path d="M18.75 2.25V7.75M16 5H21.5" />
      <path d={squircle(8.5, 9, 1.6)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M3.5 16.5 8.75 11.25 12.5 15 15.5 12 20.5 17" />
    </Icon>
  );
}

/** New branch: BranchIcon with a plus where the fork tip node was. */
export function BranchPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 18, 3)} />
      <path d="M6 3V15" />
      <path d="M18 9C18 15.3 15.3 18 9 18" />
      <path d="M18 2.75V9.25M14.75 6H21.25" />
    </Icon>
  );
}

/** Low effort: leaf blade with a sweeping vein. */
export function LeafIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 3.5C21.3 5.5 21.5 7.5 21.5 9.5C21.5 15.5 17 20.5 11 20.5C7.5 20.5 4.75 18.25 4.75 14.75C4.75 9.25 10 5.5 20.5 3.5Z" />
      <path d="M3 21C5.5 15.5 9.5 11.5 15 8.75" />
    </Icon>
  );
}

/** High effort: flame with an inner-curl left edge. */
export function FlameIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C13 5.25 14.75 7.25 16.5 8.75C18.4 10.35 19.25 12.15 19.25 14.25C19.25 18.25 16 21.25 12 21.25C8 21.25 4.75 18.25 4.75 14.25C4.75 13 5.15 11.9 5.75 11C6.25 12.35 7.35 13.25 8.75 13.25C10.15 13.25 11.25 12.1 11.25 10.75C11.25 9.9 10.9 9.35 10.55 8.65C9.8 7.15 10.15 5.4 12 2.75Z" />
    </Icon>
  );
}

/** Max effort: atom - crossed orbits around a filled nucleus. */
export function AtomIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <ellipse cx={12} cy={12} rx={10} ry={4.4} transform="rotate(45 12 12)" />
      <ellipse cx={12} cy={12} rx={10} ry={4.4} transform="rotate(-45 12 12)" />
      <path d={squircle(12, 12, 1.5)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Send: beveled paper plane with fold line. */
export function SendIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M21.25 2.75 3.5 9.25 10.75 13.25 14.75 20.5 21.25 2.75Z"
      />
      <path d="M21.25 2.75 10.75 13.25" />
    </Icon>
  );
}

/** Light theme: squircle sun with detached rays. */
export function SunIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 4.5)} />
      <path d="M12 2.5V5M12 19V21.5M2.5 12H5M19 12H21.5M5.28 5.28 7.05 7.05M16.95 16.95 18.72 18.72M5.28 18.72 7.05 16.95M16.95 7.05 18.72 5.28" />
    </Icon>
  );
}

/** Dark theme: crescent moon. */
export function MoonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.5 2.75A6.9 6.9 0 0 0 21.25 11.5A9.1 9.1 0 1 1 12.5 2.75Z" />
    </Icon>
  );
}

/** Support/tip: coffee cup with steam. */
export function CoffeeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 9.5H17.5V15C17.5 18.04 15.04 20.5 12 20.5H9.5C6.46 20.5 4 18.04 4 15Z" />
      <path d="M17.5 10.5H18.75C20.27 10.5 21.5 11.73 21.5 13.25C21.5 14.77 20.27 16 18.75 16H17.5" />
      <path d="M8 2.5V5.5M13.5 2.5V5.5" />
    </Icon>
  );
}

/** Sponsor: heart. */
export function HeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C6.5 16.5 3 13.25 3 9.5C3 6.75 5.1 4.75 7.65 4.75C9.4 4.75 11 5.75 12 7.25C13 5.75 14.6 4.75 16.35 4.75C18.9 4.75 21 6.75 21 9.5C21 13.25 17.5 16.5 12 20.5Z" />
    </Icon>
  );
}

/** Zoom: the search lens with a plus / minus inside. */
export function ZoomInIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 6)} />
      <path d="M15.6 15.6 20.75 20.75" />
      <path d="M11 8.5V13.5M8.5 11H13.5" />
    </Icon>
  );
}

export function ZoomOutIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 6)} />
      <path d="M15.6 15.6 20.75 20.75" />
      <path d="M8.5 11H13.5" />
    </Icon>
  );
}

/** Share: three mini suite tiles joined by connectors - the node-graph
 *  share glyph rebuilt from squircles (the box-and-arrow share shape is
 *  already PushIcon's). */
export function ShareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={squircle(18, 5, 3) + squircle(6, 12, 3) + squircle(18, 19, 3)}
      />
      <path d="m8.59 13.51 6.83 3.98m0-10.98L8.59 10.49" />
    </Icon>
  );
}

/* ------------------------------------------------------------------ */
/* Common-set additions: everyday glyphs the suite app never needed    */
/* but any consumer of the package will (media, comms, charts, brand). */

/** The Noml dinosaur - the suite's pixel-art baby rex, sampled 1:1 from
 *  the master logo's native 36-pixel grid (0.7 units per pixel on the 24
 *  grid), filled so the silhouette survives small sizes. Keeps the real
 *  logo's eye highlight, nostril, front arm, tail spikes and leg stance.
 *  Faces left, per the brand rule. */
export function DinoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        fill="currentColor"
        stroke="none"
        d={
          "M6.4 2.2h4.2v0.7h-4.2ZM5.7 2.9h5.6v0.7h-5.6ZM4.3 3.6h8.4v0.7h-8.4Z" +
          "M2.2 4.3h10.5v0.7h-10.5ZM1.5 5h11.9v0.7h-11.9ZM1.5 5.7h7v0.7h-7Z" +
          "M9.9 5.7h3.5v1.4h-3.5ZM1.5 6.4h6.3v1.4h-6.3ZM9.9 7.1h4.9v0.7h-4.9Z" +
          "M1.5 7.8h1.4v0.7h-1.4ZM3.6 7.8h4.9v0.7h-4.9ZM9.2 7.8h6.3v0.7h-6.3Z" +
          "M1.5 8.5h14v0.7h-14ZM1.5 9.2h13.3v0.7h-13.3ZM2.2 9.9h11.2v0.7h-11.2Z" +
          "M2.9 10.6h13.3v0.7h-13.3ZM7.8 11.3h8.4v0.7h-8.4ZM7.8 12h7.7v0.7h-7.7Z" +
          "M6.4 12.7h9.8v0.7h-9.8ZM16.9 12.7h0.7v0.7h-0.7ZM5.7 13.4h11.9v0.7h-11.9Z" +
          "M6.4 14.1h0.7v0.7h-0.7ZM8.5 14.1h10.5v0.7h-10.5ZM7.8 14.8h11.2v1.4h-11.2Z" +
          "M21.8 14.8h0.7v0.7h-0.7ZM20.4 15.5h2.1v0.7h-2.1ZM7.8 16.2h14v1.4h-14Z" +
          "M8.5 17.6h11.9v0.7h-11.9ZM8.5 18.3h10.5v0.7h-10.5ZM9.2 19h7.7v0.7h-7.7Z" +
          "M9.2 19.7h2.8v0.7h-2.8ZM13.4 19.7h3.5v0.7h-3.5ZM8.5 20.4h2.8v1.4h-2.8Z" +
          "M13.4 20.4h2.8v1.4h-2.8Z"
        }
      />
    </Icon>
  );
}

export function PauseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.75V19.25M15.5 4.75V19.25" />
    </Icon>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 3.25 14.44 9.64 21.27 9.99 15.95 14.28 17.73 20.89 12 16.9 6.27 20.89 8.05 14.28 2.73 9.99 9.56 9.64Z"
      />
    </Icon>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
    </Icon>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
    </Icon>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 6.25H20M4 12H20M4 17.75H20" />
    </Icon>
  );
}

export function EllipsisIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(5.25, 12, 1.5) +
          squircle(12, 12, 1.5) +
          squircle(18.75, 12, 1.5)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function EllipsisVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(12, 5.25, 1.5) +
          squircle(12, 12, 1.5) +
          squircle(12, 18.75, 1.5)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function FilterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M2.75 4.25H21.25L14.25 12.25V20.25L9.75 17.75V12.25Z"
      />
    </Icon>
  );
}

/** LockIcon with the shackle sprung: same body + keyhole, the hoop only
 *  reaches one shoulder. */
export function UnlockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 10.5H17.5C19.34 10.5 19.5 10.66 19.5 12.5V18.5C19.5 20.34 19.34 20.5 17.5 20.5H6.5C4.66 20.5 4.5 20.34 4.5 18.5V12.5C4.5 10.66 4.66 10.5 6.5 10.5Z" />
      <path d="M8 10.5V7.5C8 5.29 9.79 3.5 12 3.5C13.73 3.5 15.2 4.6 15.76 6.13" />
      <path d={squircle(12, 15.5, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CloudIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 19H9A7 7 0 1 1 15.71 10H17.5A4.5 4.5 0 1 1 17.5 19Z" />
    </Icon>
  );
}

export function ServerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V8C20.5 9.84 20.34 10 18.5 10H5.5C3.66 10 3.5 9.84 3.5 8V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M5.5 14H18.5C20.34 14 20.5 14.16 20.5 16V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V16C3.5 14.16 3.66 14 5.5 14Z" />
      <path
        d={squircle(7, 7, 1.2) + squircle(7, 17, 1.2)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function WifiIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 9.5C8 4.5 16 4.5 21.25 9.5M6 13.25C9.5 10.25 14.5 10.25 18 13.25M9.25 16.75C11 15.5 13 15.5 14.75 16.75" />
      <path d={squircle(12, 19.75, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function WifiOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 13.25C7.6 11.88 9.5 11.12 11.42 10.96M14.9 11.55C16.03 11.94 17.09 12.51 18 13.25M9.25 16.75C11 15.5 13 15.5 14.75 16.75M2.75 9.5C4.1 8.21 5.65 7.26 7.28 6.65M11 5.79C14.68 5.52 18.45 6.75 21.25 9.5" />
      <path d={squircle(12, 19.75, 1.4)} fill="currentColor" stroke="none" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

export function MicIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C13.8 2.75 15.25 4.2 15.25 6V11.5C15.25 13.3 13.8 14.75 12 14.75C10.2 14.75 8.75 13.3 8.75 11.5V6C8.75 4.2 10.2 2.75 12 2.75Z" />
      <path d="M5.5 11.5C5.5 15.09 8.41 18 12 18C15.59 18 18.5 15.09 18.5 11.5" />
      <path d="M12 18V21.25" />
    </Icon>
  );
}

export function MicOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.25 9.75V6C15.25 4.2 13.8 2.75 12 2.75C10.66 2.75 9.51 3.55 9.01 4.7M8.75 8.75V11.5C8.75 13.3 10.2 14.75 12 14.75C12.89 14.75 13.7 14.39 14.29 13.81" />
      <path d="M5.5 11.5C5.5 15.09 8.41 18 12 18C13.68 18 15.21 17.36 16.36 16.31M18.06 13.87C18.34 13.13 18.5 12.33 18.5 11.5" />
      <path d="M12 18V21.25" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

export function VolumeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M10.75 4.75V19.25L6.5 15.5H4.5C3.58 15.5 3.5 15.42 3.5 14.5V9.5C3.5 8.58 3.58 8.5 4.5 8.5H6.5Z"
      />
      <path d="M14.5 9.25C15.9 10.75 15.9 13.25 14.5 14.75M17.5 6.5C20.3 9.6 20.3 14.4 17.5 17.5" />
    </Icon>
  );
}

export function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M10.75 4.75V19.25L6.5 15.5H4.5C3.58 15.5 3.5 15.42 3.5 14.5V9.5C3.5 8.58 3.58 8.5 4.5 8.5H6.5Z"
      />
      <path d="M15.75 9.75 20.25 14.25M20.25 9.75 15.75 14.25" />
    </Icon>
  );
}

export function CameraIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M9.5 5.5 10.5 3.5H13.5L14.5 5.5H18.5C20.34 5.5 20.5 5.66 20.5 7.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V7.5C3.5 5.66 3.66 5.5 5.5 5.5Z"
      />
      <path d={squircle(12, 12.5, 3.25)} />
    </Icon>
  );
}

export function VideoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 6.5H14.5C16.34 6.5 16.5 6.66 16.5 8.5V15.5C16.5 17.34 16.34 17.5 14.5 17.5H5.5C3.66 17.5 3.5 17.34 3.5 15.5V8.5C3.5 6.66 3.66 6.5 5.5 6.5Z" />
      <path strokeLinejoin="bevel" d="M16.5 13.25 20.5 15.5V8.5L16.5 10.75" />
    </Icon>
  );
}

/** Three vertical rails, each broken by a squircle knob. */
export function SlidersIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3V11.5M5.5 16.5V21M12 3V4.75M12 9.75V21M18.5 3V13.5M18.5 18.5V21" />
      <path
        d={squircle(5.5, 14, 2) + squircle(12, 7.25, 2) + squircle(18.5, 16, 2)}
      />
    </Icon>
  );
}

export function ListIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 6.5H20.5M8.5 12H20.5M8.5 17.5H20.5" />
      <path
        d={
          squircle(4.5, 6.5, 1.2) +
          squircle(4.5, 12, 1.2) +
          squircle(4.5, 17.5, 1.2)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Columns rise straight from the axis; the axis elbow carries the same
 *  squircle corner as the panel tiles. Bars are stroke 3, like GearIcon's
 *  teeth, so they read as solid columns rather than thin ticks. */
export function ChartBarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={3} d="M9.25 20.5V13.5M14 20.5V7.5M18.75 20.5V16" />
    </Icon>
  );
}

export function BookOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5.5C10 4 7.5 3.5 4.5 3.5C3.58 3.5 3.5 3.58 3.5 4.5V17.5C3.5 18.42 3.58 18.5 4.5 18.5C7.5 18.5 10 19 12 20.5C14 19 16.5 18.5 19.5 18.5C20.42 18.5 20.5 18.42 20.5 17.5V4.5C20.5 3.58 20.42 3.5 19.5 3.5C16.5 3.5 14 4 12 5.5Z" />
      <path d="M12 5.5V20.5" />
    </Icon>
  );
}

/** Straight-cut pennant on a pole - a wavy banner clashes with the
 *  geometric DNA, so the fly end gets a beveled swallow-tail notch. */
export function FlagIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.25 2.75V21.25" />
      <path
        strokeLinejoin="bevel"
        d="M5.25 4.25H19.75L16.75 9 19.75 13.75H5.25"
      />
    </Icon>
  );
}

export function LogOutIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.5 3.5H6.5C4.66 3.5 4.5 3.66 4.5 5.5V18.5C4.5 20.34 4.66 20.5 6.5 20.5H10.5" />
      <path d="M9.5 12H20.25" />
      <path strokeLinejoin="bevel" d="M16.5 8.25 20.25 12 16.5 15.75" />
    </Icon>
  );
}

export function PowerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V11.25" />
      <path d="M6.7 7.7A7.5 7.5 0 1 0 17.3 7.7" />
    </Icon>
  );
}

/* ---- navigation ---- */

export function ArrowUpLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.5 6.5H6.5V15.5" />
      <path d="M6.5 6.5 17.5 17.5" />
    </Icon>
  );
}

export function ArrowDownLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 8.5V17.5H15.5" />
      <path d="M17.5 6.5 6.5 17.5" />
    </Icon>
  );
}

export function ArrowDownRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 8.5V17.5H8.5" />
      <path d="M6.5 6.5 17.5 17.5" />
    </Icon>
  );
}

export function ChevronsLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M17.5 6 11.5 12 17.5 18" />
      <path strokeLinejoin="bevel" d="M12.5 6 6.5 12 12.5 18" />
    </Icon>
  );
}

export function ChevronsRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.5 6 12.5 12 6.5 18" />
      <path strokeLinejoin="bevel" d="M11.5 6 17.5 12 11.5 18" />
    </Icon>
  );
}

export function ChevronsUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6 12.5 12 6.5 18 12.5" />
      <path strokeLinejoin="bevel" d="M6 17.5 12 11.5 18 17.5" />
    </Icon>
  );
}

export function ChevronsDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6 6.5 12 12.5 18 6.5" />
      <path strokeLinejoin="bevel" d="M6 11.5 12 17.5 18 11.5" />
    </Icon>
  );
}

/** Horizontal sibling of SyncIcon's vertical swap arrows. */
export function ArrowLeftRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 7.5H4.5M4 16.5H19.5" />
      <path
        strokeLinejoin="bevel"
        d="M7.75 4.25 4.5 7.5 7.75 10.75M16.25 13.25 19.5 16.5 16.25 19.75"
      />
    </Icon>
  );
}

export function MoveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V21.25M2.75 12H21.25" />
      <path
        strokeLinejoin="bevel"
        d="M9.5 5.25 12 2.75 14.5 5.25M9.5 18.75 12 21.25 14.5 18.75M5.25 9.5 2.75 12 5.25 14.5M18.75 9.5 21.25 12 18.75 14.5"
      />
    </Icon>
  );
}

export function ShuffleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 17.5H4.4C5.7 17.5 6.9 16.87 7.66 15.8L13.34 8.2C14.1 7.13 15.3 6.5 16.6 6.5H21.25" />
      <path d="M2.75 6.5H4.4C5.7 6.5 6.9 7.13 7.66 8.2L8.6 9.46" />
      <path d="M12.4 14.54 13.34 15.8C14.1 16.87 15.3 17.5 16.6 17.5H21.25" />
      <path
        strokeLinejoin="bevel"
        d="M18 3.25 21.25 6.5 18 9.75M18 14.25 21.25 17.5 18 20.75"
      />
    </Icon>
  );
}

export function RepeatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 11V9C3.5 7.16 3.66 7 5.5 7H20.5" />
      <path strokeLinejoin="bevel" d="M17.25 3.75 20.5 7 17.25 10.25" />
      <path d="M20.5 13V15C20.5 16.84 20.34 17 18.5 17H3.5" />
      <path strokeLinejoin="bevel" d="M6.75 13.75 3.5 17 6.75 20.25" />
    </Icon>
  );
}

export function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.75 17.5 9 11.25 13 15.25 21.25 7" />
      <path d="M15.5 7H21.25V12.75" />
    </Icon>
  );
}

export function TrendingDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.75 6.5 9 12.75 13 8.75 21.25 17" />
      <path d="M15.5 17H21.25V11.25" />
    </Icon>
  );
}

/** Mirror of UndoIcon. */
export function RedoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 9.25H9.75C6.7 9.25 4.25 11.5 4.25 14.5C4.25 17.5 6.7 19.75 9.75 19.75H13" />
      <path strokeLinejoin="bevel" d="M15.25 4.5 20 9.25 15.25 14" />
    </Icon>
  );
}

/* ---- media ---- */

export function SkipBackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.75 4.75V19.25" />
      <path d="M16.6 4.86 7.22 10.5C6.1 11.17 6.1 12.83 7.22 13.5L16.6 19.14C17.75 19.83 19.25 19 19.25 17.64V6.36C19.25 5 17.75 4.17 16.6 4.86Z" />
    </Icon>
  );
}

export function SkipForwardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.25 4.75V19.25" />
      <path d="M7.4 4.86 16.78 10.5C17.9 11.17 17.9 12.83 16.78 13.5L7.4 19.14C6.25 19.83 4.75 19 4.75 17.64V6.36C4.75 5 6.25 4.17 7.4 4.86Z" />
    </Icon>
  );
}

export function FastForwardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M13 5.5 21 12 13 18.5Z" />
      <path strokeLinejoin="bevel" d="M3 5.5 11 12 3 18.5Z" />
    </Icon>
  );
}

export function RewindIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M11 5.5 3 12 11 18.5Z" />
      <path strokeLinejoin="bevel" d="M21 5.5 13 12 21 18.5Z" />
    </Icon>
  );
}

export function MusicIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 18.2V5.4L21 3V16.2" />
      <path d={squircle(6.4, 18.2, 2.6) + squircle(18.4, 16.2, 2.6)} />
    </Icon>
  );
}

export function FilmIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M7.5 3.5V20.5M16.5 3.5V20.5" />
      <path d="M3.5 8H7.5M3.5 12H7.5M3.5 16H7.5M16.5 8H20.5M16.5 12H20.5M16.5 16H20.5" />
    </Icon>
  );
}

export function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 18V12A8.5 8.5 0 0 1 20.5 12V18" />
      <path d="M6.5 13.5H5C3.66 13.5 3.5 13.66 3.5 15.5V18C3.5 19.84 3.66 20 5 20H6.5Z" />
      <path d="M17.5 13.5H19C20.34 13.5 20.5 13.66 20.5 15.5V18C20.5 19.84 20.34 20 19 20H17.5Z" />
    </Icon>
  );
}

export function CastIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 8.5V6C3.5 4.16 3.66 4 5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H13" />
      <path d="M3.5 12.25C7.8 12.25 11.25 15.7 11.25 20M3.5 16.25C5.57 16.25 7.25 17.93 7.25 20" />
      <path d={squircle(4.4, 19.1, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/* ---- communication ---- */

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={PHONE_OUTLINE} />
    </Icon>
  );
}

export function InboxIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path
        strokeLinejoin="bevel"
        d="M3.5 13H8.25L10.25 15.75H13.75L15.75 13H20.5"
      />
    </Icon>
  );
}

export function BellOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3C8.7 3 6.25 5.45 6.25 8.75C6.25 12.9 5.1 14.35 4 15.5C3.4 16.13 3.84 17 4.75 17H19.25C20.16 17 20.6 16.13 20 15.5C18.9 14.35 17.75 12.9 17.75 8.75C17.75 5.45 15.3 3 12 3Z" />
      <path d="M10.4 20.25C10.75 20.9 11.35 21.25 12 21.25C12.65 21.25 13.25 20.9 13.6 20.25" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

export function RssIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5C12.8 4.5 19.5 11.2 19.5 19.5M4.5 11.25C9.06 11.25 12.75 14.94 12.75 19.5" />
      <path d={squircle(5.6, 18.4, 1.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function LogInIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13.5 3.5H17.5C19.34 3.5 19.5 3.66 19.5 5.5V18.5C19.5 20.34 19.34 20.5 17.5 20.5H13.5" />
      <path d="M3.75 12H14.5" />
      <path strokeLinejoin="bevel" d="M10.75 8.25 14.5 12 10.75 15.75" />
    </Icon>
  );
}

/* ---- data ---- */

export function TableIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.25H20.5M3.5 14.75H20.5M12 4V20" />
    </Icon>
  );
}

/** Same axis as ChartBarIcon, a beveled trend line instead of columns. */
export function ChartLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeLinejoin="bevel" d="M7.5 15.5 11.5 10.5 14.5 13 19.5 6.5" />
    </Icon>
  );
}

export function ChartPieIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M12 2.75V12H21.25" />
    </Icon>
  );
}

export function BookIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
    </Icon>
  );
}

/* ---- commerce & objects ---- */

export function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 3.5H4.75L7 14.9C7.2 15.85 7.7 16.25 8.7 16.25H17.8C18.75 16.25 19.25 15.9 19.45 14.95L21.25 7H5.45" />
      <path
        d={squircle(9, 20, 1.6) + squircle(17.5, 20, 1.6)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function CreditCardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path d="M3.5 9.5H20.5" />
    </Icon>
  );
}

export function DollarSignIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V21.5" />
      <path d="M17 5.5H9.75C7.96 5.5 6.5 6.96 6.5 8.75C6.5 10.54 7.96 12 9.75 12H14.25C16.04 12 17.5 13.46 17.5 15.25C17.5 17.04 16.04 18.5 14.25 18.5H6.5" />
    </Icon>
  );
}

export function PercentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 19 19 5" />
      <path d={squircle(6.75, 6.75, 2.4) + squircle(17.25, 17.25, 2.4)} />
    </Icon>
  );
}

export function GiftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 7.5H19.5C20.42 7.5 20.5 7.58 20.5 8.5V10.5C20.5 11.42 20.42 11.5 19.5 11.5H4.5C3.58 11.5 3.5 11.42 3.5 10.5V8.5C3.5 7.58 3.58 7.5 4.5 7.5Z" />
      <path d="M5 11.5V19C5 20.84 5.16 21 7 21H17C18.84 21 19 20.84 19 19V11.5" />
      <path d="M12 7.5V21" />
      <path d="M12 7.5C10 7.5 7.75 6.9 7.75 5.25C7.75 4 8.75 3 10 3C11.65 3 12 5.5 12 7.5ZM12 7.5C14 7.5 16.25 6.9 16.25 5.25C16.25 4 15.25 3 14 3C12.35 3 12 5.5 12 7.5Z" />
    </Icon>
  );
}

export function AwardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 8.5, 5.75)} />
      <path
        strokeLinejoin="bevel"
        d="M8.75 13.1 6.75 21.25 12 18.5 17.25 21.25 15.25 13.1"
      />
    </Icon>
  );
}

export function TrophyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 4.75H4.5C3.58 4.75 3.5 4.83 3.5 5.75C3.5 8 4.9 9.65 7 10.15M17 4.75H19.5C20.42 4.75 20.5 4.83 20.5 5.75C20.5 8 19.1 9.65 17 10.15" />
      <path d="M7 3.25H17V9C17 12.31 14.76 14.75 12 14.75C9.24 14.75 7 12.31 7 9Z" />
      <path d="M12 14.75V17.5" />
      <path d="M9.5 20.75C9.5 19 10.6 17.5 12 17.5C13.4 17.5 14.5 19 14.5 20.75" />
      <path d="M7.25 20.75H16.75" />
    </Icon>
  );
}

export function CrownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M3.75 6.5 8 10.75 12 4.5 16 10.75 20.25 6.5 18.75 18.5H5.25Z"
      />
    </Icon>
  );
}

export function WalletIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.75 7.5V4H5.75C4.5 4 3.5 5 3.5 6.25" />
      <path d="M3.5 6.25V18C3.5 19.84 3.66 20 5.5 20H18.5C20.34 20 20.5 19.84 20.5 18V9.5C20.5 7.66 20.34 7.5 18.5 7.5H3.5" />
      <path d={squircle(17, 13.75, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CalculatorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 2.5H16.5C19.26 2.5 19.5 2.74 19.5 5.5V18.5C19.5 21.26 19.26 21.5 16.5 21.5H7.5C4.74 21.5 4.5 21.26 4.5 18.5V5.5C4.5 2.74 4.74 2.5 7.5 2.5Z" />
      <path d="M8 6.5H16" />
      <path
        d={
          squircle(8.4, 11, 1.05) +
          squircle(12, 11, 1.05) +
          squircle(15.6, 11, 1.05) +
          squircle(8.4, 14.5, 1.05) +
          squircle(12, 14.5, 1.05) +
          squircle(15.6, 14.5, 1.05) +
          squircle(8.4, 18, 1.05) +
          squircle(12, 18, 1.05) +
          squircle(15.6, 18, 1.05)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 7V5C9 3.62 9.12 3.5 10.5 3.5H13.5C14.88 3.5 15 3.62 15 5V7" />
      <path d="M5.5 7H18.5C20.34 7 20.5 7.16 20.5 9V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V9C3.5 7.16 3.66 7 5.5 7Z" />
      <path d="M3.5 12.5H20.5" />
    </Icon>
  );
}

export function BuildingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.5H17.5C19.34 2.5 19.5 2.66 19.5 4.5V21.5H4.5V4.5C4.5 2.66 4.66 2.5 6.5 2.5Z" />
      <path d="M9 6.5H10.5M13.5 6.5H15M9 10.5H10.5M13.5 10.5H15M9 14.5H10.5M13.5 14.5H15" />
      <path d="M10.5 21.5V18C10.5 17.08 10.58 17 11.5 17H12.5C13.42 17 13.5 17.08 13.5 18V21.5" />
    </Icon>
  );
}

export function TruckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.5 17.5V6C14.5 4.16 14.34 4 12.5 4H4.75C2.91 4 2.75 4.16 2.75 6V16.5C2.75 17.34 2.83 17.5 3.75 17.5H4.9" />
      <path d="M9.1 17.5H14.5" />
      <path d="M14.5 8.5H17.3C17.94 8.5 18.32 8.7 18.7 9.2L20.9 12.1C21.16 12.44 21.25 12.74 21.25 13.2V16.5C21.25 17.34 21.09 17.5 20.25 17.5H19.2" />
      <path d={squircle(7, 17.5, 2.1) + squircle(17.05, 17.5, 2.1)} />
    </Icon>
  );
}

export function PlaneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M17.8 19.2 16 11 19.5 7.5C21 6 21.5 4 21 3C20 2.5 18 3 16.5 4.5L13 8 4.8 6.2C4.3 6.1 3.9 6.3 3.7 6.7L3.4 7.2C3.2 7.7 3.3 8.2 3.7 8.5L9 12 7 15H4L3 16 6 18 8 21 9 20V17L12 15 15.5 20.3C15.8 20.7 16.3 20.8 16.8 20.6L17.3 20.4C17.7 20.1 17.9 19.7 17.8 19.2Z"
      />
    </Icon>
  );
}

/* ---- devices ---- */

export function PrinterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7V3.75C7 2.83 7.08 2.75 8 2.75H16C16.92 2.75 17 2.83 17 3.75V7" />
      <path d="M7 17.5H4.5C3.58 17.5 3.5 17.42 3.5 16.5V9C3.5 7.5 4 7 5.5 7H18.5C20 7 20.5 7.5 20.5 9V16.5C20.5 17.42 20.42 17.5 19.5 17.5H17" />
      <path d="M8 13.5H16C16.92 13.5 17 13.58 17 14.5V20.25C17 21.17 16.92 21.25 16 21.25H8C7.08 21.25 7 21.17 7 20.25V14.5C7 13.58 7.08 13.5 8 13.5Z" />
      <path d={squircle(17.25, 10.25, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function BatteryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8H17.5C19.34 8 19.5 8.16 19.5 10V14C19.5 15.84 19.34 16 17.5 16H4.5C2.66 16 2.5 15.84 2.5 14V10C2.5 8.16 2.66 8 4.5 8Z" />
      <path d="M21.75 10.5V13.5" />
    </Icon>
  );
}

export function BatteryChargingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 8H4.5C2.66 8 2.5 8.16 2.5 10V14C2.5 15.84 2.66 16 4.5 16H7" />
      <path d="M13.5 16H17.5C19.34 16 19.5 15.84 19.5 14V10C19.5 8.16 19.34 8 17.5 8H15" />
      <path strokeLinejoin="bevel" d="M12.5 6.5 9 12H13L9.5 17.5" />
      <path d="M21.75 10.5V13.5" />
    </Icon>
  );
}

export function BluetoothIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.5 7 17.5 16.5 12 21V3L17.5 7.5 6.5 17" />
    </Icon>
  );
}

export function QrCodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 3.5H8C8.92 3.5 9 3.58 9 4.5V7.5C9 8.42 8.92 8.5 8 8.5H5C4.08 8.5 4 8.42 4 7.5V4.5C4 3.58 4.08 3.5 5 3.5Z" />
      <path d="M16 3.5H19C19.92 3.5 20 3.58 20 4.5V7.5C20 8.42 19.92 8.5 19 8.5H16C15.08 8.5 15 8.42 15 7.5V4.5C15 3.58 15.08 3.5 16 3.5Z" />
      <path d="M5 15.5H8C8.92 15.5 9 15.58 9 16.5V19.5C9 20.42 8.92 20.5 8 20.5H5C4.08 20.5 4 20.42 4 19.5V16.5C4 15.58 4.08 15.5 5 15.5Z" />
      <path d="M12.5 3.5V8M12.5 11.5H15.5V14.5M20 11.5V14.5M12.5 17V20.5M16 20.5H20" />
      <path d="M4 12H9" />
    </Icon>
  );
}

export function FingerprintIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8.5C6 5.5 8.8 3.75 12 3.75C15.2 3.75 18 5.5 19.5 8.5" />
      <path d="M6.75 20.25C6 17.5 5.75 15 5.75 12C5.75 8.8 8.5 6.75 12 6.75C15.5 6.75 18.25 8.8 18.25 12C18.25 13 18.3 14.05 18.4 15" />
      <path d="M12 9.75C13.8 9.75 15.25 11 15.25 12.75C15.25 15 15.5 17.5 16.25 19.5" />
      <path d="M12 12.75C12 15.75 11.4 18.6 10.25 21" />
    </Icon>
  );
}

export function ScanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
    </Icon>
  );
}

export function LaptopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 15.5V6.5C4.5 4.66 4.66 4.5 6.5 4.5H17.5C19.34 4.5 19.5 4.66 19.5 6.5V15.5" />
      <path strokeLinejoin="bevel" d="M4.5 15.5H19.5L21.5 19.5H2.5Z" />
    </Icon>
  );
}

export function GamepadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 6.5H18.5C20.34 6.5 20.5 6.66 20.5 8.5V15.5C20.5 17.34 20.34 17.5 18.5 17.5H5.5C3.66 17.5 3.5 17.34 3.5 15.5V8.5C3.5 6.66 3.66 6.5 5.5 6.5Z" />
      <path d="M6.25 12H10.25M8.25 10V14" />
      <path
        d={squircle(15.25, 13.25, 1.1) + squircle(17.75, 10.75, 1.1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- status & actions ---- */

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
    </Icon>
  );
}

/** SunIcon's rays without the core - the classic spinner, static. */
export function LoaderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V6.5M12 17.5V21.5M2.5 12H6.5M17.5 12H21.5M5.28 5.28 8.11 8.11M15.89 15.89 18.72 18.72M5.28 18.72 8.11 15.89M15.89 8.11 18.72 5.28" />
    </Icon>
  );
}

export function CommandIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 9H15V15H9ZM9 9V6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6C3 7.66 4.34 9 6 9H9ZM15 9V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6C21 7.66 19.66 9 18 9H15ZM15 15V18C15 19.66 16.34 21 18 21C19.66 21 21 19.66 21 18C21 16.34 19.66 15 18 15H15ZM9 15V18C9 19.66 7.66 21 6 21C4.34 21 3 19.66 3 18C3 16.34 4.34 15 6 15H9Z" />
    </Icon>
  );
}

export function CirclePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M12 8V16M8 12H16" />
    </Icon>
  );
}

export function CircleMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M8 12H16" />
    </Icon>
  );
}

/* ---- people & emotion ---- */

export function GhostIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 2.75C7.75 2.75 4.75 5.9 4.75 10.25V21.25L7.17 18.83 9.58 21.25 12 18.83 14.42 21.25 16.83 18.83 19.25 21.25V10.25C19.25 5.9 16.25 2.75 12 2.75Z"
      />
      <path
        d={squircle(9.5, 10.5, 1.2) + squircle(14.5, 10.5, 1.2)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function SmileIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M8.25 14C9 15.75 10.4 16.6 12 16.6C13.6 16.6 15 15.75 15.75 14" />
      <path
        d={squircle(9, 9.25, 1.15) + squircle(15, 9.25, 1.15)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function FrownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M8.25 16.25C9 14.5 10.4 13.65 12 13.65C13.6 13.65 15 14.5 15.75 16.25" />
      <path
        d={squircle(9, 9.25, 1.15) + squircle(15, 9.25, 1.15)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function ThumbsUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M7.5 10.75H3.5V20.75H7.5M7.5 10.75C8.1 10.75 8.5 10.3 8.9 9.6L12.7 3C14.2 3.25 15.15 4.7 14.8 6.2L13.75 10.5H19.3C20.55 10.5 21.25 11.4 20.95 12.6L19.25 19.35C19 20.35 18.4 20.75 17.4 20.75H7.5V10.75Z"
      />
    </Icon>
  );
}

export function ThumbsDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M7.5 13.25H3.5V3.25H7.5M7.5 13.25C8.1 13.25 8.5 13.7 8.9 14.4L12.7 21C14.2 20.75 15.15 19.3 14.8 17.8L13.75 13.5H19.3C20.55 13.5 21.25 12.6 20.95 11.4L19.25 4.65C19 3.65 18.4 3.25 17.4 3.25H7.5V13.25Z"
      />
    </Icon>
  );
}

export function UserPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C13.1 14.6 16.25 16.6 16.25 20.75" />
      <path d="M19 7.5V13.5M16 10.5H22" />
    </Icon>
  );
}

/* ---- weather & nature ---- */

export function CloudRainIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path d="M8.5 18.5V21M12.5 18V20.5M16.5 18.5V21" />
    </Icon>
  );
}

export function SnowflakeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V21.25M3.99 7.38 20.01 16.62M20.01 7.38 3.99 16.62" />
      <path
        strokeLinejoin="bevel"
        d="M9.75 4 12 6.25 14.25 4M9.75 20 12 17.75 14.25 20M17.8 6.05 16.98 9.13 20.05 9.95M20.05 14.05 16.98 14.88 17.8 17.95M3.95 14.05 7.02 14.88 6.2 17.95M6.2 6.05 7.02 9.13 3.95 9.95"
      />
    </Icon>
  );
}

export function DropletIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.9C15.5 7 18 10.3 18 13.8C18 17.8 15.3 20.75 12 20.75C8.7 20.75 6 17.8 6 13.8C6 10.3 8.5 7 12 2.9Z" />
    </Icon>
  );
}

export function ThermometerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 15.1V4.65C10 3.45 10.95 2.5 12.15 2.5C13.35 2.5 14.3 3.45 14.3 4.65V15.1" />
      <path d={squircle(12.15, 17.9, 3.6)} />
      <path d="M12.15 14.5V9" />
      <path d={squircle(12.15, 17.9, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function UmbrellaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75A9.25 9.25 0 0 1 21.25 12H2.75A9.25 9.25 0 0 1 12 2.75Z" />
      <path d="M12 12V19C12 20.24 11 21.25 9.75 21.25C8.5 21.25 7.5 20.24 7.5 19" />
    </Icon>
  );
}

export function WindIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2.75" />
      <path d="M17.5 8A2.5 2.5 0 1 1 19.5 12H2.75" />
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2.75" />
    </Icon>
  );
}

/* ---- time ---- */

export function TimerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 2.5H14" />
      <path d={squircle(12, 14, 7.75)} />
      <path d="M12 14 14.75 11.25" />
    </Icon>
  );
}

export function AlarmClockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7.75)} />
      <path d="M12 10V13.5H14.5" />
      <path d="M5 3 2.75 5.25M19 3 21.25 5.25" />
      <path d="M6.3 19.2 4.75 20.75M17.7 19.2 19.25 20.75" />
    </Icon>
  );
}

export function HourglassIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75H17.5M6.5 21.25H17.5" />
      <path
        strokeLinejoin="bevel"
        d="M8 2.75V6.1C8 7 8.4 7.8 9.1 8.4L12 11 14.9 8.4C15.6 7.8 16 7 16 6.1V2.75"
      />
      <path
        strokeLinejoin="bevel"
        d="M8 21.25V17.9C8 17 8.4 16.2 9.1 15.6L12 13 14.9 15.6C15.6 16.2 16 17 16 17.9V21.25"
      />
    </Icon>
  );
}

/* ---- text editing ---- */

export function BoldIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 4.5H13.25C15.32 4.5 17 6.18 17 8.25C17 10.32 15.32 12 13.25 12H7ZM7 12H14.25C16.32 12 18 13.68 18 15.75C18 17.82 16.32 19.5 14.25 19.5H7Z" />
      <path d="M7 4.5V19.5" />
    </Icon>
  );
}

export function ItalicIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 4.5H18M6 19.5H14M14.5 4.5 9.5 19.5" />
    </Icon>
  );
}

export function UnderlineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 3.5V10.5C6.5 13.54 8.96 16 12 16C15.04 16 17.5 13.54 17.5 10.5V3.5" />
      <path d="M4.5 20.5H19.5" />
    </Icon>
  );
}

export function StrikethroughIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16.5 4.5H9.75C7.68 4.5 6.25 5.9 6.25 7.75C6.25 8.6 6.55 9.3 7.1 9.9" />
      <path d="M14 12C16.2 12 18 13.8 18 16C18 18.2 16.2 20 14 20H6.5" />
      <path d="M4 12H20" />
    </Icon>
  );
}

export function AlignLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.75 5.5H20.25M3.75 12H13.75M3.75 18.5H16.75" />
    </Icon>
  );
}

export function AlignCenterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.75 5.5H20.25M7 12H17M5.5 18.5H18.5" />
    </Icon>
  );
}

export function AlignRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.75 5.5H20.25M10.25 12H20.25M7.25 18.5H20.25" />
    </Icon>
  );
}

export function AlignJustifyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.75 4.5H20.25M3.75 9.5H20.25M3.75 14.5H20.25M3.75 19.5H20.25" />
    </Icon>
  );
}

export function QuoteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 11.5H5.5C4.4 11.5 3.5 10.6 3.5 9.5V7.5C3.5 6.4 4.4 5.5 5.5 5.5H8C9.1 5.5 10 6.4 10 7.5V12.75C10 15.9 8.25 17.9 5.25 18.5" />
      <path d="M20.5 11.5H16C14.9 11.5 14 10.6 14 9.5V7.5C14 6.4 14.9 5.5 16 5.5H18.5C19.6 5.5 20.5 6.4 20.5 7.5V12.75C20.5 15.9 18.75 17.9 15.75 18.5" />
    </Icon>
  );
}

export function TypeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 7V5.5C5 4.58 5.08 4.5 6 4.5H18C18.92 4.5 19 4.58 19 5.5V7" />
      <path d="M12 4.5V19.5" />
      <path d="M9 19.5H15" />
    </Icon>
  );
}

export function ListOrderedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.5 6.5H20.5M10.5 12H20.5M10.5 17.5H20.5" />
      <path d="M4.75 4.5H6V9M4.75 9H7.25" />
      <path d="M4.5 13.75C4.5 13 5.15 12.5 6 12.5C6.85 12.5 7.5 13 7.5 13.75C7.5 15 4.5 15.9 4.5 17H7.5" />
    </Icon>
  );
}

/* ---- basic shapes ---- */

export function TriangleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 3.5 21.25 20.25H2.75Z" />
    </Icon>
  );
}

export function DiamondIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 21.25 12 12 21.25 2.75 12Z" />
    </Icon>
  );
}

export function HexagonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 2.75 20 7.375V16.625L12 21.25 4 16.625V7.375Z"
      />
    </Icon>
  );
}

export function OctagonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8.2 3.5H15.8L20.5 8.2V15.8L15.8 20.5H8.2L3.5 15.8V8.2Z"
      />
    </Icon>
  );
}

export function EqualIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 9.25H18.5M5.5 14.75H18.5" />
    </Icon>
  );
}

export function MilestoneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.25V11M12 5.5V2.75" />
      <path
        strokeLinejoin="bevel"
        d="M5.5 5.5H16L18.75 8.25 16 11H5.5C4.58 11 4.5 10.92 4.5 10V6.5C4.5 5.58 4.58 5.5 5.5 5.5Z"
      />
    </Icon>
  );
}

/* ---- pagination & circles ---- */

export function ChevronFirstIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 5.5V18.5" />
      <path strokeLinejoin="bevel" d="M16.5 6 10.5 12 16.5 18" />
    </Icon>
  );
}

export function ChevronLastIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 5.5V18.5" />
      <path strokeLinejoin="bevel" d="M7.5 6 13.5 12 7.5 18" />
    </Icon>
  );
}

export function CirclePlayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path strokeLinejoin="bevel" d="M10 8.5 15.5 12 10 15.5Z" />
    </Icon>
  );
}

export function CirclePauseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M9.75 8.5V15.5M14.25 8.5V15.5" />
    </Icon>
  );
}

export function CircleUserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d={squircle(12, 9.5, 2.75)} />
      <path d="M5.5 18.6C6.5 15.9 9 14.75 12 14.75C15 14.75 17.5 15.9 18.5 18.6" />
    </Icon>
  );
}

/** Sixteen-sided seal - the verified badge, wavy edge beveled. */
export function BadgeCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path strokeLinejoin="bevel" d="M8.75 12 11 14.25 15.5 9.75" />
    </Icon>
  );
}

export function SquarePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M12 8.5V15.5M8.5 12H15.5" />
    </Icon>
  );
}

export function SquareXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M9 9 15 15M15 9 9 15" />
    </Icon>
  );
}

/* ---- files & folders ---- */

export function FileUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M12 18.25V11.5" />
      <path strokeLinejoin="bevel" d="M9.25 14.25 12 11.5 14.75 14.25" />
    </Icon>
  );
}

export function FileCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path strokeLinejoin="bevel" d="M8.75 15 11 17.25 15.25 13" />
    </Icon>
  );
}

export function FileJsonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M10 11.75C9 11.75 8.75 12.35 8.75 13.25C8.75 14.5 7.75 14.4 7.75 15C7.75 15.6 8.75 15.5 8.75 16.75C8.75 17.65 9 18.25 10 18.25" />
      <path d="M14 11.75C15 11.75 15.25 12.35 15.25 13.25C15.25 14.5 16.25 14.4 16.25 15C16.25 15.6 15.25 15.5 15.25 16.75C15.25 17.65 15 18.25 14 18.25" />
    </Icon>
  );
}

export function FileArchiveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M10 3V4.5M10 7V8.5M10 11V12.5" />
      <path d={squircle(10, 16.5, 1.9)} />
    </Icon>
  );
}

export function FilesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M11 5.5H6.5C4.66 5.5 4.5 5.66 4.5 7.5V19.5C4.5 21.34 4.66 21.5 6.5 21.5H13.5C15.34 21.5 15.5 21.34 15.5 19.5V10ZM11 5.5V8.5C11 9.6 11.4 10 12.5 10H15.5" />
      <path d="M9 2.5H16.5C18.34 2.5 18.5 2.66 18.5 4.5V17" />
    </Icon>
  );
}

export function FolderXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M10.25 11.25 13.75 14.75M13.75 11.25 10.25 14.75" />
    </Icon>
  );
}

/* ---- dev ---- */

export function ContainerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 6H18.5C20.34 6 20.5 6.16 20.5 8V16C20.5 17.84 20.34 18 18.5 18H5.5C3.66 18 3.5 17.84 3.5 16V8C3.5 6.16 3.66 6 5.5 6Z" />
      <path d="M7.5 9V15M12 9V15M16.5 9V15" />
    </Icon>
  );
}

export function BoxesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 3.5H14C14.92 3.5 15 3.58 15 4.5V8.5C15 9.42 14.92 9.5 14 9.5H10C9.08 9.5 9 9.42 9 8.5V4.5C9 3.58 9.08 3.5 10 3.5Z" />
      <path d="M4.5 13.5H8.5C9.42 13.5 9.5 13.58 9.5 14.5V18.5C9.5 19.42 9.42 19.5 8.5 19.5H4.5C3.58 19.5 3.5 19.42 3.5 18.5V14.5C3.5 13.58 3.58 13.5 4.5 13.5Z" />
      <path d="M15.5 13.5H19.5C20.42 13.5 20.5 13.58 20.5 14.5V18.5C20.5 19.42 20.42 19.5 19.5 19.5H15.5C14.58 19.5 14.5 19.42 14.5 18.5V14.5C14.5 13.58 14.58 13.5 15.5 13.5Z" />
    </Icon>
  );
}

export function WebhookIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 16.98H12.01C10.91 16.98 10.06 17.92 9.53 18.88A4 4 0 1 1 2 17C2.01 16.3 2.2 15.6 2.57 15" />
      <path d="M6 17 9.13 11.22C9.66 10.25 9.23 9.04 8.63 8.12A4 4 0 1 1 15.52 4.06" />
      <path d="M12 6 15.13 11.73C15.66 12.7 16.9 13 18 13A4 4 0 0 1 18 21" />
    </Icon>
  );
}

export function BracketsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16.5 3.5H19.5V20.5H16.5M7.5 3.5H4.5V20.5H7.5" />
    </Icon>
  );
}

export function VariableIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 2.75C5.5 5 4.5 8 4.5 12C4.5 16 5.5 19 7.5 21.25M16.5 2.75C18.5 5 19.5 8 19.5 12C19.5 16 18.5 19 16.5 21.25" />
      <path d="M9.25 9.25 14.75 14.75M14.75 9.25 9.25 14.75" />
    </Icon>
  );
}

export function BinaryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 3.5H9C9.92 3.5 10 3.58 10 4.5V8.5C10 9.42 9.92 9.5 9 9.5H7C6.08 9.5 6 9.42 6 8.5V4.5C6 3.58 6.08 3.5 7 3.5Z" />
      <path d="M14.5 4.25H16V9.25M14.5 9.25H17.75" />
      <path d="M15 14.5H17C17.92 14.5 18 14.58 18 15.5V19.5C18 20.42 17.92 20.5 17 20.5H15C14.08 20.5 14 20.42 14 19.5V15.5C14 14.58 14.08 14.5 15 14.5Z" />
      <path d="M6.5 15.25H8V20.25M6.5 20.25H9.75" />
    </Icon>
  );
}

export function NetworkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.5 2.75H13.5C14.42 2.75 14.5 2.83 14.5 3.75V6.75C14.5 7.67 14.42 7.75 13.5 7.75H10.5C9.58 7.75 9.5 7.67 9.5 6.75V3.75C9.5 2.83 9.58 2.75 10.5 2.75Z" />
      <path d="M3.75 16.25H6.75C7.67 16.25 7.75 16.33 7.75 17.25V20.25C7.75 21.17 7.67 21.25 6.75 21.25H3.75C2.83 21.25 2.75 21.17 2.75 20.25V17.25C2.75 16.33 2.83 16.25 3.75 16.25Z" />
      <path d="M17.25 16.25H20.25C21.17 16.25 21.25 16.33 21.25 17.25V20.25C21.25 21.17 21.17 21.25 20.25 21.25H17.25C16.33 21.25 16.25 21.17 16.25 20.25V17.25C16.25 16.33 16.33 16.25 17.25 16.25Z" />
      <path d="M12 7.75V12M5.25 16.25V14C5.25 12.62 5.37 12.5 6.75 12.5H17.25C18.63 12.5 18.75 12.62 18.75 14V16.25" />
    </Icon>
  );
}

/* ---- deco & celebration ---- */

export function SparklesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.5 6.5C11.05 10.05 13.45 12.45 17 13C13.45 13.55 11.05 15.95 10.5 19.5C9.95 15.95 7.55 13.55 4 13C7.55 12.45 9.95 10.05 10.5 6.5Z" />
      <path d="M18.5 3.25V8.25M16 5.75H21" />
      <path d="M18 15.75V19.25M16.25 17.5H19.75" />
    </Icon>
  );
}

export function GemIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7 3.5H17L21.25 9.25 12 20.5 2.75 9.25Z" />
      <path d="M2.75 9.25H21.25" />
      <path strokeLinejoin="bevel" d="M10.75 3.5 8.25 9.25 12 20.5M13.25 3.5 15.75 9.25 12 20.5" />
    </Icon>
  );
}

export function PartyPopperIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.5 10.5 2.75 21.25 13.5 17.5Z" />
      <path d="M11.5 9.25C11.75 6.75 13.25 5.25 15.75 5M14.75 12.5C17 11.75 19.25 12.25 21 13.75" />
      <path
        d={
          squircle(11.25, 3.75, 1.05) +
          squircle(18.75, 8.75, 1.05) +
          squircle(20.25, 3.75, 1.05)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function TicketIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={TICKET_OUTLINE} />
      <path d="M9.5 5V7M9.5 11V13M9.5 17V19" />
    </Icon>
  );
}

/* ---- weather & nature ---- */

export function CloudSunIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V4.75M4.93 4.93 6.52 6.52M21.5 12H19.25M19.07 4.93 17.48 6.52" />
      <path d="M15.9 12.65A4 4 0 0 0 9.98 8.52" />
      <path d="M13 21.5H7A5 5 0 1 1 11.9 15.5H13A3 3 0 0 1 13 21.5Z" />
    </Icon>
  );
}

export function CloudLightningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 14.5H9A6.25 6.25 0 1 1 15 6.5H17.5A4 4 0 1 1 17.5 14.5Z" />
      <path strokeLinejoin="bevel" d="M13 12.5 10 17H14L11 21.5" />
    </Icon>
  );
}

export function SunriseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 9.5V2.75" />
      <path strokeLinejoin="bevel" d="M8.5 6.25 12 2.75 15.5 6.25" />
      <path d="M16 18A4 4 0 0 0 8 18" />
      <path d="M4.93 11.43 6.34 12.84M2.75 18H4.75M19.25 18H21.25M19.07 11.43 17.66 12.84" />
      <path d="M2.75 21.5H21.25" />
    </Icon>
  );
}

export function TreePineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 2.75 16.25 8.25H14.25L18.5 13.75H15.5L19.75 19.25H4.25L8.5 13.75H5.5L9.75 8.25H7.75Z"
      />
      <path d="M12 19.25V21.5" />
    </Icon>
  );
}

export function FlowerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 2.9)} />
      <path
        d={
          squircle(12, 6.25, 2.9) +
          squircle(12, 17.75, 2.9) +
          squircle(6.25, 12, 2.9) +
          squircle(17.75, 12, 2.9)
        }
      />
    </Icon>
  );
}

export function SproutIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.25C12 16.5 12.1 13.4 12.75 10.75" />
      <path d="M11.25 13.75C8.5 13.35 6.9 11.7 6.5 8.95C9.25 9.35 10.85 11 11.25 13.75Z" />
      <path d="M12.75 10.75C13.15 8 14.75 6.35 17.5 5.95C17.1 8.7 15.5 10.35 12.75 10.75Z" />
      <path d="M7 21.25H17" />
    </Icon>
  );
}

export function MountainIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M8 3.5 12 11.5 17 6.5 21.5 20.5H2.5Z" />
    </Icon>
  );
}

export function WavesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 6.5C4.29 5 5.83 5 7.37 6.5C8.91 8 10.45 8 12 6.5C13.54 5 15.08 5 16.62 6.5C18.16 8 19.7 8 21.25 6.5" />
      <path d="M2.75 12C4.29 10.5 5.83 10.5 7.37 12C8.91 13.5 10.45 13.5 12 12C13.54 10.5 15.08 10.5 16.62 12C18.16 13.5 19.7 13.5 21.25 12" />
      <path d="M2.75 17.5C4.29 16 5.83 16 7.37 17.5C8.91 19 10.45 19 12 17.5C13.54 16 15.08 16 16.62 17.5C18.16 19 19.7 19 21.25 17.5" />
    </Icon>
  );
}

/* ---- animals & bio ---- */

export function PawPrintIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(5.6, 10.2, 1.7) +
          squircle(9.9, 6.4, 1.7) +
          squircle(14.1, 6.4, 1.7) +
          squircle(18.4, 10.2, 1.7)
        }
      />
      <path d="M12 11.25C14.6 11.25 16.75 13.35 17 15.9C17.16 17.6 15.8 19 14.1 19C13.35 19 12.65 18.6 12 18.6C11.35 18.6 10.65 19 9.9 19C8.2 19 6.84 17.6 7 15.9C7.25 13.35 9.4 11.25 12 11.25Z" />
    </Icon>
  );
}

export function EggIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C15.75 2.75 18.5 8.25 18.5 13.25C18.5 17.75 15.75 21.25 12 21.25C8.25 21.25 5.5 17.75 5.5 13.25C5.5 8.25 8.25 2.75 12 2.75Z" />
    </Icon>
  );
}

export function DnaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.5 2.75C15.5 7.25 8.5 7.75 8.5 12C8.5 16.25 15.5 16.75 15.5 21.25" />
      <path d="M8.5 2.75C8.5 7.25 15.5 7.75 15.5 12C15.5 16.25 8.5 16.75 8.5 21.25" />
      <path d="M9.25 5H14.75M10.5 8H13.5M10.5 16H13.5M9.25 19H14.75" />
    </Icon>
  );
}

export function SkullIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C7.17 2.75 3.25 6.42 3.25 11C3.25 13.4 4.3 15.3 6 16.6C6.75 17.15 7.25 17.9 7.25 18.8V19.5C7.25 20.42 7.33 20.5 8.25 20.5H15.75C16.67 20.5 16.75 20.42 16.75 19.5V18.8C16.75 17.9 17.25 17.15 18 16.6C19.7 15.3 20.75 13.4 20.75 11C20.75 6.42 16.83 2.75 12 2.75Z" />
      <path
        d={squircle(8.75, 11.5, 1.9) + squircle(15.25, 11.5, 1.9)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M12 15.25V16.75" />
    </Icon>
  );
}

/* ---- science & health ---- */

export function TelescopeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.9 10.8 17.6 5.9C18.2 5.7 18.75 5.95 18.95 6.55L19.6 8.5C19.8 9.1 19.55 9.65 18.95 9.85L4.25 14.75C3.65 14.95 3.1 14.7 2.9 14.1L2.25 12.15C2.05 11.55 2.3 11 2.9 10.8Z" />
      <path d="M13.5 13.75 17 21.25M10.5 13.75 7 21.25" />
      <path d={squircle(12, 13, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function MicroscopeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 18.5H14" />
      <path d="M3.5 21.5H20.5" />
      <path d="M14 21.5A7 7 0 1 0 14 7.5H13" />
      <path d="M9 15.5H11" />
      <path d="M9 12.5C7.9 12.5 7 11.6 7 10.5V6.5H13V10.5C13 11.6 12.1 12.5 11 12.5Z" />
      <path d="M12 6.5V3.75C12 3.2 11.8 3 11.25 3H8.75C8.2 3 8 3.2 8 3.75V6.5" />
    </Icon>
  );
}

export function PillIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 19 5 12C3.05 10.05 3.05 6.95 5 5C6.95 3.05 10.05 3.05 12 5L19 12C20.95 13.95 20.95 17.05 19 19C17.05 20.95 13.95 20.95 12 19Z" />
      <path d="M8.5 8.5 15.5 15.5" />
    </Icon>
  );
}

export function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C6.5 16.5 3 13.25 3 9.5C3 6.75 5.1 4.75 7.65 4.75C9.4 4.75 11 5.75 12 7.25C13 5.75 14.6 4.75 16.35 4.75C18.9 4.75 21 6.75 21 9.5C21 13.25 17.5 16.5 12 20.5Z" />
      <path strokeLinejoin="bevel" d="M3.75 11.5H8.25L9.75 9.25 12 14.75 13.75 11.5H20.25" />
    </Icon>
  );
}

/* ---- food ---- */

export function CookieIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75A9.25 9.25 0 1 0 21.25 12A3.7 3.7 0 0 1 16.63 7.37A3.7 3.7 0 0 1 12 2.75Z" />
      <path
        d={
          squircle(8.5, 9.5, 1.1) +
          squircle(9.5, 14.75, 1.1) +
          squircle(14, 16, 1.1) +
          squircle(15.5, 11.75, 1.1)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function AppleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.4C13.3 20.4 14.4 21.35 15.5 21.35C18.15 21.35 20.8 14.25 20.8 10.5C20.77 7.85 18.85 5.75 16.4 5.75C14.45 5.75 12.9 7 12 7.5C11.1 7 9.55 5.75 7.6 5.75C5.15 5.75 3.25 7.85 3.2 10.5C3.2 14.25 5.85 21.35 8.5 21.35C9.6 21.35 10.7 20.4 12 20.4Z" />
      <path d="M10.25 2.5C11.15 2.95 12 4.25 12 7.5" />
    </Icon>
  );
}

export function UtensilsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 2.75V8.75C4 9.85 4.9 10.75 6 10.75H8.5C9.6 10.75 10.5 9.85 10.5 8.75V2.75" />
      <path d="M7.25 2.75V21.25" />
      <path d="M20 14.5V2.75C17.25 2.75 15.25 4.75 15.25 7.5V12.5C15.25 13.6 16.15 14.5 17.25 14.5H20ZM20 14.5V21.25" />
    </Icon>
  );
}

/* ---- transport & places ---- */

export function CarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.2 17H20.5C21.1 17 21.5 16.6 21.5 16V13C21.5 12.1 20.8 11.3 20 11.1C18.7 10.8 16 10.25 16 10.25C16 10.25 14.7 8.85 13.8 7.95C13.3 7.55 12.7 7.25 12 7.25H5C4.4 7.25 3.9 7.65 3.6 8.15L2.9 9.6C2.65 10.1 2.5 10.65 2.5 11.2V16C2.5 16.6 2.9 17 3.5 17H4.8" />
      <path d="M9.1 17H14.9" />
      <path d={squircle(7, 17, 2.1) + squircle(17, 17, 2.1)} />
    </Icon>
  );
}

export function BikeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(5.75, 17.25, 3.5) + squircle(18.25, 17.25, 3.5)} />
      <path d={squircle(15, 4.75, 1.15)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M12 17.25V13.75L9 10.75 13 7.75 15 10.75H17" />
    </Icon>
  );
}

export function TrafficConeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C11.3 2.75 10.85 3.05 10.65 3.7L6.25 18.5H17.75L13.35 3.7C13.15 3.05 12.7 2.75 12 2.75Z" />
      <path d="M9.3 9.75H14.7M8 14.25H16" />
      <path d="M3.5 21.25H20.5" />
    </Icon>
  );
}

export function MapIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M9 3.5 15 5.6 20 3.85C20.8 3.55 21.25 3.9 21.25 4.75V17.1C21.25 17.8 21 18.2 20.3 18.45L15 20.5 9 18.4 4 20.15C3.2 20.45 2.75 20.1 2.75 19.25V6.9C2.75 6.2 3 5.8 3.7 5.55Z"
      />
      <path d="M9 3.5V18.4M15 5.6V20.5" />
    </Icon>
  );
}

export function RouteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(5.75, 18.75, 2.6) + squircle(18.25, 5.25, 2.6)} />
      <path d="M8.35 18.75H17.25C19.18 18.75 20.75 17.18 20.75 15.25C20.75 13.32 19.18 11.75 17.25 11.75H6.75C4.82 11.75 3.25 10.18 3.25 8.25C3.25 6.32 4.82 4.75 6.75 4.75H15.65" />
    </Icon>
  );
}

export function LandmarkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 3 20.25 8H3.75Z" />
      <path d="M5.75 10.75V18M10 10.75V18M14 10.75V18M18.25 10.75V18" />
      <path d="M3.5 21H20.5" />
    </Icon>
  );
}

export function StoreIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 7.5C2.75 9 4.13 10.25 5.83 10.25C7.53 10.25 8.9 9 8.9 7.5C8.9 9 10.3 10.25 12 10.25C13.7 10.25 15.1 9 15.1 7.5C15.1 9 16.47 10.25 18.17 10.25C19.87 10.25 21.25 9 21.25 7.5L19.5 3.3C19.35 2.95 19.05 2.75 18.65 2.75H5.35C4.95 2.75 4.65 2.95 4.5 3.3Z" />
      <path d="M4.75 10.25V19C4.75 20.5 5.25 21 6.75 21H17.25C18.75 21 19.25 20.5 19.25 19V10.25" />
      <path d="M9.5 21V16C9.5 15.08 9.58 15 10.5 15H13.5C14.42 15 14.5 15.08 14.5 16V21" />
    </Icon>
  );
}

export function AnchorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 5.25, 2.5)} />
      <path d="M12 7.75V21.5" />
      <path d="M5 12H2.75C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12H19" />
    </Icon>
  );
}

/* ---- people & security ---- */

export function UserCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C13.1 14.6 16.25 16.6 16.25 20.75" />
      <path strokeLinejoin="bevel" d="M16 10.75 18 12.75 21.75 9" />
    </Icon>
  );
}

export function UserMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C13.1 14.6 16.25 16.6 16.25 20.75" />
      <path d="M16 10.5H22" />
    </Icon>
  );
}

export function ShieldOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/* ---- calendar & time ---- */

export function CalendarPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M12 12V17.5M9.25 14.75H14.75" />
    </Icon>
  );
}

export function CalendarCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path strokeLinejoin="bevel" d="M9 14.5 11.25 16.75 15.5 12.5" />
    </Icon>
  );
}

export function WatchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 6.25)} />
      <path d="M12 9.5V12H14" />
      <path d="M9 6.25 9.65 2.75H14.35L15 6.25M15 17.75 14.35 21.25H9.65L9 17.75" />
    </Icon>
  );
}

/* ---- text editing extras ---- */

export function IndentIncreaseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 6.5H20.5M11 12H20.5M11 17.5H20.5" />
      <path strokeLinejoin="bevel" d="M4 8.25 7.75 12 4 15.75" />
    </Icon>
  );
}

export function IndentDecreaseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 6.5H20.5M11 12H20.5M11 17.5H20.5" />
      <path strokeLinejoin="bevel" d="M7.75 8.25 4 12 7.75 15.75" />
    </Icon>
  );
}

export function WrapTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 5.5H20.5" />
      <path d="M3.5 11.5H16.5C18.43 11.5 20 13.07 20 15C20 16.93 18.43 18.5 16.5 18.5H13.75" />
      <path strokeLinejoin="bevel" d="M15.75 16.5 13.75 18.5 15.75 20.5" />
      <path d="M3.5 18.5H10" />
    </Icon>
  );
}

export function SpellCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.75 15.75 9.5 4.5 14.25 15.75" />
      <path d="M6.6 11.5H12.4" />
      <path strokeLinejoin="bevel" d="M14.75 19 17 21.25 21.25 17" />
    </Icon>
  );
}

export function LanguagesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 5.25H14.75M7.25 2.75H8.25" />
      <path d="M5 8.25 11 14.25M4 14.25 10 8.25 12 5.25" />
      <path strokeLinejoin="bevel" d="M11.25 21.25 16.25 11.25 21.25 21.25" />
      <path d="M13.25 18H19.25" />
    </Icon>
  );
}

export function HighlighterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9 11.25 3.5 16.75V19.75H12.5L15 17.25" />
      <path d="M21.25 12 16.9 16.35C16.1 17.15 14.9 17.15 14.1 16.35L9.65 11.9C8.85 11.1 8.85 9.9 9.65 9.1L14 4.75" />
    </Icon>
  );
}

/* ---- art & design ---- */

export function BrushIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.3 11.9 17.35 3.85C18.15 3.05 19.45 3.05 20.25 3.85C21.05 4.65 21.05 5.95 20.25 6.75L12.2 14.8" />
      <path d="M7.1 14.7C5.45 14.7 4.1 16.05 4.1 17.7C4.1 19 1.9 19.2 2.4 19.7C3.5 20.8 4.9 21.5 6.4 21.5C8.6 21.5 10.4 19.7 10.4 17.5C10.4 15.95 8.9 14.7 7.1 14.7Z" />
    </Icon>
  );
}

export function PaintBucketIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18.75 11 10.75 3 2.85 10.9C2.05 11.7 2.05 12.9 2.85 13.7L7.55 18.4C8.35 19.2 9.55 19.2 10.35 18.4Z" />
      <path d="M5.25 2.5 10.25 7.5" />
      <path d="M2.5 12.75H17" />
      <path d="M21.5 19.5C21.5 20.6 20.6 21.5 19.5 21.5C18.4 21.5 17.5 20.6 17.5 19.5C17.5 18.2 18.9 17.4 19.5 16C20.1 17.4 21.5 18.2 21.5 19.5Z" />
    </Icon>
  );
}

export function PenToolIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.75 12.75 16.45 6.25C16.35 5.75 16.1 5.5 15.6 5.4L3.8 2.55C3.1 2.4 2.4 3.1 2.55 3.8L5.4 15.6C5.5 16.1 5.75 16.35 6.25 16.45L12.75 17.75" />
      <path d="M15.35 20.95C15.75 21.35 16.35 21.35 16.75 20.95L20.95 16.75C21.35 16.35 21.35 15.75 20.95 15.35L19.4 13.8C19 13.4 18.4 13.4 18 13.8L13.8 18C13.4 18.4 13.4 19 13.8 19.4Z" />
      <path d="M2.55 2.55 9.9 9.9" />
      <path d={squircle(11.4, 11.4, 1.9)} />
    </Icon>
  );
}

export function RulerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.1 15.1C22 16 22 17.3 21.1 18.2L18.2 21.1C17.3 22 16 22 15.1 21.1L2.9 8.9C2 8 2 6.7 2.9 5.8L5.8 2.9C6.7 2 8 2 8.9 2.9Z" />
      <path d="M14.5 12.5 16.5 10.5M11.5 9.5 13.5 7.5M8.5 6.5 10.5 4.5M17.5 15.5 19.5 13.5" />
    </Icon>
  );
}

export function CropIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75V15.5C6.5 17.34 6.66 17.5 8.5 17.5H21.25" />
      <path d="M2.75 6.5H15.5C17.34 6.5 17.5 6.66 17.5 8.5V21.25" />
    </Icon>
  );
}

export function ShapesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 15.75 9.25H8.25Z" />
      <path d="M4.5 14H9C9.92 14 10 14.08 10 15V19.5C10 20.42 9.92 20.5 9 20.5H4.5C3.58 20.5 3.5 20.42 3.5 19.5V15C3.5 14.08 3.58 14 4.5 14Z" />
      <path d={squircle(17.25, 17.25, 3.5)} />
    </Icon>
  );
}

/* ---- media & broadcast ---- */

export function PodcastIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16.85 18.5A9.25 9.25 0 1 0 7.15 18.5" />
      <path d="M8.1 13.9A5 5 0 1 1 15.9 13.9" />
      <path d={squircle(12, 11, 1.4)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M11 16.75H13L13.4 21.25H10.6Z" />
    </Icon>
  );
}

export function ClapperboardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.4 6.25 3.25 11.25 2.55 8.9C2.25 7.8 2.85 6.7 3.85 6.4L16.9 2.55C18 2.25 19.1 2.85 19.4 3.85Z" />
      <path d="M6.45 5.75 9.55 9.65M12.65 3.9 15.75 7.8" />
      <path d="M3.25 11.25H20.75V19C20.75 20.84 20.59 21 18.75 21H5.25C3.41 21 3.25 20.84 3.25 19Z" />
    </Icon>
  );
}

export function ImagesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.75 6.5H14.75C16.59 6.5 16.75 6.66 16.75 8.5V18.5C16.75 20.34 16.59 20.5 14.75 20.5H4.75C2.91 20.5 2.75 20.34 2.75 18.5V8.5C2.75 6.66 2.91 6.5 4.75 6.5Z" />
      <path d="M7.5 3.25H18.25C20.09 3.25 20.25 3.41 20.25 5.25V16" />
      <path d={squircle(7, 10.5, 1.3)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M2.75 17.5 6.75 13.5 9.5 16.25 12 13.75 16.75 18.5" />
    </Icon>
  );
}

export function DiscIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d={squircle(12, 12, 2.25)} />
    </Icon>
  );
}

export function RadioIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.9 19.1C1.03 15.23 1.03 8.77 4.9 4.9M7.8 16.2C5.5 13.9 5.5 10.1 7.8 7.8M16.2 7.8C18.5 10.1 18.5 13.9 16.2 16.2M19.1 4.9C22.97 8.77 22.97 15.23 19.1 19.1" />
      <path d={squircle(12, 12, 1.9)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/* ---- comms extras ---- */

export function MessagesSquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 15.5V4.75C2.75 3.37 2.87 3.25 4.25 3.25H13.25C14.63 3.25 14.75 3.37 14.75 4.75V9.75C14.75 11.13 14.63 11.25 13.25 11.25H7Z" />
      <path d="M18 9.5H19.75C21.13 9.5 21.25 9.62 21.25 11V20.75L17 16.5H11.5C10.12 16.5 10 16.38 10 15V14.25" />
    </Icon>
  );
}

export function MailOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M3.5 9.5 12 3.25 20.5 9.5V19C20.5 20.84 20.34 21 18.5 21H5.5C3.66 21 3.5 20.84 3.5 19Z"
      />
      <path strokeLinejoin="bevel" d="M3.5 10 12 15.5 20.5 10" />
    </Icon>
  );
}

/* ---- finance & commerce extras ---- */

export function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6.75 2.75 3.5 6.75V19C3.5 20.84 3.66 21 5.5 21H18.5C20.34 21 20.5 20.84 20.5 19V6.75L17.25 2.75Z"
      />
      <path d="M3.5 6.75H20.5" />
      <path d="M15.5 10.25C15.5 12.18 13.93 13.75 12 13.75C10.07 13.75 8.5 12.18 8.5 10.25" />
    </Icon>
  );
}

export function BanknoteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 5.5H18.5C20.34 5.5 20.5 5.66 20.5 7.5V16.5C20.5 18.34 20.34 18.5 18.5 18.5H5.5C3.66 18.5 3.5 18.34 3.5 16.5V7.5C3.5 5.66 3.66 5.5 5.5 5.5Z" />
      <path d={squircle(12, 12, 2.75)} />
      <path
        d={squircle(7, 12, 0.9) + squircle(17, 12, 0.9)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function CoinsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(8.75, 8.75, 6)} />
      <path d="M14.6 6.55C18 7.3 20.5 10.3 20.5 13.9C20.5 18.1 17.1 21.5 12.9 21.5C9.3 21.5 6.3 19 5.55 15.6" />
    </Icon>
  );
}

export function PiggyBankIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.25 5C17.75 5 16.45 6.4 16.25 7C12.75 5.5 5.25 6.7 5.25 12C5.25 13.8 5.25 15 7.25 16.5V19.75H11.25V17.75H14.25V19.75H18.25V15.75C19.25 15.25 19.95 14.75 20.25 13.75H21.75V9.75H20.25C20.25 8.75 19.75 8.25 19.25 7.75V5Z" />
      <path d="M2.75 9.5V10.5C2.75 11.6 3.65 12.5 4.75 12.5H5.25" />
      <path d={squircle(15.75, 10.5, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function ReceiptIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M8.5 7.5H15.5M8.5 11H15.5" />
    </Icon>
  );
}

export function ScaleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.25V21M7.5 21H16.5" />
      <path d="M4 6.75H5.5C7.5 6.75 10 6 12 5C14 6 16.5 6.75 18.5 6.75H20" />
      <path
        strokeLinejoin="bevel"
        d="M15.75 15 18.5 8 21.25 15C20.45 15.65 19.5 16 18.5 16C17.5 16 16.55 15.65 15.75 15Z"
      />
      <path
        strokeLinejoin="bevel"
        d="M2.75 15 5.5 8 8.25 15C7.45 15.65 6.5 16 5.5 16C4.5 16 3.55 15.65 2.75 15Z"
      />
    </Icon>
  );
}

/* ---- objects & misc ---- */

export function NewspaperIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 21.5H18.5C20.34 21.5 20.5 21.34 20.5 19.5V4.5C20.5 2.66 20.34 2.5 18.5 2.5H8.5C6.66 2.5 6.5 2.66 6.5 4.5V19.5C6.5 20.6 5.6 21.5 4.5 21.5ZM4.5 21.5C3.4 21.5 2.5 20.6 2.5 19.5V9.5C2.5 8.58 2.58 8.5 3.5 8.5H6.5" />
      <path d="M10 6.25H17V10.25H10Z" />
      <path d="M10 13.75H17M10 17.25H17" />
    </Icon>
  );
}

export function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 4.75 21.25 9.25 12 13.75 2.75 9.25Z" />
      <path d="M21.25 9.25V15" />
      <path d="M6.5 11.5V15.5C6.5 17.15 8.95 18.5 12 18.5C15.05 18.5 17.5 17.15 17.5 15.5V11.5" />
    </Icon>
  );
}

export function MagnetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.75 3.5H9.25V11.5C9.25 13.02 10.48 14.25 12 14.25C13.52 14.25 14.75 13.02 14.75 11.5V3.5H19.25V11.5C19.25 15.5 16 18.75 12 18.75C8 18.75 4.75 15.5 4.75 11.5Z" />
      <path d="M4.75 7H9.25M14.75 7H19.25" />
    </Icon>
  );
}

export function FlashlightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 2.75H18V5.5C18 7.5 16 7.7 16 9.7V19.5C16 21.34 15.84 21.5 14 21.5H10C8.16 21.5 8 21.34 8 19.5V9.7C8 7.7 6 7.5 6 5.5Z" />
      <path d="M6 5.75H18" />
      <path d={squircle(12, 11.5, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function MouseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C15.6 2.75 18 5.15 18 8.75V15.25C18 18.85 15.6 21.25 12 21.25C8.4 21.25 6 18.85 6 15.25V8.75C6 5.15 8.4 2.75 12 2.75Z" />
      <path d="M12 6.25V9.75" />
    </Icon>
  );
}

export function TabletIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75H17.5C19.34 2.75 19.5 2.91 19.5 4.75V19.25C19.5 21.09 19.34 21.25 17.5 21.25H6.5C4.66 21.25 4.5 21.09 4.5 19.25V4.75C4.5 2.91 4.66 2.75 6.5 2.75Z" />
      <path d="M10.75 18H13.25" />
    </Icon>
  );
}

export function TvIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 7.5H18.5C20.34 7.5 20.5 7.66 20.5 9.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V9.5C3.5 7.66 3.66 7.5 5.5 7.5Z" />
      <path strokeLinejoin="bevel" d="M7 2.75 12 7.5 17 2.75" />
    </Icon>
  );
}

/** LinkIcon under the set's "off" slash, same as EyeOff / BellOff. */
export function UnlinkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 17H7.5C4.7 17 2.5 14.8 2.5 12C2.5 9.2 4.7 7 7.5 7H9" />
      <path d="M15 7H16.5C19.3 7 21.5 9.2 21.5 12C21.5 14.8 19.3 17 16.5 17H15" />
      <path d="M8 12H16" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

export function InfinityIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 15.5C4.05 15.5 2.5 13.93 2.5 12C2.5 10.07 4.05 8.5 6 8.5C10 8.5 14 15.5 18 15.5C19.95 15.5 21.5 13.93 21.5 12C21.5 10.07 19.95 8.5 18 8.5C14 8.5 10 15.5 6 15.5Z" />
    </Icon>
  );
}

export function RecycleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 19H4.82C4.18 19 3.58 18.66 3.25 18.12C2.93 17.57 2.93 16.9 3.25 16.34L7.2 9.5" />
      <path d="M11 19H19.2C19.84 19 20.44 18.66 20.76 18.11C21.08 17.56 21.08 16.89 20.76 16.34L19.53 14.21" />
      <path strokeLinejoin="bevel" d="M14 16 11 19 14 22" />
      <path strokeLinejoin="bevel" d="M8.29 13.6 7.2 9.5 3.1 10.6" />
      <path d="M9.34 5.81 10.44 3.92C10.76 3.35 11.36 3 12 3C12.64 3 13.24 3.34 13.55 3.89L17.49 10.73" />
      <path strokeLinejoin="bevel" d="M13.38 9.63 17.47 10.73 18.57 6.63" />
    </Icon>
  );
}

export function PuzzleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 8.5H8.5V7.25C8.5 6 9.5 5 10.75 5C12 5 13 6 13 7.25V8.5H16C16.92 8.5 17 8.58 17 9.5V12.5H18.25C19.5 12.5 20.5 13.5 20.5 14.75C20.5 16 19.5 17 18.25 17H17V20C17 20.92 16.92 21 16 21H5.5C4.58 21 4.5 20.92 4.5 20V9.5C4.5 8.58 4.58 8.5 5.5 8.5Z" />
    </Icon>
  );
}

/* ---- symbols & math ---- */

/** Six-spoke asterisk: vertical stem plus two 30-degree cross strokes. */
export function AsteriskIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5.25V18.75" />
      <path d="M6.16 8.63 17.84 15.37M17.84 8.63 6.16 15.37" />
    </Icon>
  );
}

export function SlashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16.5 3.5 7.5 20.5" />
    </Icon>
  );
}

/** EqualIcon's bars under the set's slash. */
export function NotEqualIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 9.25H18.5M5.5 14.75H18.5" />
      <path d="M15.5 4.75 8.5 19.25" />
    </Icon>
  );
}

/** Sigma: the letterform drawn as one flat-capped, bevel-elbowed stroke. */
export function SigmaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M17.5 7.5V4.5H6.5L11.75 12 6.5 19.5H17.5V16.5" />
    </Icon>
  );
}

/** Pi: straight left leg, right leg sweeping into a foot. */
export function PiIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5.5H19.5" />
      <path d="M8.5 5.5V19.5" />
      <path d="M15.5 5.5V16.5C15.5 18.5 16.5 19.5 18.5 19.5" />
    </Icon>
  );
}

/** Function: f-hook and crossbar inside CpuIcon's tile. */
export function FunctionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 4.5H17.5C19.34 4.5 19.5 4.66 19.5 6.5V17.5C19.5 19.34 19.34 19.5 17.5 19.5H6.5C4.66 19.5 4.5 19.34 4.5 17.5V6.5C4.5 4.66 4.66 4.5 6.5 4.5Z" />
      <path d="M8.75 16.25C10.4 16.25 11.15 15.4 11.15 13.65V9.85C11.15 8 12.1 6.85 14 7.1" />
      <path d="M8.75 11.25H14.5" />
    </Icon>
  );
}

export function HeadingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 4.5V19.5M17.5 4.5V19.5M6.5 12H17.5" />
    </Icon>
  );
}

export function PilcrowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13.5 4.5V19.5M17.5 4.5V19.5" />
      <path d="M19.5 4.5H10.75C8.13 4.5 6 6.63 6 9.25C6 11.87 8.13 14 10.75 14H13.5" />
    </Icon>
  );
}

export function SubscriptIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5.5 12 13M12 5.5 4.5 13" />
      <path d="M15.5 13.75C15.75 12.75 16.6 12.25 17.5 12.25C18.6 12.25 19.5 13 19.5 14C19.5 16 15.5 16.75 15.5 19H19.75" />
    </Icon>
  );
}

export function SuperscriptIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 11 12 18.5M12 11 4.5 18.5" />
      <path d="M15.5 6.5C15.75 5.5 16.6 5 17.5 5C18.6 5 19.5 5.75 19.5 6.75C19.5 8.75 15.5 9.5 15.5 11.75H19.75" />
    </Icon>
  );
}

/** True round like InfoIcon - the glyph is typographic. */
export function CopyrightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx={12} cy={12} r={10} />
      <path d="M15.25 9.75C14.55 8.83 13.35 8.25 12 8.25C9.93 8.25 8.25 9.93 8.25 12C8.25 14.07 9.93 15.75 12 15.75C13.35 15.75 14.55 15.17 15.25 14.25" />
    </Icon>
  );
}

/* ---- sorting & flow ---- */

/** Sort ascending: up arrow with bars widening downward. */
export function SortAscIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 18.75V5" />
      <path strokeLinejoin="bevel" d="M3.75 8.25 7 5 10.25 8.25" />
      <path d="M14 7.5H17M14 12.5H19M14 17.5H21" />
    </Icon>
  );
}

/** Sort descending: down arrow with bars narrowing downward. */
export function SortDescIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.25V19" />
      <path strokeLinejoin="bevel" d="M3.75 15.75 7 19 10.25 15.75" />
      <path d="M14 6.5H21M14 11.5H19M14 16.5H17" />
    </Icon>
  );
}

/** Reply: flat-capped hook sweeping back left, bevel arrowhead. */
export function ReplyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 18.75V17.5C20 13.64 18.36 12 14.5 12H5" />
      <path strokeLinejoin="bevel" d="M9.75 7.25 5 12 9.75 16.75" />
    </Icon>
  );
}

/** ReplyIcon mirrored. */
export function ForwardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 18.75V17.5C4 13.64 5.64 12 9.5 12H19" />
      <path strokeLinejoin="bevel" d="M14.25 7.25 19 12 14.25 16.75" />
    </Icon>
  );
}

/* ---- UI extras ---- */

export function PanelBottomIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 14.5H20.5" />
    </Icon>
  );
}

/** Kanban: three columns at working heights. */
export function KanbanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 4.5V15.25M12 4.5V10.5M18 4.5V19.5" />
    </Icon>
  );
}

/** Component: four beveled diamonds locked around the center. */
export function ComponentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 3.25 15 6.25 12 9.25 9 6.25Z" />
      <path strokeLinejoin="bevel" d="M6.25 9 9.25 12 6.25 15 3.25 12Z" />
      <path strokeLinejoin="bevel" d="M17.75 9 20.75 12 17.75 15 14.75 12Z" />
      <path strokeLinejoin="bevel" d="M12 14.75 15 17.75 12 20.75 9 17.75Z" />
    </Icon>
  );
}

/** Contrast: ring with the right half filled - the fill traces the same
 *  two squircle quadrants so the seam stays flush at any size. */
export function ContrastIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path
        d="M12 2.75C18.48 2.75 21.25 5.52 21.25 12C21.25 18.48 18.48 21.25 12 21.25Z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Target: three evenly spaced rings with an open bull's-eye - a filled
 *  center reads as Disc2Icon. */
export function TargetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.75)} />
      <path d={squircle(12, 12, 6)} />
      <path d={squircle(12, 12, 2.25)} />
    </Icon>
  );
}

/** Crosshair: LocateIcon's cousin with ticks crossing the rim. */
export function CrosshairIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.25)} />
      <path d="M12 2.25V6.25M12 17.75V21.75M2.25 12H6.25M17.75 12H21.75" />
    </Icon>
  );
}

/** ID card: head-and-shoulders left, detail lines right. */
export function IdCardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V17C21.5 18.84 21.34 19 19.5 19H4.5C2.66 19 2.5 18.84 2.5 17V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d={squircle(8, 10.5, 2)} />
      <path d="M5.25 15.75C5.6 14.25 6.65 13.5 8 13.5C9.35 13.5 10.4 14.25 10.75 15.75" />
      <path d="M14 9.5H19M14 14.5H19" />
    </Icon>
  );
}

/** Sticky note: tile with the bottom-right corner peeling. */
export function StickyNoteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6 3.5H18C19.84 3.5 20 3.66 20 5.5V13.5L13.5 20.5H6C4.16 20.5 4 20.34 4 18.5V5.5C4 3.66 4.16 3.5 6 3.5Z"
      />
      <path d="M13.5 20.5V15.5C13.5 14.13 14.13 13.5 15.5 13.5H20" />
    </Icon>
  );
}

/** Presentation: board hung from the top rule, splayed easel legs. */
export function PresentationIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 3.5H21.25" />
      <path d="M4.5 3.5V12.5C4.5 15.26 4.74 15.5 7.5 15.5H16.5C19.26 15.5 19.5 15.26 19.5 12.5V3.5" />
      <path strokeLinejoin="bevel" d="M7.5 20.5 12 16 16.5 20.5" />
    </Icon>
  );
}

/** Screen share: MonitorIcon with OpenWithIcon's outbound arrow. */
export function ScreenShareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d="M9 12.75 14.75 7M10.5 7H14.75V11.25" />
    </Icon>
  );
}

/** Barcode: unevenly spaced full-height bars. */
export function BarcodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 5.25V18.75M7.5 5.25V18.75M10.5 5.25V18.75M14.5 5.25V18.75M17.5 5.25V18.75M20.5 5.25V18.75" />
    </Icon>
  );
}

/** ClipboardIcon with a check. */
export function ClipboardCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path strokeLinejoin="bevel" d="M8.75 13.75 11 16 15.25 11.25" />
    </Icon>
  );
}

/* ---- audio & broadcast ---- */

/** Speaker: TabletIcon's cabinet, filled tweeter dot, squircle woofer. */
export function SpeakerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75H17.5C19.34 2.75 19.5 2.91 19.5 4.75V19.25C19.5 21.09 19.34 21.25 17.5 21.25H6.5C4.66 21.25 4.5 21.09 4.5 19.25V4.75C4.5 2.91 4.66 2.75 6.5 2.75Z" />
      <path d={squircle(12, 14.5, 3.9)} />
      <path d={squircle(12, 7, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Waveform bars, flat caps. */
export function AudioLinesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 10V14M8 7.5V16.5M12 4.5V19.5M16 8.5V15.5M20 10.75V13.25" />
    </Icon>
  );
}

/** Voicemail: two squircle reels on the tape line. */
export function VoicemailIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6.5, 12, 3.75) + squircle(17.5, 12, 3.75)} />
      <path d="M6.5 15.75H17.5" />
    </Icon>
  );
}

/** Signal: ascending strength bars. */
export function SignalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.75V15.75M9.5 19.75V12M14.5 19.75V8.25M19.5 19.75V4.75" />
    </Icon>
  );
}

/** Radar: two open arcs with the sweep line running through the gap into
 *  a filled hub. */
export function RadarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.46 5.46A9.25 9.25 0 1 0 18.54 5.46" />
      <path d="M8.11 8.11A5.5 5.5 0 1 0 15.89 8.11" />
      <path d="M13.15 10.85 18.55 5.45" />
      <path d={squircle(12, 12, 1.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Satellite: beveled body and panels on the 45, whip antenna. The
 *  signal arc is left off - it fuses with the lower panel at 24px. */
export function SatelliteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M13 7 9 3 5 7 9 11" />
      <path strokeLinejoin="bevel" d="M17 11 21 15 17 19 13 15" />
      <path strokeLinejoin="bevel" d="M8 12 12 16 18 10 14 6Z" />
      <path d="M16 8 18.75 5.25" />
    </Icon>
  );
}

/** Router: low tile, two antennae, status dots. */
export function RouterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 13.5H19.5C21.34 13.5 21.5 13.66 21.5 15.5V18.5C21.5 20.34 21.34 20.5 19.5 20.5H4.5C2.66 20.5 2.5 20.34 2.5 18.5V15.5C2.5 13.66 2.66 13.5 4.5 13.5Z" />
      <path d="M6.5 13.5V8.75M17.5 13.5V8.75" />
      <path
        d={squircle(6.5, 17, 1.1) + squircle(10, 17, 1.1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** VideoIcon under the set's "off" slash. */
export function VideoOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 6.5H14.5C16.34 6.5 16.5 6.66 16.5 8.5V15.5C16.5 17.34 16.34 17.5 14.5 17.5H5.5C3.66 17.5 3.5 17.34 3.5 15.5V8.5C3.5 6.66 3.66 6.5 5.5 6.5Z" />
      <path strokeLinejoin="bevel" d="M16.5 13.25 20.5 15.5V8.5L16.5 10.75" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/* ---- people & emotion extras ---- */

/** BellIcon with ring arcs flaring off the shoulders. */
export function BellRingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3C8.7 3 6.25 5.45 6.25 8.75C6.25 12.9 5.1 14.35 4 15.5C3.4 16.13 3.84 17 4.75 17H19.25C20.16 17 20.6 16.13 20 15.5C18.9 14.35 17.75 12.9 17.75 8.75C17.75 5.45 15.3 3 12 3Z" />
      <path d="M10.4 20.25C10.75 20.9 11.35 21.25 12 21.25C12.65 21.25 13.25 20.9 13.6 20.25" />
      <path d="M4.9 2.75C3.55 4.15 2.75 5.9 2.75 8M19.1 2.75C20.45 4.15 21.25 5.9 21.25 8" />
    </Icon>
  );
}

/** UserPlusIcon's figure with an x. */
export function UserXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C13.1 14.6 16.25 16.6 16.25 20.75" />
      <path d="M16.75 8.25 21.25 12.75M21.25 8.25 16.75 12.75" />
    </Icon>
  );
}

/** The face family's shrug: flat mouth. */
export function MehIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M8.5 15.25H15.5" />
      <path
        d={squircle(9, 9.25, 1.15) + squircle(15, 9.25, 1.15)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** HeartIcon with a beveled crack dropping from the notch. */
export function HeartCrackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C6.5 16.5 3 13.25 3 9.5C3 6.75 5.1 4.75 7.65 4.75C9.4 4.75 11 5.75 12 7.25C13 5.75 14.6 4.75 16.35 4.75C18.9 4.75 21 6.75 21 9.5C21 13.25 17.5 16.5 12 20.5Z" />
      <path strokeLinejoin="bevel" d="M12 7.25 13.4 8.9 11.4 10.9 13.1 12.6" />
    </Icon>
  );
}

/* ---- files & structure ---- */

/** Audio file: the portrait tile with waveform bars. */
export function FileAudioIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M9 13.5V16.5M12 12V18M15 13.5V16.5" />
    </Icon>
  );
}

/** Video file: the portrait tile with a play wedge. */
export function FileVideoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path strokeLinejoin="bevel" d="M10 10.75 15.25 14 10 17.25Z" />
    </Icon>
  );
}

/** Image file: the portrait tile with sun dot and mountain. */
export function FileImageIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(9.75, 8.75, 1.2)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M7.75 17.25 11.5 12.75 16.25 17.25" />
    </Icon>
  );
}

/** Box: beveled isometric cube with lid seams. */
export function BoxIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.25 7.35V16.65L12 21.25 3.75 16.65V7.35Z" />
      <path strokeLinejoin="bevel" d="M3.75 7.35 12 11.95 20.25 7.35" />
      <path d="M12 11.95V21.25" />
    </Icon>
  );
}

/** Library: three shelved spines and one leaning. */
export function LibraryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4V20.5M8.5 8V20.5M12.5 4V20.5" />
      <path d="M16 6 20 20" />
    </Icon>
  );
}

/** Tags: the label with a second sweep echoing behind it. */
export function TagsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.4 3.75H4.75C3.37 3.75 2.75 4.37 2.75 5.75V11.4C2.75 12.06 3.01 12.7 3.48 13.17L10.11 19.8C11.08 20.77 12.65 20.77 13.62 19.8L18.8 14.62C19.77 13.65 19.77 12.08 18.8 11.11L12.17 4.48C11.7 4.01 11.06 3.75 10.4 3.75Z" />
      <path d={squircle(7, 8, 1.5)} fill="currentColor" stroke="none" />
      <path d="M14.5 3.25 20.52 9.27C21.49 10.24 21.49 11.81 20.52 12.78L15.25 18.05" />
    </Icon>
  );
}

/** Rebase: the branch line replayed onto a new base node. */
export function RebaseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(18, 18, 3)} />
      <path d="M6 9V21" />
      <path d="M18 3.25V13.25" />
      <path strokeLinejoin="bevel" d="M15.25 10.5 18 13.25 20.75 10.5" />
    </Icon>
  );
}

/* ---- health & fitness ---- */

/** Stethoscope: U tube, drop tube, squircle chest piece. */
export function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 2.5V4.75M11 2.5V4.75" />
      <path d="M5 3.5H4.5C3.12 3.5 2.5 4.12 2.5 5.5V9C2.5 12.05 4.95 14.5 8 14.5C11.05 14.5 13.5 12.05 13.5 9V5.5C13.5 4.12 12.88 3.5 11.5 3.5H11" />
      <path d="M8 14.5V15.5C8 18.55 10.45 21 13.5 21C16.55 21 19 18.55 19 15.5V12.75" />
      <path d={squircle(19, 10.5, 2.1)} />
    </Icon>
  );
}

/** Syringe on the 45: beveled barrel, plunger cross, needle, one tick. */
export function SyringeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M15.25 4.75 19.25 8.75 8.85 19.15C7.9 20.1 6.6 20.1 5.65 19.15L4.85 18.35C3.9 17.4 3.9 16.1 4.85 15.15Z"
      />
      <path d="M17.5 2.75 21.25 6.5" />
      <path d="M2.25 21.75 4.85 19.15" />
      <path d="M9.5 10.5 12.25 13.25" />
    </Icon>
  );
}

/** Bandage: PillIcon's capsule with a dotted pad instead of the seam. */
export function BandageIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 19 5 12C3.05 10.05 3.05 6.95 5 5C6.95 3.05 10.05 3.05 12 5L19 12C20.95 13.95 20.95 17.05 19 19C17.05 20.95 13.95 20.95 12 19Z" />
      <path
        d={
          squircle(12, 10.25, 0.85) +
          squircle(12, 13.75, 0.85) +
          squircle(10.25, 12, 0.85) +
          squircle(13.75, 12, 0.85)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Dumbbell: axis-aligned - tall inner plates, short outer, grip bar. */
export function DumbbellIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.75 5.5H9.25C10.4 5.5 10.5 5.6 10.5 6.75V17.25C10.5 18.4 10.4 18.5 9.25 18.5H8.75C7.6 18.5 7.5 18.4 7.5 17.25V6.75C7.5 5.6 7.6 5.5 8.75 5.5Z" />
      <path d="M14.75 5.5H15.25C16.4 5.5 16.5 5.6 16.5 6.75V17.25C16.5 18.4 16.4 18.5 15.25 18.5H14.75C13.6 18.5 13.5 18.4 13.5 17.25V6.75C13.5 5.6 13.6 5.5 14.75 5.5Z" />
      <path d="M4 8H4.5C5.4 8 5.5 8.1 5.5 9V15C5.5 15.9 5.4 16 4.5 16H4C3.1 16 3 15.9 3 15V9C3 8.1 3.1 8 4 8Z" />
      <path d="M19.5 8H20C20.9 8 21 8.1 21 9V15C21 15.9 20.9 16 20 16H19.5C18.6 16 18.5 15.9 18.5 15V9C18.5 8.1 18.6 8 19.5 8Z" />
      <path d="M10.5 12H13.5" />
    </Icon>
  );
}

/** Test tube: FlaskIcon's upright sibling with a round bottom. */
export function TestTubeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.75 2.75H16.25" />
      <path d="M9.5 2.75V17.75C9.5 19.68 10.57 21.25 12 21.25C13.43 21.25 14.5 19.68 14.5 17.75V2.75" />
      <path d="M9.5 12H14.5" />
    </Icon>
  );
}

/* ---- food & drink ---- */

/** Pizza slice: beveled wedge, inner crust line, topping dots. */
export function PizzaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 21.25 4.55 7.4C9.1 4.4 14.9 4.4 19.45 7.4Z" />
      <path d="M5.9 9.9C9.6 7.7 14.4 7.7 18.1 9.9" />
      <path
        d={
          squircle(9.9, 12.4, 1.05) +
          squircle(13.9, 11.6, 1.05) +
          squircle(12, 15.6, 1.05)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Cake: slab on a plate, candle sticks with filled flame dots. */
export function CakeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 21.25V14.5C4.5 13.12 4.62 13 6 13H18C19.38 13 19.5 13.12 19.5 14.5V21.25" />
      <path d="M4.5 17H19.5" />
      <path d="M2.75 21.25H21.25" />
      <path d="M8 13V9.75M12 13V9.25M16 13V9.75" />
      <path
        d={
          squircle(8, 7.75, 0.95) +
          squircle(12, 7.25, 0.95) +
          squircle(16, 7.75, 0.95)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Ice cream: semicircle scoop overhanging the cone's shoulders - a
 *  flush scoop-to-cone edge read as an upside-down map pin. */
export function IceCreamIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.75 11A6.25 6.25 0 0 1 18.25 11" />
      <path d="M5.75 11H18.25" />
      <path strokeLinejoin="bevel" d="M8 11 12 21.25 16 11" />
    </Icon>
  );
}

/** Martini: beveled V bowl, stem, foot. */
export function MartiniIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.75 3.25H19.25L12 11.5Z" />
      <path d="M12 11.5V20.5" />
      <path d="M8 20.5H16" />
    </Icon>
  );
}

/** Wine: U bowl with a fill line, stem, foot. */
export function WineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 2.75H16V7.25C16 10.1 14.35 11.9 12 11.9C9.65 11.9 8 10.1 8 7.25Z" />
      <path d="M8 6.75H16" />
      <path d="M12 11.9V20.5" />
      <path d="M8.5 20.5H15.5" />
    </Icon>
  );
}

/** Beer: stein with a squircle-cornered handle and inner ribs. */
export function BeerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 5.5H15.5V18.5C15.5 20.34 15.34 20.5 13.5 20.5H7.5C5.66 20.5 5.5 20.34 5.5 18.5Z" />
      <path d="M15.5 9H17.5C18.88 9 19.5 9.62 19.5 11V14C19.5 15.38 18.88 16 17.5 16H15.5" />
      <path d="M8.5 9V16.5M12.5 9V16.5" />
    </Icon>
  );
}

/* ---- places & transport extras ---- */

/** Factory: chimney wall with sawtooth roofline, window ticks. */
export function FactoryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M3.5 21.25V4.75C3.5 3.83 3.58 3.75 4.5 3.75H7C7.92 3.75 8 3.83 8 4.75V12.9L13.75 8.9V12.9L20.5 8.9V19.25C20.5 21.09 20.34 21.25 18.5 21.25H3.5Z"
      />
      <path d="M7 17H8.5M11.25 17H12.75M15.5 17H17" />
    </Icon>
  );
}

/** Bed: headboard post, pillow tile, frame and mid rail. */
export function BedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 4.5V19.5" />
      <path d="M2.75 9.75H19.25C20.63 9.75 21.25 10.37 21.25 11.75V19.5" />
      <path d="M2.75 15.75H21.25" />
      <path d="M4.75 9.75V7.75C4.75 6.83 4.83 6.75 5.75 6.75H8.75C9.67 6.75 9.75 6.83 9.75 7.75V9.75" />
    </Icon>
  );
}

/** Sofa: backrest tile over a seat with rolled arms and stub legs. */
export function SofaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.5 9.5V6.5C19.5 4.66 19.34 4.5 17.5 4.5H6.5C4.66 4.5 4.5 4.66 4.5 6.5V9.5" />
      <path d="M2.5 15.5C2.5 17.34 2.66 17.5 4.5 17.5H19.5C21.34 17.5 21.5 17.34 21.5 15.5V11.75C21.5 10.6 20.65 9.75 19.5 9.75C18.35 9.75 17.5 10.6 17.5 11.75V13.25H6.5V11.75C6.5 10.6 5.65 9.75 4.5 9.75C3.35 9.75 2.5 10.6 2.5 11.75Z" />
      <path d="M5 17.5V19.75M19 17.5V19.75" />
    </Icon>
  );
}

/** Open door: frame, floor stubs, swung panel with a filled knob. */
export function DoorOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13.5 4.5H15.5C17.34 4.5 17.5 4.66 17.5 6.5V20.5" />
      <path d="M2.75 20.5H5.5M13.5 20.5H21.25" />
      <path strokeLinejoin="bevel" d="M13.5 3.25V21.75L5.5 19.9V5.35Z" />
      <path d={squircle(11.25, 12.5, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Bus: TruckIcon's wheels under a full-width body with a window line. */
export function BusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.9 17.5H2.5V6.5C2.5 4.66 2.66 4.5 4.5 4.5H19.5C21.34 4.5 21.5 4.66 21.5 6.5V17.5H19.1" />
      <path d="M9.1 17.5H14.9" />
      <path d="M2.5 11H21.5" />
      <path d="M8 4.5V11M16 4.5V11" />
      <path d={squircle(7, 17.5, 2.1) + squircle(17, 17.5, 2.1)} />
    </Icon>
  );
}

/** Train: cab front with window band, filled lamps, splayed rail legs. */
export function TrainIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75H17.5C19.34 2.75 19.5 2.91 19.5 4.75V13.75C19.5 15.59 19.34 15.75 17.5 15.75H6.5C4.66 15.75 4.5 15.59 4.5 13.75V4.75C4.5 2.91 4.66 2.75 6.5 2.75Z" />
      <path d="M4.5 9H19.5" />
      <path
        d={squircle(8.5, 12.4, 1.2) + squircle(15.5, 12.4, 1.2)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M9 15.75 6.5 20.5M15 15.75 17.5 20.5" />
    </Icon>
  );
}

/** Ship: deckhouse and mast over a beveled hull. */
export function ShipIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 10.25 21 13.75C20.55 16.3 19.6 18.45 18.1 20.25H5.9C4.4 18.45 3.45 16.3 3 13.75Z"
      />
      <path d="M5.5 12.4V8.5C5.5 6.66 5.66 6.5 7.5 6.5H16.5C18.34 6.5 18.5 6.66 18.5 8.5V12.4" />
      <path d="M12 2.75V6.5" />
    </Icon>
  );
}

/** Sailboat: two beveled sails over a beveled hull. */
export function SailboatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M10.5 2.75 3.75 14.5H10.5Z" />
      <path strokeLinejoin="bevel" d="M13.5 4.75 20.5 14.5H13.5Z" />
      <path strokeLinejoin="bevel" d="M2.75 17.5H21.25L19.75 20.5H4.25Z" />
    </Icon>
  );
}

/** Fuel pump: body with window line, base, hose looping to the vent. */
export function FuelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 21.25V4.75C4.5 2.91 4.66 2.75 6.5 2.75H12C13.84 2.75 14 2.91 14 4.75V21.25" />
      <path d="M2.75 21.25H15.75" />
      <path d="M4.5 9.5H14" />
      <path d="M14 13.5H15.5C16.88 13.5 17.5 14.12 17.5 15.5V17C17.5 18.1 18.15 18.75 19.25 18.75C20.35 18.75 21 18.1 21 17V9.9C21 9.34 20.83 8.9 20.44 8.51L17.25 5.25" />
    </Icon>
  );
}

/** Luggage: case with TrashIcon's handle and filled wheels. */
export function LuggageIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 6.5H17.5C19.34 6.5 19.5 6.66 19.5 8.5V17.5C19.5 19.34 19.34 19.5 17.5 19.5H6.5C4.66 19.5 4.5 19.34 4.5 17.5V8.5C4.5 6.66 4.66 6.5 6.5 6.5Z" />
      <path d="M9 6.5V4.5C9 3.12 9.12 3 10.5 3H13.5C14.88 3 15 3.12 15 4.5V6.5" />
      <path
        d={squircle(8, 20.9, 1.1) + squircle(16, 20.9, 1.1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Tent: beveled A poles with the door flap inside, ground line. */
export function TentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.25 20.5 12 3.5 20.75 20.5" />
      <path strokeLinejoin="bevel" d="M9 20.5 12 14.75 15 20.5" />
      <path d="M2.25 20.5H21.75" />
    </Icon>
  );
}

/* ---- nature extras ---- */

/** CloudRainIcon's cloud over staggered snow dots. */
export function CloudSnowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path
        d={
          squircle(8.5, 18.75, 1.05) +
          squircle(12.5, 18.25, 1.05) +
          squircle(16.5, 18.75, 1.05) +
          squircle(10.5, 21.25, 1.05) +
          squircle(14.5, 21.25, 1.05)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** CloudSunIcon's sibling: crescent behind the small cloud. */
export function CloudMoonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.1 9A6 6 0 0 1 16 4A4.25 4.25 0 0 0 22 10A6 6 0 0 1 19 15.2" />
      <path d="M13 21.5H7A5 5 0 1 1 11.9 15.5H13A3 3 0 0 1 13 21.5Z" />
    </Icon>
  );
}

/** SunriseIcon with the arrow dropping to the horizon. */
export function SunsetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V9.5" />
      <path strokeLinejoin="bevel" d="M8.5 6 12 9.5 15.5 6" />
      <path d="M16 18A4 4 0 0 0 8 18" />
      <path d="M4.93 11.43 6.34 12.84M2.75 18H4.75M19.25 18H21.25M19.07 11.43 17.66 12.84" />
      <path d="M2.75 21.5H21.25" />
    </Icon>
  );
}

/** Rainbow: three concentric arcs off the same baseline. */
export function RainbowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 17.5A9.25 9.25 0 0 1 21.25 17.5" />
      <path d="M6.25 17.5A5.75 5.75 0 0 1 17.75 17.5" />
      <path d="M9.75 17.5A2.25 2.25 0 0 1 14.25 17.5" />
    </Icon>
  );
}

/** Feather: vane on the 45 with the quill running through. */
export function FeatherIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 19.25V11.5C5.5 11 5.7 10.6 6.05 10.25L11.75 4.55A5.75 5.75 0 0 1 19.88 12.68L13.75 18.8C13.4 19.15 12.95 19.25 12.45 19.25Z" />
      <path d="M16.25 7.75 2.75 21.25" />
      <path d="M17 14.75H9" />
    </Icon>
  );
}

/** Fish: almond body, beveled tail fork, filled eye. */
export function FishIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.75 12C8.9 8.6 12 7 15 7C17.5 7 19.9 8.9 21.25 12C19.9 15.1 17.5 17 15 17C12 17 8.9 15.4 6.75 12Z" />
      <path strokeLinejoin="bevel" d="M6.75 12 2.75 8.5V15.5Z" />
      <path d={squircle(17.5, 10.75, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Bone: knuckle lobes bridged by the shaft, one closed path. */
export function BoneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16.75 9.75C17.45 9.05 18.44 9.75 19.25 9.75A2.5 2.5 0 1 0 19.25 4.75C18.97 4.75 18.75 4.53 18.75 4.25A2.5 2.5 0 1 0 13.75 4.25C13.75 5.06 14.45 6.05 13.75 6.75L6.75 13.75C6.05 14.45 5.06 13.75 4.25 13.75A2.5 2.5 0 0 0 4.25 18.75C4.53 18.75 4.75 18.97 4.75 19.25A2.5 2.5 0 1 0 9.75 19.25C9.75 18.44 9.05 17.45 9.75 16.75Z" />
    </Icon>
  );
}

/* ---- objects extras ---- */

/** T-shirt: drop shoulders into a squircle-cornered body. */
export function ShirtIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 3.6 16.25 2.25A4.25 4.25 0 0 1 7.75 2.25L3.5 3.6C2.7 3.85 2.2 4.6 2.35 5.4L2.9 8.7C2.98 9.2 3.35 9.5 3.85 9.5H6V19.5C6 21.34 6.16 21.5 8 21.5H16C17.84 21.5 18 21.34 18 19.5V9.5H20.15C20.65 9.5 21.02 9.2 21.1 8.7L21.65 5.4C21.8 4.6 21.3 3.85 20.5 3.6Z" />
    </Icon>
  );
}

/** Glasses: squircle lenses, bridge arc, swept temples. */
export function GlassesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6.25, 15, 3.9) + squircle(17.75, 15, 3.9)} />
      <path d="M10.15 14.5C10.6 13.85 11.25 13.5 12 13.5C12.75 13.5 13.4 13.85 13.85 14.5" />
      <path d="M2.5 13.25 4.9 7.4C5.45 6.1 6.3 5.5 7.75 5.5" />
      <path d="M21.5 13.25 19.1 7.4C18.55 6.1 17.7 5.5 16.25 5.5" />
    </Icon>
  );
}

/** Gavel: mallet head faces on the 45, WrenchIcon-weight handle. */
export function GavelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.75 8.25 13.75 2.25M16 16.5 21.75 10.75" />
      <path d="M9.25 6.75 17.25 14.75M20.75 11 12.75 3" />
      <path strokeWidth={2.75} d="M13.5 13.5 4.75 22.25" />
    </Icon>
  );
}

/** Sword: beveled blade to a point, crossguard, grip, pommel. */
export function SwordIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M14.5 17.5 3 6V3H6L17.5 14.5" />
      <path d="M13 19 19 13" />
      <path d="M16 16 20 20" />
      <path d="M19 21 21 19" />
    </Icon>
  );
}

/** Bomb: squircle body with a collar on top, the fuse curling up and out
 *  of it to a filled star spark. A fuse off the body's corner reads as
 *  the Mars symbol. */
export function BombIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11.5, 15, 6.5)} />
      <path d="M9.5 8.75V7H13.5V8.75" />
      <path d="M11.5 7C11.5 4.75 13 3.25 15.25 3.25" />
      <path
        d="M17.75 1.25C17.95 2.65 18.35 3.05 19.75 3.25C18.35 3.45 17.95 3.85 17.75 5.25C17.55 3.85 17.15 3.45 15.75 3.25C17.15 3.05 17.55 2.65 17.75 1.25Z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Life buoy: status ring, squircle hub, four 45-degree spokes. */
export function LifeBuoyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d={squircle(12, 12, 4.25)} />
      <path d="M4.93 4.93 9 9M19.07 4.93 15 9M4.93 19.07 9 15M19.07 19.07 15 15" />
    </Icon>
  );
}

/** Orbit: squircle planet and moons on two broken orbital arcs. */
export function OrbitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 3)} />
      <path d={squircle(19, 5, 2) + squircle(5, 19, 2)} />
      <path d="M10.4 21.87A10 10 0 0 0 20.35 6.5M13.6 2.13A10 10 0 0 0 3.65 17.5" />
    </Icon>
  );
}

/** BatteryIcon with one low cell, cell bar thicker per the tick rule. */
export function BatteryLowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8H17.5C19.34 8 19.5 8.16 19.5 10V14C19.5 15.84 19.34 16 17.5 16H4.5C2.66 16 2.5 15.84 2.5 14V10C2.5 8.16 2.66 8 4.5 8Z" />
      <path d="M21.75 10.5V13.5" />
      <path strokeWidth={2.5} d="M6.25 10.75V13.25" />
    </Icon>
  );
}

/* ---- text & input ---- */

/** I-beam text cursor: serif hooks top and bottom. */
export function TextCursorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 2.75H9.25C10.77 2.75 12 3.98 12 5.5C12 3.98 13.23 2.75 14.75 2.75H15.5" />
      <path d="M8.5 21.25H9.25C10.77 21.25 12 20.02 12 18.5C12 20.02 13.23 21.25 14.75 21.25H15.5" />
      <path d="M12 5.5V18.5" />
    </Icon>
  );
}

/** Backspace: squircle-cornered key with a beveled point and an x. */
export function DeleteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M9.5 4.5H19.5C21.34 4.5 21.5 4.66 21.5 6.5V17.5C21.5 19.34 21.34 19.5 19.5 19.5H9.5L2.75 12Z"
      />
      <path d="M11.5 9.5 16.5 14.5M16.5 9.5 11.5 14.5" />
    </Icon>
  );
}

/** Toggle off: pill track, outline knob at rest. */
export function ToggleLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 6.5H16C19.04 6.5 21.5 8.96 21.5 12C21.5 15.04 19.04 17.5 16 17.5H8C4.96 17.5 2.5 15.04 2.5 12C2.5 8.96 4.96 6.5 8 6.5Z" />
      <path d={squircle(8, 12, 2.6)} />
    </Icon>
  );
}

/** Toggle on: the knob fills to read as engaged. */
export function ToggleRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 6.5H16C19.04 6.5 21.5 8.96 21.5 12C21.5 15.04 19.04 17.5 16 17.5H8C4.96 17.5 2.5 15.04 2.5 12C2.5 8.96 4.96 6.5 8 6.5Z" />
      <path d={squircle(16, 12, 2.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Signature: one looping pen flourish over the rule. */
export function SignatureIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 16.5C5.9 16.1 7.65 11.1 7.15 6.55C7.02 5.4 5.62 5.25 5.32 6.4C4.32 10.2 10.1 11.7 13.75 9.6" />
      <path d="M3 20.5H21" />
    </Icon>
  );
}

/** Stamp: knob handle, waisted neck, block and strike line. */
export function StampIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 21.5H19" />
      <path d="M6.5 13.5H17.5C19.16 13.5 20 14.34 20 16V17C20 17.92 19.92 18 19 18H5C4.08 18 4 17.92 4 17V16C4 14.34 4.84 13.5 6.5 13.5Z" />
      <path d="M14 13.5V9C14 7.5 15 7.3 15 5.5C15 3.84 13.66 2.5 12 2.5C10.34 2.5 9 3.84 9 5.5C9 7.3 10 7.5 10 9V13.5" />
    </Icon>
  );
}

/** Omega: horseshoe bowl on two flat feet. */
export function OmegaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 20.5H9.75V17.4C7.5 16.4 5.75 14.2 5.75 11.4C5.75 7.85 8.55 5.25 12 5.25C15.45 5.25 18.25 7.85 18.25 11.4C18.25 14.2 16.5 16.4 14.25 17.4V20.5H19.5" />
    </Icon>
  );
}

/** Square root: beveled tick into the vinculum. */
export function RadicalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 12.5H6.25L9.5 20.25 13.75 3.75H21" />
    </Icon>
  );
}

/* ---- currency & markets ---- */

export function EuroIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18.75 5.75C17.4 4.5 15.65 3.75 13.75 3.75C9.75 3.75 6.5 7.45 6.5 12C6.5 16.55 9.75 20.25 13.75 20.25C15.65 20.25 17.4 19.5 18.75 18.25" />
      <path d="M4 10H14.5M4 14H13" />
    </Icon>
  );
}

export function PoundSterlingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.25 6.5C17.25 2.17 10.25 2.17 10.25 6.5V13.75C10.25 16.5 9.1 18.25 6.25 18.75H18" />
      <path d="M6.5 12H14" />
    </Icon>
  );
}

export function YenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 10V21M12 10 6.25 2.75M12 10 17.75 2.75" />
      <path d="M6 11.5H18M6 15.5H18" />
    </Icon>
  );
}

/** Bitcoin: BoldIcon's double bowl with protruding stem ticks. */
export function BitcoinIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 4.5H13.25C15.32 4.5 17 6.18 17 8.25C17 10.32 15.32 12 13.25 12H8ZM8 12H14.25C16.32 12 18 13.68 18 15.75C18 17.82 16.32 19.5 14.25 19.5H8Z" />
      <path d="M8 4.5V19.5" />
      <path d="M10.25 2.25V4.5M13.75 2.25V4.5M10.25 19.5V21.75M13.75 19.5V21.75" />
    </Icon>
  );
}

/** Vault: tile door, squircle dial with 45-degree spokes, filled hub. */
export function VaultIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d={squircle(12, 12, 4)} />
      <path d="M14.85 9.15 16.25 7.75M9.15 9.15 7.75 7.75M14.85 14.85 16.25 16.25M9.15 14.85 7.75 16.25" />
      <path d={squircle(12, 12, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Candlesticks: three bodies with wicks at staggered heights. */
export function ChartCandlestickIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 9H7C7.92 9 8 9.08 8 10V14C8 14.92 7.92 15 7 15H5C4.08 15 4 14.92 4 14V10C4 9.08 4.08 9 5 9Z" />
      <path d="M6 9V5.5M6 15V18.5" />
      <path d="M11 4.5H13C13.92 4.5 14 4.58 14 5.5V9.5C14 10.42 13.92 10.5 13 10.5H11C10.08 10.5 10 10.42 10 9.5V5.5C10 4.58 10.08 4.5 11 4.5Z" />
      <path d="M12 4.5V2.5M12 10.5V13.5" />
      <path d="M17 11H19C19.92 11 20 11.08 20 12V16C20 16.92 19.92 17 19 17H17C16.08 17 16 16.92 16 16V12C16 11.08 16.08 11 17 11Z" />
      <path d="M18 11V8M18 17V20.5" />
    </Icon>
  );
}

/** Gantt: ChartBarIcon's frame with staggered task bars. */
export function ChartGanttIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={3} d="M7.5 7H15M10 11.75H17.5M12.5 16.5H19" />
    </Icon>
  );
}

/* ---- hardware & dev extras ---- */

/** Circuit board: tile with two squircle nodes and elbow traces. */
export function CircuitBoardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d={squircle(9, 9, 2)} />
      <path d="M11 9H15C16.38 9 17 8.38 17 7V3.5" />
      <path d={squircle(15, 15, 2)} />
      <path d="M7 20.5V17C7 15.62 7.62 15 9 15H13" />
    </Icon>
  );
}

/** USB: trident - filled tip, squircle and square terminals, base dot.
 *  Outlined terminals this small read as noise at 24px. */
export function UsbIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.9 6.1 12 2.9 14.1 6.1Z" fill="currentColor" stroke="none" />
      <path d="M12 19.5V6.1" />
      <path d="M12 14.5 7.25 12V10.6" />
      <path d={squircle(7.25, 9, 1.25)} fill="currentColor" stroke="none" />
      <path d="M12 11.6 16.75 9.1V7.9" />
      <path d="M15.25 4.4H18.25V7.4H15.25Z" fill="currentColor" stroke="none" />
      <path d={squircle(12, 20.75, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** RAM module: wide tile, chip ticks, edge-connector pins. */
export function MemoryStickIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 7H19.5C21.34 7 21.5 7.16 21.5 9V15C21.5 16.84 21.34 17 19.5 17H4.5C2.66 17 2.5 16.84 2.5 15V9C2.5 7.16 2.66 7 4.5 7Z" />
      <path d="M7 10.5V13.5M12 10.5V13.5M17 10.5V13.5" />
      <path d="M6 17V19.5M10 17V19.5M14 17V19.5M18 17V19.5" />
    </Icon>
  );
}

/** SD card: notched corner, contact pins. */
export function SdCardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M7 2.75H15.5L19 6.25V19.25C19 21.09 18.84 21.25 17 21.25H7C5.16 21.25 5 21.09 5 19.25V4.75C5 2.91 5.16 2.75 7 2.75Z"
      />
      <path d="M8.5 5.5V8.5M11.5 5.5V8.5M14.5 5.5V8.5" />
    </Icon>
  );
}

/** Spreadsheet: the portrait tile ruled into cells. */
export function FileSpreadsheetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M8 12.25H16M8 15.5H16M12 12.25V18.25" />
    </Icon>
  );
}

/** Blocks: an L of tiles hugging a loose square - modular pieces. */
export function BlocksIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 6.5H4.5C3.58 6.5 3.5 6.58 3.5 7.5V19.5C3.5 20.42 3.58 20.5 4.5 20.5H16.5C17.42 20.5 17.5 20.42 17.5 19.5V15C17.5 14.08 17.42 14 16.5 14H10Z" />
      <path d="M14.5 3.5H19.5C20.42 3.5 20.5 3.58 20.5 4.5V9.5C20.5 10.42 20.42 10.5 19.5 10.5H14.5C13.58 10.5 13.5 10.42 13.5 9.5V4.5C13.5 3.58 13.58 3.5 14.5 3.5Z" />
    </Icon>
  );
}

/** BugIcon under the set's "off" slash. */
export function BugOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7)} />
      <path d="M12 6.5V20.5" />
      <path strokeWidth={2.5} d="M7 3.5 9.75 7M17 3.5 14.25 7" />
      <path
        strokeWidth={2.5}
        d="M5.4 11.5 2 10M18.6 11.5 22 10M5.6 16.5 2.25 18.75M18.4 16.5 21.75 18.75"
      />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Unplug: the two connector halves pulled apart on the 45. */
export function UnplugIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 6 14.3 3.7C15.24 2.76 16.56 2.76 17.5 3.7L20.3 6.5C21.24 7.44 21.24 8.76 20.3 9.7L18 12Z"
      />
      <path
        strokeLinejoin="bevel"
        d="M6 12 3.7 14.3C2.76 15.24 2.76 16.56 3.7 17.5L6.5 20.3C7.44 21.24 8.76 21.24 9.7 20.3L12 18Z"
      />
      <path d="M21.25 2.75 19 5M2.75 21.25 5 19" />
      <path d="M7.5 13.5 10 11M10.5 16.5 13 14" />
    </Icon>
  );
}

/* ---- devices & media extras ---- */

/** Headset: HeadphonesIcon's band and cups with a mic boom. */
export function HeadsetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 16V12A8.5 8.5 0 0 1 20.5 12V16" />
      <path d="M6.5 11.5H5C3.66 11.5 3.5 11.66 3.5 13.5V16C3.5 17.84 3.66 18 5 18H6.5Z" />
      <path d="M17.5 11.5H19C20.34 11.5 20.5 11.66 20.5 13.5V16C20.5 17.84 20.34 18 19 18H17.5Z" />
      <path d="M20.5 16V17.5C20.5 19.7 18.7 21.5 16.5 21.5H12" />
    </Icon>
  );
}

/** Webcam: squircle eye on a stand. */
export function WebcamIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 10, 7.75)} />
      <path d={squircle(12, 10, 3)} />
      <path d="M12 17.75V21.25M7.5 21.25H16.5" />
    </Icon>
  );
}

/** PhoneIcon cut in two by a mirrored "off" slash - the set's usual
 *  slash runs along the handset and vanishes into it. */
export function PhoneOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.61 15.39C12.26 15.85 12.96 16.26 13.7 16.6L14.95 15.1C15.28 14.7 15.8 14.53 16.3 14.65L19.42 15.4C20.05 15.55 20.5 16.1 20.5 16.75V18.9C20.5 20 19.6 20.9 18.5 20.8C14.76 20.48 11.68 19.44 9.28 17.72M6.28 14.72C4.56 12.32 3.52 9.24 3.2 5.5C3.1 4.4 4 3.5 5.1 3.5H7.25C7.9 3.5 8.45 3.95 8.6 4.58L9.35 7.7C9.47 8.2 9.3 8.72 8.9 9.05L7.4 10.3C7.74 11.04 8.15 11.74 8.61 12.39" />
      <path d="M19 5 5 19" />
    </Icon>
  );
}

/** Piano: keybed tile, two thick black keys over a single divider -
 *  fewer verticals so the keys stay distinct at 24px. */
export function PianoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V17C21.5 18.84 21.34 19 19.5 19H4.5C2.66 19 2.5 18.84 2.5 17V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d="M12 12.5V19" />
      <path strokeWidth={3} d="M8.25 5V10.5M15.75 5V10.5" />
    </Icon>
  );
}

/** Joystick: squircle ball on a stick, side switch, base tile. */
export function JoystickIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 15.5H19C20.84 15.5 21 15.66 21 17.5V18.5C21 20.34 20.84 20.5 19 20.5H5C3.16 20.5 3 20.34 3 18.5V17.5C3 15.66 3.16 15.5 5 15.5Z" />
      <path d="M12 15.5V9.5" />
      <path d={squircle(12, 6.5, 3)} />
      <path d="M6.5 15.5V13" />
    </Icon>
  );
}

/** BatteryIcon at full charge, cell bars thicker per the tick rule. */
export function BatteryFullIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8H17.5C19.34 8 19.5 8.16 19.5 10V14C19.5 15.84 19.34 16 17.5 16H4.5C2.66 16 2.5 15.84 2.5 14V10C2.5 8.16 2.66 8 4.5 8Z" />
      <path d="M21.75 10.5V13.5" />
      <path strokeWidth={2.5} d="M6.25 10.75V13.25M9.75 10.75V13.25M13.25 10.75V13.25" />
    </Icon>
  );
}

/** Desk lamp: beveled shade, stem, domed base. */
export function LampIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M8 3.5H16L18.5 10H5.5Z" />
      <path d="M12 10V17.5" />
      <path d="M8.5 20.5C8.5 18.84 9.9 17.5 12 17.5C14.1 17.5 15.5 18.84 15.5 20.5Z" />
    </Icon>
  );
}

/** Shower head: quarter-round head sealed on the 45, arm, spray dots. */
export function ShowerHeadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 3.5 6 6" />
      <path d="M13.75 6.75A5 5 0 0 0 6.75 13.75" />
      <path d="M15 5.5 5.5 15" />
      <path
        d={
          squircle(13.75, 17, 0.95) +
          squircle(17, 13.75, 0.95) +
          squircle(16, 20.25, 0.95) +
          squircle(20.25, 16, 0.95)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- UI & navigation extras ---- */

/** Dashboard: LayoutGridIcon's cousin with mixed pane heights. */
export function LayoutDashboardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.5H9.5C10.42 3.5 10.5 3.58 10.5 4.5V12.5C10.5 13.42 10.42 13.5 9.5 13.5H4C3.08 13.5 3 13.42 3 12.5V4.5C3 3.58 3.08 3.5 4 3.5Z" />
      <path d="M14.5 3.5H20C20.92 3.5 21 3.58 21 4.5V8.5C21 9.42 20.92 9.5 20 9.5H14.5C13.58 9.5 13.5 9.42 13.5 8.5V4.5C13.5 3.58 13.58 3.5 14.5 3.5Z" />
      <path d="M14.5 13.5H20C20.92 13.5 21 13.58 21 14.5V19.5C21 20.42 20.92 20.5 20 20.5H14.5C13.58 20.5 13.5 20.42 13.5 19.5V14.5C13.5 13.58 13.58 13.5 14.5 13.5Z" />
      <path d="M4 17.5H9.5C10.42 17.5 10.5 17.58 10.5 18.5V19.5C10.5 20.42 10.42 20.5 9.5 20.5H4C3.08 20.5 3 20.42 3 19.5V18.5C3 17.58 3.08 17.5 4 17.5Z" />
    </Icon>
  );
}

/** Click: PointerIcon's arrow with radiating ticks. */
export function MousePointerClickIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9.75 9.75 20.25 13.75 15.75 15.75 13.75 20.25Z" />
      <path d="M8 2.25 8.75 5.25M2.25 8 5.25 8.75M2.9 14.1 5.1 11.9M14.1 2.9 11.9 5.1" />
    </Icon>
  );
}

/** GPS arrow: beveled dart. */
export function NavigationIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 19 21.25 12 17.25 5 21.25Z" />
    </Icon>
  );
}

/** Corner-down-right: EnterIcon's elbow mirrored outward. */
export function CornerDownRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5V10.5C4.5 13.26 4.74 13.5 7.5 13.5H19.75" />
      <path strokeLinejoin="bevel" d="M15.5 9.25 19.75 13.5 15.5 17.75" />
    </Icon>
  );
}

/** Half star: StarIcon's left five points closed up the center seam. */
export function StarHalfIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 3.25 9.56 9.64 2.73 9.99 8.05 14.28 6.27 20.89 12 16.9Z"
      />
    </Icon>
  );
}

/** Siren: dome on a plinth with rays. */
export function SirenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.25 18V12.5A4.75 4.75 0 0 1 16.75 12.5V18" />
      <path d="M6.5 18H17.5C18.88 18 19.5 18.62 19.5 20V20.5C19.5 21.42 19.42 21.5 18.5 21.5H5.5C4.58 21.5 4.5 21.42 4.5 20.5V20C4.5 18.62 5.12 18 6.5 18Z" />
      <path d="M12 12V18" />
      <path d="M12 2.25V4M4.4 4.9 5.65 6.15M19.6 4.9 18.35 6.15M2.25 12H4M20 12H21.75" />
    </Icon>
  );
}

/** CalendarIcon with an x. */
export function CalendarXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M9.75 13 14.25 17.5M14.25 13 9.75 17.5" />
    </Icon>
  );
}

/** ListIcon with a plus in the tail. */
export function ListPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 6.5H20.5M8.5 12H20.5M8.5 17.5H12.5" />
      <path
        d={
          squircle(4.5, 6.5, 1.2) +
          squircle(4.5, 12, 1.2) +
          squircle(4.5, 17.5, 1.2)
        }
        fill="currentColor"
        stroke="none"
      />
      <path d="M18 14.75V20.25M15.25 17.5H20.75" />
    </Icon>
  );
}

/** DoorOpenIcon's shut sibling: full frame, filled knob. */
export function DoorClosedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 20.5V5C4.5 3.16 4.66 3 6.5 3H17.5C19.34 3 19.5 3.16 19.5 5V20.5" />
      <path d="M2.75 20.5H21.25" />
      <path d={squircle(15.5, 12.5, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Mailbox: barrel body, front-door arc, raised flag, slot tick. */
export function MailboxIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 17V9.5C2.5 7 4.5 5 7 5H17.5C19.7 5 21.5 6.8 21.5 9V17C21.5 18.84 21.34 19 19.5 19H4.5C2.66 19 2.5 18.84 2.5 17Z" />
      <path d="M7 5C9.5 5 11.5 7 11.5 9.5V19" />
      <path d="M15 9H18.25V11.25" />
      <path d="M6 10H7.5" />
    </Icon>
  );
}

/** Mirror left: bracket halves with a dashed axis. */
export function FlipHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 3.5H5.5C4.4 3.5 3.5 4.4 3.5 5.5V18.5C3.5 19.6 4.4 20.5 5.5 20.5H8" />
      <path d="M16 3.5H18.5C19.6 3.5 20.5 4.4 20.5 5.5V18.5C20.5 19.6 19.6 20.5 18.5 20.5H16" />
      <path d="M12 2.25V4.25M12 8V10M12 14V16M12 19.75V21.75" />
    </Icon>
  );
}

/** FlipHorizontalIcon turned on its side. */
export function FlipVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 8V5.5C3.5 4.4 4.4 3.5 5.5 3.5H18.5C19.6 3.5 20.5 4.4 20.5 5.5V8" />
      <path d="M3.5 16V18.5C3.5 19.6 4.4 20.5 5.5 20.5H18.5C19.6 20.5 20.5 19.6 20.5 18.5V16" />
      <path d="M2.25 12H4.25M8 12H10M14 12H16M19.75 12H21.75" />
    </Icon>
  );
}

/* ---- people & body ---- */

/** Universal access: filled head, open arms, beveled stance. */
export function AccessibilityIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 4.75, 1.9)} fill="currentColor" stroke="none" />
      <path d="M4.75 9.25C9.6 10.6 14.4 10.6 19.25 9.25" />
      <path d="M12 10.25V14" />
      <path strokeLinejoin="bevel" d="M8.25 20.75 12 14 15.75 20.75" />
    </Icon>
  );
}

/** Standing figure: filled head, raised arms, beveled legs. */
export function PersonStandingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 4.5, 1.9)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M6.75 8.5 12 10.25 17.25 8.5" />
      <path d="M12 10.25V14" />
      <path strokeLinejoin="bevel" d="M9 20.75 12 14 15 20.75" />
    </Icon>
  );
}

/** Footprints: offset left and right soles with toe bars. */
export function FootprintsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 15.5V13.6C4 11.5 3 10.5 3 8.25C3 5.75 4.4 2.75 7.1 2.75C8.8 2.75 9.5 4.4 9.5 6C9.5 8.9 7.75 11.25 7.75 14V15.5C7.75 16.54 6.91 17.4 5.9 17.4C4.85 17.4 4 16.54 4 15.5Z" />
      <path d="M4 12.9H7.75" />
      <path d="M20 19.5V17.6C20 15.5 21 14.5 21 12.25C21 9.75 19.6 6.75 16.9 6.75C15.2 6.75 14.5 8.4 14.5 10C14.5 12.9 16.25 15.25 16.25 18V19.5C16.25 20.54 17.09 21.4 18.1 21.4C19.15 21.4 20 20.54 20 19.5Z" />
      <path d="M16.25 16.9H20" />
    </Icon>
  );
}

/** Ear: outer helix sweeping into the lobe, inner curl. */
export function EarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.75 8.5A6.25 6.25 0 0 1 18.25 8.5C18.25 14.25 12.5 14.25 12.5 18.25A3.4 3.4 0 0 1 5.7 18.25" />
      <path d="M15 8.5A2.5 2.5 0 0 0 10 8.5V9.5A2 2 0 1 1 10 13.5" />
    </Icon>
  );
}

/** Medal: Y ribbons over a squircle disc with a filled boss. */
export function MedalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8.9 10.85 5.1 4.5H9.6L12 8.5 14.4 4.5H18.9L15.1 10.85"
      />
      <path d={squircle(12, 15.5, 5.25)} />
      <path d={squircle(12, 15.5, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Baby: wobble-cheeked face with a hair curl, dot eyes, small smile. */
export function BabyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19 6.55A8.75 8.75 0 0 1 20.75 10.35A2 2 0 0 1 20.75 13.85A8.75 8.75 0 0 1 3.25 13.85A2 2 0 0 1 3.25 10.35A8.75 8.75 0 0 1 12 3.25C14 3.25 15.4 4.3 15.4 5.65C15.4 7 14.5 7.9 13.5 7.9C12.7 7.9 12 7.5 12 6.9" />
      <path
        d={squircle(9, 12, 1.05) + squircle(15, 12, 1.05)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M10 16C10.5 16.3 11.2 16.5 12 16.5C12.8 16.5 13.5 16.3 14 16" />
    </Icon>
  );
}

/* ---- medical extras ---- */

/** Medical cross: one squircle-cornered plus outline. */
export function CrossIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 3.5H14.5C15.42 3.5 15.5 3.58 15.5 4.5V8.5H19.5C20.42 8.5 20.5 8.58 20.5 9.5V14.5C20.5 15.42 20.42 15.5 19.5 15.5H15.5V19.5C15.5 20.42 15.42 20.5 14.5 20.5H9.5C8.58 20.5 8.5 20.42 8.5 19.5V15.5H4.5C3.58 15.5 3.5 15.42 3.5 14.5V9.5C3.5 8.58 3.58 8.5 4.5 8.5H8.5V4.5C8.5 3.58 8.58 3.5 9.5 3.5Z" />
    </Icon>
  );
}

/** Tooth: twin lobes into forked roots. */
export function ToothIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5.5C10.75 4.25 9.25 3.5 7.75 3.5C5 3.5 3.5 5.75 3.5 8.25C3.5 12.75 6 13 6.5 16.5C6.75 18.25 7 20.5 8.75 20.5C10.75 20.5 9.75 15.5 12 15.5C14.25 15.5 13.25 20.5 15.25 20.5C17 20.5 17.25 18.25 17.5 16.5C18 13 20.5 12.75 20.5 8.25C20.5 5.75 19 3.5 16.25 3.5C14.75 3.5 13.25 4.25 12 5.5Z" />
    </Icon>
  );
}

/** Virus: GearIcon's thick-tick spikes on a small body, inner dots. */
export function VirusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 5.5)} />
      <path strokeWidth={2.5} d="M12 6.5V3M12 17.5V21M17.5 12H21M6.5 12H3" />
      <path
        strokeWidth={2.5}
        d="M15.89 8.11 18.36 5.64M15.89 15.89 18.36 18.36M8.11 15.89 5.64 18.36M8.11 8.11 5.64 5.64"
      />
      <path
        d={squircle(10.75, 11, 1.1) + squircle(13.75, 13.5, 0.85)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Pill bottle: cap tile, body, wrapped label. */
export function PillBottleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 2.5H19C19.92 2.5 20 2.58 20 3.5V6C20 6.92 19.92 7 19 7H5C4.08 7 4 6.92 4 6V3.5C4 2.58 4.08 2.5 5 2.5Z" />
      <path d="M6 7V19.5C6 21.34 6.16 21.5 8 21.5H16C17.84 21.5 18 21.34 18 19.5V7" />
      <path d="M18 11.5H14C13.08 11.5 13 11.58 13 12.5V16.5C13 17.42 13.08 17.5 14 17.5H18" />
    </Icon>
  );
}

/* ---- animals ---- */

/** Bird: perched profile - body sweep, filled eye, beveled beak, legs. */
export function BirdIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.4 18H12A8 8 0 0 0 20 10V7A4 4 0 0 0 12.72 4.7L2.25 19.9" />
      <path d={squircle(16, 7, 1)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M19.9 6.75 21.9 7.5 19.9 8.25" />
      <path d="M7 18A6 6 0 0 0 10.85 7.4" />
      <path d="M10 18V21M14 17.75V21" />
    </Icon>
  );
}

/** Cat: tufted ears into a round face, filled eyes, nose wedge. */
export function CatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5C12.67 5 13.35 5.09 14 5.26C15.78 3.26 19.03 2.42 20.42 3C21.82 3.58 20 10 20 10C20.57 11.07 21 12.24 21 13.44C21 17.9 16.97 21 12 21C7.03 21 3 18 3 13.44C3 12.19 3.5 11.04 4 10C4 10 2.11 3.58 3.5 3C4.89 2.42 8.22 3.23 10 5.23C10.66 5.08 11.33 5 12 5Z" />
      <path
        d={squircle(8, 13.5, 1.05) + squircle(16, 13.5, 1.05)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M11.1 16.1H12.9L12 17.4Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Dog: floppy ears, jowled muzzle, filled eyes and nose. */
export function DogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 8.5C8.12 9.55 7.42 10.53 6.16 11C4.23 11.72 2.58 10.7 2.5 10C2.39 9 3.68 3.47 6.5 3C8.42 2.68 10.15 3.85 10.15 5.24A7.5 7.5 0 0 1 14 4.86C14 3.47 15.84 2.26 17.77 2.58C20.59 3.05 21.88 8.59 21.77 9.58C21.69 10.28 20.04 11.3 18.11 10.58C16.85 10.11 16.26 9.13 15.87 8.08" />
      <path d="M4.42 11.25A13.15 13.15 0 0 0 4 14.56C4 18.73 7.58 21 12 21C16.42 21 20 18.73 20 14.56C20 13.43 19.84 12.32 19.51 11.25" />
      <path
        d={squircle(8, 14, 1.05) + squircle(16, 14, 1.05)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M11.1 16.1H12.9L12 17.4Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Turtle: domed shell between head and tail, seam ticks, ground. */
export function TurtleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 10 14 14V17C14 17.92 14.08 18 15 18H17C17.92 18 18 17.92 18 17V14A8 8 0 1 0 2 14V17C2 17.92 2.08 18 3 18H5C5.92 18 6 17.92 6 17V14L8 10Z"
      />
      <path d="M4.82 7.9 8 10M15.18 7.9 12 10" />
      <path d="M16.93 10H20A2 2 0 0 1 20 14H2" />
    </Icon>
  );
}

/** Snail: nested-arc spiral shell, long neck, antennae. */
export function SnailIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 13A6 6 0 1 0 14.5 13A4 4 0 1 0 6.5 13A2 2 0 0 0 10.5 13" />
      <path d="M2.5 21H14C18.4 21 22 17.4 22 13V7A2 2 0 1 0 18 7V13" />
      <path d="M18 3 19.1 5.2M22 3 20.9 5.2" />
    </Icon>
  );
}

/* ---- plants & sky ---- */

/** Round tree: three lobed canopy on a trunk, TreePineIcon's sibling. */
export function TreeDeciduousIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 19A4 4 0 0 1 5.76 11.68A3.5 3.5 0 0 1 9 6.03V6A3 3 0 1 1 15 6V6.04A3.5 3.5 0 0 1 18.24 11.69A4 4 0 0 1 16 19Z" />
      <path d="M12 19V21.5" />
    </Icon>
  );
}

/** Tulip: beveled bud, stem, two sweeping leaves. */
export function TulipIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M8.5 3.25V6.5A3.5 3.5 0 0 0 15.5 6.5V3.25L12 5.25Z" />
      <path d="M12 10V21.25" />
      <path d="M12 16.5C12 13.4 9.9 11.75 7 11.75C7 14.85 9.1 16.5 12 16.5Z" />
      <path d="M12 19.5C12 16.4 14.1 14.75 17 14.75C17 17.85 14.9 19.5 12 19.5Z" />
    </Icon>
  );
}

/** Saguaro: domed trunk with two raised arms, ground line. */
export function CactusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 21.5V5.75C9.5 4.09 10.59 2.75 12 2.75C13.41 2.75 14.5 4.09 14.5 5.75V21.5" />
      <path d="M9.5 13.25H8.25C7.15 13.25 6.5 12.6 6.5 11.5V8.25" />
      <path d="M14.5 11.25H15.75C16.85 11.25 17.5 10.6 17.5 9.5V6.75" />
      <path d="M6.5 21.5H17.5" />
    </Icon>
  );
}

/** Mushroom: domed cap with filled spots, waisted stem. */
export function MushroomIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 11C3.5 6.3 7.3 2.75 12 2.75C16.7 2.75 20.5 6.3 20.5 11C20.5 11.92 20.42 12 19.5 12H4.5C3.58 12 3.5 11.92 3.5 11Z" />
      <path d="M9.5 12 9 19.5C8.95 20.6 9.7 21.25 10.75 21.25H13.25C14.3 21.25 15.05 20.6 15 19.5L14.5 12" />
      <path
        d={
          squircle(8.5, 7.5, 1.05) +
          squircle(14.5, 5.9, 0.9) +
          squircle(15.9, 8.9, 0.95)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** MountainIcon with a wavy snow line across its whole face - a snow cap
 *  at the peak alone is too small to see at 24px. */
export function MountainSnowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M8 3.5 12 11.5 17 6.5 21.5 20.5H2.5Z" />
      <path d="M4.45 14.5C7 13 9.5 13.25 12 14.75C14.5 16.25 17.25 16 19.55 14.5" />
    </Icon>
  );
}

/** Tornado: funnel of shrinking, drifting bars. */
export function TornadoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 4.5H21M6 8.5H18M9.5 12.5H19M10 16.5H16M9 20.5H11.5" />
    </Icon>
  );
}

/** CloudRainIcon's cloud over fog bars. */
export function CloudFogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path d="M5.5 18.5H18.5M8 21.5H16" />
    </Icon>
  );
}

/** Ringed planet: squircle body through a flat ellipse ring. */
export function PlanetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 6.25)} />
      <path d="M2.25 12C2.25 13.52 6.62 14.75 12 14.75C17.38 14.75 21.75 13.52 21.75 12C21.75 10.48 17.38 9.25 12 9.25C6.62 9.25 2.25 10.48 2.25 12Z" />
    </Icon>
  );
}

/* ---- food & drink extras ---- */

/** Banana: crescent with an inner rib. */
export function BananaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 13C7.5 11 12 11 14 15A5.5 5.5 0 0 1 22 20" />
      <path d="M5.15 17.89C10.67 16.37 13.8 11 12.15 5.89C11.55 4 11.5 2 13 2C16.22 2 18 7.5 18 10C18 16.5 13.8 22 7.51 22C5.11 22 2 22 2 20C2 18.5 3.14 18.45 5.15 17.89Z" />
    </Icon>
  );
}

/** Cherries: two squircle drupes on stems meeting at the stalk. */
export function CherryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(7, 16.5, 4.25)} />
      <path d={squircle(17, 17.25, 3.4)} />
      <path d="M7 12.25C7.3 8.2 10.2 4.6 15.5 3.25" />
      <path d="M17 13.85C16.7 9.7 16.2 6.4 15.5 3.25" />
    </Icon>
  );
}

/** Carrot: tapered root with rib ticks and leaf fronds. */
export function CarrotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.27 21.7C2.27 21.7 12.14 18.2 15 15.34C16.76 13.58 16.76 10.73 15 8.98C13.24 7.22 10.39 7.22 8.64 8.98C5.77 11.84 2.27 21.7 2.27 21.7Z" />
      <path d="M8.64 14 6.59 11.96M15.34 15 12.88 12.54" />
      <path d="M22 9C22 9 20.67 7 18.5 7C16.86 7 15 9 15 9C15 9 16.33 11 18.5 11C20.67 11 22 9 22 9Z" />
      <path d="M15 2C15 2 13 3.33 13 5.5C13 7.67 15 9 15 9C15 9 17 7.16 17 5.5C17 3.33 15 2 15 2Z" />
    </Icon>
  );
}

/** Burger: seeded dome bun, filling line, squircle-cornered base. */
export function BurgerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 10.5C3.5 6.3 7.3 3.25 12 3.25C16.7 3.25 20.5 6.3 20.5 10.5Z" />
      <path d="M3.5 14H20.5" />
      <path d="M3.5 17.5H20.5V18C20.5 19.66 19.16 21 17.5 21H6.5C4.84 21 3.5 19.66 3.5 18Z" />
      <path
        d={
          squircle(9, 6.75, 0.85) +
          squircle(13.75, 5.75, 0.85) +
          squircle(15.9, 7.9, 0.85)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Croissant: crescent body with wing folds. */
export function CroissantIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.6 13.11 10.39 9.9C12.28 8.85 15.18 11.68 14.1 13.61L10.88 19.42C8.8 23.16 0.79 15.23 4.6 13.11Z" />
      <path d="M10.5 9.5 9.5 7.21C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5A7.71 7.71 0 0 0 4 13.33" />
      <path d="M8 6C8 4.45 8.24 2 6 2C4 2 3.5 4.17 3.5 6" />
      <path d="M14.5 13.5 16.79 14.5C17.52 14.8 18 15.2 18 16V19.5C18 21.21 17.5 22 15.5 22A7.71 7.71 0 0 1 10.67 20" />
      <path d="M18 16C19.55 16 22 15.76 22 18C22 20 19.83 20.5 18 20.5" />
    </Icon>
  );
}

/** Donut: two rings with filled sprinkles between. */
export function DonutIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d={squircle(12, 12, 3.25)} />
      <path
        d={
          squircle(8, 7.5, 0.8) +
          squircle(15.5, 6.9, 0.8) +
          squircle(18, 11.5, 0.8) +
          squircle(6.2, 12.9, 0.8) +
          squircle(13, 17.6, 0.8)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Wrapped candy: capsule on the 45 with pinched twist wrappers. */
export function CandyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 7.5 7.5 9.5A4.95 4.95 0 1 0 14.5 16.5L16.5 14.5A4.95 4.95 0 1 0 9.5 7.5Z" />
      <path d="M14 6.5V16.5M10 7.5V17.5" />
      <path
        strokeLinejoin="bevel"
        d="M16 7 17 2 18.37 2.68A3 3 0 0 0 19.7 3H21V4.3C21 4.76 21.1 5.22 21.32 5.63L22 7 17 8"
      />
      <path
        strokeLinejoin="bevel"
        d="M8 17 7 22 5.63 21.32A3 3 0 0 0 4.3 21H3V19.7C3 19.24 2.9 18.78 2.68 18.37L2 17 7 16"
      />
    </Icon>
  );
}

/** Cup of soda: tapered cup, rim, straw. */
export function CupSodaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 8.5 7.5 20.1C7.63 21 8.3 21.5 9.2 21.5H14.8C15.7 21.5 16.37 21 16.5 20.1L18 8.5" />
      <path d="M5 8.5H19" />
      <path d="M12 8.5 13 2.75H15.25" />
    </Icon>
  );
}

/** Chef hat: puffed crown gathered into a band. */
export function ChefHatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17 21.25C17.92 21.25 18 21.17 18 20.25V14.9C18 14.44 18.32 14.06 18.73 13.86A4 4 0 0 0 16.6 6.27A5 5 0 0 0 7.4 6.27A4 4 0 0 0 5.27 13.86C5.68 14.06 6 14.44 6 14.9V20.25C6 21.17 6.08 21.25 7 21.25Z" />
      <path d="M6 17.25H18" />
    </Icon>
  );
}

/** Drumstick: rotated-ellipse meat with a twin-lobed bone grip. */
export function DrumstickIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.4 15.63A7.875 6 135 1 1 21.63 9.4A4.5 3.43 135 0 0 15.4 15.63" />
      <path d="M8.29 12.71 5.69 15.31A2.5 2.5 0 1 0 4.04 19.96A2.5 2.5 0 1 0 8.69 18.31L11.29 15.71" />
    </Icon>
  );
}

/** Soup: half-round bowl under three steam waves. */
export function SoupIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C16.97 20.5 21 16.47 21 11.5H3C3 16.47 7.03 20.5 12 20.5Z" />
      <path d="M7.75 8.5C7.75 7.25 8.75 7 8.75 5.75C8.75 4.5 7.75 4.25 7.75 3M12 8.5C12 7.25 13 7 13 5.75C13 4.5 12 4.25 12 3M16.25 8.5C16.25 7.25 15.25 7 15.25 5.75C15.25 4.5 16.25 4.25 16.25 3" />
    </Icon>
  );
}

/** Cooking pot: rim, body, and a spoon resting across. */
export function CookingPotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 12H21.5" />
      <path d="M19.5 12V19.5C19.5 21.34 19.34 21.5 17.5 21.5H6.5C4.66 21.5 4.5 21.34 4.5 19.5V12" />
      <path d="M4.5 8.25 19.5 4.5" />
      <path d="M8.86 6.78 8.41 4.97C8.14 3.9 8.79 2.81 9.86 2.54L11.8 2.06C12.87 1.79 13.96 2.44 14.23 3.52L14.68 5.32" />
    </Icon>
  );
}

/* ---- buildings & outdoors ---- */

/** Castle: battlement posts, twin towers, arched gate. */
export function CastleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 11.5H21.5V19.5C21.5 21.34 21.34 21.5 19.5 21.5H4.5C2.66 21.5 2.5 21.34 2.5 19.5Z" />
      <path d="M18 11.5V4.5H6V11.5" />
      <path d="M15 21.5V18A3 3 0 0 0 9 18V21.5" />
      <path d="M2.5 11.5V9M21.5 11.5V9M6 4.5V2.5M10 4.5V2.5M14 4.5V2.5M18 4.5V2.5" />
    </Icon>
  );
}

/** Church: cross over a gabled nave with side wings and door. */
export function ChurchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 8.75H14M12 6.75V11.75" />
      <path d="M18 21.5V6.1C18 5.72 17.79 5.37 17.45 5.2L12.9 2.93C12.33 2.64 11.67 2.64 11.1 2.93L6.55 5.2C6.21 5.37 6 5.72 6 6.1V21.5" />
      <path d="M18 7.5 20.95 8.97C21.29 9.14 21.5 9.49 21.5 9.87V19.5C21.5 21.34 21.34 21.5 19.5 21.5H4.5C2.66 21.5 2.5 21.34 2.5 19.5V9.87C2.5 9.49 2.71 9.14 3.05 8.97L6 7.5" />
      <path d="M14 21.5V18A2 2 0 0 0 10 18V21.5" />
    </Icon>
  );
}

/** Hospital: tower with a medical plus, low side wings. */
export function HospitalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 21.5V4.5C18 2.66 17.84 2.5 16 2.5H8C6.16 2.5 6 2.66 6 4.5V21.5" />
      <path d="M18 12H19.5C21.34 12 21.5 12.16 21.5 14V19.5C21.5 21.34 21.34 21.5 19.5 21.5H4.5C2.66 21.5 2.5 21.34 2.5 19.5V14C2.5 12.16 2.66 12 4.5 12H6" />
      <path d="M12 5.75V9.75M10 7.75H14" />
      <path d="M10 13.5H14M10 17.5H14" />
    </Icon>
  );
}

/** Lighthouse: tapered tower, lamp room, beveled roof, beams. */
export function LighthouseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9.5 8.5 8 21.5H16L14.5 8.5Z" />
      <path d="M9.5 8.5V5.75H14.5V8.5" />
      <path strokeLinejoin="bevel" d="M9 5.75 12 3 15 5.75" />
      <path d="M8.85 14.25H15.15" />
      <path d="M7 7.25H3.75M17 7.25H20.25M7.4 4.4 4.6 2.9M16.6 4.4 19.4 2.9" />
      <path d="M5.5 21.5H18.5" />
    </Icon>
  );
}

/** Roadwork barrier: striped board on posts and legs. */
export function ConstructionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 6H20.5C21.42 6 21.5 6.08 21.5 7V13C21.5 13.92 21.42 14 20.5 14H3.5C2.58 14 2.5 13.92 2.5 13V7C2.5 6.08 2.58 6 3.5 6Z" />
      <path d="M7 14V21M17 14V21" />
      <path d="M7 3V6M17 3V6" />
      <path d="M10.75 14 5 8.25M16.5 6 8.5 14M21.5 8.75 16.25 14" />
    </Icon>
  );
}

/** Hard hat: ribbed crown over a full brim. */
export function HardHatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 10.5V5.5C10 4.58 10.08 4.5 11 4.5H13C13.92 4.5 14 4.58 14 5.5V10.5" />
      <path d="M14 6.6A6 6 0 0 1 20 12.5V15M4 15V12.5A6 6 0 0 1 10 6.6" />
      <path d="M3.5 15H20.5C21.42 15 21.5 15.08 21.5 16V18C21.5 18.92 21.42 19 20.5 19H3.5C2.58 19 2.5 18.92 2.5 18V16C2.5 15.08 2.58 15 3.5 15Z" />
    </Icon>
  );
}

/** Fence: three pointed pickets, beveled tips. */
export function FenceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 21.5V6L6.5 4 8.5 6V21.5" />
      <path strokeLinejoin="bevel" d="M10 21.5V6L12 4 14 6V21.5" />
      <path strokeLinejoin="bevel" d="M15.5 21.5V6L17.5 4 19.5 6V21.5" />
    </Icon>
  );
}

/* ---- tools & workshop ---- */

/** Pickaxe: beveled crescent head on a thick handle, tilted 45 degrees -
 *  upright, the arc on a stick reads as an umbrella. */
export function PickaxeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M7.4 4.22C14.83 2.67 21.33 9.17 19.78 16.6C19.28 11.65 12.35 4.72 7.4 4.22Z"
      />
      <path strokeWidth={2.5} d="M16.84 7.16 4.25 19.75" />
    </Icon>
  );
}

/** Shovel: D-grip, shaft on the 45, beveled spade blade. */
export function ShovelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.5 21.5V17L7 12.5 11.5 17 7 21.5Z" />
      <path d="M9.25 14.75 16 8" />
      <path d="M16.75 2.25 21.75 7.25 21.25 7.75C19.85 9.15 17.65 9.15 16.25 7.75C14.85 6.35 14.85 4.15 16.25 2.75Z" />
    </Icon>
  );
}

/** Axe: bit sweeping off the shoulder, thick handle. */
export function AxeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15 15.5C15 15.78 15.22 16 15.5 16A6.5 6.5 0 0 0 22 9.5C22 9.22 21.78 9 21.5 9H19.83C19.3 9 18.79 8.79 18.41 8.41L13.35 3.35C12.88 2.88 12.12 2.88 11.65 3.35L9.35 5.65C8.88 6.12 8.88 6.88 9.35 7.35L14.41 12.41C14.79 12.79 15 13.3 15 13.83Z" />
      <path strokeWidth={2.75} d="M13.25 12.75 4.5 21.5" />
    </Icon>
  );
}

/** Anvil: horn, face, waist legs, base tile. */
export function AnvilIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 10H6A4 4 0 0 1 2 6C2 5.08 2.08 5 3 5H7" />
      <path d="M7 5C7 4.08 7.08 4 8 4H21C21.92 4 22 4.08 22 5A7 7 0 0 1 15 12H8C7.08 12 7 11.92 7 11Z" />
      <path d="M9 12V18.5M15 12V18.5" />
      <path d="M5 19.5C5 18.58 5.08 18.5 6 18.5H18C18.92 18.5 19 18.58 19 19.5V20.5C19 21.42 18.92 21.5 18 21.5H6C5.08 21.5 5 21.42 5 20.5Z" />
    </Icon>
  );
}

/** Paint roller: sleeve tile, frame arm, grip. */
export function PaintRollerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 2.75H15.5C17.34 2.75 17.5 2.91 17.5 4.75V6.25C17.5 8.09 17.34 8.25 15.5 8.25H4.5C2.66 8.25 2.5 8.09 2.5 6.25V4.75C2.5 2.91 2.66 2.75 4.5 2.75Z" />
      <path d="M10 16.5V14.5C10 13.4 10.9 12.5 12 12.5H19.5C20.6 12.5 21.5 11.6 21.5 10.5V7.5C21.5 6.4 20.6 5.5 19.5 5.5H17.5" />
      <path d="M9 16.5H11C11.92 16.5 12 16.58 12 17.5V20.5C12 21.42 11.92 21.5 11 21.5H9C8.08 21.5 8 21.42 8 20.5V17.5C8 16.58 8.08 16.5 9 16.5Z" />
    </Icon>
  );
}

/** Drafting compass: squircle pivot, splayed legs, span arc. */
export function DraftingCompassIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 4.75, 2)} />
      <path d="M3 21.25 11.05 6.9" />
      <path d="M13 6.9 14.9 10.3M18.85 17.15 21 21.25" />
      <path d="M19.14 12A10 10 0 0 1 4.86 12" />
    </Icon>
  );
}

/** Binoculars: twin flared barrels, eyepieces, bridge, lens lines. */
export function BinocularsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 7V4.5C9 3.58 8.92 3.5 8 3.5H6C5.08 3.5 5 3.58 5 4.5V7" />
      <path d="M19 7V4.5C19 3.58 18.92 3.5 18 3.5H16C15.08 3.5 15 3.58 15 4.5V7" />
      <path d="M4 21C2.9 21 2 20.1 2 19V15.15C2 13.76 4 12.19 4 10.32V8C4 7.08 4.08 7 5 7H9C9.92 7 10 7.08 10 8V19C10 20.1 9.1 21 8 21Z" />
      <path d="M20 21C21.1 21 22 20.1 22 19V15.15C22 13.76 20 12.19 20 10.32V8C20 7.08 19.92 7 19 7H15C14.08 7 14 7.08 14 8V19C14 20.1 14.9 21 16 21Z" />
      <path d="M10 10.5H14" />
      <path d="M2 16H10M14 16H22" />
    </Icon>
  );
}

/** Backpack: top strap, chest line, front pocket. */
export function BackpackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 10.5A4 4 0 0 1 8.5 6.5H15.5A4 4 0 0 1 19.5 10.5V19.5C19.5 21.34 19.34 21.5 17.5 21.5H6.5C4.66 21.5 4.5 21.34 4.5 19.5Z" />
      <path d="M9.5 6.5V4.5C9.5 3.12 9.62 3 11 3H13C14.38 3 14.5 3.12 14.5 4.5V6.5" />
      <path d="M8 10.5H16" />
      <path d="M8 21.5V16.5C8 15.12 8.12 15 9.5 15H14.5C15.88 15 16 15.12 16 16.5V21.5" />
      <path d="M8 18.5H16" />
    </Icon>
  );
}

/* ---- games & sport ---- */

/** Club: trefoil union path with a flared stem. */
export function ClubIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.28 9.05A5.5 5.5 0 1 0 6.72 9.05A5.5 5.5 0 1 0 12 17.66A5.5 5.5 0 1 0 17.28 9.05Z" />
      <path d="M12 17.66V21.5" />
    </Icon>
  );
}

/** Spade: pointed leaf with side lobes and a stem. */
export function SpadeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M5 9C3.5 10.5 2 12.2 2 14.5A5.5 5.5 0 0 0 7.5 20C9.3 20 10.5 19.5 12 18C13.5 19.5 14.7 20 16.5 20A5.5 5.5 0 0 0 22 14.5C22 12.2 20.5 10.5 19 9L12 2 5 9Z"
      />
      <path d="M12 18V21.5" />
    </Icon>
  );
}

/** Basketball: ring with cross seams and bowed side channels. */
export function BasketballIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M12 2.75V21.25M2.75 12H21.25" />
      <path d="M5.35 5.5C9.1 9.4 9.1 14.6 5.35 18.5M18.65 5.5C14.9 9.4 14.9 14.6 18.65 18.5" />
    </Icon>
  );
}

/** Tennis ball: ring with two opposing seam sweeps. */
export function TennisIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M4.4 5.4C7.9 7.5 8.4 13.6 5 17.4M19.6 5.4C16.1 7.5 15.6 13.6 19 17.4" />
    </Icon>
  );
}

/** Bowling ball: ring with three filled finger holes. */
export function BowlingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path
        d={
          squircle(8.75, 9, 1.15) +
          squircle(13.25, 8, 1.15) +
          squircle(12.5, 12.5, 1.15)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- home & safety ---- */

/** Fire extinguisher: tank with band, neck, nozzle, hose loop. */
export function FireExtinguisherIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17 10.5A4 4 0 0 0 9 10.5V19.5C9 21.34 9.16 21.5 11 21.5H15C16.84 21.5 17 21.34 17 19.5Z" />
      <path d="M9 18H17" />
      <path d="M15 6.75V3.5C15 2.58 14.92 2.5 14 2.5H12C11.08 2.5 11 2.58 11 3.5V6.75" />
      <path d="M18.25 2.5H15" />
      <path d="M11 2.5A6 6 0 0 0 5 8.5V13" />
      <path d="M3.25 13H6.75" />
    </Icon>
  );
}

/** Bathtub: swan-neck faucet into the tub, drip tick, stub legs. */
export function BathIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 12H21.5" />
      <path d="M4 12V17.5C4 19.34 4.16 19.5 6 19.5H18C19.84 19.5 20 19.34 20 17.5V12" />
      <path d="M9 5.25 7.62 3.87C7.06 3.31 6.3 3.12 5.55 3.37C4.62 3.68 4 4.5 4 5.5V12" />
      <path d="M10 4.25 8.25 6" />
      <path d="M7 19.5V21.5M17 19.5V21.5" />
    </Icon>
  );
}

/* ---- symbols & keys ---- */

/** Unfold: paired chevrons pointing apart. */
export function ChevronsUpDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.5 9 12 4.5 16.5 9" />
      <path strokeLinejoin="bevel" d="M7.5 15 12 19.5 16.5 15" />
    </Icon>
  );
}

/** Fold: paired chevrons pointing together. */
export function ChevronsDownUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.5 4.5 12 9 16.5 4.5" />
      <path strokeLinejoin="bevel" d="M7.5 19.5 12 15 16.5 19.5" />
    </Icon>
  );
}

export function CornerUpLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.5 19.5V13.5C19.5 10.74 19.26 10.5 16.5 10.5H4.25" />
      <path strokeLinejoin="bevel" d="M8.5 6.25 4.25 10.5 8.5 14.75" />
    </Icon>
  );
}

export function CornerUpRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.5V13.5C4.5 10.74 4.74 10.5 7.5 10.5H19.75" />
      <path strokeLinejoin="bevel" d="M15.5 6.25 19.75 10.5 15.5 14.75" />
    </Icon>
  );
}

export function DivideIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 12H19" />
      <path
        d={squircle(12, 5.75, 1.6) + squircle(12, 18.25, 1.6)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Approximately equal: two arc-built tildes. */
export function ApproxEqualIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 9.5A6.5 6.5 0 0 1 12 9.5A6.5 6.5 0 0 0 19 9.5" />
      <path d="M5 14.5A6.5 6.5 0 0 1 12 14.5A6.5 6.5 0 0 0 19 14.5" />
    </Icon>
  );
}

export function AmpersandIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 12C17.5 16.4 13.9 20 9.5 20A4.5 4.5 0 0 1 5 15.5C5 9.5 13 11.5 13 7A3 3 0 1 0 7 7C7 10 9.5 15.5 19 20" />
      <path d="M16 12H19" />
    </Icon>
  );
}

export function RupeeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 3.5H18M6 8.25H18M6 13H9" />
      <path d="M6 13 14.5 21" />
      <path d="M9 13C15.67 13 15.67 3.5 9 3.5" />
    </Icon>
  );
}

/** Option key: beveled dogleg with the bypass bar. */
export function OptionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 4.5H8.5L14.5 19.5H21" />
      <path d="M14.5 4.5H21" />
    </Icon>
  );
}

/** Shift key: the outlined up arrow. */
export function ShiftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 3 19.5 11.5H15.5V19.5C15.5 20.42 15.42 20.5 14.5 20.5H9.5C8.58 20.5 8.5 20.42 8.5 19.5V11.5H4.5Z"
      />
    </Icon>
  );
}

/* ---- UI & design extras ---- */

/** Face ID: ScanIcon's brackets around dot eyes and a smile. */
export function ScanFaceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path
        d={squircle(9, 10, 1.05) + squircle(15, 10, 1.05)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M8.75 14.5C9.5 15.9 10.65 16.6 12 16.6C13.35 16.6 14.5 15.9 15.25 14.5" />
    </Icon>
  );
}

/** BadgeCheckIcon's plain seal. */
export function BadgeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
    </Icon>
  );
}

/** Frame: full-bleed crop rules. */
export function FrameIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 6.5H21.75M2.25 17.5H21.75M6.5 2.25V21.75M17.5 2.25V21.75" />
    </Icon>
  );
}

/** 3x3 grid: tile with inner rules. */
export function GridIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M9.17 3.5V20.5M14.83 3.5V20.5M3.5 9.17H20.5M3.5 14.83H20.5" />
    </Icon>
  );
}

/** Dashed selection square: ScanIcon's corners plus edge dashes. */
export function SquareDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M10.5 3.5H13.5M10.5 20.5H13.5M3.5 10.5V13.5M20.5 10.5V13.5" />
    </Icon>
  );
}

/** Blend: two overlapping squircle rings. */
export function BlendIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9, 9, 6.25) + squircle(15, 15, 6.25)} />
    </Icon>
  );
}

/** Cone: beveled slant sides onto an elliptical base. */
export function ConeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.9 18.35 12.9 2.9C12.5 2.2 11.5 2.2 11.1 2.9L3.1 18.35" />
      <path d="M21 19C21 20.38 16.97 21.5 12 21.5C7.03 21.5 3 20.38 3 19C3 17.62 7.03 16.5 12 16.5C16.97 16.5 21 17.62 21 19Z" />
    </Icon>
  );
}

/** Pyramid: beveled faces with a center ridge. */
export function PyramidIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 21.25 16.5 12 21.5 2.75 16.5Z" />
      <path d="M12 2.75V21.5" />
    </Icon>
  );
}

/** Find people: the figure with a search lens at the shoulder. */
export function UserSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C10.85 14.6 12.1 14.88 13.15 15.4" />
      <path d={squircle(17.25, 17.25, 3.1)} />
      <path d="M19.55 19.55 21.75 21.75" />
    </Icon>
  );
}

/** Compare branches: two squircle nodes joined by opposing elbows. */
export function GitCompareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(18, 18, 3)} />
      <path d="M12.5 6H15C17.76 6 18 6.24 18 9V14.9" />
      <path d="M11.5 18H9C6.24 18 6 17.76 6 15V9.1" />
    </Icon>
  );
}

/* ---- audio & broadcast extras ---- */

/** Cassette: shell, squircle reels, tape window base. */
export function CassetteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V17C21.5 18.84 21.34 19 19.5 19H4.5C2.66 19 2.5 18.84 2.5 17V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d={squircle(8.5, 11, 2.1) + squircle(15.5, 11, 2.1)} />
      <path d="M10.6 11H13.4" />
      <path d="M6.25 19 7.25 16H16.75L17.75 19" />
    </Icon>
  );
}

/** Radio tower: filled hub, nested wave arcs, beveled mast. */
export function RadioTowerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.9 16.1C1.02 12.2 1.02 5.8 4.9 1.9" />
      <path d="M7.8 4.7A6.14 6.14 0 0 0 7 12.2" />
      <path d={squircle(12, 9, 1.9)} fill="currentColor" stroke="none" />
      <path d="M16.2 4.8C18.2 6.8 18.46 9.9 17 12.27" />
      <path d="M19.1 1.9A9.9 9.9 0 0 1 19.1 16" />
      <path d="M9.5 18H14.5" />
      <path strokeLinejoin="bevel" d="M8 21.75 12 11 16 21.75" />
    </Icon>
  );
}

/** Antenna: three raked elements over the boom, drop mast - spaced so
 *  the rake hatching stays open at 24px. */
export function AntennaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 12 8.5 2.5M9.5 12 14.5 2.5M15.5 12 20.5 2.5" />
      <path d="M5 7H19.5" />
      <path d="M12 12.5V21.5" />
    </Icon>
  );
}

/** Satellite dish: beveled quarter dish, feed arm, signal arcs. */
export function SatelliteDishIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4 10A7.3 7.3 0 0 0 14 20Z" />
      <path d="M9 15 12 12" />
      <path d="M17 13A6 6 0 0 0 11 7M21 13A10 10 0 0 0 11 3" />
    </Icon>
  );
}

/** Drum: elliptical head, shell, lugs, crossed sticks. */
export function DrumIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 2.5 10 10M21.5 2.5 14 10" />
      <path d="M22 9.5C22 11.99 17.52 14 12 14C6.48 14 2 11.99 2 9.5C2 7.01 6.48 5 12 5C17.52 5 22 7.01 22 9.5Z" />
      <path d="M2 9.5V16.5C2 19 6.5 21 12 21C17.5 21 22 19 22 16.5V9.5" />
      <path d="M7 13.5V20.4M12 14V21M17 13.5V20.4" />
    </Icon>
  );
}

/** NFC: nested field arcs. */
export function NfcIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 8.3A7.43 7.43 0 0 1 6 15.7" />
      <path d="M9.45 6.2A11.76 11.76 0 0 1 9.45 17.8" />
      <path d="M12.9 4.1A15.9 15.9 0 0 1 12.9 19.9" />
      <path d="M16.35 2.25A20.2 20.2 0 0 1 16.35 21.75" />
    </Icon>
  );
}

/** Projector: low tile, squircle lens, status dots, feet. */
export function ProjectorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 9.5H19.5C21.34 9.5 21.5 9.66 21.5 11.5V15.5C21.5 17.34 21.34 17.5 19.5 17.5H4.5C2.66 17.5 2.5 17.34 2.5 15.5V11.5C2.5 9.66 2.66 9.5 4.5 9.5Z" />
      <path d={squircle(16.5, 13.5, 2.4)} />
      <path
        d={squircle(5.75, 11.75, 0.9) + squircle(8.75, 11.75, 0.9)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M6 17.5V20M18 17.5V20" />
    </Icon>
  );
}

/** Whistle: a full squircle chamber with a short, thick mouthpiece laid
 *  over its top edge, ring pea in the middle. A tube off the chamber's
 *  middle reads as a pan. */
export function WhistleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9, 14, 6.25)} />
      <path d="M9 7.75H19.75C20.67 7.75 20.75 7.83 20.75 8.75V11.75C20.75 12.67 20.67 12.75 19.75 12.75H15" />
      <path d={squircle(9, 14, 1.75)} />
    </Icon>
  );
}

/* ---- space & nature extras ---- */

/** Comet: squircle head with three 45-degree speed lines. */
export function CometIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(15.5, 15.5, 5.25)} />
      <path d="M2.9 2.9 11 11M3.4 8.9 7.9 13.4M8.9 3.4 13.4 7.9" />
    </Icon>
  );
}

/** Eclipse: ring with the shadow's inner arc. */
export function EclipseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5)} />
      <path d="M12 2.5A7 7 0 1 0 21.5 12" />
    </Icon>
  );
}

/** Wheat: stem with three tiers of open grain arcs - closed grain lenses
 *  fill solid at stroke 2, single arcs keep every counter open. */
export function WheatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.25V3" />
      <path d="M12 8.5C10.25 8.5 9 7.25 8.75 5.25M12 8.5C13.75 8.5 15 7.25 15.25 5.25" />
      <path d="M12 13.75C9.5 13.75 7.75 12.25 7.25 9.75M12 13.75C14.5 13.75 16.25 12.25 16.75 9.75" />
      <path d="M12 19C9.5 19 7.75 17.5 7.25 15M12 19C14.5 19 16.25 17.5 16.75 15" />
    </Icon>
  );
}

/** Grapes: six-berry squircle pyramid (3-2-1) under a stem - centres
 *  6.5 apart against a 5.5 stroked berry, so the gaps survive 24px. */
export function GrapeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5.5V2.75" />
      <path
        d={
          squircle(5.5, 7.25, 1.75) +
          squircle(12, 7.25, 1.75) +
          squircle(18.5, 7.25, 1.75) +
          squircle(8.75, 12.85, 1.75) +
          squircle(15.25, 12.85, 1.75) +
          squircle(12, 18.45, 1.75)
        }
      />
    </Icon>
  );
}

/** Lemon: pointed oval on the 45 with nub ticks. */
export function LemonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.4 19.6C1.9 17.1 3.5 11.5 7.5 7.5C11.5 3.5 17.1 1.9 19.6 4.4C22.1 6.9 20.5 12.5 16.5 16.5C12.5 20.5 6.9 22.1 4.4 19.6Z" />
      <path d="M19.6 4.4 21.4 2.6M4.4 19.6 2.6 21.4" />
    </Icon>
  );
}

/** Droplets: DropletIcon's pair - one small, one clipped large. */
export function DropletsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 16.3C9.2 16.3 11 14.47 11 12.25C11 11.09 10.43 9.99 9.29 9.06C8.15 8.13 7.29 6.75 7 5.3C6.71 6.75 5.86 8.14 4.71 9.06C3.56 9.98 3 11.1 3 12.25C3 14.47 4.8 16.3 7 16.3Z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3C14.5 5.5 16 7.9 18 9.5C20 11.1 21 13 21 15A6.98 6.98 0 0 1 9.09 19.97" />
    </Icon>
  );
}

/** Campfire: teardrop flame over crossed logs. */
export function CampfireIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.25C13.8 5.55 15.25 7.45 15.25 9.5C15.25 11.57 13.8 13 12 13C10.2 13 8.75 11.57 8.75 9.5C8.75 7.45 10.2 5.55 12 3.25Z" />
      <path d="M3.25 21.5 20.75 16.75M3.25 16.75 20.75 21.5" />
    </Icon>
  );
}

/** Jellyfish: MushroomIcon's bell over trailing tentacles. */
export function JellyfishIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.75 11C4.75 6.7 8 3.5 12 3.5C16 3.5 19.25 6.7 19.25 11C19.25 11.92 19.17 12 18.25 12H5.75C4.83 12 4.75 11.92 4.75 11Z" />
      <path d="M8 12.5C8 14.8 7 15.2 7 17.5M12 12.5C12 15.3 13 15.7 13 18.5M16 12.5C16 14.8 17 15.2 17 17.5" />
    </Icon>
  );
}

/** Butterfly: four wing lobes off the body, curled antennae. */
export function ButterflyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.25 12.75C10.75 8.5 8.6 6.25 5.75 6.25C4.05 6.25 3.25 7.35 3.25 9C3.25 11.6 6.4 12.75 11.25 12.75Z" />
      <path d="M11.25 12.75C7.15 12.85 5.25 14.35 5.25 16.5C5.25 18.15 6.2 19 7.6 19C9.6 19 10.95 16.9 11.25 12.75Z" />
      <path d="M12.75 12.75C13.25 8.5 15.4 6.25 18.25 6.25C19.95 6.25 20.75 7.35 20.75 9C20.75 11.6 17.6 12.75 12.75 12.75Z" />
      <path d="M12.75 12.75C16.85 12.85 18.75 14.35 18.75 16.5C18.75 18.15 17.8 19 16.4 19C14.4 19 13.05 16.9 12.75 12.75Z" />
      <path d="M12 7.75V17.25" />
      <path d="M12 7.75C11.25 5.75 10.4 4.6 9 3.75M12 7.75C12.75 5.75 13.6 4.6 15 3.75" />
    </Icon>
  );
}

/** Rabbit: lop profile with a haunch curl and hind-leg spring. */
export function RabbitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 21H10A4 4 0 0 1 6 17A7 7 0 0 1 13 10H13.2L9.6 6.4A1.98 1.98 0 1 1 12.4 3.6L15.8 7H16C19.3 7 22 9.7 22 13V14A2 2 0 0 1 20 16H19A3 3 0 0 0 16 19" />
      <path d="M20 8.54V4A2 2 0 1 0 16 4V7" />
      <path d="M13 16A3 3 0 0 1 15.24 21" />
      <path d="M7.61 12.52A3 3 0 1 0 6.01 16.83" />
      <path d={squircle(18, 12, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/* ---- food & drink more ---- */

/** Avocado half: waisted body with a squircle pit. */
export function AvocadoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C10 2.75 9.25 4.75 8.75 7C8.3 9 7.25 10.4 6.25 12C5.25 13.6 4.75 15 4.75 16.5C4.75 19.5 7.9 21.5 12 21.5C16.1 21.5 19.25 19.5 19.25 16.5C19.25 15 18.75 13.6 17.75 12C16.75 10.4 15.7 9 15.25 7C14.75 4.75 14 2.75 12 2.75Z" />
      <path d={squircle(12, 15.75, 2.9)} />
    </Icon>
  );
}

/** Bread: domed loaf with score marks. */
export function BreadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 9.5C3.4 9.5 2.5 8.5 2.5 7.25C2.5 5 6.75 3.5 12 3.5C17.25 3.5 21.5 5 21.5 7.25C21.5 8.5 20.6 9.5 19.5 9.5V18.5C19.5 20.34 19.34 20.5 17.5 20.5H6.5C4.66 20.5 4.5 20.34 4.5 18.5Z" />
      <path d="M9.5 8V12.5M14.5 8V12.5" />
    </Icon>
  );
}

/** Cheese wedge: beveled block with ring holes. */
export function CheeseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M2.75 19.5V13.9C2.75 13.46 3.03 13.07 3.45 12.93L20 7.4C20.64 7.19 21.25 7.66 21.25 8.33V19.5Z"
      />
      <path d={squircle(8, 16.25, 1.4) + squircle(13.75, 15, 1.1) + squircle(17.25, 17, 1.2)} />
    </Icon>
  );
}

/** Strawberry: heart-bottomed berry, beveled crown, seed dots. */
export function StrawberryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C8 18.5 5.25 15.5 5.25 11.75C5.25 9.5 6.9 7.75 9.15 7.75C10.3 7.75 11.3 8.3 12 9.2C12.7 8.3 13.7 7.75 14.85 7.75C17.1 7.75 18.75 9.5 18.75 11.75C18.75 15.5 16 18.5 12 20.5Z" />
      <path strokeLinejoin="bevel" d="M8.75 5.25 12 7.75 15.25 5.25" />
      <path d="M12 3.25V7.75" />
      <path
        d={squircle(10, 12, 0.8) + squircle(14, 12, 0.8) + squircle(12, 15, 0.8)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Popsicle: rounded slab, rib lines, stick. */
export function PopsicleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 14.5V7C6 4.65 8.7 2.75 12 2.75C15.3 2.75 18 4.65 18 7V14.5C18 15.42 17.92 15.5 17 15.5H7C6.08 15.5 6 15.42 6 14.5Z" />
      <path d="M9.5 6V11.5M14.5 6V11.5" />
      <path d="M12 15.5V21.25" />
    </Icon>
  );
}

/** Fried egg: wobbly white with a squircle yolk. */
export function FriedEggIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5C7 3.5 3.5 7.25 3.5 11.5C3.5 15.5 6 20.5 11 20.5C14 20.5 15 18.75 17.5 18C19.5 17.4 20.5 15.5 20.5 13.5C20.5 11 19 10 18.5 7.75C18 5.25 15.5 3.5 12 3.5Z" />
      <path d={squircle(11.5, 12, 3.4)} />
    </Icon>
  );
}

/** Lollipop: squircle candy with an arc spiral, stick. */
export function LollipopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 8)} />
      <path d="M11 11A2 2 0 0 0 15 11A4 4 0 0 0 7 11A6 6 0 0 0 19 11" />
      <path d="M21.5 21.5 16.65 16.65" />
    </Icon>
  );
}

/** Milk carton: gabled top, waisted neck, wave line. */
export function MilkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 2.5H16" />
      <path d="M9 2.5V4.79C9 5.58 8.77 6.35 8.33 7.01L7.67 8C7.23 8.65 7 9.42 7 10.21V19.5C7 21.34 7.16 21.5 9 21.5H15C16.84 21.5 17 21.34 17 19.5V10.21C17 9.42 16.77 8.65 16.33 8L15.67 7C15.23 6.35 15 5.58 15 4.79V2.5" />
      <path d="M7 14.75C8.6 14.15 10.4 14.15 12 14.75C13.6 15.35 15.4 15.35 17 14.75" />
    </Icon>
  );
}

/** Salt shaker: domed cap with filled pour holes, tapered body. */
export function SaltShakerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.75 6.5C8.75 4.15 10.15 2.5 12 2.5C13.85 2.5 15.25 4.15 15.25 6.5" />
      <path d="M8.75 6.5H15.25L16.25 19.25C16.35 20.5 15.6 21.25 14.35 21.25H9.65C8.4 21.25 7.65 20.5 7.75 19.25Z" />
      <path
        d={squircle(10.6, 5, 0.7) + squircle(13.4, 5, 0.7) + squircle(12, 3.9, 0.7)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M8.4 11H15.6" />
    </Icon>
  );
}

/** Pie: domed filling with vents over a crimped dish. */
export function PieIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 12.5C3.5 8.1 7.3 5.25 12 5.25C16.7 5.25 20.5 8.1 20.5 12.5" />
      <path d="M2.5 12.5H21.5" />
      <path d="M4 12.5 5.1 17.6C5.35 18.75 6.15 19.5 7.3 19.5H16.7C17.85 19.5 18.65 18.75 18.9 17.6L20 12.5" />
      <path d="M9.5 8.25V10M12 7.75V10M14.5 8.25V10" />
    </Icon>
  );
}

/** Popcorn: kernel puffs bubbling over a striped box. */
export function PopcornIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 8A2 2 0 0 0 18 4A2 2 0 0 0 14 4A2 2 0 0 0 10 4A2 2 0 0 0 6 4A2 2 0 0 0 6 8" />
      <path d="M20 8C20.5 8 20.9 8.4 20.8 9L18.2 21C18.1 21.5 17.5 22 17 22H7C6.4 22 5.9 21.6 5.8 21L3.2 9C3.1 8.4 3.5 8 4 8Z" />
      <path d="M10 22 9 8M14 22 15 8" />
    </Icon>
  );
}

/** Preserves jar: lid tile over a shouldered body with a band. */
export function JarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 2.75H17C17.92 2.75 18 2.83 18 3.75V5.25C18 6.17 17.92 6.25 17 6.25H7C6.08 6.25 6 6.17 6 5.25V3.75C6 2.83 6.08 2.75 7 2.75Z" />
      <path d="M6.5 6.25C5.5 7.25 5 8.5 5 10V18.5C5 20.34 5.16 20.5 7 20.5H17C18.84 20.5 19 20.34 19 18.5V10C19 8.5 18.5 7.25 17.5 6.25" />
      <path d="M5 10.75H19" />
    </Icon>
  );
}

/* ---- transport & infrastructure ---- */

/** Ambulance: TruckIcon's chassis with a medical cross on the box. */
export function AmbulanceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.5 17.5V6C14.5 4.16 14.34 4 12.5 4H4.75C2.91 4 2.75 4.16 2.75 6V16.5C2.75 17.34 2.83 17.5 3.75 17.5H4.9" />
      <path d="M9.1 17.5H14.5" />
      <path d="M14.5 8.5H17.3C17.94 8.5 18.32 8.7 18.7 9.2L20.9 12.1C21.16 12.44 21.25 12.74 21.25 13.2V16.5C21.25 17.34 21.09 17.5 20.25 17.5H19.2" />
      <path d={squircle(7, 17.5, 2.1) + squircle(17.05, 17.5, 2.1)} />
      <path d="M8.6 7.25V11.75M6.35 9.5H10.85" />
    </Icon>
  );
}

/** Tractor: big rear wheel with a filled hub, cab frame, small front. */
export function TractorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 11 21 11.9C21.6 11.95 22 12.5 21.9 13.05L21.24 17.16C21.16 17.65 20.74 18 20.25 18H20" />
      <path d="M16 18H11.9" />
      <path d="M18 5.25C17.45 5.25 17 5.7 17 6.25V11.5" />
      <path d="M3 4.25H11.13C11.63 4.25 12.05 4.61 12.12 5.11L13 11.25" />
      <path d="M4.25 11V4.25M8 10.1V4.25" />
      <path d={squircle(7, 15, 4.9)} />
      <path d={squircle(7, 15, 1.1)} fill="currentColor" stroke="none" />
      <path d={squircle(18, 18, 2.1)} />
    </Icon>
  );
}

/** Helicopter: bubble cabin on the right, long tail boom to a tail rotor
 *  on the left, main rotor and skids - a centered pod with a stub tail
 *  read as an abstract blob. */
export function HelicopterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 4.5H21.5" />
      <path d="M15 4.5V7.5" />
      <path d="M11 7.5H16C18.76 7.5 21 9.74 21 12.5V14.5C21 15.6 20.1 16.5 19 16.5H13C11.9 16.5 11 15.6 11 14.5Z" />
      <path d="M11 11.5H3.25M3.25 8.75V14.25" />
      <path d="M13.5 16.5V19.25M18.5 16.5V19.25M11.5 19.25H20.75" />
    </Icon>
  );
}

/** Kick scooter: stem to the rear wheel, low deck. */
export function ScooterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(5.75, 17.75, 2.4) + squircle(18.25, 17.75, 2.4)} />
      <path d="M8.15 17.75H15.9" />
      <path d="M13.75 5.5H16.25L18.6 15.5" />
    </Icon>
  );
}

/** Cable car: cabin hanging off the running line. */
export function CableCarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 6.75 21.5 4.25" />
      <path d="M12 5.6V9" />
      <path d="M6.5 9H17.5C19.34 9 19.5 9.16 19.5 11V17C19.5 18.84 19.34 19 17.5 19H6.5C4.66 19 4.5 18.84 4.5 17V11C4.5 9.16 4.66 9 6.5 9Z" />
      <path d="M4.5 13.5H19.5" />
      <path d="M9.5 9V13.5M14.5 9V13.5" />
    </Icon>
  );
}

/** Ferris wheel: ring with three short spokes off the filled hub (the
 *  A-frame legs stand in for the lower spokes) so the center stays open. */
export function FerrisWheelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 10, 7.25)} />
      <path d="M12 7V2.75M9 10H4.75M15 10H19.25" />
      <path d={squircle(12, 10, 1.6)} fill="currentColor" stroke="none" />
      <path d="M8.5 21.25 12 10M15.5 21.25 12 10" />
    </Icon>
  );
}

/** Bridge: suspension span - two towers, the cable sagging between them
 *  on two hangers, the deck. An arch over a deck reads as a covered dish. */
export function BridgeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 15.5H21.75" />
      <path d="M7 4.5V19.5M17 4.5V19.5" />
      <path strokeLinejoin="bevel" d="M2.25 10.5 7 4.5C9 9.75 15 9.75 17 4.5L21.75 10.5" />
      <path d="M10 8V15.5M14 8V15.5" />
    </Icon>
  );
}

/** Hot air balloon: gored envelope, rope ticks, basket tile. */
export function HotAirBalloonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C16.25 2.75 19.25 5.9 19.25 9.9C19.25 13.3 16.6 16.1 13.9 17.6H10.1C7.4 16.1 4.75 13.3 4.75 9.9C4.75 5.9 7.75 2.75 12 2.75Z" />
      <path d="M12 2.75C9.9 2.75 8.4 5.9 8.4 9.9C8.4 13.3 9.55 16.1 10.7 17.6M12 2.75C14.1 2.75 15.6 5.9 15.6 9.9C15.6 13.3 14.45 16.1 13.3 17.6" />
      <path d="M10.1 17.6 10.25 19.25M13.9 17.6 13.75 19.25" />
      <path d="M10.25 19.25H13.75C14.3 19.25 14.5 19.45 14.5 20V20.75C14.5 21.3 14.3 21.5 13.75 21.5H10.25C9.7 21.5 9.5 21.3 9.5 20.75V20C9.5 19.45 9.7 19.25 10.25 19.25Z" />
    </Icon>
  );
}

/** Road: converging edges with a dashed center line. */
export function RoadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 21.25 9.25 2.75M20 21.25 14.75 2.75" />
      <path d="M12 2.75V6M12 9.5V14M12 17.5V21.25" />
    </Icon>
  );
}

/** Traffic light: portrait tile with three filled lamps. */
export function TrafficLightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 2.75H15.5C17.34 2.75 17.5 2.91 17.5 4.75V19.25C17.5 21.09 17.34 21.25 15.5 21.25H8.5C6.66 21.25 6.5 21.09 6.5 19.25V4.75C6.5 2.91 6.66 2.75 8.5 2.75Z" />
      <path
        d={squircle(12, 7, 1.6) + squircle(12, 12, 1.6) + squircle(12, 17, 1.6)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Wind turbine: three thick blades off a filled hub, tower, base. */
export function WindTurbineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeWidth={2.5} d="M12 8.75V2.25M12 8.75 17.6 12M12 8.75 6.4 12" />
      <path d={squircle(12, 8.75, 1.4)} fill="currentColor" stroke="none" />
      <path d="M12 10.15V21.5" />
      <path d="M8.5 21.5H15.5" />
    </Icon>
  );
}

/** Solar panel: cell grid in a splayed frame on a stand. */
export function SolarPanelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.9 4.5H17.1C17.7 4.5 18.2 4.9 18.35 5.5L20.5 13.5C20.7 14.3 20.1 15 19.25 15H4.75C3.9 15 3.3 14.3 3.5 13.5L5.65 5.5C5.8 4.9 6.3 4.5 6.9 4.5Z" />
      <path d="M12 4.5V15M5 9.75H19" />
      <path d="M12 15V19.5M8 19.5H16" />
    </Icon>
  );
}

/** Parking: the P in VaultIcon's tile. */
export function ParkingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M9.5 16.5V7.5H13C14.66 7.5 16 8.84 16 10.5C16 12.16 14.66 13.5 13 13.5H9.5" />
    </Icon>
  );
}

/** Ladder: rails and rungs. */
export function LadderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 2.75V21.25M16.5 2.75V21.25" />
      <path d="M7.5 6H16.5M7.5 10H16.5M7.5 14H16.5M7.5 18H16.5" />
    </Icon>
  );
}

/* ---- household extras ---- */

/** Candle: filled flame, wick, pillar, dish holder. */
export function CandleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d="M12 2.5C12.9 3.65 13.6 4.6 13.6 5.65C13.6 6.7 12.9 7.4 12 7.4C11.1 7.4 10.4 6.7 10.4 5.65C10.4 4.6 11.1 3.65 12 2.5Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M9.75 9.5H14.25V17.5H9.75Z" />
      <path d="M6.75 17.5H17.25C17.25 19.5 15.5 21 13.25 21H10.75C8.5 21 6.75 19.5 6.75 17.5Z" />
    </Icon>
  );
}

/** Broom: upright handle into a beveled bristle skirt. */
export function BroomIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V11" />
      <path d="M9 11H15C15.55 11 16 11.45 16 12V13.5H8V12C8 11.45 8.45 11 9 11Z" />
      <path strokeLinejoin="bevel" d="M8 13.5 6.5 20.5H17.5L16 13.5" />
      <path d="M12 16.5V20.5M9.5 17 9 20.5M14.5 17 15 20.5" />
    </Icon>
  );
}

/** Bucket: elliptical rim, tapered pail, handle arc. */
export function BucketIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 10.75C16.14 10.75 19.5 9.74 19.5 8.5C19.5 7.26 16.14 6.25 12 6.25C7.86 6.25 4.5 7.26 4.5 8.5C4.5 9.74 7.86 10.75 12 10.75Z" />
      <path d="M4.5 8.5 6 19.5C6.15 20.6 6.9 21.25 8 21.25H16C17.1 21.25 17.85 20.6 18 19.5L19.5 8.5" />
      <path d="M5.25 7.75C5.25 4.85 8.25 2.75 12 2.75C15.75 2.75 18.75 4.85 18.75 7.75" />
    </Icon>
  );
}

/** Spray can: mist dots, nozzle block, labeled can. */
export function SprayCanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(3.25, 3.25, 0.8) +
          squircle(7, 5, 0.8) +
          squircle(11, 7, 0.8) +
          squircle(3.25, 7, 0.8) +
          squircle(7, 9, 0.8) +
          squircle(3.25, 11, 0.8)
        }
        fill="currentColor"
        stroke="none"
      />
      <path d="M15.25 4.75H18.75V8.75H15.25Z" />
      <path d="M19 9 21 11V20.5C21 21.42 20.92 21.5 20 21.5H14C13.08 21.5 13 21.42 13 20.5V11L15 9" />
      <path d="M13 14 21 12M13 19 21 17" />
    </Icon>
  );
}

/** Washing machine: control row, drum, inner water S. */
export function WashingMachineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 2.5H19C20.84 2.5 21 2.66 21 4.5V19.5C21 21.34 20.84 21.5 19 21.5H5C3.16 21.5 3 21.34 3 19.5V4.5C3 2.66 3.16 2.5 5 2.5Z" />
      <path d="M6 6H9" />
      <path d={squircle(17, 6, 1)} fill="currentColor" stroke="none" />
      <path d={squircle(12, 13.5, 4.9)} />
      <path d="M12 18.4A2.45 2.45 0 0 0 12 13.5A2.45 2.45 0 0 1 12 8.6" />
    </Icon>
  );
}

/** Refrigerator: tall tile, freezer split, door handles. */
export function RefrigeratorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 2.5H17C18.84 2.5 19 2.66 19 4.5V19.5C19 21.34 18.84 21.5 17 21.5H7C5.16 21.5 5 21.34 5 19.5V4.5C5 2.66 5.16 2.5 7 2.5Z" />
      <path d="M5 9.5H19" />
      <path d="M8.5 5V7.5M8.5 12V16" />
    </Icon>
  );
}

/** Microwave: wide tile, window pane, dial column. */
export function MicrowaveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V17C21.5 18.84 21.34 19 19.5 19H4.5C2.66 19 2.5 18.84 2.5 17V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d="M6.5 8.5H14C14.92 8.5 15 8.58 15 9.5V14.5C15 15.42 14.92 15.5 14 15.5H6.5C5.58 15.5 5.5 15.42 5.5 14.5V9.5C5.5 8.58 5.58 8.5 6.5 8.5Z" />
      <path d="M18.25 8.5V10.5" />
      <path d={squircle(18.25, 14, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Screwdriver: rounded capsule grip with a center groove, thin shank,
 *  wider flat tip, on the diagonal. */
export function ScrewdriverIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.09 5.66C15.99 4.76 17.45 4.76 18.34 5.66C19.24 6.55 19.24 8.01 18.34 8.91L15.42 11.84C14.52 12.74 13.06 12.74 12.16 11.84C11.26 10.94 11.26 9.48 12.16 8.58Z" />
      <path d="M16.72 7.28 13.79 10.21" />
      <path d="M12.16 11.84 7.12 16.88" />
      <path strokeWidth={3} d="M7.12 16.88 5.66 18.34" />
    </Icon>
  );
}

/** Nut: HexagonIcon with a squircle bore. */
export function NutIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 2.75 20 7.375V16.625L12 21.25 4 16.625V7.375Z"
      />
      <path d={squircle(12, 12, 3)} />
    </Icon>
  );
}

/** Potted plant: SproutIcon's leaves over a rimmed pot. */
export function PottedPlantIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 14V9" />
      <path d="M12 9C12 6.2 10.1 4.75 7.5 4.75C7.5 7.55 9.4 9 12 9Z" />
      <path d="M12 9C12 6.2 13.9 4.75 16.5 4.75C16.5 7.55 14.6 9 12 9Z" />
      <path d="M7 14H17C17.92 14 18 14.08 18 15V15.5C18 16.42 17.92 16.5 17 16.5H7C6.08 16.5 6 16.42 6 15.5V15C6 14.08 6.08 14 7 14Z" />
      <path d="M8 16.5H16L15.4 20C15.25 20.9 14.6 21.5 13.7 21.5H10.3C9.4 21.5 8.75 20.9 8.6 20Z" />
    </Icon>
  );
}

/* ---- games & leisure ---- */

/** Chess pawn: squircle head, waisted flanks, plinth. */
export function ChessPawnIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 5.75, 2.6)} />
      <path d="M9.25 10.25H14.75" />
      <path d="M10.25 10.25C10.35 13 9.6 15.25 8.25 17.5H15.75C14.4 15.25 13.65 13 13.75 10.25" />
      <path d="M7 17.5H17C17.92 17.5 18 17.58 18 18.5V20.25C18 21.17 17.92 21.25 17 21.25H7C6.08 21.25 6 21.17 6 20.25V18.5C6 17.58 6.08 17.5 7 17.5Z" />
    </Icon>
  );
}

/** Golf: beveled pennant on the pin over the green's arc. */
export function GolfIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 21.25V3" />
      <path strokeLinejoin="bevel" d="M8 3.25 15.75 5.9 8 8.55Z" />
      <path d="M4.75 19.25C4.75 20.5 8 21.5 12 21.5C16 21.5 19.25 20.5 19.25 19.25" />
    </Icon>
  );
}

/** Football: pointed ellipse on the 45 with laced ticks. */
export function FootballIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.75 19.25C3 17.5 4.25 11.25 8.25 7.25C12.25 3.25 18.5 2 20.25 3.75C22 5.5 20.75 11.75 16.75 15.75C12.75 19.75 6.5 21 4.75 19.25Z" />
      <path d="M9.25 14.75 14.75 9.25" />
      <path d="M9.4 12.4 11.6 14.6M10.9 10.9 13.1 13.1M12.4 9.4 14.6 11.6" />
    </Icon>
  );
}

/** Skateboard: cambered deck over squircle wheels. */
export function SkateboardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 12.75C3.4 14.6 4.9 15.5 7 15.5H17C19.1 15.5 20.6 14.6 21.5 12.75" />
      <path d={squircle(8, 18.75, 1.9) + squircle(16, 18.75, 1.9)} />
    </Icon>
  );
}

/** Kite: beveled diamond, cross spars, wavy tail. */
export function KiteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 19 9.75 12 16.75 5 9.75Z" />
      <path d="M12 2.75V16.75M5 9.75H19" />
      <path d="M12 16.75C10.75 17.9 11.9 19 10.65 20.15C9.9 20.85 8.9 21.25 7.75 21.25" />
    </Icon>
  );
}

/** Balloon: filled knot under the envelope, wavy string. */
export function BalloonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.75 8.5C17.75 12 15.25 15.25 12 15.25C8.75 15.25 6.25 12 6.25 8.5C6.25 5.3 8.8 2.75 12 2.75C15.2 2.75 17.75 5.3 17.75 8.5Z" />
      <path d="M10.9 15.3 13.1 15.3 12 17Z" fill="currentColor" stroke="none" />
      <path d="M12 17C10.75 18.5 13.25 19.75 12 21.5" />
    </Icon>
  );
}

/** Crystal ball: sphere with an inner spark, beveled stand. */
export function CrystalBallIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 10, 7.25)} />
      <path
        d="M14.5 6C14.7 7.4 15.35 8.05 16.75 8.25C15.35 8.45 14.7 9.1 14.5 10.5C14.3 9.1 13.65 8.45 12.25 8.25C13.65 8.05 14.3 7.4 14.5 6Z"
        fill="currentColor"
        stroke="none"
      />
      <path strokeLinejoin="bevel" d="M8.5 17.25 7 20.75H17L15.5 17.25" />
    </Icon>
  );
}

/** Kettlebell: handle arc into a squircle bell. */
export function KettlebellIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 14.5, 6.75)} />
      <path d="M8.1 9.3C6.6 6.8 7.9 4.25 10.75 4.25H13.25C16.1 4.25 17.4 6.8 15.9 9.3" />
    </Icon>
  );
}

/** Podium: winner's block flanked by lower steps. */
export function PodiumIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 21.25V9.5C9 8.58 9.08 8.5 10 8.5H14C14.92 8.5 15 8.58 15 9.5V21.25" />
      <path d="M3 21.25V14C3 13.08 3.08 13 4 13H9" />
      <path d="M21 21.25V16.5C21 15.58 20.92 15.5 20 15.5H15" />
      <path d="M2.25 21.25H21.75" />
    </Icon>
  );
}

/** Finish flag: FlagIcon's swallowtail with three large filled checker
 *  cells - four small ones blur into noise at 24px. */
export function FlagCheckeredIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.25 2.75V21.25" />
      <path
        strokeLinejoin="bevel"
        d="M5.25 4.25H19.75L16.75 9 19.75 13.75H5.25"
      />
      <path
        d="M6.25 5.25H9.5V9H6.25ZM12.75 5.25H16V9H12.75ZM9.5 9H12.75V12.75H9.5Z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- seasonal & symbols ---- */

/** Alien: teardrop head with thick slanted eyes. */
export function AlienIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C16.5 2.75 19.5 6 19.5 10C19.5 14.5 15.5 19 12 21.25C8.5 19 4.5 14.5 4.5 10C4.5 6 7.5 2.75 12 2.75Z" />
      <path strokeWidth={2.5} d="M7.75 10.25 10 12M16.25 10.25 14 12" />
    </Icon>
  );
}

/** Peace: ring with stem and 45-degree struts. */
export function PeaceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5)} />
      <path d="M12 2.5V21.5" />
      <path d="M12 12 5.3 18.7M12 12 18.7 18.7" />
    </Icon>
  );
}

/** Yin-yang: true round (typographic symbol), S seam, two dots. */
export function YinYangIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx={12} cy={12} r={9.5} />
      <path d="M12 2.5A4.75 4.75 0 0 1 12 12A4.75 4.75 0 0 0 12 21.5" />
      <path
        d={squircle(12, 7.25, 1.2) + squircle(12, 16.75, 1.2)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Ship's wheel: rim, spokes running to the squircle hub. */
export function ShipWheelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8)} />
      <path d={squircle(12, 12, 2.5)} />
      <path d="M12 2.25V9.5M12 14.5V21.75M2.25 12H9.5M14.5 12H21.75" />
      <path d="M5.1 5.1 10.25 10.25M13.75 13.75 18.9 18.9M18.9 5.1 13.75 10.25M10.25 13.75 5.1 18.9" />
    </Icon>
  );
}

/** Pumpkin: ribbed gourd with a curled stem. */
export function PumpkinIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.75 5.5C4.75 5.5 2.5 8.4 2.5 12.5C2.5 16.6 4.75 19.5 7.75 19.5C9.35 19.5 10.75 18.9 12 18.9C13.25 18.9 14.65 19.5 16.25 19.5C19.25 19.5 21.5 16.6 21.5 12.5C21.5 8.4 19.25 5.5 16.25 5.5C14.65 5.5 13.25 6.1 12 6.1C10.75 6.1 9.35 5.5 7.75 5.5Z" />
      <path d="M9 6C7.9 7.8 7.35 10 7.35 12.5C7.35 15 7.9 17.2 9 19M15 6C16.1 7.8 16.65 10 16.65 12.5C16.65 15 16.1 17.2 15 19" />
      <path d="M12 6.1V4.5C12 3.4 12.6 2.75 13.75 2.75" />
    </Icon>
  );
}

/** Witch hat: beveled crown over a lens brim. */
export function WitchHatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.4 14.55 11.4 3.4C11.6 2.8 12.4 2.8 12.6 3.4L16.6 14.55" />
      <path d="M2.5 16.25C5.1 14.9 8.45 14.15 12 14.15C15.55 14.15 18.9 14.9 21.5 16.25C18.9 17.6 15.55 18.35 12 18.35C8.45 18.35 5.1 17.6 2.5 16.25Z" />
    </Icon>
  );
}

/** Snowman: stacked squircles, dot face and buttons, stick arms. */
export function SnowmanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 6.75, 3.75)} />
      <path d={squircle(12, 15.75, 5.5)} />
      <path
        d={
          squircle(10.6, 5.9, 0.8) +
          squircle(13.4, 5.9, 0.8) +
          squircle(12, 13.75, 0.8) +
          squircle(12, 16.5, 0.8) +
          squircle(12, 19.1, 0.8)
        }
        fill="currentColor"
        stroke="none"
      />
      <path d="M6.5 13.5 3.25 11.25M17.5 13.5 20.75 11.25" />
    </Icon>
  );
}

/** Ornament: hanger cap over a squircle bauble with a wave band. */
export function OrnamentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.75 2.75H13.25C13.8 2.75 14 2.95 14 3.5V4.75C14 5.3 13.8 5.5 13.25 5.5H10.75C10.2 5.5 10 5.3 10 4.75V3.5C10 2.95 10.2 2.75 10.75 2.75Z" />
      <path d={squircle(12, 13.5, 7.75)} />
      <path d="M4.5 12.5C6.25 11.25 8 11.25 9.75 12.5C11.5 13.75 13.25 13.75 15 12.5C16.5 11.4 18.1 11.3 19.5 12.2" />
    </Icon>
  );
}

/* ---- body & misc ---- */

/** Lungs: trachea forking into two D-shaped lobes - flat inner edges and
 *  flat bases. Rounded oval lobes read as scissor handles. */
export function LungsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V8.75" />
      <path d="M12 8.75C12 10.5 11.4 11.3 10.25 12M12 8.75C12 10.5 12.6 11.3 13.75 12" />
      <path d="M10.25 11.5V18.75C10.25 20 9.5 20.75 8.25 20.75H5.75C4.25 20.75 3.5 19.75 3.5 18.25C3.5 13.5 5.25 9.5 8 8.75C9.35 8.4 10.25 9.6 10.25 11.5Z" />
      <path d="M13.75 11.5V18.75C13.75 20 14.5 20.75 15.75 20.75H18.25C19.75 20.75 20.5 19.75 20.5 18.25C20.5 13.5 18.75 9.5 16 8.75C14.65 8.4 13.75 9.6 13.75 11.5Z" />
    </Icon>
  );
}

/** First aid kit: handled case with a medical plus. */
export function FirstAidKitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 7H19.5C21.34 7 21.5 7.16 21.5 9V18C21.5 19.84 21.34 20 19.5 20H4.5C2.66 20 2.5 19.84 2.5 18V9C2.5 7.16 2.66 7 4.5 7Z" />
      <path d="M9 7V5.5C9 4.58 9.08 4.5 10 4.5H14C14.92 4.5 15 4.58 15 5.5V7" />
      <path d="M12 10.25V16.75M8.75 13.5H15.25" />
    </Icon>
  );
}

/** Bee: striped teardrop body, swept wings, curled antennae. */
export function BeeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 8.5C14.5 8.5 16.25 10.4 16.25 13C16.25 16.5 14.4 19.5 12 21C9.6 19.5 7.75 16.5 7.75 13C7.75 10.4 9.5 8.5 12 8.5Z" />
      <path d="M8 12H16M8.4 15.5H15.6" />
      <path d="M9.5 9.5C7.75 6.9 5.25 6 3 7.1C3.75 9.9 6.15 11.25 9.2 10.8" />
      <path d="M14.5 9.5C16.25 6.9 18.75 6 21 7.1C20.25 9.9 17.85 11.25 14.8 10.8" />
      <path d="M11 8.6C10.4 7.4 9.6 6.6 8.5 6.1M13 8.6C13.6 7.4 14.4 6.6 15.5 6.1" />
    </Icon>
  );
}

/** Rubber duck: round head with beveled bill, swelling breast. */
export function DuckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(8.75, 7.75, 3.4)} />
      <path strokeLinejoin="bevel" d="M5.4 7.25 2.5 8.75 5.5 9.6" />
      <path d={squircle(9.6, 6.9, 0.8)} fill="currentColor" stroke="none" />
      <path d="M12.15 8.1C12.4 10.4 13.9 11.4 16 11.15L21.25 10.4C20.75 16.75 17.25 20.5 12.25 20.5C7.75 20.5 4.75 18 4.75 14.25C4.75 12.9 5.2 11.8 6 10.95" />
    </Icon>
  );
}

/** Fishbowl: flared bowl, water line, filled fish. */
export function FishBowlIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.4 4.4C5.15 5.9 3.75 8.45 3.75 11.5C3.75 16.05 7.45 19.75 12 19.75C16.55 19.75 20.25 16.05 20.25 11.5C20.25 8.45 18.85 5.9 16.6 4.4" />
      <path d="M7.4 4.4C8.7 3.9 10.3 3.6 12 3.6C13.7 3.6 15.3 3.9 16.6 4.4" />
      <path d="M4.4 9H19.6" />
      <path d={squircle(11, 13.75, 1.5)} fill="currentColor" stroke="none" />
      <path d="M12.4 13.75 14.4 12.6V14.9Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Necktie: beveled knot into a swallow-point blade. */
export function TieIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9.75 2.75H14.25L12.9 6.25H11.1Z" />
      <path strokeLinejoin="bevel" d="M11.1 6.25 9 15.5 12 21.25 15 15.5 12.9 6.25" />
    </Icon>
  );
}

/** Abacus: frame with two rods of filled beads, each bead nearly twice
 *  the rod's width so the beads bulge off the wire at 24px. */
export function AbacusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 3.5H19.5C21.34 3.5 21.5 3.66 21.5 5.5V18.5C21.5 20.34 21.34 20.5 19.5 20.5H4.5C2.66 20.5 2.5 20.34 2.5 18.5V5.5C2.5 3.66 2.66 3.5 4.5 3.5Z" />
      <path d="M2.5 8.5H21.5M2.5 15.5H21.5" />
      <path
        d={
          squircle(6.5, 8.5, 1.9) +
          squircle(10.75, 8.5, 1.9) +
          squircle(13.25, 15.5, 1.9) +
          squircle(17.5, 15.5, 1.9)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- arrows & layout more ---- */

/** Double-headed vertical arrow - one shaft, both heads. */
export function ArrowUpDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5V20.5" />
      <path strokeLinejoin="bevel" d="M8.25 7.25 12 3.5 15.75 7.25" />
      <path strokeLinejoin="bevel" d="M8.25 16.75 12 20.5 15.75 16.75" />
    </Icon>
  );
}

export function ChevronsLeftRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9 6 3 12 9 18" />
      <path strokeLinejoin="bevel" d="M15 6 21 12 15 18" />
    </Icon>
  );
}

/** Bring to front: solid tile over two clipped corner tiles. */
export function BringToFrontIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 8H15C15.92 8 16 8.08 16 9V15C16 15.92 15.92 16 15 16H9C8.08 16 8 15.92 8 15V9C8 8.08 8.08 8 9 8Z" />
      <path d="M4.5 10C3.4 10 2.5 9.1 2.5 8V4.5C2.5 3.4 3.4 2.5 4.5 2.5H8C9.1 2.5 10 3.4 10 4.5" />
      <path d="M14 19.5C14 20.6 14.9 21.5 16 21.5H19.5C20.6 21.5 21.5 20.6 21.5 19.5V16C21.5 14.9 20.6 14 19.5 14" />
    </Icon>
  );
}

/** Send to back: two whole tiles, the mid layer reduced to elbows. */
export function SendToBackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 2.5H8.5C9.42 2.5 9.5 2.58 9.5 3.5V8.5C9.5 9.42 9.42 9.5 8.5 9.5H3.5C2.58 9.5 2.5 9.42 2.5 8.5V3.5C2.5 2.58 2.58 2.5 3.5 2.5Z" />
      <path d="M15.5 14.5H20.5C21.42 14.5 21.5 14.58 21.5 15.5V20.5C21.5 21.42 21.42 21.5 20.5 21.5H15.5C14.58 21.5 14.5 21.42 14.5 20.5V15.5C14.5 14.58 14.58 14.5 15.5 14.5Z" />
      <path d="M7 14.5V15.5C7 16.6 7.9 17.5 9 17.5H10M14.5 7H15.5C16.6 7 17.5 7.9 17.5 9V10" />
    </Icon>
  );
}

/** Tree list: top rule with indented children off a dropped spine. */
export function ListTreeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21 6.5H8.5M21 12H13M21 17.5H13" />
      <path d="M3.5 6.5V10C3.5 11.1 4.4 12 5.5 12H9" />
      <path d="M3.5 10V15.5C3.5 16.6 4.4 17.5 5.5 17.5H9" />
    </Icon>
  );
}

/* ---- symbols & math more ---- */

/** Lambda: swept main stroke with the branching leg. */
export function LambdaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 4.5C9.4 4.5 10.4 5.4 11.2 7.4L16.1 19.5" />
      <path d="M12.65 11.4 8.5 19.5" />
    </Icon>
  );
}

/** Integral: S stroke between two round hooks. */
export function IntegralIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.3 19.75A1.9 1.9 0 1 0 12.1 19.75V4.25A1.9 1.9 0 1 1 15.9 4.25" />
    </Icon>
  );
}

/** Angle: two rays with the measure arc. */
export function AngleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 19.5H20.5M3.5 19.5 16.5 6.5" />
      <path d="M12 19.5A8.5 8.5 0 0 0 9.51 13.49" />
    </Icon>
  );
}

/** Won: beveled W under the double bar. */
export function WonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.25 4.5 7.5 19.5 12 8 16.5 19.5 19.75 4.5" />
      <path d="M3 10.5H21M3 13.5H21" />
    </Icon>
  );
}

/** Ruble: the P bowl with the crossbar. */
export function RubleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 19.5V4.5H13.75C16.15 4.5 18 6.3 18 8.5C18 10.7 16.15 12.5 13.75 12.5H9.5" />
      <path d="M6.5 15.75H13.5" />
    </Icon>
  );
}

export function ParenthesesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 3.5C5.5 5.5 4.25 8.5 4.25 12C4.25 15.5 5.5 18.5 8 20.5" />
      <path d="M16 3.5C18.5 5.5 19.75 8.5 19.75 12C19.75 15.5 18.5 18.5 16 20.5" />
    </Icon>
  );
}

/** Mars: squircle with the up-right arrow. */
export function MarsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(10, 14, 6)} />
      <path d="M14.4 9.6 21 3M15.5 3H21V8.5" />
    </Icon>
  );
}

/** Venus: squircle over the crossed stem. */
export function VenusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 8.75, 6)} />
      <path d="M12 14.75V21.25M8.75 18H15.25" />
    </Icon>
  );
}

/* ---- dev & docs more ---- */

/** Unknown file: the portrait tile with a question mark. */
export function FileQuestionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M10 13.5C10.1 12.3 10.95 11.5 12 11.5C13.15 11.5 14 12.3 14 13.4C14 14.75 12 14.9 12 15.75" />
      <path d={squircle(12, 18.15, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Markdown: M and a down arrow in the wide tile. */
export function MarkdownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V17C21.5 18.84 21.34 19 19.5 19H4.5C2.66 19 2.5 18.84 2.5 17V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d="M5.75 15.5V8.5L8.5 11.5 11.25 8.5V15.5" />
      <path d="M16.75 8.5V15.5" />
      <path strokeLinejoin="bevel" d="M14.25 13 16.75 15.5 19.25 13" />
    </Icon>
  );
}

/** Captions: subtitle tile with staggered text dashes. */
export function CaptionsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V17C21.5 18.84 21.34 19 19.5 19H4.5C2.66 19 2.5 18.84 2.5 17V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d="M6.5 10H9M12 10H17.5M6.5 14H12M15 14H17.5" />
    </Icon>
  );
}

/** Certificate: document with a ribboned seal at the base. */
export function CertificateIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 17H4.5C2.66 17 2.5 16.84 2.5 15V6C2.5 4.16 2.66 4 4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V15C21.5 16.84 21.34 17 19.5 17H15.5" />
      <path d="M7 8.5H17M7 11.5H13.5" />
      <path d={squircle(12, 16.5, 2.2)} />
      <path strokeLinejoin="bevel" d="M10.6 18.4 10 21.5 12 20.25 14 21.5 13.4 18.4" />
    </Icon>
  );
}

/* ---- gadgets & gear ---- */

/** Walkie-talkie: antenna off a tall tile with speaker lines. */
export function WalkieTalkieIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 6H16.5C17.42 6 17.5 6.08 17.5 7V19.5C17.5 21.34 17.34 21.5 15.5 21.5H8.5C6.66 21.5 6.5 21.34 6.5 19.5V7C6.5 6.08 6.58 6 7.5 6Z" />
      <path d="M8.75 6V2.5" />
      <path d="M9.5 9.5H14.5M9.5 12.5H14.5" />
    </Icon>
  );
}

/** Remote: narrow tile, squircle d-pad, button dots. */
export function RemoteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 2.75H15C16.84 2.75 17 2.91 17 4.75V19.25C17 21.09 16.84 21.25 15 21.25H9C7.16 21.25 7 21.09 7 19.25V4.75C7 2.91 7.16 2.75 9 2.75Z" />
      <path d={squircle(12, 7.5, 2)} />
      <path
        d={
          squircle(10.25, 12.75, 0.9) +
          squircle(13.75, 12.75, 0.9) +
          squircle(10.25, 16, 0.9) +
          squircle(13.75, 16, 0.9)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** VR headset: visor with a nose notch carved from the bottom edge. */
export function VrHeadsetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 7H19.5C21.34 7 21.5 7.16 21.5 9V14C21.5 15.84 21.34 16 19.5 16H16.5C15.5 16 15 15.5 14.5 14.75C13.9 13.85 13.1 13.4 12 13.4C10.9 13.4 10.1 13.85 9.5 14.75C9 15.5 8.5 16 7.5 16H4.5C2.66 16 2.5 15.84 2.5 14V9C2.5 7.16 2.66 7 4.5 7Z" />
    </Icon>
  );
}

/** Drone: squircle body, four arms into rotor rings. */
export function DroneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 2.4)} />
      <path d="M10.3 10.3 7.45 7.45M13.7 10.3 16.55 7.45M10.3 13.7 7.45 16.55M13.7 13.7 16.55 16.55" />
      <path
        d={
          squircle(5.5, 5.5, 2.75) +
          squircle(18.5, 5.5, 2.75) +
          squircle(5.5, 18.5, 2.75) +
          squircle(18.5, 18.5, 2.75)
        }
      />
    </Icon>
  );
}

/** Metronome: beveled case, band, pendulum to a filled pivot. */
export function MetronomeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9.5 3.5H14.5L17.75 20.5H6.25Z" />
      <path d="M7.3 15.75H16.7" />
      <path d="M12 15.75 16.4 7" />
      <path d={squircle(12, 15.75, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Stage mic: grille ball on a thick angled handle. */
export function MicVocalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(15.5, 8.5, 4.25)} />
      <path d="M13.6 6.6 17.4 10.4M12.6 9.1 15 11.5" />
      <path strokeWidth={2.75} d="M11.6 12.4 3.5 20.5" />
    </Icon>
  );
}

/** Toaster: shouldered body, lever, dial, feet. */
export function ToasterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 9.5C3.5 6.75 6 5 9 5H15C18 5 20.5 6.75 20.5 9.5V17C20.5 18.84 20.34 19 18.5 19H5.5C3.66 19 3.5 18.84 3.5 17Z" />
      <path d="M8.5 8H11M13 8H15.5" />
      <path d="M20.5 10.75H21.75" />
      <path d={squircle(7, 13.5, 1)} fill="currentColor" stroke="none" />
      <path d="M6 19V20.5M18 19V20.5" />
    </Icon>
  );
}

/** Blender: beveled jar on a button plinth, fill line. */
export function BlenderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3.5H17.5" />
      <path strokeLinejoin="bevel" d="M8.25 3.5 9.25 14.5H15.75L16.75 3.5" />
      <path d="M8.9 10.75H16.1" />
      <path d="M9.25 14.5 8.75 17.5M15.75 14.5 16.25 17.5" />
      <path d="M7.75 17.5H16.25C17.17 17.5 17.25 17.58 17.25 18.5V20.25C17.25 21.17 17.17 21.25 16.25 21.25H7.75C6.83 21.25 6.75 21.17 6.75 20.25V18.5C6.75 17.58 6.83 17.5 7.75 17.5Z" />
      <path
        d={squircle(9.75, 19.4, 0.8) + squircle(14.25, 19.4, 0.8)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- animals more ---- */

/** Ladybug: BugIcon's dome with a head cap, split, and spots. */
export function LadybugIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7)} />
      <path d="M12 6.5V20.5" />
      <path d="M8.5 7.5C9 5.75 10.35 4.75 12 4.75C13.65 4.75 15 5.75 15.5 7.5" />
      <path d="M9.5 4.75 8 3M14.5 4.75 16 3" />
      <path
        d={
          squircle(8.75, 11, 1.1) +
          squircle(15.25, 11, 1.1) +
          squircle(9.5, 16.5, 1.1) +
          squircle(14.5, 16.5, 1.1)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Bear: round face, ear rings, filled eyes and nose wedge. */
export function BearIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6.5, 6.5, 2.4) + squircle(17.5, 6.5, 2.4)} />
      <path d={squircle(12, 12.5, 7.9)} />
      <path
        d={squircle(9.5, 11, 1) + squircle(14.5, 11, 1)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M11.1 14.6H12.9L12 15.9Z" fill="currentColor" stroke="none" />
      <path d="M12 15.9V17.2" />
    </Icon>
  );
}

/** Bat: pointed ears on a narrow body, smooth wings out to the tips with
 *  scalloped trailing edges - without ears and tips it reads as a bowl. */
export function BatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 8 13.5 6 14 8.75C16.5 8.25 19 7.25 21.75 6.5C20.5 8.25 19.75 10 19.5 12C18.25 11 16.5 11 15.5 12.25C14.75 11.75 14 12 13.5 12.75C13.25 14.25 12.75 15.5 12 16.5C11.25 15.5 10.75 14.25 10.5 12.75C10 12 9.25 11.75 8.5 12.25C7.5 11 5.75 11 4.5 12C4.25 10 3.5 8.25 2.25 6.5C5 7.25 7.5 8.25 10 8.75L10.5 6Z"
      />
    </Icon>
  );
}

/* ---- nature & sky more ---- */

/** Scallop shell: fanned outline with three ribs stopped short of the
 *  hinge so they don't merge where they converge. */
export function ShellIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C9 17.75 6.5 14.5 4.75 10.5C4.75 6.25 8 3.25 12 3.25C16 3.25 19.25 6.25 19.25 10.5C17.5 14.5 15 17.75 12 20.5Z" />
      <path d="M7.9 4.6 10.75 15.65M12 3.25V15.3M16.1 4.6 13.25 15.65" />
    </Icon>
  );
}

/** Acorn: capped nut with a stem flick. */
export function AcornIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 10.5C6.5 6.9 8.9 4.5 12 4.5C15.1 4.5 17.5 6.9 17.5 10.5C17.5 11.05 17.05 11.5 16.5 11.5H7.5C6.95 11.5 6.5 11.05 6.5 10.5Z" />
      <path d="M12 4.5C12 3.4 12.6 2.75 13.6 2.75" />
      <path d="M7.5 11.5C8 15.75 9.75 18.9 12 20.75C14.25 18.9 16 15.75 16.5 11.5" />
    </Icon>
  );
}

/** Constellation: filled stars joined by sight lines. */
export function ConstellationIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(5, 17, 1.2) +
          squircle(10, 12, 1.2) +
          squircle(13.5, 5.5, 1.2) +
          squircle(19.5, 5, 1.2) +
          squircle(16.5, 13.5, 1.2)
        }
        fill="currentColor"
        stroke="none"
      />
      <path d="M5.85 16.15 9.15 12.85M10.7 10.9 12.8 6.6M14.7 5.4 18.3 5.05M11.2 12.3 15.3 13.25" />
    </Icon>
  );
}

/** UFO: dome over a saucer ellipse, beam ticks. */
export function UfoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 9.75C8.5 7.5 10 6 12 6C14 6 15.5 7.5 15.5 9.75" />
      <path d="M2.75 12.25C2.75 10.75 6.9 9.5 12 9.5C17.1 9.5 21.25 10.75 21.25 12.25C21.25 13.75 17.1 15 12 15C6.9 15 2.75 13.75 2.75 12.25Z" />
      <path d="M9 17.5 8 20M12 17.75V20.5M15 17.5 16 20" />
    </Icon>
  );
}

/** Volcano: truncated beveled cone with eruption ticks. */
export function VolcanoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9.25 7.5H14.75L20.75 20.5H3.25Z" />
      <path d="M12 4.5V2.25M8.5 5 7 3.25M15.5 5 17 3.25" />
    </Icon>
  );
}

/* ---- kitchen & food more ---- */

/** Frying pan, side view: shallow bowl under a rim line, long handle off
 *  the rim. Seen from above, a round pan on a stick reads as a lens. */
export function FryingPanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 11.5H15.5C15.5 14.75 13.5 16.75 10.5 16.75H7.5C4.5 16.75 2.5 14.75 2.5 11.5Z" />
      <path strokeWidth={2.5} d="M15.5 11.5 21.75 9.75" />
    </Icon>
  );
}

/** Rolling pin: barrel tile with stub handles. */
export function RollingPinIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 8.5H17.5C18.42 8.5 18.5 8.58 18.5 9.5V14.5C18.5 15.42 18.42 15.5 17.5 15.5H6.5C5.58 15.5 5.5 15.42 5.5 14.5V9.5C5.5 8.58 5.58 8.5 6.5 8.5Z" />
      <path d="M5.5 10.5H2.75C2.2 10.5 2 10.7 2 11.25V12.75C2 13.3 2.2 13.5 2.75 13.5H5.5" />
      <path d="M18.5 10.5H21.25C21.8 10.5 22 10.7 22 11.25V12.75C22 13.3 21.8 13.5 21.25 13.5H18.5" />
    </Icon>
  );
}

/** Chef's knife: curved blade, thick handle off the spine. */
export function KnifeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M2.75 14.75 14.25 3.25C16.35 4.2 17.7 5.8 18.2 8.05L11.5 14.75Z"
      />
      <path strokeWidth={2.75} d="M17.9 8.35 21.5 4.75" />
    </Icon>
  );
}

/** Spoon: oval bowl into a straight handle. */
export function SpoonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C14.25 2.75 16 4.9 16 7.75C16 10.6 14.25 12.75 12 12.75C9.75 12.75 8 10.6 8 7.75C8 4.9 9.75 2.75 12 2.75Z" />
      <path d="M12 12.75V21.25" />
    </Icon>
  );
}

/** Whisk: handle into one wire balloon with a single center strand -
 *  two open channels instead of nested loops that fill in. The balloon
 *  is round at the bottom; a pointed one reads as a leaf or a blade. */
export function WhiskIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25V8.25" />
      <path d="M10 8.25C7.25 11 6.5 15 7.25 17.75C7.75 19.75 9.75 21 12 21C14.25 21 16.25 19.75 16.75 17.75C17.5 15 16.75 11 14 8.25Z" />
      <path d="M12 8.25V21" />
    </Icon>
  );
}

/** Coffee bean: oval with the S crease. */
export function CoffeeBeanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5C16.5 3.5 19 7 19 12C19 17 16.5 20.5 12 20.5C7.5 20.5 5 17 5 12C5 7 7.5 3.5 12 3.5Z" />
      <path d="M12 3.5C10 6.5 10 9 12 12C14 15 14 17.5 12 20.5" />
    </Icon>
  );
}

/** Wine bottle: shouldered neck, label band. */
export function WineBottleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 2.75H14" />
      <path d="M10.5 2.75V8.3C10.5 9 10.2 9.6 9.7 10.2C8.9 11.1 8.5 12.2 8.5 13.5V19.5C8.5 21.34 8.66 21.5 10.5 21.5H13.5C15.34 21.5 15.5 21.34 15.5 19.5V13.5C15.5 12.2 15.1 11.1 14.3 10.2C13.8 9.6 13.5 9 13.5 8.3V2.75" />
      <path d="M8.5 14.5H15.5" />
    </Icon>
  );
}

/** Tea bag: folded pouch on a string with a tag tile. */
export function TeaBagIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 9.5H16C16.92 9.5 17 9.58 17 10.5V18.5C17 20.34 16.84 20.5 15 20.5H9C7.16 20.5 7 20.34 7 18.5V10.5C7 9.58 7.08 9.5 8 9.5Z" />
      <path strokeLinejoin="bevel" d="M9.5 9.5 12 6.75 14.5 9.5" />
      <path d="M12 6.75C12 5.3 12.75 4.4 14 4.4" />
      <path d="M14.75 2.9H17.75C18.3 2.9 18.5 3.1 18.5 3.65V5.15C18.5 5.7 18.3 5.9 17.75 5.9H14.75C14.2 5.9 14 5.7 14 5.15V3.65C14 3.1 14.2 2.9 14.75 2.9Z" />
    </Icon>
  );
}

/** Pancake stack: top ellipse over two draped layers. */
export function PancakesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.5 8.75C19.5 10.13 16.14 11.25 12 11.25C7.86 11.25 4.5 10.13 4.5 8.75C4.5 7.37 7.86 6.25 12 6.25C16.14 6.25 19.5 7.37 19.5 8.75Z" />
      <path d="M4.5 8.75V12.25C4.5 13.6 7.85 14.75 12 14.75C16.15 14.75 19.5 13.6 19.5 12.25V8.75" />
      <path d="M4.5 12.25V15.75C4.5 17.1 7.85 18.25 12 18.25C16.15 18.25 19.5 17.1 19.5 15.75V12.25" />
    </Icon>
  );
}

/** Waffle: ring with a grid clipped to the rim. */
export function WaffleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M7 4.25V19.75M17 4.25V19.75M4.25 7H19.75M4.25 17H19.75" />
    </Icon>
  );
}

/** Taco: outer shell arc over the inner tortilla fold. */
export function TacoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 18.5C2.75 11.5 6.9 6.5 12 6.5C17.1 6.5 21.25 11.5 21.25 18.5" />
      <path d="M6.25 18.5C6.25 13.5 8.8 10 12 10C15.2 10 17.75 13.5 17.75 18.5" />
      <path d="M2.75 18.5H21.25" />
    </Icon>
  );
}

/** Champagne flute: slender bowl, bubbles, stem and foot. */
export function ChampagneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 2.75H15L14.25 9.5C14.1 11.25 13.15 12.25 12 12.25C10.85 12.25 9.9 11.25 9.75 9.5Z" />
      <path
        d={squircle(11, 5, 0.7) + squircle(13, 6.75, 0.7) + squircle(11.75, 8.5, 0.7)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M12 12.25V20.5" />
      <path d="M8.75 20.5H15.25" />
    </Icon>
  );
}

/** Candy cane: outlined crook with stripe ticks. */
export function CandyCaneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.9 21.25V7.6C6.9 4.4 9.2 2 12.4 2C15.6 2 17.9 4.4 17.9 7.6V9.4" />
      <path d="M10.15 21.25V7.75C10.15 6.15 11.1 5.25 12.4 5.25C13.7 5.25 14.65 6.15 14.65 7.75V9.4" />
      <path d="M6.9 21.25H10.15M14.65 9.4H17.9" />
      <path d="M6.9 17.75 10.15 16.25M6.9 13 10.15 11.5M7.6 4.9 9.9 7.2" />
    </Icon>
  );
}

/** Gingerbread figure: one cookie outline, iced face and buttons. */
export function GingerbreadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C14.1 2.75 15.75 4.4 15.75 6.5C15.75 7.45 15.4 8.3 14.85 8.95L18.6 10.35C19.5 10.7 19.95 11.7 19.6 12.6C19.25 13.5 18.25 13.95 17.35 13.6L14.5 12.5V14.75L16.6 18.4C17.1 19.25 16.8 20.35 15.95 20.85C15.1 21.35 14 21.05 13.5 20.2L12 17.6 10.5 20.2C10 21.05 8.9 21.35 8.05 20.85C7.2 20.35 6.9 19.25 7.4 18.4L9.5 14.75V12.5L6.65 13.6C5.75 13.95 4.75 13.5 4.4 12.6C4.05 11.7 4.5 10.7 5.4 10.35L9.15 8.95C8.6 8.3 8.25 7.45 8.25 6.5C8.25 4.4 9.9 2.75 12 2.75Z" />
      <path
        d={
          squircle(10.7, 6, 0.7) +
          squircle(13.3, 6, 0.7) +
          squircle(12, 11, 0.7) +
          squircle(12, 13.5, 0.7)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- wearables ---- */

/** Baseball cap: domed crown, seam, flat visor sweep. */
export function CapIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 15.25C6.5 10.25 9.75 6.75 14 6.75C17.4 6.75 20 9.25 20 12.75V15.25H6.5" />
      <path d="M6.5 15.25C4.15 15.25 2.55 14.35 2.25 12.9" />
      <path d="M14 6.75V15.25" />
    </Icon>
  );
}

/** Mitten, tilted 15 degrees: hand and thumb as one outline over a cuff
 *  tile. Upright, the dome reads as a bell. */
export function MittenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.69 17.03 7.91 14.13 4.36 12.08C3.38 11.51 3.04 10.26 3.61 9.28C4.18 8.3 5.43 7.96 6.41 8.53L7.02 8.88C6.76 6.36 7.87 4.31 9.8 3.79C12.21 3.14 14.42 4.62 15.2 7.52L17.14 14.76" />
      <path d="M8.21 17.16 17.62 14.63C18.51 14.4 18.61 14.45 18.85 15.34L19.56 18C19.8 18.89 19.74 18.98 18.85 19.22L9.44 21.75C8.55 21.98 8.45 21.93 8.21 21.04L7.5 18.38C7.26 17.49 7.32 17.4 8.21 17.16Z" />
    </Icon>
  );
}

/** Sock: tube bending into a round heel, cuff line. */
export function SockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.75 2.75V12.4L6 15.15C4.65 16.5 4.65 18.6 6 19.95C7.35 21.3 9.45 21.3 10.8 19.95L15.25 15.5V2.75" />
      <path d="M8.75 2.75H15.25" />
      <path d="M8.75 5.75H15.25" />
    </Icon>
  );
}

/** Bow tie: beveled wings into a squircle-cornered knot. */
export function BowTieIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.5 7 10.25 10.35V13.65L3.5 17Z" />
      <path strokeLinejoin="bevel" d="M20.5 7 13.75 10.35V13.65L20.5 17Z" />
      <path d="M11 10H13C13.55 10 13.75 10.2 13.75 10.75V13.25C13.75 13.8 13.55 14 13 14H11C10.45 14 10.25 13.8 10.25 13.25V10.75C10.25 10.2 10.45 10 11 10Z" />
    </Icon>
  );
}

/** Top hat: crown with band over a curved brim. */
export function TopHatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 4.5H16.5C17.42 4.5 17.5 4.58 17.5 5.5V15.5H6.5V5.5C6.5 4.58 6.58 4.5 7.5 4.5Z" />
      <path d="M6.5 12.5H17.5" />
      <path d="M2.75 15.5H21.25" />
      <path d="M4 15.5C4 16.8 7.6 17.85 12 17.85C16.4 17.85 20 16.8 20 15.5" />
    </Icon>
  );
}

/* ---- home & tools more ---- */

/** Toothbrush, tilted: hollow handle narrowing at the neck into the head,
 *  three bristle tufts standing off the head. A single-line handle read
 *  as a fork or a plain line. */
export function ToothbrushIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.71 20.56C7.2 19.96 7.28 19.06 7.89 18.55L12.8 14.43C13.53 13.82 14.35 14.06 15.08 13.45L19.99 9.33C20.59 8.82 21.49 8.9 22 9.5C22.5 10.11 22.42 11 21.82 11.51L16.91 15.63C16.18 16.24 16.27 17.09 15.55 17.7L10.63 21.83C10.03 22.33 9.13 22.26 8.63 21.65Z" />
      <path d="M13.24 9.41 15.99 12.69M15.42 7.58 18.17 10.85M17.6 5.75 20.35 9.02" />
    </Icon>
  );
}

/** Stapler: hinged arm over the base wedge. */
export function StaplerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 12.5 16.75 7.05C18.4 6.4 19.9 6.95 20.7 8.45L21.25 9.5" />
      <path d="M2.5 12.5V17.75H19.5C20.47 17.75 21.25 16.97 21.25 16V14.5C21.25 13.53 20.47 12.75 19.5 12.75H8" />
      <path d="M17.5 12.75V10.5" />
    </Icon>
  );
}

/** Clothes iron: sole silhouette with the inner handle arc. */
export function IronIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 16.5C2.75 11.75 6.75 8.25 11.75 8.25H16.5C18.15 8.25 19.5 9.6 19.5 11.25V16.5Z" />
      <path d="M8.25 12.5C8.25 10.9 9.55 9.6 11.15 9.6H15" />
      <path d="M2.75 16.5H21.25" />
    </Icon>
  );
}

/** Hanger: wire hook over a beveled shoulder bar. */
export function HangerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.25 4.75C14.25 3.5 13.25 2.5 12 2.5C10.75 2.5 9.75 3.5 9.75 4.75C9.75 6 10.75 6.75 12 7V8.5" />
      <path
        strokeLinejoin="bevel"
        d="M12 8.5 21 14.75C21.6 15.15 21.3 16 20.5 16H3.5C2.7 16 2.4 15.15 3 14.75Z"
      />
    </Icon>
  );
}

/** Safety pin, closed and lying flat: coil ring, two wires spreading from
 *  it into a D-shaped clasp. A single arm read as a stick; on a diagonal
 *  it reads as a wrench or screwdriver. */
export function SafetyPinIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(5, 12, 2)} />
      <path d="M6.75 10.75 16 9M6.75 13.25 16 13" />
      <path d="M16 8C16 7.45 16.2 7.25 16.75 7.25H18.25C19.91 7.25 21 8.75 21 11C21 13.25 19.91 14.75 18.25 14.75H16.75C16.2 14.75 16 14.55 16 14Z" />
    </Icon>
  );
}

/** Button: rim, stitch ring, four filled holes. */
export function ButtonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d={squircle(12, 12, 6)} />
      <path
        d={
          squircle(10.25, 10.25, 1) +
          squircle(13.75, 10.25, 1) +
          squircle(10.25, 13.75, 1) +
          squircle(13.75, 13.75, 1)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Plunger: long handle into a narrow rubber cup on a wide lip - a wide
 *  shallow dome reads as a ceiling lamp. */
export function PlungerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V10.5" />
      <path d="M8 18.5V15C8 12.5 9.75 10.5 12 10.5C14.25 10.5 16 12.5 16 15V18.5" />
      <path d="M5 18.5H19" />
    </Icon>
  );
}

/** Lantern: cap and base bars, waisted glass, filled flame. */
export function LanternIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5V2.25" />
      <path d="M8 5.5H16M8 17.5H16" />
      <path d="M8.75 5.5C7.35 7.15 6.5 9.25 6.5 11.5C6.5 13.75 7.35 15.85 8.75 17.5M15.25 5.5C16.65 7.15 17.5 9.25 17.5 11.5C17.5 13.75 16.65 15.85 15.25 17.5" />
      <path
        d="M12 8.9C12.75 9.9 13.35 10.7 13.35 11.6C13.35 12.5 12.75 13.1 12 13.1C11.25 13.1 10.65 12.5 10.65 11.6C10.65 10.7 11.25 9.9 12 8.9Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M10 17.5V19.5H14V17.5" />
    </Icon>
  );
}

/** Match: flame outline over a filled match head on an angled stick -
 *  without the head, flame-on-stick reads as a paintbrush. */
export function MatchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15 2.5C16.25 4.1 17.1 5.4 17.1 6.6C17.1 7.75 16.2 8.6 15 8.6C13.8 8.6 12.9 7.75 12.9 6.6C12.9 5.4 13.75 4.1 15 2.5Z" />
      <path d={squircle(14.1, 11.6, 1.6)} fill="currentColor" stroke="none" />
      <path d="M14.1 11.6 10.75 21.25" />
    </Icon>
  );
}

/** Fireplace: mantel frame, arched firebox, filled flame. */
export function FireplaceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 21.25V5.5C3.5 3.66 3.66 3.5 5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V21.25" />
      <path d="M2.25 6.75H21.75" />
      <path d="M7.5 21.25V13.75C7.5 11.25 9.5 9.5 12 9.5C14.5 9.5 16.5 11.25 16.5 13.75V21.25" />
      <path
        d="M12 13.5C13 14.75 13.8 15.8 13.8 16.9C13.8 18.05 13 18.85 12 18.85C11 18.85 10.2 18.05 10.2 16.9C10.2 15.8 11 14.75 12 13.5Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M2.75 21.25H21.25" />
    </Icon>
  );
}

/** Armchair: SofaIcon's single seat with rolled arms. */
export function ArmchairIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 9.5V6.5C17.5 4.66 17.34 4.5 15.5 4.5H8.5C6.66 4.5 6.5 4.66 6.5 6.5V9.5" />
      <path d="M3.5 11.75V15.5C3.5 17.34 3.66 17.5 5.5 17.5H18.5C20.34 17.5 20.5 17.34 20.5 15.5V11.75C20.5 10.6 19.65 9.75 18.5 9.75C17.35 9.75 16.5 10.6 16.5 11.75V13.25H7.5V11.75C7.5 10.6 6.65 9.75 5.5 9.75C4.35 9.75 3.5 10.6 3.5 11.75Z" />
      <path d="M6 17.5V19.75M18 17.5V19.75" />
    </Icon>
  );
}

/** Yarn: ball with two wraps and a trailing thread - three wraps close
 *  the gaps and the ball reads as a Q. */
export function YarnIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 12, 8)} />
      <path d="M3.6 9.75C8.6 7.5 13.4 7.5 18.4 9.75" />
      <path d="M3.6 15.25C8.6 13 13.4 13 18.4 15.25" />
      <path d="M16.7 17.7C18.4 18.4 19.9 19.6 21.25 21.25" />
    </Icon>
  );
}

/* ---- places & structures more ---- */

/** Windmill: monoline sail cross on a tapered tower. */
export function WindmillIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 9.75 6.75 4.5M12 9.75 17.25 4.5M12 9.75 6.75 15M12 9.75 17.25 15" />
      <path d={squircle(12, 9.75, 1.4)} fill="currentColor" stroke="none" />
      <path d="M9.75 21.5 11 11.5H13L14.25 21.5" />
      <path d="M7.5 21.5H16.5" />
    </Icon>
  );
}

/** Mosque: dome over the hall with a finial, arched door, ground line -
 *  minaret dropped so the glyph stays open at 24px. */
export function MosqueIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 21.25V12.5C6 9.6 8.1 7.6 12 5.6C15.9 7.6 18 9.6 18 12.5V21.25" />
      <path d="M12 5.6V3" />
      <path d="M10.25 21.25V17.6C10.25 16.5 11 15.8 12 15.8C13 15.8 13.75 16.5 13.75 17.6V21.25" />
      <path d="M3 21.25H21" />
    </Icon>
  );
}

/** Star of David: two interlocked beveled triangles. */
export function StarOfDavidIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.2 7.5H19.8L12 21Z" />
      <path strokeLinejoin="bevel" d="M4.2 16.5H19.8L12 3Z" />
    </Icon>
  );
}

/** City: two towers with window ticks on a ground line. */
export function CityIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 21.25V8.5C3.5 7.58 3.58 7.5 4.5 7.5H10.5C11.42 7.5 11.5 7.58 11.5 8.5V21.25" />
      <path d="M11.5 21.25V4.5C11.5 3.58 11.58 3.5 12.5 3.5H19.5C20.42 3.5 20.5 3.58 20.5 4.5V21.25" />
      <path d="M6 11H7.5M6 15H7.5M14.5 7.5H16M14.5 11.5H16M14.5 15.5H16" />
      <path d="M2.25 21.25H21.75" />
    </Icon>
  );
}

/** Pool: ladder rails into the water line. */
export function PoolIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 16.5V5.5C9.5 4.4 8.6 3.5 7.5 3.5M14.5 16.5V5.5C14.5 4.4 15.4 3.5 16.5 3.5" />
      <path d="M9.5 8.5H14.5M9.5 12H14.5" />
      <path d="M2.25 18C3.9 17.35 5.6 17.35 7.25 18C8.9 18.65 10.6 18.65 12.25 18C13.9 17.35 15.6 17.35 17.25 18C18.75 18.6 20.25 18.65 21.75 18.15" />
    </Icon>
  );
}

/** Bench: slat back, seat rule, splayed legs. */
export function BenchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H19.5M4.5 8H19.5" />
      <path d="M2.75 11.75H21.25" />
      <path d="M5.75 4.5V19.75M18.25 4.5V19.75" />
    </Icon>
  );
}

/** Lamp post: bracketed lamp head with light ticks. */
export function LampPostIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 21.5V5.5C8.5 4 9.5 3 11 3H13.75C15 3 15.75 3.75 15.75 5V5.5" />
      <path strokeLinejoin="bevel" d="M14.25 5.5H17.25L16.6 9H14.9Z" />
      <path d="M15.75 11V12.75M13 10.5 12 12M18.5 10.5 19.5 12" />
      <path d="M6 21.5H11" />
    </Icon>
  );
}

/** Elevator: the tile split into a call panel with up/down arrows over
 *  two sliding doors. A door frame inside the tile crowds the arrows. */
export function ElevatorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M3.5 9.5H20.5M12 9.5V20.5" />
      <path strokeLinejoin="bevel" d="M6.75 7.25 8.75 5.25 10.75 7.25M13.25 5.25 15.25 7.25 17.25 5.25" />
    </Icon>
  );
}

/** Escalator: one closed step band between newels. */
export function EscalatorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 19.75H7.6C7.87 19.75 8.12 19.64 8.31 19.46L17.7 10.06C17.88 9.88 18.13 9.75 18.4 9.75H20C21.1 9.75 22 8.85 22 7.75C22 6.65 21.1 5.75 20 5.75H16.4C16.13 5.75 15.88 5.86 15.7 6.04L6.3 15.44C6.12 15.62 5.87 15.75 5.6 15.75H4C2.9 15.75 2 16.65 2 17.75C2 18.85 2.9 19.75 4 19.75Z" />
    </Icon>
  );
}

/** Fire hydrant: dome, collars, side nozzles, filled port. */
export function FireHydrantIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.25 7.5C8.25 5.25 9.85 3.5 12 3.5C14.15 3.5 15.75 5.25 15.75 7.5" />
      <path d="M6.75 7.5H17.25" />
      <path d="M8.75 7.5V18.5M15.25 7.5V18.5" />
      <path d="M8.75 12.5H6.5C5.95 12.5 5.75 12.7 5.75 13.25V14.25C5.75 14.8 5.95 15 6.5 15H8.75M15.25 12.5H17.5C18.05 12.5 18.25 12.7 18.25 13.25V14.25C18.25 14.8 18.05 15 17.5 15H15.25" />
      <path d={squircle(12, 13.75, 1.2)} fill="currentColor" stroke="none" />
      <path d="M6.5 18.5H17.5" />
      <path d="M7.5 18.5V21.25M16.5 18.5V21.25" />
    </Icon>
  );
}

/** Igloo: block dome with entrance arch and course lines. */
export function IglooIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 18.5C3.5 12.4 7.3 8.25 12 8.25C16.7 8.25 20.5 12.4 20.5 18.5" />
      <path d="M9 18.5V15.5C9 13.85 10.35 12.5 12 12.5C13.65 12.5 15 13.85 15 15.5V18.5" />
      <path d="M4.15 14.75H9M15 14.75H19.85" />
      <path d="M5.9 11.25H18.1" />
      <path d="M2.75 18.5H21.25" />
    </Icon>
  );
}

/* ---- outdoors & voyage ---- */

/** Submarine: capsule hull, conning tower, periscope, portholes. */
export function SubmarineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 10.5H18C20.2 10.5 21.75 12 21.75 14C21.75 16 20.2 17.5 18 17.5H6C3.8 17.5 2.25 16 2.25 14C2.25 12 3.8 10.5 6 10.5Z" />
      <path d="M9.5 10.5V7.5C9.5 6.58 9.58 6.5 10.5 6.5H13.5C14.42 6.5 14.5 6.58 14.5 7.5V10.5" />
      <path d="M12 6.5V4H14.25" />
      <path
        d={squircle(7, 14, 1) + squircle(12, 14, 1) + squircle(17, 14, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Parachute: canopy with gores, shrouds to a payload tile. */
export function ParachuteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 10C3.4 5.65 7.3 2.75 12 2.75C16.7 2.75 20.6 5.65 21.25 10" />
      <path d="M2.75 10H21.25" />
      <path d="M7.4 10 12 2.75 16.6 10" />
      <path d="M2.75 10 10.9 18.5M21.25 10 13.1 18.5" />
      <path d="M10.9 18.5H13.1C13.66 18.5 13.85 18.7 13.85 19.25V20.5C13.85 21.05 13.66 21.25 13.1 21.25H10.9C10.34 21.25 10.15 21.05 10.15 20.5V19.25C10.15 18.7 10.34 18.5 10.9 18.5Z" />
    </Icon>
  );
}

/** Stroller: hooded bassinet, push handle, squircle wheels. */
export function StrollerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 10H17.25C17.25 13.9 14.1 17 10.25 17H9.75C5.9 17 2.75 13.9 2.75 10Z" />
      <path d="M2.75 10C2.75 6.1 5.9 3 9.75 3V10" />
      <path d="M17.25 10.5 20.75 5.75" />
      <path d={squircle(7.5, 19.75, 1.9) + squircle(15.5, 19.75, 1.9)} />
    </Icon>
  );
}

/** Fishing rod: rod sweep, drop line into a J hook, reel ring. */
export function FishingRodIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 21.25 18.25 5.75" />
      <path d="M18.25 5.75V14.5" />
      <path d="M18.25 14.5C18.25 16.2 17.3 17.15 15.9 16.9C15 16.7 14.4 16 14.5 15.1" />
      <path d={squircle(8.25, 18.5, 1.9)} />
    </Icon>
  );
}

/** Surfboard: upright pointed oval with a stringer. */
export function SurfboardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5C15 5.5 16.5 9 16.5 13C16.5 16.5 15 19.5 12 21.5C9 19.5 7.5 16.5 7.5 13C7.5 9 9 5.5 12 2.5Z" />
      <path d="M12 4.5V19.5" />
    </Icon>
  );
}

/** Birdhouse: gabled box, entrance ring, perch stub. */
export function BirdhouseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 8.75 12 3.25 19.5 8.75V19.25C19.5 21.09 19.34 21.25 17.5 21.25H6.5C4.66 21.25 4.5 21.09 4.5 19.25Z"
      />
      <path d={squircle(12, 11.5, 2.4)} />
      <path d="M12 13.9V16.5" />
    </Icon>
  );
}

/* ---- games & play more ---- */

/** Shuttlecock: feather cone into a squircle cork. */
export function ShuttlecockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9.6 15.75 5.5 4H18.5L14.4 15.75" />
      <path d="M9.15 4 11 15.75M14.85 4 13 15.75" />
      <path d={squircle(12, 18.4, 2.6)} />
    </Icon>
  );
}

/** Table tennis: squircle blade on a short, wide outlined grip, ball to
 *  the side. A thin diagonal handle reads as a magnifier. */
export function PingPongIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(10, 9.25, 6.5)} />
      <path d="M8.25 15.5V20.25C8.25 21.17 8.33 21.25 9.25 21.25H10.75C11.67 21.25 11.75 21.17 11.75 20.25V15.5" />
      <path d={squircle(19.25, 17.5, 2)} />
    </Icon>
  );
}

/** Bow and arrow: strung bow crossed by the arrow - the straight string
 *  against the curved limb is what sells the bow. */
export function BowArrowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.25 9C8.5 9.9 14.1 15.5 15 20.75" />
      <path d="M3.25 9 15 20.75" />
      <path d="M5.75 18.25 20.5 3.5" />
      <path d="M16.25 3.5H20.5V7.75" />
    </Icon>
  );
}

/** Dart: thin tip, thick barrel, two fletching ticks across the tail. */
export function DartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 21.25 4.75 19.25" />
      <path strokeWidth={2.5} d="M4.75 19.25 13.5 10.5" />
      <path d="M13.5 10.5 19.25 4.75" />
      <path d="M14.25 6.75 17.25 9.75M16.5 4.5 19.5 7.5" />
    </Icon>
  );
}

/** Domino: portrait tile, dividing rule, 1-4 pips. */
export function DominoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 2.75H16C17.84 2.75 18 2.91 18 4.75V19.25C18 21.09 17.84 21.25 16 21.25H8C6.16 21.25 6 21.09 6 19.25V4.75C6 2.91 6.16 2.75 8 2.75Z" />
      <path d="M6 12H18" />
      <path
        d={
          squircle(12, 7.5, 1.05) +
          squircle(10, 14.5, 1.05) +
          squircle(14, 14.5, 1.05) +
          squircle(10, 18.5, 1.05) +
          squircle(14, 18.5, 1.05)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Playing cards: CopyIcon's stack with a filled diamond pip. */
export function PlayingCardsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 7.5H15.5C16.42 7.5 16.5 7.58 16.5 8.5V19.5C16.5 20.42 16.42 20.5 15.5 20.5H9C8.08 20.5 8 20.42 8 19.5V8.5C8 7.58 8.08 7.5 9 7.5Z" />
      <path d="M9.5 4H17C18.84 4 19 4.16 19 6V16" />
      <path d="M12.25 11.4 14 14 12.25 16.6 10.5 14Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Pinwheel: four beveled sails on a stick. */
export function PinwheelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 10 12 2.5 8.25 6.25Z" />
      <path strokeLinejoin="bevel" d="M12 10 19.5 10 15.75 6.25Z" />
      <path strokeLinejoin="bevel" d="M12 10 12 17.5 15.75 13.75Z" />
      <path strokeLinejoin="bevel" d="M12 10 4.5 10 8.25 13.75Z" />
      <path d="M12 10V21.5" />
    </Icon>
  );
}

/** Spinning top: stem, beveled body to the point, ground tick. */
export function SpinningTopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V5.5" />
      <path
        strokeLinejoin="bevel"
        d="M6.75 5.5H17.25L12.9 15.75C12.55 16.55 11.45 16.55 11.1 15.75Z"
      />
      <path d="M8.2 9H15.8" />
      <path d="M12 16.5V19.75" />
    </Icon>
  );
}

/** Chess rook: crenellated crown, waisted flanks, plinth. */
export function ChessRookIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 7V3.5H10.25V5.5H13.75V3.5H16.5V7Z" />
      <path d="M9.75 7C9.95 10 9.45 12.75 8.5 15H15.5C14.55 12.75 14.05 10 14.25 7" />
      <path d="M7 15H17C17.92 15 18 15.08 18 16V19.5C18 20.42 17.92 20.5 17 20.5H7C6.08 20.5 6 20.42 6 19.5V16C6 15.08 6.08 15 7 15Z" />
    </Icon>
  );
}

/* ---- school & celebration ---- */

/** Set square: right triangle with its inner window. */
export function TriangleRulerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 19.5V4.5L19.5 19.5Z" />
      <path strokeLinejoin="bevel" d="M8.5 15.5V10L14 15.5Z" />
    </Icon>
  );
}

/** Protractor: half disc with degree ticks. */
export function ProtractorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 16.5C2.75 11.4 6.9 7.25 12 7.25C17.1 7.25 21.25 11.4 21.25 16.5Z" />
      <path d="M5.46 9.96 7.23 11.73M12 7.25V9.75M18.54 9.96 16.77 11.73" />
    </Icon>
  );
}

/** Menorah: nested arm arcs, filled flames, footed stem. */
export function MenorahIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 8V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V8" />
      <path d="M8.5 8V10C8.5 11.93 10.07 13.5 12 13.5C13.93 13.5 15.5 11.93 15.5 10V8" />
      <path d="M12 4.5V17M12 17V20.5" />
      <path d="M8.5 20.5H15.5" />
      <path
        d={
          squircle(5, 6.4, 0.85) +
          squircle(8.5, 6.4, 0.85) +
          squircle(12, 2.9, 0.85) +
          squircle(15.5, 6.4, 0.85) +
          squircle(19, 6.4, 0.85)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Firework: ray burst around a filled core, ember dots. */
export function FireworkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 6.5V3.5M12 17.5V20.5M6.5 12H3.5M17.5 12H20.5M8.1 8.1 6 6M15.9 8.1 18 6M8.1 15.9 6 18M15.9 15.9 18 18" />
      <path d={squircle(12, 12, 1.5)} fill="currentColor" stroke="none" />
      <path
        d={
          squircle(4.5, 4.5, 0.9) +
          squircle(19.5, 4.5, 0.9) +
          squircle(4.5, 19.5, 0.9) +
          squircle(19.5, 19.5, 0.9)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Wheelchair: filled head, seat frame, drive wheel. */
export function WheelchairIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 4.5, 1.9)} fill="currentColor" stroke="none" />
      <path d="M11 6.75V13H15.75C16.45 13 17 13.35 17.3 13.95L19.55 18.75H21.25" />
      <path d={squircle(10, 15.75, 5.4)} />
    </Icon>
  );
}

/* ---- file & folder variants ---- */

export function FileMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M8.75 15H15.25" />
    </Icon>
  );
}

export function FileKeyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(9.75, 15, 2.1)} />
      <path d="M11.85 15H16.5M15.25 15V17.5" />
    </Icon>
  );
}

export function FileLockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M9.75 14.5H14.25C14.8 14.5 15 14.7 15 15.25V17.5C15 18.05 14.8 18.25 14.25 18.25H9.75C9.2 18.25 9 18.05 9 17.5V15.25C9 14.7 9.2 14.5 9.75 14.5Z" />
      <path d="M10.25 14.5V13.5C10.25 12.4 11.05 11.75 12 11.75C12.95 11.75 13.75 12.4 13.75 13.5V14.5" />
    </Icon>
  );
}

export function FileHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M12 18C10 16.5 8.75 15.3 8.75 13.9C8.75 12.85 9.55 12.1 10.5 12.1C11.1 12.1 11.65 12.4 12 12.9C12.35 12.4 12.9 12.1 13.5 12.1C14.45 12.1 15.25 12.85 15.25 13.9C15.25 15.3 14 16.5 12 18Z" />
    </Icon>
  );
}

export function FilePenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M14.21 11.5 15.5 12.79 10.56 17.73 8.75 18.25 9.27 16.44Z" />
    </Icon>
  );
}

export function FileClockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M10.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3H13.5L19.5 9V10.5M13.5 3V7.5C13.5 8.6 13.9 9 15 9H19.5" />
      <path d={CLOCK_BADGE} />
    </Icon>
  );
}

export function FolderMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M8.75 13H15.25" />
    </Icon>
  );
}

export function FolderCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path strokeLinejoin="bevel" d="M9 13.25 11.25 15.5 15.5 11.25" />
    </Icon>
  );
}

export function FolderLockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M9.75 12.75H14.25C14.8 12.75 15 12.95 15 13.5V16.25C15 16.8 14.8 17 14.25 17H9.75C9.2 17 9 16.8 9 16.25V13.5C9 12.95 9.2 12.75 9.75 12.75Z" />
      <path d="M10.25 12.75V11C10.25 9.97 11.03 9.25 12 9.25C12.97 9.25 13.75 9.97 13.75 11V12.75" />
    </Icon>
  );
}

export function FolderHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M12 16.4C10.1 15 8.9 13.85 8.9 12.5C8.9 11.5 9.65 10.75 10.6 10.75C11.15 10.75 11.68 11.05 12 11.5C12.32 11.05 12.85 10.75 13.4 10.75C14.35 10.75 15.1 11.5 15.1 12.5C15.1 13.85 13.9 15 12 16.4Z" />
    </Icon>
  );
}

export function FolderDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M12 9.5V15.75" />
      <path strokeLinejoin="bevel" d="M9.25 13 12 15.75 14.75 13" />
    </Icon>
  );
}

export function FolderUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M12 16V9.75" />
      <path strokeLinejoin="bevel" d="M9.25 12.5 12 9.75 14.75 12.5" />
    </Icon>
  );
}

/* ---- mail & message variants ---- */

export function MailPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
      <path d="M16.75 12.25V17.25M14.25 14.75H19.25" />
    </Icon>
  );
}

export function MailCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
      <path strokeLinejoin="bevel" d="M14.25 14.75 16.25 16.75 19.5 13.5" />
    </Icon>
  );
}

export function MailXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
      <path d="M14.75 12.75 18.75 16.75M18.75 12.75 14.75 16.75" />
    </Icon>
  );
}

export function MailSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
      <path d={squircle(16, 13.75, 2.4)} />
      <path d="M17.8 15.55 19.65 17.4" />
    </Icon>
  );
}

export function MailWarningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
      <path d="M16.75 11.5V15" />
      <path d={squircle(16.75, 17.15, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Round chat bubble - ChatBubbleIcon's circular sibling. */
export function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
    </Icon>
  );
}

/** Typing: the round bubble with ellipsis dots. */
export function MessageCircleMoreIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path
        d={squircle(8, 12, 1.05) + squircle(12, 12, 1.05) + squircle(16, 12, 1.05)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- people & security variants ---- */

/** Manage account: the figure with a toothed gear at the shoulder. */
export function UserCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C10.85 14.6 12.1 14.88 13.15 15.4" />
      <path d={squircle(18.5, 11, 2.4)} />
      <path
        strokeWidth={2.5}
        d="M18.5 6.8V8.2M18.5 13.8V15.2M21.4 11H22.8M15.6 11H14.2"
      />
    </Icon>
  );
}

/** Edit profile: the figure with the pencil. */
export function UserPenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C10.35 14.6 11.16 14.71 11.9 14.93" />
      <path d="M17.5 8 20 10.5 15.75 14.75 12.75 15.75 13.75 12.75Z" />
    </Icon>
  );
}

/** Locked account: the figure with a padlock. */
export function UserLockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.5, 7, 4)} />
      <path d="M2.75 20.75C2.75 16.6 5.9 14.6 9.5 14.6C10.85 14.6 12.1 14.88 13.15 15.4" />
      <path d="M16.5 12.75H20.5C21.05 12.75 21.25 12.95 21.25 13.5V16.5C21.25 17.05 21.05 17.25 20.5 17.25H16.5C15.95 17.25 15.75 17.05 15.75 16.5V13.5C15.75 12.95 15.95 12.75 16.5 12.75Z" />
      <path d="M16.75 12.75V11C16.75 9.97 17.53 9.25 18.5 9.25C19.47 9.25 20.25 9.97 20.25 11V12.75" />
    </Icon>
  );
}

export function ShieldPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M12 9V15M9 12H15" />
    </Icon>
  );
}

export function ShieldXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M9.5 9.5 14.5 14.5M14.5 9.5 9.5 14.5" />
    </Icon>
  );
}

export function ShieldQuestionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M10 10.1C10.15 8.95 10.95 8.25 12 8.25C13.15 8.25 14 9.05 14 10.15C14 11.85 12 11.9 12 13.7" />
      <path d={squircle(12, 16.1, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Shield with the center seam marking the half. */
export function ShieldHalfIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M12 4.75V21.5" />
    </Icon>
  );
}

/** LockIcon's face with a keyhole. */
export function LockKeyholeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 10.5H17.5C19.34 10.5 19.5 10.66 19.5 12.5V18.5C19.5 20.34 19.34 20.5 17.5 20.5H6.5C4.66 20.5 4.5 20.34 4.5 18.5V12.5C4.5 10.66 4.66 10.5 6.5 10.5Z" />
      <path d="M8 10.5V7.5C8 5.29 9.79 3.5 12 3.5C14.21 3.5 16 5.29 16 7.5V10.5" />
      <path d={squircle(12, 14.5, 1.6)} />
      <path d="M12 16.1V18" />
    </Icon>
  );
}

/** Round key: bow with a filled pin, stepped shank. */
export function KeyRoundIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 17.25C2.4 17.6 2.25 18 2.25 18.5V20.75C2.25 21.3 2.45 21.5 3 21.5H5.75C6.3 21.5 6.5 21.3 6.5 20.75V19.75C6.5 19.2 6.7 19 7.25 19H8.25C8.8 19 9 18.8 9 18.25V17.25C9 16.7 9.2 16.5 9.75 16.5H10.4C10.9 16.5 11.3 16.35 11.65 16L12.5 15.15A6.5 6.5 0 1 0 8.5 11.15Z" />
      <path d={squircle(16.5, 7.5, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Scan with the read line. */
export function ScanLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M7 12H17" />
    </Icon>
  );
}

/* ---- calendar & clock variants ---- */

export function CalendarMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M9 15.25H15" />
    </Icon>
  );
}

export function CalendarClockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 11V7C20.5 5.16 20.34 5 18.5 5H5.5C3.66 5 3.5 5.16 3.5 7V18.5C3.5 20.34 3.66 20.5 5.5 20.5H11" />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 9H20.5" />
      <path d={CLOCK_BADGE} />
    </Icon>
  );
}

export function CalendarDaysIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path
        d={
          squircle(8, 13.5, 0.9) +
          squircle(12, 13.5, 0.9) +
          squircle(16, 13.5, 0.9) +
          squircle(8, 17, 0.9) +
          squircle(12, 17, 0.9) +
          squircle(16, 17, 0.9)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Date range: a thick span bar with endpoint days. */
export function CalendarRangeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path strokeWidth={2.5} d="M8.25 13.75H14" />
      <path
        d={squircle(16.5, 13.75, 0.95) + squircle(8, 17.25, 0.95)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function CalendarHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M12 18.4C10.1 17 8.9 15.85 8.9 14.5C8.9 13.5 9.65 12.75 10.6 12.75C11.15 12.75 11.68 13.05 12 13.5C12.32 13.05 12.85 12.75 13.4 12.75C14.35 12.75 15.1 13.5 15.1 14.5C15.1 15.85 13.9 17 12 18.4Z" />
    </Icon>
  );
}

export function CalendarSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d={squircle(11.5, 14.75, 2.6)} />
      <path d="M13.45 16.7 15.5 18.75" />
    </Icon>
  );
}

/** Deadline: the clock shifted left, alert bang at right. */
export function ClockAlertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(10.5, 12.5, 7.75)} />
      <path d="M10.5 8V12.5H13.75" />
      <path d="M20.5 5.5V11" />
      <path d={squircle(20.5, 14, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/* ---- circles & squares more ---- */

export function CircleArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M12 16.5V8" />
      <path strokeLinejoin="bevel" d="M8.75 11.25 12 8 15.25 11.25" />
    </Icon>
  );
}

export function CircleArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M12 7.5V16" />
      <path strokeLinejoin="bevel" d="M8.75 12.75 12 16 15.25 12.75" />
    </Icon>
  );
}

export function CircleArrowLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M16.5 12H8" />
      <path strokeLinejoin="bevel" d="M11.25 8.75 8 12 11.25 15.25" />
    </Icon>
  );
}

export function CircleArrowRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M7.5 12H16" />
      <path strokeLinejoin="bevel" d="M12.75 8.75 16 12 12.75 15.25" />
    </Icon>
  );
}

export function CircleStopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M9.25 9.25H14.75V14.75H9.25Z" />
    </Icon>
  );
}

export function CircleEllipsisIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path
        d={squircle(7.75, 12, 1.1) + squircle(12, 12, 1.1) + squircle(16.25, 12, 1.1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function CircleDollarSignIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M12 6.5V17.5" />
      <path d="M14.75 8.75C14.2 8.1 13.3 7.7 12.25 7.7C10.7 7.7 9.5 8.6 9.5 9.85C9.5 12.6 14.5 11.4 14.5 14.15C14.5 15.4 13.3 16.3 11.75 16.3C10.7 16.3 9.8 15.9 9.25 15.25" />
    </Icon>
  );
}

export function SquareMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8 12H16" />
    </Icon>
  );
}

/* ---- arrows & charts more ---- */

/** Sort A to Z: down arrow beside the letters. */
export function ArrowDownAZIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.25V19" />
      <path strokeLinejoin="bevel" d="M3.75 15.75 7 19 10.25 15.75" />
      <path strokeLinejoin="bevel" d="M13.75 10.5 16 4.75 18.25 10.5" />
      <path d="M14.6 8.5H17.4" />
      <path d="M14 13.5H18.25L14 19.25H18.25" />
    </Icon>
  );
}

/** Area chart: ChartBarIcon's frame with a closed profile. */
export function ChartAreaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeLinejoin="bevel" d="M7.5 17V12.75L10.75 9.5 13.75 12 17.75 7.5V17Z" />
    </Icon>
  );
}

/** Scatter plot: frame with filled sample dots. */
export function ChartScatterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path
        d={
          squircle(8.5, 15.5, 1.15) +
          squircle(11, 9.5, 1.15) +
          squircle(14.5, 13.5, 1.15) +
          squircle(18, 7.5, 1.15) +
          squircle(17, 16.5, 1.15)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** SlidersIcon turned horizontal. */
export function SlidersHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 5.5H11.5M16.5 5.5H21M3 12H4.75M9.75 12H21M3 18.5H13.5M18.5 18.5H21" />
      <path d={squircle(14, 5.5, 2) + squircle(7.25, 12, 2) + squircle(16, 18.5, 2)} />
    </Icon>
  );
}

/** Clear filter: the funnel with an x. */
export function FilterXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M2.75 4.75H16.75L11.25 11.25V19.25L7.75 17.25V11.25Z"
      />
      <path d="M17 4.5 21.25 8.75M21.25 4.5 17 8.75" />
    </Icon>
  );
}

/* ---- weather & sky more ---- */

/** Drizzle: the cloud over two rows of short dashes. */
export function CloudDrizzleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path d="M8.5 17.75V19M12.5 17.25V18.5M16.5 17.75V19M10.5 20.25V21.5M14.5 20.25V21.5" />
    </Icon>
  );
}

/** Hail: dashes with filled stones beneath. */
export function CloudHailIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path d="M8.5 17.75V19M12.5 17.25V18.5M16.5 17.75V19" />
      <path
        d={
          squircle(8.5, 21.25, 0.95) +
          squircle(12.5, 20.75, 0.95) +
          squircle(16.5, 21.25, 0.95)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Haze: dimmed sun over fog bars. */
export function HazeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.2 6.2 6.6 7.6M2.25 13H4.25M19.75 13H21.75M17.4 7.6 18.8 6.2M12 5V2.5" />
      <path d="M16 13A4 4 0 0 0 8 13" />
      <path d="M2.25 17H21.75M2.25 21H21.75" />
    </Icon>
  );
}

/** Night sky: crescent with a filled companion spark. */
export function MoonStarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.25 21.25C6.55 21.25 2.75 17.45 2.75 12.75C2.75 8.9 5.15 5.6 8.75 4.5C7.95 5.85 7.5 7.4 7.5 9C7.5 13.7 11.3 17.5 16 17.5C16.9 17.5 17.75 17.35 18.55 17.1C17.05 19.6 14.35 21.25 11.25 21.25Z" />
      <path
        d="M17.5 2.75C17.75 4.55 18.6 5.4 20.4 5.65C18.6 5.9 17.75 6.75 17.5 8.55C17.25 6.75 16.4 5.9 14.6 5.65C16.4 5.4 17.25 4.55 17.5 2.75Z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- devices & power more ---- */

/** Battery fault: the tile with a bang instead of cells. */
export function BatteryWarningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8H17.5C19.34 8 19.5 8.16 19.5 10V14C19.5 15.84 19.34 16 17.5 16H4.5C2.66 16 2.5 15.84 2.5 14V10C2.5 8.16 2.66 8 4.5 8Z" />
      <path d="M21.75 10.5V13.5" />
      <path d="M11 9.75V12.55" />
      <path d={squircle(11, 14.4, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** VolumeIcon at one wave. */
export function Volume1Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M10.75 4.75V19.25L6.5 15.5H4.5C3.58 15.5 3.5 15.42 3.5 14.5V9.5C3.5 8.58 3.58 8.5 4.5 8.5H6.5Z"
      />
      <path d="M14.5 9.25C15.9 10.75 15.9 13.25 14.5 14.75" />
    </Icon>
  );
}

/** CameraIcon under the set's "off" slash. */
export function CameraOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M9.5 5.5 10.5 3.5H13.5L14.5 5.5H18.5C20.34 5.5 20.5 5.66 20.5 7.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V7.5C3.5 5.66 3.66 5.5 5.5 5.5Z"
      />
      <path d={squircle(12, 12.5, 3.25)} />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** MonitorIcon with a play wedge. */
export function MonitorPlayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path strokeLinejoin="bevel" d="M10 7 14.75 10 10 13Z" />
    </Icon>
  );
}

/** Active call: the receiver with signal arcs. */
export function PhoneCallIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={PHONE_OUTLINE} />
      <path d="M14.5 6.25C16.55 6.7 18.05 8.2 18.5 10.25" />
      <path d="M14.25 2.75C17.45 3.3 20.2 6.05 20.75 9.25" />
    </Icon>
  );
}

export function PhoneIncomingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={PHONE_OUTLINE} />
      <path d="M21.25 2.75 16 8M16 4.25V8H19.75" />
    </Icon>
  );
}

export function PhoneOutgoingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={PHONE_OUTLINE} />
      <path d="M16 8 21.25 2.75M17.5 2.75H21.25V6.5" />
    </Icon>
  );
}

export function PhoneMissedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={PHONE_OUTLINE} />
      <path d="M16 3 21 8M21 3 16 8" />
    </Icon>
  );
}

/** Power interrupted: split ring, stem, the "off" slash. */
export function PowerOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18.35 6.65A8.75 8.75 0 0 1 20.7 14.75" />
      <path d="M6.15 6.15A8.75 8.75 0 1 0 18.53 18.53" />
      <path d="M12 2.5V6.5" />
      <path d="M2.75 2.75 21.25 21.25" />
    </Icon>
  );
}

/** PC tower: vents and a power ring on the case. */
export function PcCaseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 2.75H17C18.84 2.75 19 2.91 19 4.75V19.25C19 21.09 18.84 21.25 17 21.25H7C5.16 21.25 5 21.09 5 19.25V4.75C5 2.91 5.16 2.75 7 2.75Z" />
      <path d="M9 6.5H15M9 9.5H15" />
      <path d={squircle(12, 15.75, 1.6)} />
    </Icon>
  );
}

/* ---- marks & badges more ---- */

export function BellPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3C8.7 3 6.25 5.45 6.25 8.75C6.25 12.9 5.1 14.35 4 15.5C3.4 16.13 3.84 17 4.75 17H19.25C20.16 17 20.6 16.13 20 15.5C18.9 14.35 17.75 12.9 17.75 8.75C17.75 5.45 15.3 3 12 3Z" />
      <path d="M10.4 20.25C10.75 20.9 11.35 21.25 12 21.25C12.65 21.25 13.25 20.9 13.6 20.25" />
      <path d="M12 8V12.5M9.75 10.25H14.25" />
    </Icon>
  );
}

export function BookmarkPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6.5 21V5C6.5 3.16 6.66 3 8.5 3H15.5C17.34 3 17.5 3.16 17.5 5V21L12 16.75Z"
      />
      <path d="M12 6.5V11.5M9.5 9H14.5" />
    </Icon>
  );
}

export function BookmarkCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6.5 21V5C6.5 3.16 6.66 3 8.5 3H15.5C17.34 3 17.5 3.16 17.5 5V21L12 16.75Z"
      />
      <path strokeLinejoin="bevel" d="M9.5 8.75 11.5 10.75 14.75 7.5" />
    </Icon>
  );
}

/** BookIcon with a page ribbon. */
export function BookMarkedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path strokeLinejoin="bevel" d="M10.5 2.5V9L13 7 15.5 9V2.5" />
    </Icon>
  );
}

/** BookIcon with text rules. */
export function BookTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M8.5 7.5H15.5M8.5 11.5H15.5" />
    </Icon>
  );
}

/** MapPinIcon under the set's "off" slash. */
export function MapPinOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5C10.15 19.9 4.75 14.85 4.75 10.15C4.75 6.1 8 2.9 12 2.9C16 2.9 19.25 6.1 19.25 10.15C19.25 14.85 13.85 19.9 12 21.5Z" />
      <path d={squircle(12, 10.15, 2.9)} />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** HeartIcon under the set's "off" slash. */
export function HeartOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C6.5 16.5 3 13.25 3 9.5C3 6.75 5.1 4.75 7.65 4.75C9.4 4.75 11 5.75 12 7.25C13 5.75 14.6 4.75 16.35 4.75C18.9 4.75 21 6.75 21 9.5C21 13.25 17.5 16.5 12 20.5Z" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/* ---- lucide sweep: objects & places ---- */

/** Drill: body tile, chuck, bit, grip and battery base. */
export function DrillIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 10.25H4.25C3.15 10.25 2.5 9.6 2.5 8.5V4.5C2.5 3.4 3.15 2.75 4.25 2.75H13C13.55 2.75 13.75 2.95 13.75 3.5V9.5C13.75 10.05 13.55 10.25 13 10.25Z" />
      <path d="M13.75 4.25H16.75C17.3 4.25 17.5 4.45 17.5 5V8C17.5 8.55 17.3 8.75 16.75 8.75H13.75" />
      <path d="M17.5 6.5H21.5" />
      <path d="M5.25 10.25 3.25 18.25M9 10.25 7.25 18.25" />
      <path d="M3.25 18.25H9.5C10.05 18.25 10.25 18.45 10.25 19V20.75C10.25 21.3 10.05 21.5 9.5 21.5H5.75C4.35 21.5 3.35 20.55 3.25 19.15Z" />
    </Icon>
  );
}

/** Amphora: handled neck into a footed body. */
export function AmphoraIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 2.75V7.88C10 8.3 9.73 8.67 9.35 8.86A6 6 0 0 0 6 14.25C6 18 8.5 20.5 10.25 21.5" />
      <path d="M14 2.75V7.88C14 8.3 14.27 8.67 14.65 8.86A6 6 0 0 1 18 14.25C18 18 15.5 20.5 13.75 21.5" />
      <path d="M10 5.25H8.25C7.15 5.25 6.5 5.9 6.5 7C6.5 8.1 7.15 8.75 8.25 8.75H8.7" />
      <path d="M14 5.25H15.75C16.85 5.25 17.5 5.9 17.5 7C17.5 8.1 16.85 8.75 15.75 8.75H15.3" />
      <path d="M9 2.75H15" />
      <path d="M6.5 21.5H17.5" />
    </Icon>
  );
}

/** Barrel: bulged staves bound by two hoops. */
export function BarrelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 3.5C5.4 5.9 4.5 8.8 4.5 12C4.5 15.2 5.4 18.1 7 20.5" />
      <path d="M17 3.5C18.6 5.9 19.5 8.8 19.5 12C19.5 15.2 18.6 18.1 17 20.5" />
      <path d="M7 3.5H17M7 20.5H17" />
      <path d="M4.75 8.25H19.25M4.75 15.75H19.25" />
    </Icon>
  );
}

/** Beaker: FlaskIcon's straight-walled cousin. */
export function BeakerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 2.75H19.5" />
      <path d="M6 2.75V19.25C6 20.9 7.1 21.5 8 21.5H16C16.9 21.5 18 20.9 18 19.25V2.75" />
      <path d="M6 14.5H18" />
    </Icon>
  );
}

/** Crossed swords: SwordIcon and its mirror. */
export function SwordsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M14.5 17.5 3 6V3H6L17.5 14.5" />
      <path d="M13 19 19 13M16 16 20 20M19 21 21 19" />
      <path strokeLinejoin="bevel" d="M14.5 6.5 18 3H21V6L17.5 9.5" />
      <path d="M5 14 9 18M7 17 4 20M3 19 5 21" />
    </Icon>
  );
}

/** Blinds: slats with the tilt wand and pull knob. */
export function BlindsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 3.5H21M20.5 7.5H8M20.5 11.5H8M8 15.5H20.5M10 19.5H20.5" />
      <path d="M4.5 3.5V15" />
      <path d={squircle(4.5, 18.5, 2)} />
    </Icon>
  );
}

/** Brick wall: the tile coursed into running bond. */
export function BrickWallIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M3.5 9.17H20.5M3.5 14.83H20.5" />
      <path d="M12 3.5V9.17M7.25 9.17V14.83M16.75 9.17V14.83M12 14.83V20.5" />
    </Icon>
  );
}

/** Cable: S-run between two pronged connectors. */
export function CableIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.5C7.55 5.5 7.75 5.7 7.75 6.25V7C7.75 8.1 7.1 8.75 6 8.75H4C2.9 8.75 2.25 8.1 2.25 7V6.25C2.25 5.7 2.45 5.5 3 5.5V3.25M7 5.5V3.25" />
      <path d="M19 15V6.5C19 4.55 17.45 3 15.5 3C13.55 3 12 4.55 12 6.5V17.5C12 19.45 10.45 21 8.5 21C6.55 21 5 19.45 5 17.5V8.75" />
      <path d="M17 21.5V19.25C16.45 19.25 16.25 19.05 16.25 18.5V17.75C16.25 16.65 16.9 16 18 16H20C21.1 16 21.75 16.65 21.75 17.75V18.5C21.75 19.05 21.55 19.25 21 19.25V21.5" />
    </Icon>
  );
}

/** Cake slice in three-quarter view: tip toward the viewer, rounded back
 *  crust, two layer lines along the side, cherry on top. The top-down
 *  wedge read as a price tag. */
export function CakeSliceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.5 15.5 13 6.5C16.5 6.5 19.5 8 20.5 10.5V16.5L3.5 20.5Z" />
      <path d="M3.5 15.5 20.5 10.5M3.5 18 20.5 13.5" />
      <path d={squircle(15.5, 5.25, 1.6)} />
    </Icon>
  );
}

/** Caravan: towed trailer with window, wheel, and hitch bar. */
export function CaravanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 19V9C18 6.8 16.2 5 14 5H4.25C3.15 5 2.5 5.65 2.5 6.75V17.25C2.5 18.35 3.15 19 4.25 19H6" />
      <path d="M5.5 9H9.5C10.05 9 10.25 9.2 10.25 9.75V11.5C10.25 12.05 10.05 12.25 9.5 12.25H5.5C4.95 12.25 4.75 12.05 4.75 11.5V9.75C4.75 9.2 4.95 9 5.5 9Z" />
      <path d={squircle(8, 19, 2.1)} />
      <path d="M10.1 19H21.75V17" />
    </Icon>
  );
}

/** CCTV: beveled housing, lens arm, wall mount. */
export function CctvIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.1 9.05C17.6 9.3 17.8 9.9 17.55 10.4L14.45 16.6C14.2 17.1 13.6 17.3 13.1 17.05L3.6 12.3C2.16 11.58 1.58 9.83 2.3 8.39L3.7 5.6C4.42 4.16 6.17 3.58 7.61 4.3Z" />
      <path d="M16.75 12H20.38C21.12 12 21.6 12.78 21.27 13.45L19.24 17.52C18.9 18.19 17.98 18.26 17.53 17.65L15.41 14.68" />
      <path d="M2.25 19H6.01C6.77 19 7.47 18.57 7.81 17.9L9 15.5" />
      <path d="M2.25 21.25V17" />
      <path d={squircle(7, 9, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Citrus wedge: rind arcs and segment lines on the 45. */
export function CitrusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.66 17.67C22.1 18.11 22.08 18.83 21.62 19.27A12 12 0 0 1 4.73 2.38C5.17 1.92 5.89 1.9 6.33 2.34Z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="M14 10 8.5 15.5M14 17.85V10H6.15" />
    </Icon>
  );
}

/** Concierge bell: dome on a plinth with the call button. */
export function ConciergeBellIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 20C2.45 20 2.25 19.8 2.25 19.25V18.75C2.25 17.65 2.9 17 4 17H20C21.1 17 21.75 17.65 21.75 18.75V19.25C21.75 19.8 21.55 20 21 20Z" />
      <path d="M20 17A8 8 0 0 0 4 17" />
      <path d="M12 4.5V9" />
      <path d="M10 4.5H14" />
    </Icon>
  );
}

/** Generic currency: ring with corner ticks. */
export function CurrencyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 6.5)} />
      <path d="M3.5 3.5 6.9 6.9M20.5 3.5 17.1 6.9M3.5 20.5 6.9 17.1M20.5 20.5 17.1 17.1" />
    </Icon>
  );
}

/** Drama: the comedy mask leaning on tragedy's profile. */
export function DramaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M22 5C22 14 18 17 16 17C14 17 10 14 10 5C10 3 12 2 16 2C20 2 22 3 22 5" />
      <path d="M17.4 9.9C16.6 10.7 15.4 10.7 14.6 9.9" />
      <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6C2.5 10.6 1.3 12.5 2.3 14.2C6.8 22 11.8 22.6 13.5 21.6C14.4 21.1 15.4 19.5 15.4 16.9" />
      <path
        d={squircle(14, 6, 0.9) + squircle(18, 6, 0.9)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Ethernet port: stepped jack outline with contact pins. */
export function EthernetPortIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 17.5V9.25C2.5 8.7 2.7 8.5 3.25 8.5H5.5V6.25C5.5 5.7 5.7 5.5 6.25 5.5H8.5V4.25C8.5 3.7 8.7 3.5 9.25 3.5H14.75C15.3 3.5 15.5 3.7 15.5 4.25V5.5H17.75C18.3 5.5 18.5 5.7 18.5 6.25V8.5H20.75C21.3 8.5 21.5 8.7 21.5 9.25V17.5" />
      <path d="M2.5 17.5H21.5" />
      <path d="M6.5 17.5V14.5M9.25 17.5V14.5M12 17.5V14.5M14.75 17.5V14.5M17.5 17.5V14.5" />
    </Icon>
  );
}

/** Forklift: cab over wheels with the lift mast and fork. */
export function ForkliftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 12V7.25C6 6.15 6.9 5.25 8 5.25H11L16 10.25" />
      <path d="M12 12.25H5C3.9 12.25 3 13.15 3 14.25V17.5" />
      <path d={squircle(5, 19, 2) + squircle(13, 19, 2)} />
      <path d="M7.1 19H10.9" />
      <path d="M16 2.75V19.5H21.75" />
    </Icon>
  );
}

/** Water glass: tapered tumbler with a wave line. */
export function GlassWaterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.75 2.75H18.25L16.9 19.55C16.8 20.75 16.1 21.25 15 21.25H9C7.9 21.25 7.2 20.75 7.1 19.55Z" />
      <path d="M6.1 12C7.9 10.75 10.1 10.75 12 12C13.9 13.25 16.1 13.25 17.9 12" />
    </Icon>
  );
}

/** Guitar: figure-eight body, neck on the 45, tuner head. */
export function GuitarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.9 12.1 16.4 7.6" />
      <path d="M20.1 2.3C19.7 1.9 19.1 1.9 18.7 2.3L17.6 3.4C17.2 3.8 17 4.3 17 4.83V6.17C17 6.7 16.8 7.2 16.4 7.6C16.8 7.2 17.3 7 17.83 7H19.17C19.7 7 20.2 6.8 20.6 6.4L21.7 5.3C22.1 4.9 22.1 4.3 21.7 3.9Z" />
      <path d="M6 16 8 18" />
      <path d="M8.2 9.9C8.7 8.8 9.8 8 11 8C13.8 8 16 10.2 16 13C16 14.2 15.2 15.3 14.1 15.8L13.2 16.2C12.47 16.53 12 17.2 12 18C12 20.2 10.2 22 8 22C4.7 22 2 19.3 2 16C2 13.8 3.8 12 6 12C6.8 12 7.47 11.53 7.8 10.8Z" />
    </Icon>
  );
}

/** Template: header pane over sidebar and content tiles. */
export function LayoutTemplateIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.5H20C20.92 3.5 21 3.58 21 4.5V8.5C21 9.42 20.92 9.5 20 9.5H4C3.08 9.5 3 9.42 3 8.5V4.5C3 3.58 3.08 3.5 4 3.5Z" />
      <path d="M4 13.5H9.5C10.42 13.5 10.5 13.58 10.5 14.5V19.5C10.5 20.42 10.42 20.5 9.5 20.5H4C3.08 20.5 3 20.42 3 19.5V14.5C3 13.58 3.08 13.5 4 13.5Z" />
      <path d="M14.5 13.5H20C20.92 13.5 21 13.58 21 14.5V19.5C21 20.42 20.92 20.5 20 20.5H14.5C13.58 20.5 13.5 20.42 13.5 19.5V14.5C13.5 13.58 13.58 13.5 14.5 13.5Z" />
    </Icon>
  );
}

/** Hard stop: OctagonIcon with the bang. */
export function OctagonAlertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8.2 3.5H15.8L20.5 8.2V15.8L15.8 20.5H8.2L3.5 15.8V8.2Z"
      />
      <path d="M12 7.5V13" />
      <path d={squircle(12, 16.25, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Origami: paper boat - beveled hull under the folded peak, center
 *  crease. Reads at 24px where the crane's crossing folds filled in. */
export function OrigamiIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.5 14.5H20.5L17.25 19.5H6.75Z" />
      <path strokeLinejoin="bevel" d="M7.25 14.5 12 6.5 16.75 14.5" />
      <path d="M12 6.5V14.5" />
    </Icon>
  );
}

/** PackageIcon with a delivery check on the face. */
export function PackageCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.5 7.25V16.75L12 21.25 3.5 16.75V7.25Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.25 12 11.75 20.5 7.25" />
      <path d="M12 11.75V21.25" />
      <path strokeLinejoin="bevel" d="M14.25 15.5 15.75 17 18.75 14" />
    </Icon>
  );
}

/** Package open: crossed flaps over the emptied body. */
export function PackageOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5V12.5" />
      <path d="M15.2 2.3C15.7 2.05 16.3 2.05 16.8 2.3L21 4.6C22.2 5.3 22.2 6.9 21 7.6L8.8 14.65C8.3 14.9 7.7 14.9 7.2 14.65L3 12.35C1.8 11.65 1.8 10.05 3 9.35Z" />
      <path d="M8.8 2.3C8.3 2.05 7.7 2.05 7.2 2.3L3 4.6C1.8 5.3 1.8 6.9 3 7.6L15.2 14.65C15.7 14.9 16.3 14.9 16.8 14.65L21 12.35C22.2 11.65 22.2 10.05 21 9.35Z" />
      <path d="M20 13.5V16.6C20 17.35 19.6 18 18.95 18.35L12.85 21.45C12.3 21.7 11.7 21.7 11.15 21.45L5.05 18.35C4.4 18 4 17.35 4 16.6V13.5" />
    </Icon>
  );
}

/** Parking meter: domed head, dial, coin slot, post. */
export function ParkingMeterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.28 19C15.71 19 16.09 18.73 16.23 18.32L18.6 11.33A7 7 0 1 0 5.4 11.33L7.77 18.32C7.91 18.73 8.29 19 8.72 19Z" />
      <path d="M9 9A3 3 0 1 1 15 9" />
      <path d="M12 12.25V15.25M11 15.25H13" />
      <path d="M12 19V21.5" />
    </Icon>
  );
}

/** Pentagon: the missing regular in the shape family. */
export function PentagonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 21 9.3 17.55 20H6.45L3 9.3Z" />
    </Icon>
  );
}

/** Takeoff: climbing fuselage over the runway. */
export function PlaneTakeoffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6.36 17.4 4 17 2 13 3.1 12.45C3.66 12.17 4.32 12.17 4.9 12.45L5.07 12.55C5.63 12.83 6.29 12.83 6.87 12.55L8 12 5 6 5.9 5.55C6.6 5.2 7.42 5.28 8 5.75L12 8.75C12.6 9.2 13.4 9.28 14.1 8.95L18.3 6.9C18.85 6.63 19.45 6.57 20.03 6.73L21 7C21.75 7.25 22.05 8.15 21.65 8.85L21.3 9.5C21 10 20.6 10.4 20.1 10.65L7.58 17.2C7.2 17.4 6.78 17.47 6.36 17.4Z"
      />
      <path d="M2.25 21.5H21.75" />
    </Icon>
  );
}

/** Landing: descending fuselage onto the runway. */
export function PlaneLandingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M3.77 10.77 2 9 4 4.5 5.1 5.05C5.65 5.33 6 5.89 6 6.5C6 7.11 6.35 7.67 6.9 7.95L8 8.5 11 2.5 11.9 2.95C12.55 3.28 12.95 3.95 12.95 4.74L12.85 9.74C12.85 10.53 13.25 11.2 13.9 11.53L18.1 13.58C18.68 13.85 19.06 14.44 19.06 15.08C19.06 16.1 18 16.78 17.09 16.36Z"
      />
      <path d="M2.25 21.5H21.75" />
    </Icon>
  );
}

/** Radiation: filled trefoil sectors around the hub. */
export function RadiationIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 1.5)} fill="currentColor" stroke="none" />
      <path
        d="M12 2.75C13.5 2.75 14.9 3.1 16.15 3.7L13.7 8.95C13.18 8.7 12.6 8.55 12 8.55C11.4 8.55 10.82 8.7 10.3 8.95L7.85 3.7C9.1 3.1 10.5 2.75 12 2.75Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M12 2.75C13.5 2.75 14.9 3.1 16.15 3.7L13.7 8.95C13.18 8.7 12.6 8.55 12 8.55C11.4 8.55 10.82 8.7 10.3 8.95L7.85 3.7C9.1 3.1 10.5 2.75 12 2.75Z"
        fill="currentColor"
        stroke="none"
        transform="rotate(120 12 12)"
      />
      <path
        d="M12 2.75C13.5 2.75 14.9 3.1 16.15 3.7L13.7 8.95C13.18 8.7 12.6 8.55 12 8.55C11.4 8.55 10.82 8.7 10.3 8.95L7.85 3.7C9.1 3.1 10.5 2.75 12 2.75Z"
        fill="currentColor"
        stroke="none"
        transform="rotate(240 12 12)"
      />
    </Icon>
  );
}

/** Input field: wide tile with ellipsis placeholder dots. */
export function RectangleEllipsisIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 6.5H19.5C21.34 6.5 21.5 6.66 21.5 8.5V15.5C21.5 17.34 21.34 17.5 19.5 17.5H4.5C2.66 17.5 2.5 17.34 2.5 15.5V8.5C2.5 6.66 2.66 6.5 4.5 6.5Z" />
      <path
        d={squircle(7.5, 12, 1.1) + squircle(12, 12, 1.1) + squircle(16.5, 12, 1.1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- image & cloud variants ---- */

export function ImageDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d={squircle(8.5, 9, 1.6)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M3.5 16.5 8.75 11.25 12.5 15 15.5 12 20.5 17" />
      <path d="M17 6.5V11" />
      <path strokeLinejoin="bevel" d="M14.75 8.75 17 11 19.25 8.75" />
    </Icon>
  );
}

export function ImageUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d={squircle(8.5, 9, 1.6)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M3.5 16.5 8.75 11.25 12.5 15 15.5 12 20.5 17" />
      <path d="M17 11V6.5" />
      <path strokeLinejoin="bevel" d="M14.75 8.75 17 6.5 19.25 8.75" />
    </Icon>
  );
}

export function ImageMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d={squircle(8.5, 9, 1.6)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M3.5 16.5 8.75 11.25 12.5 15 15.5 12 20.5 17" />
      <path d="M14.75 8.75H19.25" />
    </Icon>
  );
}

export function CloudCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path strokeLinejoin="bevel" d="M8.75 18.75 11 21 15.25 16.75" />
    </Icon>
  );
}

export function CloudAlertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path d="M12 16.75V19.25" />
      <path d={squircle(12, 21, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CloudCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path d={squircle(12, 18.5, 2)} />
      <path
        strokeWidth={2.5}
        d="M12 14.9V16.3M12 20.7V22.1M8.3 18.5H9.7M14.3 18.5H15.7"
      />
    </Icon>
  );
}

/** Sun peeking over the small cloud with rain dashes. */
export function CloudSunRainIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25V4.25M5.4 4.4 6.8 5.8M21 10.5H19M18.6 4.4 17.2 5.8" />
      <path d="M15.9 10.65A4 4 0 0 0 9.98 6.52" />
      <path d="M13 19.5H7A5 5 0 1 1 11.9 13.5H13A3 3 0 0 1 13 19.5Z" />
      <path d="M8 21.75 9 19.75M12 21.75 13 19.75" />
    </Icon>
  );
}

/** Two clouds: the big bank with a trailing wisp above. */
export function CloudyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 18.5H9A6.25 6.25 0 1 1 15 10.5H17.5A4 4 0 1 1 17.5 18.5Z" />
      <path d="M10.25 6.4A4.4 4.4 0 0 1 18.2 7.75H19A2.9 2.9 0 0 1 21.55 10.75" />
    </Icon>
  );
}

/* ---- data & infra variants ---- */

/** Database restore: cylinder with a rewind arrow into an arc. */
export function DatabaseBackupIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 8C16.14 8 19.5 6.88 19.5 5.5C19.5 4.12 16.14 3 12 3C7.86 3 4.5 4.12 4.5 5.5C4.5 6.88 7.86 8 12 8Z" />
      <path d="M4.5 5.5V18.5C4.5 19.6 6.65 20.55 9.7 20.9" />
      <path d="M4.5 12C4.5 13 6.35 13.9 8.75 14.3" />
      <path d="M12 12.5V16.5H16" />
      <path d="M13 20A4.9 4.9 0 0 0 21.75 17.1A4.4 4.4 0 0 0 17.35 12.6C16.05 12.6 14.85 13.13 14 14L12 16" />
    </Icon>
  );
}

/** Database power: cylinder with the bolt striking through. */
export function DatabaseZapIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 8C16.14 8 19.5 6.88 19.5 5.5C19.5 4.12 16.14 3 12 3C7.86 3 4.5 4.12 4.5 5.5C4.5 6.88 7.86 8 12 8Z" />
      <path d="M4.5 5.5V18.5C4.5 19.85 7.85 20.95 12 20.95C12.7 20.95 13.37 20.92 14 20.86" />
      <path d="M4.5 12C4.5 13.2 7.15 14.2 10.6 14.44" />
      <path d="M19.5 5.5V8.5" />
      <path strokeLinejoin="bevel" d="M20.75 11.75 17.75 16.75H21.75L18.75 21.75" />
    </Icon>
  );
}

/** ServerIcon under the set's "off" slash. */
export function ServerOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V8C20.5 9.84 20.34 10 18.5 10H5.5C3.66 10 3.5 9.84 3.5 8V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M5.5 14H18.5C20.34 14 20.5 14.16 20.5 16V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V16C3.5 14.16 3.66 14 5.5 14Z" />
      <path
        d={squircle(7, 7, 1.2) + squircle(7, 17, 1.2)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Server maintenance: racks parted around a toothed gear. */
export function ServerCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.75 10H18.5C20.34 10 20.5 9.84 20.5 8V6C20.5 4.16 20.34 4 18.5 4H5.5C3.66 4 3.5 4.16 3.5 6V8C3.5 9.84 3.66 10 5.5 10H8.25" />
      <path d="M15.75 14H18.5C20.34 14 20.5 14.16 20.5 16V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V16C3.5 14.16 3.66 14 5.5 14H8.25" />
      <path d={squircle(12, 12, 2.6)} />
      <path
        strokeWidth={2.5}
        d="M12 7.7V9.1M12 14.9V16.3M7.7 12H9.1M14.9 12H16.3"
      />
      <path
        d={squircle(7, 7, 1.2) + squircle(7, 17, 1.2)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Server fault: racks parted around the bolt. */
export function ServerCrashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.75 10H18.5C20.34 10 20.5 9.84 20.5 8V6C20.5 4.16 20.34 4 18.5 4H5.5C3.66 4 3.5 4.16 3.5 6V8C3.5 9.84 3.66 10 5.5 10H8.25" />
      <path d="M15.75 14H18.5C20.34 14 20.5 14.16 20.5 16V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V16C3.5 14.16 3.66 14 5.5 14H8.25" />
      <path strokeLinejoin="bevel" d="M13.5 6.75 10.25 12H13.75L10.5 17.25" />
      <path
        d={squircle(7, 7, 1.2) + squircle(7, 17, 1.2)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** GPU: card with twin fan rings on the bracket. */
export function GpuIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 21.25V2.75" />
      <path d="M2.5 5.5H19.5C21.34 5.5 21.5 5.66 21.5 7.5V15.5C21.5 17.34 21.34 17.5 19.5 17.5H2.5" />
      <path d="M7 17.5V20M11 17.5V20" />
      <path d={squircle(9, 11.5, 2.6) + squircle(16, 11.5, 2.6)} />
      <path
        d={squircle(9, 11.5, 0.8) + squircle(16, 11.5, 0.8)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- messages & git variants ---- */

export function MessageSquareWarningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M12 7V11.5" />
      <path d={squircle(12, 14, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function MessageSquareXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M9.5 8.25 14.5 13.25M14.5 8.25 9.5 13.25" />
    </Icon>
  );
}

export function MessageSquareHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M12 14.15C10.1 12.75 8.9 11.6 8.9 10.25C8.9 9.25 9.65 8.5 10.6 8.5C11.15 8.5 11.68 8.8 12 9.25C12.32 8.8 12.85 8.5 13.4 8.5C14.35 8.5 15.1 9.25 15.1 10.25C15.1 11.6 13.9 12.75 12 14.15Z" />
    </Icon>
  );
}

export function MessageSquareReplyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M16 13.5V12.25C16 10.25 15 9.25 13 9.25H8" />
      <path strokeLinejoin="bevel" d="M10.25 7 8 9.25 10.25 11.5" />
    </Icon>
  );
}

/** Draft PR: solid base branch, dashed incoming elbow. */
export function GitPullRequestDraftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(6, 18, 3) + squircle(18, 18, 3)} />
      <path d="M6 9V15" />
      <path d="M12.5 5H14.5M17 5.55C17.6 6.05 18 6.8 18 7.6M18 10V12" />
    </Icon>
  );
}

/** Closed PR: the request line cut off with an x. */
export function GitPullRequestClosedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(6, 18, 3) + squircle(18, 18, 3)} />
      <path d="M6 9V15" />
      <path d="M18 10.5V15" />
      <path d="M16 3.5 20 7.5M20 3.5 16 7.5" />
    </Icon>
  );
}

/** CommitIcon turned vertical. */
export function GitCommitVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 3.5)} />
      <path d="M12 2.75V7.25M12 16.75V21.25" />
    </Icon>
  );
}

/* ---- time & alignment ---- */

/** Deferred: the clock with an up arrow at right. */
export function ClockArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(10.5, 12.5, 7.75)} />
      <path d="M10.5 8V12.5H13.75" />
      <path d="M19 20.75V14" />
      <path strokeLinejoin="bevel" d="M16.25 16.75 19 14 21.75 16.75" />
    </Icon>
  );
}

/** Overdue: the clock with a down arrow at right. */
export function ClockArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(10.5, 12.5, 7.75)} />
      <path d="M10.5 8V12.5H13.75" />
      <path d="M19 13.5V20.25" />
      <path strokeLinejoin="bevel" d="M16.25 17.5 19 20.25 21.75 17.5" />
    </Icon>
  );
}

/** Center on the horizontal axis: bars snapping to the midline. */
export function AlignCenterHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 12H21.75" />
      <path d="M10 16V19.5C10 20.6 9.1 21.5 8 21.5H6C4.9 21.5 4 20.6 4 19.5V16" />
      <path d="M10 8V4.5C10 3.4 9.1 2.5 8 2.5H6C4.9 2.5 4 3.4 4 4.5V8" />
      <path d="M20 16V17C20 18.1 19.1 19 18 19H16C14.9 19 14 18.1 14 17V16" />
      <path d="M14 8V7C14 5.9 14.9 5 16 5H18C19.1 5 20 5.9 20 7V8" />
    </Icon>
  );
}

/** Center on the vertical axis. */
export function AlignCenterVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25V21.75" />
      <path d="M16 10H19.5C20.6 10 21.5 9.1 21.5 8V6C21.5 4.9 20.6 4 19.5 4H16" />
      <path d="M8 10H4.5C3.4 10 2.5 9.1 2.5 8V6C2.5 4.9 3.4 4 4.5 4H8" />
      <path d="M16 20H17C18.1 20 19 19.1 19 18V16C19 14.9 18.1 14 17 14H16" />
      <path d="M8 20H7C5.9 20 5 19.1 5 18V16C5 14.9 5.9 14 7 14H8" />
    </Icon>
  );
}

/** Resize: double-headed diagonal. */
export function MoveDiagonalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 5.5 18.5 18.5" />
      <path strokeLinejoin="bevel" d="M5.5 10.75V5.5H10.75" />
      <path strokeLinejoin="bevel" d="M13.25 18.5H18.5V13.25" />
    </Icon>
  );
}

/* ---- badges & marks extra ---- */

/** Album: the picture tile with a bookmark ribbon. */
export function AlbumIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path strokeLinejoin="bevel" d="M10.5 3.5V11L13.25 8.75 16 11V3.5" />
    </Icon>
  );
}

/** Discount: the seal with a percent. */
export function BadgePercentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M9 15 15 9" />
      <path
        d={squircle(9.5, 9.5, 1.1) + squircle(14.5, 14.5, 1.1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function ClipboardPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path d="M12 10.5V16.5M9 13.5H15" />
    </Icon>
  );
}

export function ClipboardXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path d="M9.5 11 14.5 16M14.5 11 9.5 16" />
    </Icon>
  );
}

/** Closed eye: the lower lid with lashes. */
export function EyeClosedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 8.5A10.6 10.6 0 0 0 21.75 8.5" />
      <path d="M15 18.25 14.3 15M20 15.25 18.3 13.2M4 15.25 5.7 13.2M9 18.25 9.7 15" />
    </Icon>
  );
}

/** Config file: the portrait tile with a toothed gear. */
export function FileCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(12, 15, 2.4)} />
      <path
        strokeWidth={2.5}
        d="M12 10.8V12.2M12 17.8V19.2M7.8 15H9.2M14.8 15H16.2"
      />
    </Icon>
  );
}

/** Script file: the portrait tile with the prompt and cursor. */
export function FileTerminalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path strokeLinejoin="bevel" d="M8.75 10.75 11.25 13.25 8.75 15.75" />
      <path d="M12.75 17H15.5" />
    </Icon>
  );
}

/** Pennant: the triangular flag. */
export function FlagTriangleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.5 21.25V2.75L16.75 7.75 6.5 12.75" />
    </Icon>
  );
}

/** Arrived: the pin with a check in place of the well. */
export function MapPinCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5C10.15 19.9 4.75 14.85 4.75 10.15C4.75 6.1 8 2.9 12 2.9C16 2.9 19.25 6.1 19.25 10.15C19.25 14.85 13.85 19.9 12 21.5Z" />
      <path strokeLinejoin="bevel" d="M9.5 10.15 11.4 12.05 14.75 8.7" />
    </Icon>
  );
}

export function OctagonXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8.2 3.5H15.8L20.5 8.2V15.8L15.8 20.5H8.2L3.5 15.8V8.2Z"
      />
      <path d="M9.5 9.5 14.5 14.5M14.5 9.5 9.5 14.5" />
    </Icon>
  );
}

/** StarIcon under the set's "off" slash. */
export function StarOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 3.25 14.44 9.64 21.27 9.99 15.95 14.28 17.73 20.89 12 16.9 6.27 20.89 8.05 14.28 2.73 9.99 9.56 9.64Z"
      />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Results found: the lens with a check inside. */
export function SearchCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 6)} />
      <path d="M15.6 15.6 20.75 20.75" />
      <path strokeLinejoin="bevel" d="M8.5 11.25 10.4 13.15 13.5 9.4" />
    </Icon>
  );
}

/* ---- dev & UI sweep ---- */

/** Focus: the subject ring inside ScanIcon's brackets. */
export function FocusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d={squircle(12, 12, 3.25)} />
    </Icon>
  );
}

/** Folder sync: RefreshIcon's arc pair inside the folder. */
export function FolderSyncIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M8.9 13.5A3.1 3.1 0 0 1 14.3 11.4L15 12.1" />
      <path d="M15.1 9.9V12.1H12.9" />
      <path d="M15.1 13.5A3.1 3.1 0 0 1 9.7 15.6L9 14.9" />
      <path d="M8.9 17.1V14.9H11.1" />
    </Icon>
  );
}

/** Layout list: thumbnail tiles beside their text rules. */
export function LayoutListIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.5H8.5C9.42 3.5 9.5 3.58 9.5 4.5V9C9.5 9.92 9.42 10 8.5 10H4C3.08 10 3 9.92 3 9V4.5C3 3.58 3.08 3.5 4 3.5Z" />
      <path d="M4 14H8.5C9.42 14 9.5 14.08 9.5 15V19.5C9.5 20.42 9.42 20.5 8.5 20.5H4C3.08 20.5 3 20.42 3 19.5V15C3 14.08 3.08 14 4 14Z" />
      <path d="M13.5 5.25H21M13.5 8.25H21M13.5 15.75H21M13.5 18.75H21" />
    </Icon>
  );
}

/** BulbIcon under the set's "off" slash. */
export function BulbOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C8.55 2.75 6 5.3 6 8.5C6 10.4 6.9 11.7 7.8 12.75C8.5 13.55 9 14.3 9 15.25H15C15 14.3 15.5 13.55 16.2 12.75C17.1 11.7 18 10.4 18 8.5C18 5.3 15.45 2.75 12 2.75Z" />
      <path d="M9.5 18.25H14.5M10.25 21.25H13.75" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Filter rows: rules funneling narrower. */
export function ListFilterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 6.5H19.5M7.5 12H16.5M10.5 17.5H13.5" />
    </Icon>
  );
}

/** Playlist: rules beside an eighth note. */
export function ListMusicIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 6.5H14.5M3.5 12H14.5M3.5 17.5H10.5" />
      <path d={squircle(16.4, 17, 2.1)} />
      <path d="M18.5 17V5.25L21.5 6.25" />
    </Icon>
  );
}

/** LocateIcon fixed on target: bigger filled center. */
export function LocateFixedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 6.5)} />
      <path d="M12 2.25V5.5M12 18.5V21.75M2.25 12H5.5M18.5 12H21.75" />
      <path d={squircle(12, 12, 2.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Clear formatting: the T struck with an x. */
export function RemoveFormattingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 7V4.5H16.5V7" />
      <path d="M13 4.5 8 20.5" />
      <path d="M5 20.5H11" />
      <path d="M15.25 15.25 20.25 20.25M20.25 15.25 15.25 20.25" />
    </Icon>
  );
}

/** Repeat once: the loop with a numeral one. */
export function Repeat1Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 11V9C3.5 7.16 3.66 7 5.5 7H20.5" />
      <path strokeLinejoin="bevel" d="M17.25 3.75 20.5 7 17.25 10.25" />
      <path d="M20.5 13V15C20.5 16.84 20.34 17 18.5 17H3.5" />
      <path strokeLinejoin="bevel" d="M6.75 13.75 3.5 17 6.75 20.25" />
      <path d="M11 10.25 12.5 9.25V13.75" />
    </Icon>
  );
}

/** Reply all: twin heads into the return sweep. */
export function ReplyAllIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.25 7.25 2.5 12 7.25 16.75" />
      <path strokeLinejoin="bevel" d="M12 7.25 7.25 12 12 16.75" />
      <path d="M22 18.75V17.5C22 13.64 20.36 12 16.5 12H7.5" />
    </Icon>
  );
}

/** Scan a barcode: brackets around the bars. */
export function ScanBarcodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M8 8.5V15.5M11 8.5V15.5M13.5 8.5V15.5M16 8.5V15.5" />
    </Icon>
  );
}

/** Scan and search: brackets around the lens. */
export function ScanSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d={squircle(11.5, 11.5, 3.4)} />
      <path d="M14 14 16.75 16.75" />
    </Icon>
  );
}

/** OCR: brackets around text rules. */
export function ScanTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M7 9.5H17M7 12.5H13M7 15.5H17" />
    </Icon>
  );
}

/** Split: one path forking with corner-bracket heads. */
export function SplitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16 3.5H21V8.5M8 3.5H3V8.5" />
      <path d="M12 21.5V13.7C12 12.63 11.58 11.62 10.83 10.87L3.5 3.5" />
      <path d="M15 9 21 3.5" />
    </Icon>
  );
}

/** Edit box: the tile broken open for the pencil. */
export function SquarePenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5C4.18 3.5 3.5 4.18 3.5 12C3.5 19.82 4.18 20.5 12 20.5C19.82 20.5 20.5 19.82 20.5 12" />
      <path d="M18.1 3.15 20.85 5.9 13 13.75 9.6 14.4 10.25 11Z" />
    </Icon>
  );
}

/** Search in text: rules beside the lens. */
export function TextSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21 6.5H3M10 12H3M10 17.5H3" />
      <path d={squircle(16.5, 14.75, 3)} />
      <path d="M18.8 17.05 21 19.25" />
    </Icon>
  );
}

/** GripIcon rotated: two rows of drag dots. */
export function GripHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(5.75, 9, 1.3) +
          squircle(12, 9, 1.3) +
          squircle(18.25, 9, 1.3) +
          squircle(5.75, 15, 1.3) +
          squircle(12, 15, 1.3) +
          squircle(18.25, 15, 1.3)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- devices sweep ---- */

/** Broken bluetooth: severed runes under the slash. */
export function BluetoothOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M17 17 12 21.5V12L7 17" />
      <path strokeLinejoin="bevel" d="M14.5 9.5 17.5 7 12 2.5V7" />
      <path d="M2.75 2.75 21.25 21.25" />
    </Icon>
  );
}

/** MonitorIcon under the set's "off" slash. */
export function MonitorOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d="M4.25 3 19.75 20" />
    </Icon>
  );
}

/** Responsive: the monitor with a phone docked at its corner. */
export function MonitorSmartphoneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 8V6C18 4.16 17.84 4 16 4H4.5C2.66 4 2.5 4.16 2.5 6V13C2.5 14.84 2.66 15 4.5 15H12" />
      <path d="M10 15V19M7.5 19H12.5" />
      <path d="M17.5 12H20C21.1 12 21.5 12.4 21.5 13.5V20C21.5 21.1 21.1 21.5 20 21.5H17.5C16.4 21.5 16 21.1 16 20V13.5C16 12.4 16.4 12 17.5 12Z" />
    </Icon>
  );
}

export function HardDriveDownloadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V10.5" />
      <path strokeLinejoin="bevel" d="M8.25 6.75 12 10.5 15.75 6.75" />
      <path d="M4.5 14H19.5C21.34 14 21.5 14.16 21.5 16V19.5C21.5 21.34 21.34 21.5 19.5 21.5H4.5C2.66 21.5 2.5 21.34 2.5 19.5V16C2.5 14.16 2.66 14 4.5 14Z" />
      <path
        d={squircle(6, 17.75, 1) + squircle(10, 17.75, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function HardDriveUploadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 10.5V2.75" />
      <path strokeLinejoin="bevel" d="M8.25 6.5 12 2.75 15.75 6.5" />
      <path d="M4.5 14H19.5C21.34 14 21.5 14.16 21.5 16V19.5C21.5 21.34 21.34 21.5 19.5 21.5H4.5C2.66 21.5 2.5 21.34 2.5 19.5V16C2.5 14.16 2.66 14 4.5 14Z" />
      <path
        d={squircle(6, 17.75, 1) + squircle(10, 17.75, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Quick charge: the connector half with a bolt incoming. */
export function PlugZapIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6 12 3.7 14.3C2.76 15.24 2.76 16.56 3.7 17.5L6.5 20.3C7.44 21.24 8.76 21.24 9.7 20.3L12 18Z"
      />
      <path d="M2.75 21.25 5 19" />
      <path d="M7.5 13.5 10 11M10.5 16.5 13 14" />
      <path strokeLinejoin="bevel" d="M18 2.75 14 6.75H20L16 10.75" />
    </Icon>
  );
}

/** Vibrate: the handset between shake zigzags. */
export function VibrateIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.25 8 4.25 10 2.25 12 4.25 14 2.25 16" />
      <path strokeLinejoin="bevel" d="M21.75 8 19.75 10 21.75 12 19.75 14 21.75 16" />
      <path d="M9.5 5H14.5C15.42 5 15.5 5.08 15.5 6V18C15.5 18.92 15.42 19 14.5 19H9.5C8.58 19 8.5 18.92 8.5 18V6C8.5 5.08 8.58 5 9.5 5Z" />
    </Icon>
  );
}

/* ---- science & body sweep ---- */

/** Biohazard: hub ring with three interleaved crescents. The outer ring
 *  arcs are left out - at 24px they fuse with the crescents. */
export function BiohazardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 11.9, 2)} />
      <path d="M6.7 3.4C5.8 5.9 6.7 8.6 8.9 10.1C6.5 9 3.7 9.6 2 11.6" />
      <path d="M8.9 10.1 10.3 10.9" />
      <path d="M17.3 3.4C18.2 5.9 17.3 8.6 15.1 10.1C17.5 9 20.3 9.6 22 11.6" />
      <path d="M15.1 10.1 13.7 10.9" />
      <path d="M16.7 20.8C14.1 20.4 12.1 18.2 12 15.5C11.8 18.1 9.9 20.3 7.3 20.7" />
      <path d="M12 13.9V15.5" />
    </Icon>
  );
}

/** AI brain: the left lobe wired to circuit nodes. */
export function BrainCircuitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 4.75C11.4 3.9 10.35 3.5 9.35 3.75C8.2 4.05 7.4 5.1 7.45 6.3C6.1 6.6 5.1 7.8 5.1 9.2C5.1 9.9 5.35 10.55 5.8 11.05C5 11.6 4.5 12.5 4.5 13.5C4.5 14.9 5.5 16.1 6.85 16.4C6.9 18.1 8.3 19.5 10 19.5C10.75 19.5 11.45 19.24 12 18.8V4.75Z" />
      <path d="M12 7H15.25" />
      <path d={squircle(16.75, 7, 1.4)} />
      <path d="M12 12H18.25" />
      <path d={squircle(19.75, 12, 1.4)} />
      <path d="M12 16.5H15.25" />
      <path d={squircle(16.75, 16.5, 1.4)} />
    </Icon>
  );
}

/** Flexed arm: fist curling over the biceps swell. */
export function BicepsFlexedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.4 13A5 5 0 0 1 21.75 15C21.75 18.7 17.85 21.5 13 21.5C8.9 21.5 4.85 20.7 2.65 19.1C2.2 18.8 2 18.3 2.01 17.75C2.12 12.7 2.63 2.5 6 2.5H9.75C10.85 2.5 11.75 3.4 11.75 4.5C11.75 5.6 10.85 6.5 9.75 6.5H8.5C8.22 6.5 8 6.72 8 7C8 7.28 8 7.56 8.06 7.84C8.62 10.4 9.5 12 11 12C12.5 12 13.5 10.5 13.5 9" />
    </Icon>
  );
}

/** Bubbles: three drifting rings. */
export function BubblesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(7.5, 15.75, 4.75)} />
      <path d={squircle(16.25, 7.75, 3.25)} />
      <path d={squircle(17.75, 16.5, 2.4)} />
    </Icon>
  );
}

/** Round-bottom flask: the boiling sibling. */
export function FlaskRoundIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.75 2.75H14.25" />
      <path d="M10.5 2.75V8.6M13.5 2.75V8.6" />
      <path d="M10.5 8.6A6.4 6.4 0 1 0 13.5 8.6" />
      <path d="M5.9 16.5H18.1" />
    </Icon>
  );
}

/** Smoothed data: the frame with a spline run. */
export function ChartSplineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path d="M7 16.5C7.5 14.5 8.5 9.5 11 9.5C13 9.5 13 12.5 15 12.5C17.5 12.5 19.5 7.5 20 5.5" />
    </Icon>
  );
}

/* ---- hands & food sweep ---- */

/** Crossed utensils: fork and knife on the 45. */
export function UtensilsCrossedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16 2.5 13.7 4.8C12.53 5.97 12.53 7.83 13.7 9L15.5 10.8C16.67 11.97 18.53 11.97 19.7 10.8L22 8.5" />
      <path d="M15 15 3.3 3.3C1.63 5 1.63 7.6 3.3 9.3L10.6 16.6C11.3 17.3 12.6 17.3 13.4 16.6L15 15ZM15 15 21.75 21.75" />
      <path d="M2.25 21.75 8.5 15.5" />
      <path d="M19 5 12 12" />
    </Icon>
  );
}

/** Salad: greens tumbling into the half bowl. */
export function SaladIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 21.25H17" />
      <path d="M12 21.25C16.97 21.25 21 17.22 21 12.25H3C3 17.22 7.03 21.25 12 21.25Z" />
      <path d="M11.38 12.25A2.4 2.4 0 0 1 10.98 7.48A2.4 2.4 0 0 1 14.18 4.71A2.4 2.4 0 0 1 17.65 4.08A2.4 2.4 0 0 1 21.02 7.45A2.4 2.4 0 0 1 19.92 11.15A2.5 2.5 0 0 1 19.95 12.25" />
      <path d="M13 12.25 17 8.25" />
      <path d="M10.9 7.5A4 4 0 0 0 4 10.25C4 10.98 4.2 11.66 4.54 12.25" />
    </Icon>
  );
}

/** Sandwich: gabled top slice, a wavy lettuce line, the bottom slice -
 *  each layer clear of the next. Stacked filled bands fuse into one. */
export function SandwichIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 11 10.77 4.96C11.5 4.4 12.5 4.4 13.23 4.96L21 11Z" />
      <path d="M3 14.5C4.5 13.5 6 13.5 7.5 14.5C9 15.5 10.5 15.5 12 14.5C13.5 13.5 15 13.5 16.5 14.5C18 15.5 19.5 15.5 21 14.5" />
      <path d="M3 17.75H21V18.75C21 19.67 20.92 19.75 20 19.75H4C3.08 19.75 3 19.67 3 18.75Z" />
    </Icon>
  );
}

/** Service: platter dome carried on the open hand. */
export function HandPlatterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5V2.5" />
      <path d="M15.4 17.4 18.6 14.6C19.43 13.87 20.68 13.95 21.4 14.78C22.1 15.58 22.05 16.78 21.28 17.5L17.68 20.8C16.98 21.6 15.98 22 14.88 22H10.88C9.78 22 8.78 21.6 8.08 20.8L6.78 19.34C6.59 19.12 6.32 19 6.03 19H5" />
      <path d="M2.25 14H14C15.1 14 16 14.9 16 16C16 17.1 15.1 18 14 18H12" />
      <path d="M4 10H20" />
      <path d="M5 10A7 7 0 0 1 19 10" />
      <path d="M5 14V20C5 20.55 4.55 21 4 21H2.25" />
    </Icon>
  );
}

/** Handshake: clasped hands with locked thumbs. */
export function HandshakeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 17.75 13 19.75C13.83 20.58 15.17 20.58 16 19.75C16.83 18.92 16.83 17.58 16 16.75" />
      <path d="M14 14.75 16.5 17.25C17.33 18.08 18.67 18.08 19.5 17.25C20.33 16.42 20.33 15.08 19.5 14.25L15.62 10.37C14.45 9.2 12.55 9.2 11.38 10.37L10.5 11.25C9.67 12.08 8.33 12.08 7.5 11.25C6.67 10.42 6.67 9.08 7.5 8.25L10.31 5.44C12.16 3.59 15.02 3.22 17.37 4.54L17.84 4.82C18.27 5.07 18.78 5.16 19.26 5.07L21 4.75" />
      <path d="M21 3.75 22 14.75H20" />
      <path d="M3 3.75 2 14.75 8 20.75C8.83 21.58 10.17 21.58 11 20.75C11.83 19.92 11.83 18.58 11 17.75" />
      <path d="M3 4.75H11" />
    </Icon>
  );
}

/** Laughing face: dot eyes over the open D smile. */
export function LaughIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M8 13.5C8 15.7 9.8 17.5 12 17.5C14.2 17.5 16 15.7 16 13.5Z" />
      <path
        d={squircle(9, 9.25, 1.15) + squircle(15, 9.25, 1.15)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Panda: BearIcon's face with filled ears and eye patches. */
export function PandaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={squircle(6.5, 6.5, 2.4) + squircle(17.5, 6.5, 2.4)}
        fill="currentColor"
        stroke="none"
      />
      <path d={squircle(12, 12.5, 7.9)} />
      <path
        d="M9.7 11.4C9.4 12.9 8.2 13.8 7 13.55C5.8 13.3 5.1 12 5.4 10.5C5.7 9 6.9 8.1 8.1 8.35C9.3 8.6 10 9.9 9.7 11.4Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M14.3 11.4C14.6 12.9 15.8 13.8 17 13.55C18.2 13.3 18.9 12 18.6 10.5C18.3 9 17.1 8.1 15.9 8.35C14.7 8.6 14 9.9 14.3 11.4Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M11.1 15.6H12.9L12 16.9Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Pocket knife: blade swung open from the riveted body. */
export function PocketKnifeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 14.5H15.5C17.34 14.5 17.5 14.66 17.5 16.5V17C17.5 18.84 17.34 19 15.5 19H4.5C2.66 19 2.5 18.84 2.5 17V16.5C2.5 14.66 2.66 14.5 4.5 14.5Z" />
      <path
        strokeLinejoin="bevel"
        d="M14.5 14.5 19.8 5.6C20.2 4.93 21.1 5.3 20.93 6.06L19.5 12.35C19.2 13.68 18.1 14.5 16.7 14.5"
      />
      <path
        d={squircle(6.5, 16.75, 0.9) + squircle(13.5, 16.75, 0.9)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Design tools: pencil crossing the ruler. */
export function PencilRulerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 7 8.7 2.7C7.76 1.76 6.24 1.76 5.3 2.7L2.7 5.3C1.76 6.24 1.76 7.76 2.7 8.7L7 13" />
      <path d="M8 6 10 4" />
      <path d="M18 16 20 14" />
      <path d="M17 11 21.3 15.3C22.24 16.24 22.24 17.76 21.3 18.7L18.7 21.3C17.76 22.24 16.24 22.24 15.3 21.3L11 17" />
      <path d="M20.7 3.3C19.75 2.35 18.25 2.35 17.3 3.3L3.84 16.17C3.6 16.4 3.43 16.69 3.34 17L2.02 21.35C1.9 21.75 2.25 22.1 2.65 21.98L7 20.66C7.31 20.57 7.6 20.4 7.83 20.16L20.7 6.7C21.65 5.75 21.65 4.25 20.7 3.3Z" />
    </Icon>
  );
}

/** Lasso: the rope loop trailing to a ring handle. */
export function LassoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 21.5C5.75 20.6 5 19.3 5 17.9" />
      <path d="M3.3 14A6.8 6.8 0 0 1 2.25 10.25C2.25 5.85 6.6 2.5 12 2.5C17.4 2.5 21.75 5.85 21.75 10.25C21.75 14.65 17.4 18 12 18C10.25 18 8.6 17.68 7.15 17.1" />
      <path d={squircle(5, 16, 2)} />
    </Icon>
  );
}

/* ---- places & outdoors sweep ---- */

/** Schoolhouse: gabled hall, round window, arched door. */
export function SchoolIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14 21.25V18.25C14 17.15 13.1 16.25 12 16.25C10.9 16.25 10 17.15 10 18.25V21.25" />
      <path d="M18 5V21.25M6 5V21.25" />
      <path d="M4 6 11.11 2.21C11.66 1.92 12.34 1.92 12.89 2.21L20 6" />
      <path d="M6 11 2.98 12.85C2.68 13.03 2.5 13.35 2.5 13.7V19.25C2.5 20.35 3.4 21.25 4.5 21.25H19.5C20.6 21.25 21.5 20.35 21.5 19.25V13.7C21.5 13.35 21.32 13.03 21.02 12.85L18 11" />
      <path d={squircle(12, 9, 2)} />
    </Icon>
  );
}

/** Warehouse: gabled shell over racked shelving. */
export function WarehouseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.5 8.35V19.5C21.5 20.6 20.6 21.5 19.5 21.5H4.5C3.4 21.5 2.5 20.6 2.5 19.5V8.35C2.5 7.53 3 6.8 3.76 6.5L11.26 3.5C11.74 3.31 12.26 3.31 12.74 3.5L20.24 6.5C21 6.8 21.5 7.53 21.5 8.35Z" />
      <path d="M6.5 21.5V10.5C6.5 9.95 6.7 9.75 7.25 9.75H16.75C17.3 9.75 17.5 9.95 17.5 10.5V21.5" />
      <path d="M6.5 13.75H17.5M6.5 17.5H17.5" />
    </Icon>
  );
}

/** Control tower: flared cab on crossed legs, beacon mast. */
export function TowerControlIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18.2 12.27 20 6H4L5.8 12.27C5.93 12.7 6.32 13 6.75 13H17.25C17.68 13 18.07 12.7 18.2 12.27Z" />
      <path d="M8 13V21.5M16 21.5V13" />
      <path d="M9 6 10 13M15 6 14 13" />
      <path d="M12 6V2.5M13.25 2.5H10.75" />
    </Icon>
  );
}

/** Signpost: double-ended board on the post. */
export function SignpostIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 13.5V21.25M12 2.75V6" />
      <path d="M18 6C18.52 6 19.02 6.2 19.39 6.56L21.69 8.78C22.1 9.17 22.1 9.83 21.69 10.22L19.39 12.44C19.02 12.8 18.52 13 18 13H6C5.48 13 4.98 12.8 4.61 12.44L2.31 10.22C1.9 9.83 1.9 9.17 2.31 8.78L4.61 6.56C4.98 6.2 5.48 6 6 6Z" />
    </Icon>
  );
}

/** Utility pole: crossarms, insulator stubs, guy wires. */
export function UtilityPoleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.5V21.5" />
      <path d="M2.25 5.5H21.75" />
      <path d="M3.5 3.25V5.5M7.5 3.25V5.5M16.5 3.25V5.5M20.5 3.25V5.5" />
      <path d="M19 5.5 12 12.5 5 5.5" />
    </Icon>
  );
}

/** Rails on the 45 with crossing ties. */
export function TrainTrackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 17 17 2.25M7 21.75 21.75 7" />
      <path d="M2.25 14 10.25 22M5.25 11 13.25 19M8.25 8 16.25 16M11.25 5 19.25 13M14.25 2.25 21.75 9.75" />
    </Icon>
  );
}

/** Rocking chair: seat frame on curved rockers. */
export function RockingChairIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.5 2.25 6.5 12.5H18" />
      <path d="M9.5 12.5 5.5 20M15 12.5 18.5 20" />
      <path d="M2.75 18A13 13 0 0 0 21.25 18" />
    </Icon>
  );
}

/** Shrub: lobed bush over the split trunk. */
export function ShrubIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5V14.5L10 12.5" />
      <path d="M17 8V8.8A6 6 0 0 1 13.8 19.9H10A6.5 6.5 0 0 1 7 8C7 5.24 9.24 3 12 3C14.76 3 17 5.24 17 8Z" />
      <path d="M14 13.5 12 15.5" />
    </Icon>
  );
}

/** Trees: the round canopy beside the stepped pine. */
export function TreesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 10V10.2A3 3 0 0 1 8.9 16H5A3 3 0 0 1 4 10.2V10A3 3 0 0 1 10 10Z" />
      <path d="M7 16V21.5" />
      <path d="M12 19H20.3C21.15 19 21.6 18 21 17.3L18 14H18.3C19.15 14 19.6 13 19 12.3L16 9H16.2C17.06 9 17.5 7.98 16.9 7.28L13 3 11.6 4.5" />
      <path d="M13 19V21.5" />
    </Icon>
  );
}

/** Toilet: tank and seat over the flared bowl. */
export function ToiletIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 12.25H20C20.55 12.25 21 12.7 21 13.25A5 5 0 0 1 16 18.25H15.4C15 18.25 14.77 18.7 14.98 19.03L16.52 21.5H5.4L7 18.25" />
      <path d="M8 18.25A5 5 0 0 1 3 13.25V4.25C3 3.15 3.9 2.25 5 2.25H13C14.1 2.25 15 3.15 15 4.25V12.25" />
    </Icon>
  );
}

/** Tool case: latched box with a top handle. */
export function ToolCaseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 9.5H20.5C21.42 9.5 21.5 9.58 21.5 10.5V18.5C21.5 20.34 21.34 20.5 19.5 20.5H4.5C2.66 20.5 2.5 20.34 2.5 18.5V10.5C2.5 9.58 2.58 9.5 3.5 9.5Z" />
      <path d="M9 9.5V7C9 5.9 9.9 5 11 5H13C14.1 5 15 5.9 15 7V9.5" />
      <path d="M2.5 14H21.5" />
      <path d="M8 14V16.5M16 14V16.5" />
    </Icon>
  );
}

/** Toy brick: the stud-topped block. */
export function ToyBrickIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8H19.5C21.34 8 21.5 8.16 21.5 10V18C21.5 19.84 21.34 20 19.5 20H4.5C2.66 20 2.5 19.84 2.5 18V10C2.5 8.16 2.66 8 4.5 8Z" />
      <path d="M10 8V5C10 4.45 9.8 4.25 9.25 4.25H5.75C5.2 4.25 5 4.45 5 5V8" />
      <path d="M19 8V5C19 4.45 18.8 4.25 18.25 4.25H14.75C14.2 4.25 14 4.45 14 5V8" />
    </Icon>
  );
}

/** Sticker: the peeling note grinning back. */
export function StickerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6 3.5H18C19.84 3.5 20 3.66 20 5.5V13.5L13.5 20.5H6C4.16 20.5 4 20.34 4 18.5V5.5C4 3.66 4.16 3.5 6 3.5Z"
      />
      <path d="M13.5 20.5V15.5C13.5 14.13 14.13 13.5 15.5 13.5H20" />
      <path
        d={squircle(9, 9, 1) + squircle(15, 9, 1)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M9 13.25C9.7 14.5 10.7 15.15 11.9 15.2" />
    </Icon>
  );
}

/* ---- misc sweep ---- */

/** Theme toggle: crescent carved from the ticked sun. */
export function SunMoonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 8A2.83 2.83 0 0 0 16 12A4 4 0 1 1 12 8" />
      <path d="M12 2.25V4.25M12 19.75V21.75M4.9 4.9 6.3 6.3M17.7 17.7 19.1 19.1M2.25 12H4.25M19.75 12H21.75M6.3 17.7 4.9 19.1M19.1 4.9 17.7 6.3" />
    </Icon>
  );
}

/** Swatch book: fanned sample strips with a rivet dot. */
export function SwatchBookIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 17A4 4 0 0 1 3 17V5C3 4.45 3.2 4.25 3.75 4.25H10.25C10.8 4.25 11 4.45 11 5Z" />
      <path d="M16.7 13H19C19.55 13 19.75 13.2 19.75 13.75V20.25C19.75 20.8 19.55 21 19 21H7" />
      <path d={squircle(7, 17, 1)} fill="currentColor" stroke="none" />
      <path d="M11 8 13.3 5.7C14.24 4.76 15.76 4.76 16.7 5.7L18.6 7.6C19.54 8.54 19.55 10.06 18.63 11.03L9.9 19.8" />
    </Icon>
  );
}

/** Awareness ribbon: looped band with crossed tails. */
export function RibbonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.35 14.5C7.75 12.25 6 10.2 6 7C6 4.25 8.7 2 12 2C15.3 2 18 4.25 18 7C18 10.2 16.25 12.25 14.65 14.5L18.2 19.03C18.53 19.45 18.44 20.06 18 20.38L16.1 21.74C15.66 22.06 15.05 21.97 14.72 21.53L12 18L9.28 21.53C8.95 21.97 8.34 22.06 7.9 21.74L6 20.38C5.56 20.06 5.47 19.45 5.8 19.03Z" />
      <path d="M12 18 14.55 14.5M9.35 14.5 12 11.25" />
      <path d="M12 11.25C11 10 10 9 10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9 13 10 12 11.25Z" />
    </Icon>
  );
}

/** Volleyball: ring with sweeping panel seams. */
export function VolleyballIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M11.1 7.1C14.9 6.85 18.6 8.2 21.25 11" />
      <path d="M12 12C9.75 14.75 6.65 16.55 3.3 17" />
      <path d="M16.8 13.6C15 17 11.8 19.7 7.8 21.1" />
      <path d="M20.7 17C18.55 14.4 15.4 12.6 12 12C10.7 8.7 10.7 5.3 12 2.75" />
      <path d="M6.3 3.8C5.9 7.75 6.55 11.75 8.2 15.3" />
    </Icon>
  );
}

/** Transgender: ring with mars, venus, and struck arrow. */
export function TransgenderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 11, 5)} />
      <path d="M12 16V21.5M9.75 19.25H14.25" />
      <path d="M18 2.5H21.5V6M21.5 2.5 15.55 8.45" />
      <path d="M2.5 2.5 8.45 8.45M2.5 5.75V2.5H5.75" />
      <path d="M8 5.25 5.5 7.75" />
    </Icon>
  );
}

/** Ballot: marked slip dropping through the slot. */
export function VoteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 7.25C5 6.15 5.9 5.25 7 5.25H17C18.1 5.25 19 6.15 19 7.25V19.25H5Z" />
      <path strokeLinejoin="bevel" d="M9 11.75 11.25 14 15.25 9" />
      <path d="M2.25 19.25H21.75" />
    </Icon>
  );
}

/** Shopping basket: braced weave under the rim. */
export function ShoppingBasketIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 11H21.75" />
      <path d="M3.75 11 5.35 18.4C5.55 19.35 6.35 20 7.35 20H16.65C17.65 20 18.45 19.35 18.65 18.4L20.25 11" />
      <path d="M4.75 15.5H19.25" />
      <path d="M5.25 11 9.25 4M18.75 11 14.75 4" />
      <path d="M9.25 11 10.25 20M14.75 11 13.75 20" />
    </Icon>
  );
}

/** Restock: the box with a plus on its face. */
export function PackagePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.5 7.25V16.75L12 21.25 3.5 16.75V7.25Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.25 12 11.75 20.5 7.25" />
      <path d="M12 11.75V21.25" />
      <path d="M16.25 12.25V16.75M14 14.5H18.5" />
    </Icon>
  );
}

/** Track parcel: the box under the lens. */
export function PackageSearchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.5 7.25V16.75L12 21.25 3.5 16.75V7.25Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.25 12 11.75 20.5 7.25" />
      <path d="M12 11.75V21.25" />
      <path d={squircle(16, 14.5, 2.6)} />
      <path d="M17.95 16.45 20 18.5" />
    </Icon>
  );
}

/* ---- square & circle directionals ---- */

export function SquareArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M12 16V8" />
      <path strokeLinejoin="bevel" d="M8.75 11.25 12 8 15.25 11.25" />
    </Icon>
  );
}

export function SquareArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M12 8V16" />
      <path strokeLinejoin="bevel" d="M8.75 12.75 12 16 15.25 12.75" />
    </Icon>
  );
}

export function SquareArrowLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M16 12H8" />
      <path strokeLinejoin="bevel" d="M11.25 8.75 8 12 11.25 15.25" />
    </Icon>
  );
}

export function SquareArrowRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8 12H16" />
      <path strokeLinejoin="bevel" d="M12.75 8.75 16 12 12.75 15.25" />
    </Icon>
  );
}

export function SquareArrowUpLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M15.5 15.5 8.5 8.5" />
      <path d="M14.5 8.5H8.5V14.5" />
    </Icon>
  );
}

export function SquareArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8.5 15.5 15.5 8.5" />
      <path d="M9.5 8.5H15.5V14.5" />
    </Icon>
  );
}

export function SquareArrowDownLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M15.5 8.5 8.5 15.5" />
      <path d="M8.5 9.5V15.5H14.5" />
    </Icon>
  );
}

export function SquareArrowDownRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8.5 8.5 15.5 15.5" />
      <path d="M15.5 9.5V15.5H9.5" />
    </Icon>
  );
}

export function SquareChevronUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M8.5 13.5 12 10 15.5 13.5" />
    </Icon>
  );
}

export function SquareChevronDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M8.5 10.5 12 14 15.5 10.5" />
    </Icon>
  );
}

export function SquareChevronLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M13.5 8.5 10 12 13.5 15.5" />
    </Icon>
  );
}

export function SquareChevronRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M10.5 8.5 14 12 10.5 15.5" />
    </Icon>
  );
}

export function CircleChevronUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path strokeLinejoin="bevel" d="M8.5 13.5 12 10 15.5 13.5" />
    </Icon>
  );
}

export function CircleChevronDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path strokeLinejoin="bevel" d="M8.5 10.5 12 14 15.5 10.5" />
    </Icon>
  );
}

export function CircleChevronLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path strokeLinejoin="bevel" d="M13.5 8.5 10 12 13.5 15.5" />
    </Icon>
  );
}

export function CircleChevronRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path strokeLinejoin="bevel" d="M10.5 8.5 14 12 10.5 15.5" />
    </Icon>
  );
}

export function ArrowUpFromLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.75V16.75" />
      <path strokeLinejoin="bevel" d="M6.75 9 12 3.75 17.25 9" />
      <path d="M5 20.5H19" />
    </Icon>
  );
}

export function ArrowDownFromLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 3.5H19" />
      <path d="M12 7.25V20.25" />
      <path strokeLinejoin="bevel" d="M6.75 15 12 20.25 17.25 15" />
    </Icon>
  );
}

export function ArrowLeftFromLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.5 5V19" />
      <path d="M17 12H3.75" />
      <path strokeLinejoin="bevel" d="M9 6.75 3.75 12 9 17.25" />
    </Icon>
  );
}

export function ArrowRightFromLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 5V19" />
      <path d="M7 12H20.25" />
      <path strokeLinejoin="bevel" d="M15 6.75 20.25 12 15 17.25" />
    </Icon>
  );
}

export function ArrowBigDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12 21 4.5 12.5H8.5V4.5C8.5 3.58 8.58 3.5 9.5 3.5H14.5C15.42 3.5 15.5 3.58 15.5 4.5V12.5H19.5Z"
      />
    </Icon>
  );
}

export function ArrowBigLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M3 12 11.5 4.5V8.5H19.5C20.42 8.5 20.5 8.58 20.5 9.5V14.5C20.5 15.42 20.42 15.5 19.5 15.5H11.5V19.5Z"
      />
    </Icon>
  );
}

export function ArrowBigRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M21 12 12.5 4.5V8.5H4.5C3.58 8.5 3.5 8.58 3.5 9.5V14.5C3.5 15.42 3.58 15.5 4.5 15.5H12.5V19.5Z"
      />
    </Icon>
  );
}

export function CornerLeftDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.5 4.5H13.5C10.74 4.5 10.5 4.74 10.5 7.5V19.75" />
      <path strokeLinejoin="bevel" d="M6.25 15.5 10.5 19.75 14.75 15.5" />
    </Icon>
  );
}

export function CornerLeftUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.5 19.5H13.5C10.74 19.5 10.5 19.26 10.5 16.5V4.25" />
      <path strokeLinejoin="bevel" d="M6.25 8.5 10.5 4.25 14.75 8.5" />
    </Icon>
  );
}

export function CornerRightDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H10.5C13.26 4.5 13.5 4.74 13.5 7.5V19.75" />
      <path strokeLinejoin="bevel" d="M9.25 15.5 13.5 19.75 17.75 15.5" />
    </Icon>
  );
}

export function CornerRightUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.5H10.5C13.26 19.5 13.5 19.26 13.5 16.5V4.25" />
      <path strokeLinejoin="bevel" d="M9.25 8.5 13.5 4.25 17.75 8.5" />
    </Icon>
  );
}

/* ---- square glyphs ---- */

export function SquareAsteriskIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M12 7.5V16.5M8.1 9.75 15.9 14.25M15.9 9.75 8.1 14.25" />
    </Icon>
  );
}

export function SquareCodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M9.5 9 6.5 12 9.5 15M14.5 9 17.5 12 14.5 15" />
    </Icon>
  );
}

/** TerminalTile's prompt-and-cursor on the square family's squircle. */
export function SquareTerminalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M8 8.5 11 11.5 8 14.5" />
      <path d="M12.5 15.5H16" />
    </Icon>
  );
}

export function SquareDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d={squircle(12, 12, 1.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function SquareEqualIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8 9.75H16M8 14.25H16" />
    </Icon>
  );
}

export function SquareSlashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M14.5 7.5 9.5 16.5" />
    </Icon>
  );
}

export function SquarePercentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8.5 15.5 15.5 8.5" />
      <path
        d={squircle(9.25, 9.25, 1) + squircle(14.75, 14.75, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function SquarePlayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M9.75 8.25 15.5 12 9.75 15.75Z" />
    </Icon>
  );
}

export function SquarePowerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M12 7.25V11.5" />
      <path d="M9.35 9.35A3.75 3.75 0 1 0 14.65 9.35" />
    </Icon>
  );
}

export function SquareUserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d={squircle(12, 10, 2.5)} />
      <path d="M7 16.9C7.75 14.9 9.65 14 12 14C14.35 14 16.25 14.9 17 16.9" />
    </Icon>
  );
}

export function SquareActivityIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M7 12H9.25L11.25 8.5 13.75 15.5 15.5 12H17" />
    </Icon>
  );
}

export function SquarePiIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M7.75 8.5H16.25" />
      <path d="M10 8.5V15.5" />
      <path d="M14 8.5V13.75C14 14.85 14.6 15.5 15.75 15.5" />
    </Icon>
  );
}

export function SquareSigmaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M15.25 9.75V8H8.75L11.75 12 8.75 16H15.25V14.25" />
    </Icon>
  );
}

export function SquareRadicalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M7 12.25H8.75L10.75 16 13.25 8H17" />
    </Icon>
  );
}

/* ---- sort & trend arrows ---- */

/** Sort Z to A: up arrow beside the letters. */
export function ArrowUpZAIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 18.75V5" />
      <path strokeLinejoin="bevel" d="M3.75 8.25 7 5 10.25 8.25" />
      <path d="M14 4.5H18.25L14 10.25H18.25" />
      <path strokeLinejoin="bevel" d="M13.75 19.5 16 13.75 18.25 19.5" />
      <path d="M14.6 17.5H17.4" />
    </Icon>
  );
}

/** Sort 0 to 1: down arrow beside the numerals. */
export function ArrowDown01Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.25V19" />
      <path strokeLinejoin="bevel" d="M3.75 15.75 7 19 10.25 15.75" />
      <path d="M14.5 4.5H16.5C17.05 4.5 17.25 4.7 17.25 5.25V9.75C17.25 10.3 17.05 10.5 16.5 10.5H14.5C13.95 10.5 13.75 10.3 13.75 9.75V5.25C13.75 4.7 13.95 4.5 14.5 4.5Z" />
      <path d="M14.25 14.75 15.75 13.5V19.5M14 19.5H17.5" />
    </Icon>
  );
}

/** Volatile trend: rising line falling into a bracket. */
export function TrendingUpDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M21.25 2.75 12 12 8 8 2.75 13.25" />
      <path d="M16 2.75H21.25V8" />
      <path d="M14.5 14.5 21.25 21.25" />
      <path d="M21.25 16V21.25H16" />
    </Icon>
  );
}

export function IterationCwIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 10.5C4 6.1 7.6 2.5 12 2.5C16.4 2.5 20 6.1 20 10.5C20 14.9 16.4 18.5 12 18.5H4.25" />
      <path strokeLinejoin="bevel" d="M8 21.75 4.25 18.5 8 15.25" />
    </Icon>
  );
}

export function IterationCcwIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 10.5C20 6.1 16.4 2.5 12 2.5C7.6 2.5 4 6.1 4 10.5C4 14.9 7.6 18.5 12 18.5H19.75" />
      <path strokeLinejoin="bevel" d="M16 21.75 19.75 18.5 16 15.25" />
    </Icon>
  );
}

/** Plain arrow cursor - PointerIcon without the drag tail. */
export function MousePointer2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M5.5 5.5 18.5 11 12.9 12.9 11 18.5Z" />
    </Icon>
  );
}

/* ---- clock faces ---- */

export function Clock1Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path strokeLinejoin="bevel" d="M12 6.75V12L14 8.54" />
    </Icon>
  );
}

export function Clock2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path strokeLinejoin="bevel" d="M12 6.75V12L15.46 10" />
    </Icon>
  );
}

export function Clock4Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V12L15.46 14" />
    </Icon>
  );
}

export function Clock5Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V12L14 15.46" />
    </Icon>
  );
}

export function Clock6Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V16" />
    </Icon>
  );
}

export function Clock7Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V12L10 15.46" />
    </Icon>
  );
}

export function Clock8Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V12L8.54 14" />
    </Icon>
  );
}

export function Clock9Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V12H8" />
    </Icon>
  );
}

export function Clock10Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path strokeLinejoin="bevel" d="M12 6.75V12L8.54 10" />
    </Icon>
  );
}

export function Clock11Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path strokeLinejoin="bevel" d="M12 6.75V12L10 8.54" />
    </Icon>
  );
}

export function Clock12Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 6.75V12" />
    </Icon>
  );
}

/* ---- align & distribute matrix ---- */

export function AlignStartHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 2.5H21.75" />
      <path d="M5.5 5.5H8.5C9.42 5.5 9.5 5.58 9.5 6.5V19.5C9.5 20.42 9.42 20.5 8.5 20.5H5.5C4.58 20.5 4.5 20.42 4.5 19.5V6.5C4.5 5.58 4.58 5.5 5.5 5.5Z" />
      <path d="M15.5 5.5H18.5C19.42 5.5 19.5 5.58 19.5 6.5V13C19.5 13.92 19.42 14 18.5 14H15.5C14.58 14 14.5 13.92 14.5 13V6.5C14.5 5.58 14.58 5.5 15.5 5.5Z" />
    </Icon>
  );
}

export function AlignEndHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 21.5H21.75" />
      <path d="M5.5 3.5H8.5C9.42 3.5 9.5 3.58 9.5 4.5V17.5C9.5 18.42 9.42 18.5 8.5 18.5H5.5C4.58 18.5 4.5 18.42 4.5 17.5V4.5C4.5 3.58 4.58 3.5 5.5 3.5Z" />
      <path d="M15.5 10H18.5C19.42 10 19.5 10.08 19.5 11V17.5C19.5 18.42 19.42 18.5 18.5 18.5H15.5C14.58 18.5 14.5 18.42 14.5 17.5V11C14.5 10.08 14.58 10 15.5 10Z" />
    </Icon>
  );
}

export function AlignStartVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 2.25V21.75" />
      <path d="M6 5.5H19C19.92 5.5 20 5.58 20 6.5V9.5C20 10.42 19.92 10.5 19 10.5H6C5.08 10.5 5 10.42 5 9.5V6.5C5 5.58 5.08 5.5 6 5.5Z" />
      <path d="M6 13.5H13C13.92 13.5 14 13.58 14 14.5V17.5C14 18.42 13.92 18.5 13 18.5H6C5.08 18.5 5 18.42 5 17.5V14.5C5 13.58 5.08 13.5 6 13.5Z" />
    </Icon>
  );
}

export function AlignEndVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.5 2.25V21.75" />
      <path d="M5 5.5H18C18.92 5.5 19 5.58 19 6.5V9.5C19 10.42 18.92 10.5 18 10.5H5C4.08 10.5 4 10.42 4 9.5V6.5C4 5.58 4.08 5.5 5 5.5Z" />
      <path d="M11 13.5H18C18.92 13.5 19 13.58 19 14.5V17.5C19 18.42 18.92 18.5 18 18.5H11C10.08 18.5 10 18.42 10 17.5V14.5C10 13.58 10.08 13.5 11 13.5Z" />
    </Icon>
  );
}

export function AlignHorizontalJustifyStartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 2.25V21.75" />
      <path d="M7 5.5H10C10.92 5.5 11 5.58 11 6.5V17.5C11 18.42 10.92 18.5 10 18.5H7C6.08 18.5 6 18.42 6 17.5V6.5C6 5.58 6.08 5.5 7 5.5Z" />
      <path d="M16 8H19C19.92 8 20 8.08 20 9V15C20 15.92 19.92 16 19 16H16C15.08 16 15 15.92 15 15V9C15 8.08 15.08 8 16 8Z" />
    </Icon>
  );
}

export function AlignHorizontalJustifyCenterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 5H7.5C8.42 5 8.5 5.08 8.5 6V18C8.5 18.92 8.42 19 7.5 19H3.5C2.58 19 2.5 18.92 2.5 18V6C2.5 5.08 2.58 5 3.5 5Z" />
      <path d="M16.5 7H20.5C21.42 7 21.5 7.08 21.5 8V16C21.5 16.92 21.42 17 20.5 17H16.5C15.58 17 15.5 16.92 15.5 16V8C15.5 7.08 15.58 7 16.5 7Z" />
      <path d="M12 2.25V21.75" />
    </Icon>
  );
}

export function AlignHorizontalJustifyEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.5 2.25V21.75" />
      <path d="M5 5.5H8C8.92 5.5 9 5.58 9 6.5V17.5C9 18.42 8.92 18.5 8 18.5H5C4.08 18.5 4 18.42 4 17.5V6.5C4 5.58 4.08 5.5 5 5.5Z" />
      <path d="M14 8H17C17.92 8 18 8.08 18 9V15C18 15.92 17.92 16 17 16H14C13.08 16 13 15.92 13 15V9C13 8.08 13.08 8 14 8Z" />
    </Icon>
  );
}

export function AlignVerticalJustifyStartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 2.5H21.75" />
      <path d="M6.5 6H17.5C18.42 6 18.5 6.08 18.5 7V10C18.5 10.92 18.42 11 17.5 11H6.5C5.58 11 5.5 10.92 5.5 10V7C5.5 6.08 5.58 6 6.5 6Z" />
      <path d="M8.5 15H15.5C16.42 15 16.5 15.08 16.5 16V19C16.5 19.92 16.42 20 15.5 20H8.5C7.58 20 7.5 19.92 7.5 19V16C7.5 15.08 7.58 15 8.5 15Z" />
    </Icon>
  );
}

export function AlignVerticalJustifyCenterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 12H21.75" />
      <path d="M8 2.5H16C16.92 2.5 17 2.58 17 3.5V6.5C17 7.42 16.92 7.5 16 7.5H8C7.08 7.5 7 7.42 7 6.5V3.5C7 2.58 7.08 2.5 8 2.5Z" />
      <path d="M6 16.5H18C18.92 16.5 19 16.58 19 17.5V20.5C19 21.42 18.92 21.5 18 21.5H6C5.08 21.5 5 21.42 5 20.5V17.5C5 16.58 5.08 16.5 6 16.5Z" />
    </Icon>
  );
}

export function AlignVerticalJustifyEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 21.5H21.75" />
      <path d="M6.5 13H17.5C18.42 13 18.5 13.08 18.5 14V17C18.5 17.92 18.42 18 17.5 18H6.5C5.58 18 5.5 17.92 5.5 17V14C5.5 13.08 5.58 13 6.5 13Z" />
      <path d="M8.5 4H15.5C16.42 4 16.5 4.08 16.5 5V8C16.5 8.92 16.42 9 15.5 9H8.5C7.58 9 7.5 8.92 7.5 8V5C7.5 4.08 7.58 4 8.5 4Z" />
    </Icon>
  );
}

export function AlignHorizontalSpaceBetweenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 2.25V21.75M21.5 2.25V21.75" />
      <path d="M6.5 5.5H9C9.92 5.5 10 5.58 10 6.5V17.5C10 18.42 9.92 18.5 9 18.5H6.5C5.58 18.5 5.5 18.42 5.5 17.5V6.5C5.5 5.58 5.58 5.5 6.5 5.5Z" />
      <path d="M15 8H17.5C18.42 8 18.5 8.08 18.5 9V15C18.5 15.92 18.42 16 17.5 16H15C14.08 16 14 15.92 14 15V9C14 8.08 14.08 8 15 8Z" />
    </Icon>
  );
}

export function AlignVerticalSpaceBetweenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 2.5H21.75M2.25 21.5H21.75" />
      <path d="M6.5 5.5H17.5C18.42 5.5 18.5 5.58 18.5 6.5V9C18.5 9.92 18.42 10 17.5 10H6.5C5.58 10 5.5 9.92 5.5 9V6.5C5.5 5.58 5.58 5.5 6.5 5.5Z" />
      <path d="M8.5 14H15.5C16.42 14 16.5 14.08 16.5 15V17.5C16.5 18.42 16.42 18.5 15.5 18.5H8.5C7.58 18.5 7.5 18.42 7.5 17.5V15C7.5 14.08 7.58 14 8.5 14Z" />
    </Icon>
  );
}

export function AlignHorizontalDistributeCenterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H9.5C10.42 5 10.5 5.08 10.5 6V18C10.5 18.92 10.42 19 9.5 19H4.5C3.58 19 3.5 18.92 3.5 18V6C3.5 5.08 3.58 5 4.5 5Z" />
      <path d="M14.5 7H19.5C20.42 7 20.5 7.08 20.5 8V16C20.5 16.92 20.42 17 19.5 17H14.5C13.58 17 13.5 16.92 13.5 16V8C13.5 7.08 13.58 7 14.5 7Z" />
      <path d="M7 2.25V4.5M7 19.5V21.75M17 2.25V6.5M17 17.5V21.75" />
    </Icon>
  );
}

export function AlignVerticalDistributeCenterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 3.5H19C19.92 3.5 20 3.58 20 4.5V9.5C20 10.42 19.92 10.5 19 10.5H5C4.08 10.5 4 10.42 4 9.5V4.5C4 3.58 4.08 3.5 5 3.5Z" />
      <path d="M7 13.5H17C17.92 13.5 18 13.58 18 14.5V19.5C18 20.42 17.92 20.5 17 20.5H7C6.08 20.5 6 20.42 6 19.5V14.5C6 13.58 6.08 13.5 7 13.5Z" />
      <path d="M2.25 7H4M20 7H21.75M2.25 17H6M18 17H21.75" />
    </Icon>
  );
}

/* ---- fold, stretch & group ---- */

export function FoldHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 12H7.5M21.75 12H16.5" />
      <path d="M12 2.25V4.25M12 8V10M12 14V16M12 19.75V21.75" />
      <path strokeLinejoin="bevel" d="M19 9 16 12 19 15M5 15 8 12 5 9" />
    </Icon>
  );
}

export function FoldVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25V7.5M12 21.75V16.5" />
      <path d="M2.25 12H4.25M8 12H10M14 12H16M19.75 12H21.75" />
      <path strokeLinejoin="bevel" d="M9 19 12 16 15 19M15 5 12 8 9 5" />
    </Icon>
  );
}

export function UnfoldHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 12H7.5M21.75 12H16.5" />
      <path d="M12 2.25V4.25M12 8V10M12 14V16M12 19.75V21.75" />
      <path strokeLinejoin="bevel" d="M19 15 22 12 19 9M5 9 2 12 5 15" />
    </Icon>
  );
}

export function UnfoldVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25V7.5M12 21.75V16.5" />
      <path d="M2.25 12H4.25M8 12H10M14 12H16M19.75 12H21.75" />
      <path strokeLinejoin="bevel" d="M9 5 12 2 15 5M15 19 12 22 9 19" />
    </Icon>
  );
}

export function StretchHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C20.42 5 20.5 5.08 20.5 6V9C20.5 9.92 20.42 10 19.5 10H4.5C3.58 10 3.5 9.92 3.5 9V6C3.5 5.08 3.58 5 4.5 5Z" />
      <path d="M4.5 14H19.5C20.42 14 20.5 14.08 20.5 15V18C20.5 18.92 20.42 19 19.5 19H4.5C3.58 19 3.5 18.92 3.5 18V15C3.5 14.08 3.58 14 4.5 14Z" />
    </Icon>
  );
}

export function StretchVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 4.5H9C9.92 4.5 10 4.58 10 5.5V18.5C10 19.42 9.92 19.5 9 19.5H6C5.08 19.5 5 19.42 5 18.5V5.5C5 4.58 5.08 4.5 6 4.5Z" />
      <path d="M15 4.5H18C18.92 4.5 19 4.58 19 5.5V18.5C19 19.42 18.92 19.5 18 19.5H15C14.08 19.5 14 19.42 14 18.5V5.5C14 4.58 14.08 4.5 15 4.5Z" />
    </Icon>
  );
}

export function GroupIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 7.5V5.5C3.5 4.4 4.4 3.5 5.5 3.5H7.5M16.5 3.5H18.5C19.6 3.5 20.5 4.4 20.5 5.5V7.5M20.5 16.5V18.5C20.5 19.6 19.6 20.5 18.5 20.5H16.5M7.5 20.5H5.5C4.4 20.5 3.5 19.6 3.5 18.5V16.5" />
      <path d="M8 7.5H13C13.55 7.5 13.75 7.7 13.75 8.25V10.75C13.75 11.3 13.55 11.5 13 11.5H8C7.45 11.5 7.25 11.3 7.25 10.75V8.25C7.25 7.7 7.45 7.5 8 7.5Z" />
      <path d="M11 12.5H16C16.55 12.5 16.75 12.7 16.75 13.25V15.75C16.75 16.3 16.55 16.5 16 16.5H11C10.45 16.5 10.25 16.3 10.25 15.75V13.25C10.25 12.7 10.45 12.5 11 12.5Z" />
    </Icon>
  );
}

export function UngroupIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 4.5H12C12.92 4.5 13 4.58 13 5.5V9.5C13 10.42 12.92 10.5 12 10.5H5C4.08 10.5 4 10.42 4 9.5V5.5C4 4.58 4.08 4.5 5 4.5Z" />
      <path d="M12 13.5H19C19.92 13.5 20 13.58 20 14.5V18.5C20 19.42 19.92 19.5 19 19.5H12C11.08 19.5 11 19.42 11 18.5V14.5C11 13.58 11.08 13.5 12 13.5Z" />
    </Icon>
  );
}

export function ScalingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5H5.5C4.4 3.5 3.5 4.4 3.5 5.5V18.5C3.5 19.6 4.4 20.5 5.5 20.5H18.5C19.6 20.5 20.5 19.6 20.5 18.5V12" />
      <path d="M16 3.5H20.5V8" />
      <path d="M14 15.5H9.5V11" />
      <path d="M20.5 3.5 9.5 14.5" />
    </Icon>
  );
}

export function RatioIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 2.5H16C17.84 2.5 18 2.66 18 4.5V19.5C18 21.34 17.84 21.5 16 21.5H8C6.16 21.5 6 21.34 6 19.5V4.5C6 2.66 6.16 2.5 8 2.5Z" />
      <path d="M4.5 6H19.5C21.34 6 21.5 6.16 21.5 8V16C21.5 17.84 21.34 18 19.5 18H4.5C2.66 18 2.5 17.84 2.5 16V8C2.5 6.16 2.66 6 4.5 6Z" />
    </Icon>
  );
}

/* ---- panels & grids more ---- */

export function PanelBottomCloseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 14.5H20.5" />
      <path strokeLinejoin="bevel" d="M9.5 8.25 12 10.75 14.5 8.25" />
    </Icon>
  );
}

export function PanelBottomOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 14.5H20.5" />
      <path strokeLinejoin="bevel" d="M9.5 10.75 12 8.25 14.5 10.75" />
    </Icon>
  );
}

export function PanelTopCloseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.5H20.5" />
      <path strokeLinejoin="bevel" d="M9.5 15.75 12 13.25 14.5 15.75" />
    </Icon>
  );
}

export function PanelTopOpenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.5H20.5" />
      <path strokeLinejoin="bevel" d="M9.5 13.25 12 15.75 14.5 13.25" />
    </Icon>
  );
}

export function Rows3Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M3.5 9.17H20.5M3.5 14.83H20.5" />
    </Icon>
  );
}

export function Rows4Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M3.5 7.75H20.5M3.5 12H20.5M3.5 16.25H20.5" />
    </Icon>
  );
}

export function Columns3Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M9.17 3.5V20.5M14.83 3.5V20.5" />
    </Icon>
  );
}

export function Columns4Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M7.75 3.5V20.5M12 3.5V20.5M16.25 3.5V20.5" />
    </Icon>
  );
}

export function Grid2x2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M12 3.5V20.5M3.5 12H20.5" />
    </Icon>
  );
}

export function LayoutPanelLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.5H9.5C10.42 3.5 10.5 3.58 10.5 4.5V19.5C10.5 20.42 10.42 20.5 9.5 20.5H4C3.08 20.5 3 20.42 3 19.5V4.5C3 3.58 3.08 3.5 4 3.5Z" />
      <path d="M14.5 3.5H20C20.92 3.5 21 3.58 21 4.5V9.5C21 10.42 20.92 10.5 20 10.5H14.5C13.58 10.5 13.5 10.42 13.5 9.5V4.5C13.5 3.58 13.58 3.5 14.5 3.5Z" />
      <path d="M14.5 13.5H20C20.92 13.5 21 13.58 21 14.5V19.5C21 20.42 20.92 20.5 20 20.5H14.5C13.58 20.5 13.5 20.42 13.5 19.5V14.5C13.5 13.58 13.58 13.5 14.5 13.5Z" />
    </Icon>
  );
}

/* ---- tables, galleries, tallies & dice ---- */

export function TablePropertiesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M15 3.5V20.5" />
      <path d="M20.5 9.17H15M20.5 14.83H15" />
    </Icon>
  );
}

export function TableOfContentsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 5.5H16M3 12H16M3 18.5H16" />
      <path
        d={
          squircle(20.5, 5.5, 1.1) +
          squircle(20.5, 12, 1.1) +
          squircle(20.5, 18.5, 1.1)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function GalleryHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 3.5H17C18.84 3.5 19 3.66 19 5.5V18.5C19 20.34 18.84 20.5 17 20.5H7C5.16 20.5 5 20.34 5 18.5V5.5C5 3.66 5.16 3.5 7 3.5Z" />
      <path d="M2 3.5V20.5M22 3.5V20.5" />
    </Icon>
  );
}

export function GalleryVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 2.5H21" />
      <path d="M5 6H19C20.84 6 21 6.16 21 8V16C21 17.84 20.84 18 19 18H5C3.16 18 3 17.84 3 16V8C3 6.16 3.16 6 5 6Z" />
      <path d="M3 21.5H21" />
    </Icon>
  );
}

export function GalleryHorizontalEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 7V17M6.25 5V19" />
      <path d="M12 3.5H20C21.84 3.5 22 3.66 22 5.5V18.5C22 20.34 21.84 20.5 20 20.5H12C10.16 20.5 10 20.34 10 18.5V5.5C10 3.66 10.16 3.5 12 3.5Z" />
    </Icon>
  );
}

export function GalleryThumbnailsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 3.5H19.5C21.34 3.5 21.5 3.66 21.5 5.5V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V5.5C2.5 3.66 2.66 3.5 4.5 3.5Z" />
      <path d="M2.5 20H6.5M10 20H14M17.5 20H21.5" />
    </Icon>
  );
}

export function Tally1Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5V19.5" />
    </Icon>
  );
}

export function Tally2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5V19.5M9.5 4.5V19.5" />
    </Icon>
  );
}

export function Tally3Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5V19.5M9.5 4.5V19.5M14.5 4.5V19.5" />
    </Icon>
  );
}

export function Tally4Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5V19.5M9.5 4.5V19.5M14.5 4.5V19.5M19.5 4.5V19.5" />
    </Icon>
  );
}

export function Tally5Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5V19.5M9.5 4.5V19.5M14.5 4.5V19.5M19.5 4.5V19.5" />
      <path d="M22 3 2 21" />
    </Icon>
  );
}

export function Dice1Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d={squircle(12, 12, 2.25)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function Dice2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path
        d={squircle(8.75, 8.75, 1.2) + squircle(15.25, 15.25, 1.2)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function Dice3Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path
        d={squircle(8.25, 8.25, 1.2) + squircle(12, 12, 1.2) + squircle(15.75, 15.75, 1.2)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function Dice4Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path
        d={
          squircle(8.25, 8.25, 1.2) +
          squircle(15.75, 8.25, 1.2) +
          squircle(8.25, 15.75, 1.2) +
          squircle(15.75, 15.75, 1.2)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function Dice6Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path
        d={
          squircle(8.25, 7.75, 1.2) +
          squircle(15.75, 7.75, 1.2) +
          squircle(8.25, 12, 1.2) +
          squircle(15.75, 12, 1.2) +
          squircle(8.25, 16.25, 1.2) +
          squircle(15.75, 16.25, 1.2)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- book variants ---- */

export function BookCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path strokeLinejoin="bevel" d="M9.25 9.5 11.5 11.75 15.25 8" />
    </Icon>
  );
}

export function BookOpenCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5.5C10 4 7.5 3.5 4.5 3.5C3.58 3.5 3.5 3.58 3.5 4.5V17.5C3.5 18.42 3.58 18.5 4.5 18.5C7.5 18.5 10 19 12 20.5C14 19 16.5 18.5 19.5 18.5C20.42 18.5 20.5 18.42 20.5 17.5V4.5C20.5 3.58 20.42 3.5 19.5 3.5C16.5 3.5 14 4 12 5.5Z" />
      <path d="M12 5.5V20.5" />
      <path strokeLinejoin="bevel" d="M14 10 15.75 11.75 18.5 8.5" />
    </Icon>
  );
}

export function BookDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M12 6V12.5" />
      <path strokeLinejoin="bevel" d="M9.5 10 12 12.5 14.5 10" />
    </Icon>
  );
}

export function BookUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M12 12.5V6" />
      <path strokeLinejoin="bevel" d="M9.5 8.5 12 6 14.5 8.5" />
    </Icon>
  );
}

export function BookHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M12 13.4C10.1 12 8.9 10.85 8.9 9.5C8.9 8.5 9.65 7.75 10.6 7.75C11.15 7.75 11.68 8.05 12 8.5C12.32 8.05 12.85 7.75 13.4 7.75C14.35 7.75 15.1 8.5 15.1 9.5C15.1 10.85 13.9 12 12 13.4Z" />
    </Icon>
  );
}

export function BookKeyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d={squircle(11, 10.5, 2)} />
      <path d="M12.6 8.9 16.25 5.25M14.75 6.75 16.25 8.25" />
    </Icon>
  );
}

export function BookLockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M9.75 9H14.25C14.8 9 15 9.2 15 9.75V12.75C15 13.3 14.8 13.5 14.25 13.5H9.75C9.2 13.5 9 13.3 9 12.75V9.75C9 9.2 9.2 9 9.75 9Z" />
      <path d="M10.25 9V7.25C10.25 6.22 11.03 5.5 12 5.5C12.97 5.5 13.75 6.22 13.75 7.25V9" />
    </Icon>
  );
}

export function BookPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M12 6V13M8.5 9.5H15.5" />
    </Icon>
  );
}

export function BookXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M9.5 7 14.5 12M14.5 7 9.5 12" />
    </Icon>
  );
}

export function BookUserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d={squircle(12, 8.25, 2.2)} />
      <path d="M8.5 14.4C9.1 12.8 10.4 12.1 12 12.1C13.6 12.1 14.9 12.8 15.5 14.4" />
    </Icon>
  );
}

/* ---- folder variants more ---- */

export function FolderArchiveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M9.75 10.5H14.25C14.8 10.5 15 10.7 15 11.25V12.25C15 12.8 14.8 13 14.25 13H9.75C9.2 13 9 12.8 9 12.25V11.25C9 10.7 9.2 10.5 9.75 10.5Z" />
      <path d="M9.75 13V16C9.75 16.55 9.95 16.75 10.5 16.75H13.5C14.05 16.75 14.25 16.55 14.25 16V13" />
      <path d="M11 14.75H13" />
    </Icon>
  );
}

export function FolderClockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.5 11V7.8C21.5 6.42 21.38 6.3 20 6.3H11.41C10.78 6.3 10.19 6 9.81 5.5L9 4.3C8.62 3.8 8.03 3.5 7.4 3.5H4C2.62 3.5 2.5 3.62 2.5 5V18.5C2.5 19.88 2.62 20 4 20H11" />
      <path d={squircle(16.75, 16.5, 5) + "M16.75 13.25V16.5H19.25"} />
    </Icon>
  );
}

export function FolderCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d={squircle(12, 13, 2.4)} />
      <path
        strokeWidth={2.5}
        d="M12 8.8V10.2M12 15.8V17.2M7.8 13H9.2M14.8 13H16.2"
      />
    </Icon>
  );
}

export function FolderKanbanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M9 10V15.5M12 10V13M15 10V14.5" />
    </Icon>
  );
}

export function FolderKeyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d={squircle(10.5, 14.5, 2)} />
      <path d="M12.1 12.9 15.75 9.25M14.25 10.75 15.75 12.25" />
    </Icon>
  );
}

export function FolderPenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M14.75 9.75 16.25 11.25 11.5 16 9.4 16.6 10 14.5Z" />
    </Icon>
  );
}

export function FolderRootIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d={squircle(12, 10.5, 1.5)} fill="currentColor" stroke="none" />
      <path d="M12 12.25V16.75" />
    </Icon>
  );
}

export function FolderSymlinkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M9 16.5C9 13.74 9.24 13.5 12 13.5H15.25" />
      <path strokeLinejoin="bevel" d="M12.75 11 15.25 13.5 12.75 16" />
    </Icon>
  );
}

export function FolderDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d={squircle(12, 13, 1.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function FolderInputIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 9V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V17" />
      <path d="M2.5 13H10.5" />
      <path strokeLinejoin="bevel" d="M7.75 10.25 10.5 13 7.75 15.75" />
    </Icon>
  );
}

export function FolderOutputIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 9V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V17" />
      <path d="M11 13H2.75" />
      <path strokeLinejoin="bevel" d="M5.5 10.25 2.75 13 5.5 15.75" />
    </Icon>
  );
}

/* ---- file variants more ---- */

export function FileBadgeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(12, 14, 2.2)} />
      <path strokeLinejoin="bevel" d="M10.7 15.9 10.25 18.25 12 17.25 13.75 18.25 13.3 15.9" />
    </Icon>
  );
}

export function FileBoxIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path strokeLinejoin="bevel" d="M12 11.75 15 13.35V16.65L12 18.25 9 16.65V13.35Z" />
      <path strokeLinejoin="bevel" d="M9 13.35 12 14.95 15 13.35M12 14.95V18.25" />
    </Icon>
  );
}

export function FileChartColumnIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M9 18V14.5M12 18V12M15 18V13.25" />
    </Icon>
  );
}

export function FileChartLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path strokeLinejoin="bevel" d="M8.25 17.5 10.75 14.25 12.75 15.75 15.75 12" />
    </Icon>
  );
}

export function FileChartPieIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(12, 15, 3)} />
      <path d="M12 15V12M12 15H15" />
    </Icon>
  );
}

export function FileInputIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 9.5V6C4.5 3.24 4.74 3 7.5 3H13.5L19.5 9V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V14.5M13.5 3V7.5C13.5 8.6 13.9 9 15 9H19.5" />
      <path d="M2.5 12H10.5" />
      <path strokeLinejoin="bevel" d="M7.75 9.25 10.5 12 7.75 14.75" />
    </Icon>
  );
}

export function FileOutputIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 9.5V6C4.5 3.24 4.74 3 7.5 3H13.5L19.5 9V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V14.5M13.5 3V7.5C13.5 8.6 13.9 9 15 9H19.5" />
      <path d="M11 12H2.75" />
      <path strokeLinejoin="bevel" d="M5.5 9.25 2.75 12 5.5 14.75" />
    </Icon>
  );
}

export function FileScanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M10 11.75H9.25C8.7 11.75 8.5 11.95 8.5 12.5V13.25M14 11.75H14.75C15.3 11.75 15.5 11.95 15.5 12.5V13.25M15.5 16.75V17.5C15.5 18.05 15.3 18.25 14.75 18.25H14M10 18.25H9.25C8.7 18.25 8.5 18.05 8.5 17.5V16.75" />
      <path d="M10.25 15H13.75" />
    </Icon>
  );
}

export function FileSlidersIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M8 13H16M8 17H16" />
      <path d="M10.5 11.5V14.5M13.5 15.5V18.5" />
    </Icon>
  );
}

export function FileUserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(12, 12.9, 1.75)} />
      <path d="M8.75 18.5C9.3 17.4 10.5 16.9 12 16.9C13.5 16.9 14.7 17.4 15.25 18.5" />
    </Icon>
  );
}

export function FileVolumeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path
        strokeLinejoin="bevel"
        d="M11 10.75V17.25L9 15.5H7.75C7.6 15.5 7.5 15.4 7.5 15.25V12.75C7.5 12.6 7.6 12.5 7.75 12.5H9Z"
      />
      <path d="M13.5 12.25C14.5 13.25 14.5 14.75 13.5 15.75" />
    </Icon>
  );
}

export function FileDigitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M8.5 12H10.5C11.05 12 11.25 12.2 11.25 12.75V17.25C11.25 17.8 11.05 18 10.5 18H8.5C7.95 18 7.75 17.8 7.75 17.25V12.75C7.75 12.2 7.95 12 8.5 12Z" />
      <path d="M14 13 15.5 12V18" />
    </Icon>
  );
}

/* ---- message variants more ---- */

export function MessageSquareMoreIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path
        d={squircle(8.5, 10.75, 1.05) + squircle(12, 10.75, 1.05) + squircle(15.5, 10.75, 1.05)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function MessageSquareDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12.5 4H7.5C4.74 4 4.5 4.24 4.5 7V21L9 17.5H16.5C19.26 17.5 19.5 17.26 19.5 14.5V11.25"
      />
      <path d={squircle(18.5, 5.75, 2.75)} />
    </Icon>
  );
}

export function MessageSquareQuoteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M8.75 12.75V10.75C8.75 9.65 9.65 8.75 10.75 8.75M13.25 12.75V10.75C13.25 9.65 14.15 8.75 15.25 8.75" />
    </Icon>
  );
}

export function MessageSquareCodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path strokeLinejoin="bevel" d="M9.75 8.5 7.25 10.75 9.75 13M14.25 8.5 16.75 10.75 14.25 13" />
    </Icon>
  );
}

export function MessageSquareDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.75 4H13.25M16 4H16.5C19.26 4 19.5 4.24 19.5 7M19.5 9.5V12M4.5 9.5V7C4.5 4.24 4.74 4 7.5 4H8" />
      <path d="M19.5 14.5C19.5 17.26 19.26 17.5 16.5 17.5H16M13.25 17.5H10.75" />
      <path d="M9 17.5 4.5 21V16.5" />
    </Icon>
  );
}

export function MessageCirclePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path d="M12.5 7.5V14.5M9 11H16" />
    </Icon>
  );
}

export function MessageCircleQuestionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path d="M10.4 9.1C10.55 7.9 11.4 7.15 12.5 7.15C13.7 7.15 14.6 8 14.6 9.15C14.6 10.9 12.5 11 12.5 12.8" />
      <path d={squircle(12.5, 15.1, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function MessageCircleXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path d="M10 8.5 15 13.5M15 8.5 10 13.5" />
    </Icon>
  );
}

export function MessageCircleHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path d="M12.5 14.3C10.6 12.9 9.4 11.75 9.4 10.4C9.4 9.4 10.15 8.65 11.1 8.65C11.65 8.65 12.18 8.95 12.5 9.4C12.82 8.95 13.35 8.65 13.9 8.65C14.85 8.65 15.6 9.4 15.6 10.4C15.6 11.75 14.4 12.9 12.5 14.3Z" />
    </Icon>
  );
}

export function MessageCircleOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/* ---- mail, phone & calendar more ---- */

export function MailMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
      <path d="M14.25 14.75H19.25" />
    </Icon>
  );
}

export function MailQuestionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={MAIL_OUTLINE} />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
      <path d="M14.8 12.4C14.95 11.45 15.65 10.85 16.6 10.85C17.6 10.85 18.35 11.55 18.35 12.5C18.35 13.95 16.6 14.05 16.6 15.5" />
      <path d={squircle(16.6, 17.4, 1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function MailsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 6.5H18.5C20.34 6.5 20.5 6.66 20.5 8.5V15.5C20.5 17.34 20.34 17.5 18.5 17.5H7C5.16 17.5 5 17.34 5 15.5V8.5C5 6.66 5.16 6.5 7 6.5Z" />
      <path strokeLinejoin="bevel" d="M5 9 12.75 14 20.5 9" />
      <path d="M2.5 9.5V19C2.5 20.5 3 21 4.5 21H17" />
    </Icon>
  );
}

export function PhoneForwardedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={PHONE_OUTLINE} />
      <path d="M14.5 6.5H21.5" />
      <path strokeLinejoin="bevel" d="M18 3 21.5 6.5 18 10" />
    </Icon>
  );
}

export function CalendarArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M12 12V18" />
      <path strokeLinejoin="bevel" d="M9.25 15.25 12 18 14.75 15.25" />
    </Icon>
  );
}

export function CalendarArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M12 18V12" />
      <path strokeLinejoin="bevel" d="M9.25 14.75 12 12 14.75 14.75" />
    </Icon>
  );
}

export function CalendarCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d={squircle(12, 15, 2.4)} />
      <path
        strokeWidth={2.5}
        d="M12 10.8V12.2M12 17.8V19.2M7.8 15H9.2M14.8 15H16.2"
      />
    </Icon>
  );
}

export function CalendarOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M4.25 3 19.75 20" />
    </Icon>
  );
}

export function CalendarSyncIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CALENDAR_OUTLINE} />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M8.9 15A3.1 3.1 0 0 1 14.3 12.9L15 13.6" />
      <path d="M15.1 11.4V13.6H12.9" />
      <path d="M15.1 15A3.1 3.1 0 0 1 9.7 17.1L9 16.4" />
      <path d="M8.9 18.6V16.4H11.1" />
    </Icon>
  );
}

/* ---- shield, badge & mark variants more ---- */

export function ShieldBanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M7.75 7.75 16.25 16.25" />
    </Icon>
  );
}

export function ShieldEllipsisIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path
        d={squircle(8.5, 12, 1.05) + squircle(12, 12, 1.05) + squircle(15.5, 12, 1.05)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function ShieldUserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d={squircle(12, 10, 2.2)} />
      <path d="M8.75 16.4C9.35 14.8 10.5 14.1 12 14.1C13.5 14.1 14.65 14.8 15.25 16.4" />
    </Icon>
  );
}

export function BadgeAlertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M12 7.5V12.75" />
      <path d={squircle(12, 15.75, 1.15)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function BadgeDollarSignIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M12 6.5V17.5" />
      <path d="M14.4 9C13.95 8.45 13.2 8.1 12.3 8.1C11 8.1 10 8.85 10 9.9C10 12.2 14.2 11.2 14.2 13.5C14.2 14.55 13.2 15.3 11.9 15.3C11 15.3 10.25 14.95 9.8 14.4" />
    </Icon>
  );
}

export function BadgeInfoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M12 11V16.25" />
      <path d={squircle(12, 8, 1.15)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function BadgePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M12 8.5V15.5M8.5 12H15.5" />
    </Icon>
  );
}

export function BadgeXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M9.5 9.5 14.5 14.5M14.5 9.5 9.5 14.5" />
    </Icon>
  );
}

export function BadgeQuestionMarkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M10 10.1C10.15 8.95 10.95 8.25 12 8.25C13.15 8.25 14 9.05 14 10.15C14 11.85 12 11.9 12 13.7" />
      <path d={squircle(12, 16.1, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function BadgeEuroIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M14.75 8.9C14.15 8.35 13.35 8 12.5 8C10.7 8 9.25 9.8 9.25 12C9.25 14.2 10.7 16 12.5 16C13.35 16 14.15 15.65 14.75 15.1" />
      <path d="M8 10.75H12.75M8 13.25H12" />
    </Icon>
  );
}

export function BellDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3C8.7 3 6.25 5.45 6.25 8.75C6.25 12.9 5.1 14.35 4 15.5C3.4 16.13 3.84 17 4.75 17H19.25C20.16 17 20.6 16.13 20 15.5C18.9 14.35 17.75 12.9 17.75 8.75C17.75 5.45 15.3 3 12 3Z" />
      <path d="M10.4 20.25C10.75 20.9 11.35 21.25 12 21.25C12.65 21.25 13.25 20.9 13.6 20.25" />
      <path d={squircle(18.5, 4.5, 1.9)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function BellMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3C8.7 3 6.25 5.45 6.25 8.75C6.25 12.9 5.1 14.35 4 15.5C3.4 16.13 3.84 17 4.75 17H19.25C20.16 17 20.6 16.13 20 15.5C18.9 14.35 17.75 12.9 17.75 8.75C17.75 5.45 15.3 3 12 3Z" />
      <path d="M10.4 20.25C10.75 20.9 11.35 21.25 12 21.25C12.65 21.25 13.25 20.9 13.6 20.25" />
      <path d="M9.75 10.25H14.25" />
    </Icon>
  );
}

export function BookmarkMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6.5 21V5C6.5 3.16 6.66 3 8.5 3H15.5C17.34 3 17.5 3.16 17.5 5V21L12 16.75Z"
      />
      <path d="M9.5 9H14.5" />
    </Icon>
  );
}

export function BookmarkXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M6.5 21V5C6.5 3.16 6.66 3 8.5 3H15.5C17.34 3 17.5 3.16 17.5 5V21L12 16.75Z"
      />
      <path d="M9.75 6.75 14.25 11.25M14.25 6.75 9.75 11.25" />
    </Icon>
  );
}

export function MapPinPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5C10.15 19.9 4.75 14.85 4.75 10.15C4.75 6.1 8 2.9 12 2.9C16 2.9 19.25 6.1 19.25 10.15C19.25 14.85 13.85 19.9 12 21.5Z" />
      <path d="M12 7.4V12.9M9.25 10.15H14.75" />
    </Icon>
  );
}

export function MapPinXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5C10.15 19.9 4.75 14.85 4.75 10.15C4.75 6.1 8 2.9 12 2.9C16 2.9 19.25 6.1 19.25 10.15C19.25 14.85 13.85 19.9 12 21.5Z" />
      <path d="M9.9 8.05 14.1 12.25M14.1 8.05 9.9 12.25" />
    </Icon>
  );
}

/** Pinned place: small pin over the map's base ellipse. */
export function MapPinnedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 13.5C10.9 12.5 7.75 9.6 7.75 6.9C7.75 4.55 9.65 2.75 12 2.75C14.35 2.75 16.25 4.55 16.25 6.9C16.25 9.6 13.1 12.5 12 13.5Z" />
      <path d={squircle(12, 6.9, 1.7)} />
      <path d="M18.5 15.25C20.35 15.9 21.5 16.8 21.5 17.75C21.5 19.55 17.25 21 12 21C6.75 21 2.5 19.55 2.5 17.75C2.5 16.8 3.65 15.9 5.5 15.25" />
    </Icon>
  );
}

/* ---- circle & status variants more ---- */

export function CircleOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.35 2.7A9.5 9.5 0 0 1 21.3 15.65" />
      <path d="M19.08 19.08A9.5 9.5 0 1 1 4.92 4.92" />
      <path d="M2.75 2.75 21.25 21.25" />
    </Icon>
  );
}

export function CirclePercentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M8.5 15.5 15.5 8.5" />
      <path
        d={squircle(9.25, 9.25, 1) + squircle(14.75, 14.75, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function CirclePowerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M12 6.75V11" />
      <path d="M8.9 8.9A4.4 4.4 0 1 0 15.1 8.9" />
    </Icon>
  );
}

export function CircleEqualIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M8 9.75H16M8 14.25H16" />
    </Icon>
  );
}

export function CircleDivideIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M8 12H16" />
      <path
        d={squircle(12, 8.25, 1.4) + squircle(12, 15.75, 1.4)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function CircleSlashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M14.5 7.5 9.5 16.5" />
    </Icon>
  );
}

export function CircleParkingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M9.75 16V8H13C14.52 8 15.75 9.23 15.75 10.75C15.75 12.27 14.52 13.5 13 13.5H9.75" />
    </Icon>
  );
}

export function BatteryMediumIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8H17.5C19.34 8 19.5 8.16 19.5 10V14C19.5 15.84 19.34 16 17.5 16H4.5C2.66 16 2.5 15.84 2.5 14V10C2.5 8.16 2.66 8 4.5 8Z" />
      <path d="M21.75 10.5V13.5" />
      <path strokeWidth={2.5} d="M6.25 10.75V13.25M9.75 10.75V13.25" />
    </Icon>
  );
}

export function WifiHighIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 13.25C9.5 10.25 14.5 10.25 18 13.25M9.25 16.75C11 15.5 13 15.5 14.75 16.75" />
      <path d={squircle(12, 19.75, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function WifiLowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.25 16.75C11 15.5 13 15.5 14.75 16.75" />
      <path d={squircle(12, 19.75, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function WifiZeroIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 19.75, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function SignalHighIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.75V15.75M9.5 19.75V12M14.5 19.75V8.25" />
    </Icon>
  );
}

export function SignalMediumIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.75V15.75M9.5 19.75V12" />
    </Icon>
  );
}

export function SignalLowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.75V15.75" />
    </Icon>
  );
}

export function SignalZeroIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(3.75, 19.25, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/* ---- monitor variants more ---- */

export function MonitorCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path strokeLinejoin="bevel" d="M9.25 10.25 11.25 12.25 14.75 8.75" />
    </Icon>
  );
}

export function MonitorCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d={squircle(12, 10, 2.4)} />
      <path
        strokeWidth={2.5}
        d="M12 5.8V7.2M12 12.8V14.2M7.8 10H9.2M14.8 10H16.2"
      />
    </Icon>
  );
}

export function MonitorDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d="M12 6.25V13" />
      <path strokeLinejoin="bevel" d="M9.25 10.25 12 13 14.75 10.25" />
    </Icon>
  );
}

export function MonitorUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d="M12 13V6.25" />
      <path strokeLinejoin="bevel" d="M9.25 9 12 6.25 14.75 9" />
    </Icon>
  );
}

export function MonitorXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d="M9.5 7.5 14.5 12.5M14.5 7.5 9.5 12.5" />
    </Icon>
  );
}

export function MonitorSpeakerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.5 15.5H4.5C2.66 15.5 2.5 15.34 2.5 13.5V6C2.5 4.16 2.66 4 4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V7.5" />
      <path d="M5.5 19.5H8.5" />
      <path d="M17.5 10.5H20C21.1 10.5 21.5 10.9 21.5 12V19.5C21.5 20.6 21.1 21 20 21H17.5C16.4 21 16 20.6 16 19.5V12C16 10.9 16.4 10.5 17.5 10.5Z" />
      <path d={squircle(18.75, 13, 0.9)} fill="currentColor" stroke="none" />
      <path d={squircle(18.75, 17, 1.9)} />
    </Icon>
  );
}

/* ---- alarms, power & light ---- */

export function AlarmClockOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7.75)} />
      <path d="M5 3 2.75 5.25M19 3 21.25 5.25" />
      <path d="M6.3 19.2 4.75 20.75M17.7 19.2 19.25 20.75" />
      <path d="M4.25 5.5 19.75 21" />
    </Icon>
  );
}

export function AlarmClockPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7.75)} />
      <path d="M5 3 2.75 5.25M19 3 21.25 5.25" />
      <path d="M6.3 19.2 4.75 20.75M17.7 19.2 19.25 20.75" />
      <path d="M12 10.25V16.75M8.75 13.5H15.25" />
    </Icon>
  );
}

export function FlashlightOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 2.75H18V5.5C18 7.5 16 7.7 16 9.7V19.5C16 21.34 15.84 21.5 14 21.5H10C8.16 21.5 8 21.34 8 19.5V9.7C8 7.7 6 7.5 6 5.5Z" />
      <path d="M6 5.75H18" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** ZapIcon severed at the slash. */
export function ZapOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M13 2.75 8.4 8.45" />
      <path strokeLinejoin="bevel" d="M19.5 10.75H12.75L13 2.75" />
      <path strokeLinejoin="bevel" d="M4.5 13.25H11L10.5 21.25 15.1 15.55" />
      <path d="M2.75 2.75 21.25 21.25" />
    </Icon>
  );
}

export function LampCeilingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25V7" />
      <path strokeLinejoin="bevel" d="M6 7H18L21.75 16H2.25Z" />
      <path d="M9.17 16A3 3 0 1 0 14.83 16" />
    </Icon>
  );
}

export function LampDeskIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M14 5 11 8 13 15 21 7 14 5Z" />
      <path strokeLinejoin="bevel" d="M14 5 11 8 8 5 11 2 14 5Z" />
      <path d="M9.5 6.5 4 12 7 18" />
      <path d="M3 21.5V20C3 18.9 3.9 18 5 18H9C10.1 18 11 18.9 11 20V21.5Z" />
    </Icon>
  );
}

export function LampFloorIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9 2.75H15L17 8.75H7Z" />
      <path d="M12 8.75V21.5" />
      <path d="M8.5 21.5H15.5" />
    </Icon>
  );
}

export function LampWallDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 3V21" />
      <path d="M3.5 6.5H11C12.66 6.5 14 7.84 14 9.5V12.5" />
      <path strokeLinejoin="bevel" d="M10.5 12.5H17.5L20.5 19.5H7.5Z" />
    </Icon>
  );
}

export function BedDoubleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 10V6.5C4.5 5.4 5.4 4.5 6.5 4.5H17.5C18.6 4.5 19.5 5.4 19.5 6.5V10" />
      <path d="M2.5 19.5V13C2.5 11.9 3.4 11 4.5 11H19.5C20.6 11 21.5 11.9 21.5 13V19.5" />
      <path d="M2.5 16.5H21.5" />
      <path d="M12 4.5V11" />
      <path d="M2.5 19.5V21M21.5 19.5V21" />
    </Icon>
  );
}

export function BedSingleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 10V6.5C5.5 5.4 6.4 4.5 7.5 4.5H16.5C17.6 4.5 18.5 5.4 18.5 6.5V10" />
      <path d="M4.5 19.5V13C4.5 11.9 5.4 11 6.5 11H17.5C18.6 11 19.5 11.9 19.5 13V19.5" />
      <path d="M4.5 16.5H19.5" />
      <path d="M4.5 19.5V21M19.5 19.5V21" />
    </Icon>
  );
}

export function AirVentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 12H4.5C3.4 12 2.5 11.1 2.5 10V5.5C2.5 4.4 3.4 3.5 4.5 3.5H19.5C20.6 3.5 21.5 4.4 21.5 5.5V10C21.5 11.1 20.6 12 19.5 12H18" />
      <path d="M6 7.75H18" />
      <path d="M18.3 17.7A2.5 2.5 0 0 1 15.14 21.53A2.53 2.53 0 0 1 14 19.5V12" />
      <path d="M6.6 15.6A2 2 0 1 0 10 17V12" />
    </Icon>
  );
}

export function FanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.83 16.38A6.08 6.08 0 0 1 2.21 9.38L7.62 10.83A6.08 6.08 0 0 1 14.62 2.21L13.17 7.62A6.08 6.08 0 0 1 21.79 14.62L16.38 13.17A6.08 6.08 0 0 1 9.38 21.79Z" />
      <path d={squircle(12, 12, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function RollerCoasterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 19.5V5" />
      <path d="M10 19.5V6.8" />
      <path d="M14 19.5V11.2" />
      <path d="M18 5V9M18 19.5V13.5" />
      <path d="M22 19.5V9" />
      <path d="M2 19.5V9A4 4 0 0 1 6 5C8 5 10 6.33 12 9C14 11.67 16 13 18 13A4 4 0 1 0 15 6.35" />
    </Icon>
  );
}

export function ApertureIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5)} />
      <path d="M14.31 8 20.05 17.94M9.69 8H21.17M7.38 12 13.12 2.06M9.69 16 3.95 6.06M14.31 16H2.83M16.62 12 10.88 21.94" />
    </Icon>
  );
}

/* ---- list variants more ---- */

export function ListChecksIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 7 5 9 9 5" />
      <path strokeLinejoin="bevel" d="M3 17 5 19 9 15" />
      <path d="M13 6H21M13 12H21M13 18H21" />
    </Icon>
  );
}

export function ListXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 6.5H14.5M3.5 12H14.5M3.5 17.5H10.5" />
      <path d="M15.75 14.25 20.25 18.75M20.25 14.25 15.75 18.75" />
    </Icon>
  );
}

export function ListStartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 12H16M3 18H16M3 6H10" />
      <path d="M21 18V8.5C21 7.4 20.1 6.5 19 6.5H14" />
      <path strokeLinejoin="bevel" d="M16 8.5 14 6.5 16 4.5" />
    </Icon>
  );
}

export function ListEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 6H16M3 12H16M3 18H10" />
      <path d="M21 6V15.5C21 16.6 20.1 17.5 19 17.5H14" />
      <path strokeLinejoin="bevel" d="M16 19.5 14 17.5 16 15.5" />
    </Icon>
  );
}

export function ListRestartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 6H21M3 12H7M3 18H7" />
      <path d="M12 18.5A6.25 6.25 0 1 0 12 6H9.75" />
      <path strokeLinejoin="bevel" d="M12 3.75 9.75 6 12 8.25" />
    </Icon>
  );
}

export function ListVideoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 6H16M3 12H16M3 18H10" />
      <path strokeLinejoin="bevel" d="M15 13 20 16 15 19Z" />
    </Icon>
  );
}

/* ---- lucide sweep: last one-offs ---- */

/** Cog: the machine gear to GearIcon's settings - wider ring, open hub,
 *  stubby stroke-3 teeth. Thin teeth on a big ring read as a radio
 *  button. */
export function CogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 6.5)} />
      <path d={squircle(12, 12, 2.5)} />
      <path
        strokeWidth={3}
        d="M12 2.75V5.5M12 18.5V21.25M2.75 12H5.5M18.5 12H21.25M16.96 7.04 18.6 5.4M7.04 7.04 5.4 5.4M16.96 16.96 18.6 18.6M7.04 16.96 5.4 18.6"
      />
    </Icon>
  );
}

export function CuboidIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M21.25 6.6 15 2.5C14.4 2.1 13.6 2.08 13 2.45L3.15 8.5C2.55 8.85 2.25 9.45 2.25 10.1V15.9C2.25 16.55 2.55 17.15 3.1 17.5L9.35 21.6C9.95 22 10.75 22.02 11.35 21.65L21.2 15.6C21.8 15.25 22.1 14.65 22.1 14V8.25C22.1 7.6 21.8 6.95 21.25 6.6Z"
      />
      <path d="M10 21.75V13.75L2.5 9.15" />
      <path d="M10 13.75 21.75 6.9" />
    </Icon>
  );
}

/** Cylinder: DatabaseIcon without the middle band. */
export function CylinderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 8.25C16.14 8.25 19.5 7.13 19.5 5.75C19.5 4.37 16.14 3.25 12 3.25C7.86 3.25 4.5 4.37 4.5 5.75C4.5 7.13 7.86 8.25 12 8.25Z" />
      <path d="M4.5 5.75V18.25C4.5 19.63 7.86 20.75 12 20.75C16.14 20.75 19.5 19.63 19.5 18.25V5.75" />
    </Icon>
  );
}

/** Dessert: cupcake - cherry on a frosting swirl over a ridged wrapper.
 *  A dripping dome pudding fuses into a blob at 24px. */
export function DessertIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6 13.5H18L16.5 21H7.5Z" />
      <path d="M10 13.5 10.5 21M14 13.5 13.5 21" />
      <path d="M5 13.5C4.25 11 5.75 9 8 9C8.5 6.75 10 5.5 12 5.5C14 5.5 15.5 6.75 16 9C18.25 9 19.75 11 19 13.5" />
      <path d={squircle(12, 3.25, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Diameter: circle with the measured diagonal between end nodes. */
export function DiameterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(19, 19, 2) + squircle(5, 5, 2)} />
      <path d="M6.48 3.66A10 10 0 0 1 20.34 17.52" />
      <path d="M6.41 6.41 17.59 17.59" />
      <path d="M3.66 6.48A10 10 0 0 0 17.52 20.34" />
    </Icon>
  );
}

/** Record sleeve: the tile with a disc inside. */
export function DiscAlbumIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d={squircle(12, 12, 4.4)} />
      <path d={squircle(12, 12, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Car front: hood line, body tile, filled lamps. */
export function CarFrontIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21 8 19 10 17.5 6.3C17.2 5.52 16.45 5 15.65 5H8.4C7.6 5 6.85 5.52 6.55 6.3L5 10 3 8" />
      <path d="M4.5 10H19.5C21.34 10 21.5 10.16 21.5 12V16C21.5 17.84 21.34 18 19.5 18H4.5C2.66 18 2.5 17.84 2.5 16V12C2.5 10.16 2.66 10 4.5 10Z" />
      <path
        d={squircle(7, 14, 1) + squircle(17, 14, 1)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M5 18V20M19 18V20" />
    </Icon>
  );
}

/** Night rain: CloudMoonIcon scaled to 82% so the rain dashes get clear
 *  air under the cloud. */
export function CloudMoonRainIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.44 6.6A4.92 4.92 0 0 1 15.28 2.5A3.49 3.49 0 0 0 20.2 7.42A4.92 4.92 0 0 1 17.74 11.68" />
      <path d="M12.82 16.85H7.9A4.1 4.1 0 1 1 11.92 11.93H12.82A2.46 2.46 0 0 1 12.82 16.85Z" />
      <path d="M8.5 21.5 9.5 19.5M12.5 21.5 13.5 19.5" />
    </Icon>
  );
}

/** Baggage claim: cart pulling the case past the carousel rail. */
export function BaggageClaimIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.75 17.5H6.25C5.15 17.5 4.25 16.6 4.25 15.5V6.75C4.25 5.65 3.35 4.75 2.25 4.75" />
      <path d="M9 6H20C20.55 6 20.75 6.2 20.75 6.75V13.25C20.75 13.8 20.55 14 20 14H9C8.45 14 8.25 13.8 8.25 13.25V6.75C8.25 6.2 8.45 6 9 6Z" />
      <path d="M12.5 6V4.25C12.5 3.15 13.4 2.25 14.5 2.25H15C16.1 2.25 17 3.15 17 4.25V6" />
      <path d={squircle(9.25, 20, 1.9) + squircle(17.75, 20, 1.9)} />
    </Icon>
  );
}

/** Giving: coins dropping into the open hand. */
export function HandCoinsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 15.5H13C14.1 15.5 15 14.6 15 13.5C15 12.4 14.1 11.5 13 11.5H10C9.4 11.5 8.9 11.7 8.6 12.1L3 17.5" />
      <path d="M7 21.5 8.6 20.1C8.9 19.7 9.4 19.5 10 19.5H14C15.1 19.5 16.1 19.1 16.8 18.3L21.4 13.9C22.2 13.13 22.24 11.86 21.49 11.04C20.74 10.22 19.47 10.17 18.65 10.93L14.45 14.83" />
      <path d="M2.25 16.5 7.75 22" />
      <path d={squircle(16, 9, 2.9)} />
      <path d={squircle(6, 5, 3)} />
    </Icon>
  );
}

/** Care: the heart resting on the helping hand. */
export function HandHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 14.5H13C14.1 14.5 15 13.6 15 12.5C15 11.4 14.1 10.5 13 10.5H10C9.4 10.5 8.9 10.7 8.6 11.1L3 16.5" />
      <path d="M7 20.5 8.6 19.1C8.9 18.7 9.4 18.5 10 18.5H14C15.1 18.5 16.1 18.1 16.8 17.3L21.4 12.9C22.2 12.13 22.24 10.86 21.49 10.04C20.74 9.22 19.47 9.17 18.65 9.93L14.45 13.83" />
      <path d="M2.25 15.5 7.75 21" />
      <path d="M19.5 8.5C20.2 7.8 21 6.9 21 5.8C21 4.25 19.8 3.1 18.25 3.1C17.4 3.1 16.6 3.5 16 4.1C15.4 3.5 14.6 3.1 13.75 3.1C12.2 3.1 11 4.25 11 5.8C11 6.9 11.8 7.8 12.5 8.5L16 12Z" />
    </Icon>
  );
}

/** Rock on: the horns hand. */
export function HandMetalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 12.5V10C18 8.9 17.1 8 16 8C14.9 8 14 8.9 14 10V11.4" />
      <path d="M14 11V9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9V11" />
      <path d="M10 10.5V5C10 3.9 9.1 3 8 3C6.9 3 6 3.9 6 5V14" />
      <path d="M7 15 5.24 13.24C4.46 12.46 3.19 12.46 2.41 13.24C1.63 14.02 1.63 15.28 2.41 16.06L6 19.65C7.5 21.15 9.2 21.5 12 21.5H14C18.42 21.5 22 17.92 22 13.5V7C22 5.9 21.1 5 20 5C18.9 5 18 5.9 18 7V12" />
    </Icon>
  );
}

/** EarIcon under the set's "off" slash. */
export function EarOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.75 8.5A6.25 6.25 0 0 1 18.25 8.5C18.25 14.25 12.5 14.25 12.5 18.25A3.4 3.4 0 0 1 5.7 18.25" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Mars-stroke: MarsIcon with the crossed shaft tick. */
export function MarsStrokeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(10, 14, 6)} />
      <path d="M14.4 9.6 21 3M15.5 3H21V8.5" />
      <path d="M14.75 5.25 18.75 9.25" />
    </Icon>
  );
}

/** Non-binary: crossed rays over the ring. */
export function NonBinaryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25V12" />
      <path d="M8.5 4.25 15.5 8.25M8.5 8.25 15.5 4.25" />
      <path d={squircle(12, 17, 5)} />
    </Icon>
  );
}

/** Shredder: the fed sheet cut into hanging strips. */
export function ShredderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 12.75V7.25L14.75 2.5H6.5C5.4 2.5 4.5 3.4 4.5 4.5V12.75" />
      <path d="M14.75 2.5V7.75H20" />
      <path d="M2.25 12.75H21.75" />
      <path d="M6.5 16.5V19.5M10.25 16.5V21.5M14.5 16.5V18.5M18 16.5V19.75" />
    </Icon>
  );
}

/** Squirrel: curled tail behind the perched body. */
export function SquirrelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.24 21.5A3 3 0 0 0 13.04 16.5" />
      <path d="M16 19.75A3 3 0 0 1 19 16.75H20C21.1 16.75 22 15.85 22 14.75V12.75C22 10.54 20.21 8.75 18 8.75V4.5" />
      <path d={squircle(18, 12.75, 1)} fill="currentColor" stroke="none" />
      <path d="M18 6.25A4 4 0 0 0 14 10.25A7 7 0 0 0 7 17.25C7 12.25 11 12.25 11 6.75A4.5 4.5 0 1 0 2 6.75A2.5 2.5 0 0 0 7 6.75C7 10.25 3 11.25 3 17.25C3 20.05 5.2 21.5 8 21.5H18" />
    </Icon>
  );
}

/** Tablets: scored pill beside its twin with a vertical score - both
 *  outline, no fill, so the pair stays monoline. */
export function TabletsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(7, 12, 4.5)} />
      <path d="M3.8 8.8 10.2 15.2" />
      <path d={squircle(17, 12, 4.5)} />
      <path d="M17 7.5V16.5" />
    </Icon>
  );
}

/** Cold snap: thermometer beside a mini six-spoke snowflake - eight
 *  spokes at this size splat into a blob. */
export function ThermometerSnowflakeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 15.1V4.65C13 3.45 13.95 2.5 15.15 2.5C16.35 2.5 17.3 3.45 17.3 4.65V15.1" />
      <path d={squircle(15.15, 17.9, 3.6)} />
      <path d="M15.15 14.5V9" />
      <path d={squircle(15.15, 17.9, 1.3)} fill="currentColor" stroke="none" />
      <path d="M6 4.25V11.75M2.75 6.13 9.25 9.88M9.25 6.13 2.75 9.88" />
    </Icon>
  );
}

/** Heat: thermometer beside a ticked mini sun. */
export function ThermometerSunIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 15.1V4.65C13 3.45 13.95 2.5 15.15 2.5C16.35 2.5 17.3 3.45 17.3 4.65V15.1" />
      <path d={squircle(15.15, 17.9, 3.6)} />
      <path d="M15.15 14.5V9" />
      <path d={squircle(15.15, 17.9, 1.3)} fill="currentColor" stroke="none" />
      <path d={squircle(6, 6.5, 2.6)} />
      <path d="M6 2.25V3.4M6 9.6V10.75M1.75 6.5H2.9M9.1 6.5H10.25" />
    </Icon>
  );
}

/** Redeemed: the ticket with a check. */
export function TicketCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={TICKET_OUTLINE} />
      <path strokeLinejoin="bevel" d="M8.75 12 11 14.25 15.25 9.75" />
    </Icon>
  );
}

/** Discount ticket: percent across the stub. */
export function TicketPercentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={TICKET_OUTLINE} />
      <path d="M9 14.75 15 9.25" />
      <path
        d={squircle(9.6, 9.9, 1) + squircle(14.4, 14.1, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Timer reset: the stopwatch rewinding into a bracket. */
export function TimerResetIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 2.5H14" />
      <path d="M12 14V10" />
      <path d="M4.25 13A7.75 7.75 0 0 1 12 6.25A7.75 7.75 0 1 1 6.7 19.65L4.25 17.35" />
      <path d="M9 17.25H4.25V21.5" />
    </Icon>
  );
}

/** Venetian mask: winged masquerade eyes. */
export function VenetianMaskIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 11.5C16.5 11.5 15.5 12 15 13.5" />
      <path d="M4 6.5C2.9 6.5 2 7.4 2 8.5V12.5C2 15.26 4.24 17.5 7 17.5C8.87 17.5 10.62 18.2 12 19.5C13.38 18.2 15.13 17.5 17 17.5C19.76 17.5 22 15.26 22 12.5V8.5C22 7.4 21.1 6.5 20 6.5H17C15.13 6.5 13.38 7.2 12 8.5C10.62 7.2 8.87 6.5 7 6.5Z" />
      <path d="M6 11.5C7.5 11.5 8.5 12 9 13.5" />
    </Icon>
  );
}

/** Videotape: cassette tile with twin reels. */
export function VideotapeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H19.5C21.34 4.5 21.5 4.66 21.5 6.5V17.5C21.5 19.34 21.34 19.5 19.5 19.5H4.5C2.66 19.5 2.5 19.34 2.5 17.5V6.5C2.5 4.66 2.66 4.5 4.5 4.5Z" />
      <path d="M2.5 8.5H21.5" />
      <path d={squircle(8, 14, 2) + squircle(16, 14, 2)} />
      <path d="M8 12H16" />
    </Icon>
  );
}

/** Worm: one continuous undulating body with a filled head - no
 *  segment gaps that read as broken strokes. */
export function WormIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 16.75C4.5 13.5 7.25 13.5 9.25 16.5C11.25 19.5 14 19.5 15.75 16.25C17.25 13.5 19.25 13.1 20.5 15" />
      <path d={squircle(20.6, 16.6, 1.35)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** UmbrellaIcon under the set's "off" slash. */
export function UmbrellaOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75A9.25 9.25 0 0 1 21.25 12H2.75A9.25 9.25 0 0 1 12 2.75Z" />
      <path d="M12 12V19C12 20.24 11 21.25 9.75 21.25C8.5 21.25 7.5 20.24 7.5 19" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Ichthys: the two-stroke fish symbol. */
export function FishSymbolIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 15.75C6.1 9.5 11.1 6.4 21.5 8.25C15.9 14.5 10.9 17.6 2.5 15.75Z" />
      <path d="M16.6 13.1 20 18.5M18.2 7.9 21.5 3" />
    </Icon>
  );
}

export function OctagonPauseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8.2 3.5H15.8L20.5 8.2V15.8L15.8 20.5H8.2L3.5 15.8V8.2Z"
      />
      <path d="M10 9V15M14 9V15" />
    </Icon>
  );
}

export function OctagonMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8.2 3.5H15.8L20.5 8.2V15.8L15.8 20.5H8.2L3.5 15.8V8.2Z"
      />
      <path d="M8.5 12H15.5" />
    </Icon>
  );
}

/** Same glyph as OpenWithIcon, under the name every icon search
 *  reaches for first. */
export const ExternalLinkIcon = OpenWithIcon;

/** Same glyph as GearIcon, under lucide's name for it. */
export const SettingsIcon = GearIcon;

/* ---- type & faces sweep ---- */

/** Increase font size: the A with an up arrow. */
export function AArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.25 19.5 8.5 9 12.75 19.5" />
      <path d="M5.85 15.75H11.15" />
      <path d="M17.75 19.5V10" />
      <path strokeLinejoin="bevel" d="M15 12.75 17.75 10 20.5 12.75" />
    </Icon>
  );
}

/** Decrease font size: the A with a down arrow. */
export function AArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.25 19.5 8.5 9 12.75 19.5" />
      <path d="M5.85 15.75H11.15" />
      <path d="M17.75 10V19.5" />
      <path strokeLinejoin="bevel" d="M15 16.75 17.75 19.5 20.5 16.75" />
    </Icon>
  );
}

/** Font size: big A beside small a. */
export function ALargeSmallIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.5 16.5 7.25 6.5 11 16.5" />
      <path d="M4.9 12.9H9.6" />
      <path d={squircle(17.25, 13.75, 2.75)} />
      <path d="M20 11V16.5" />
    </Icon>
  );
}

/** Airplay: the screen with a cast wedge breaking its base. */
export function AirplayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H17.5" />
      <path strokeLinejoin="bevel" d="M12 15 17 21H7Z" />
    </Icon>
  );
}

export function AlarmClockCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7.75)} />
      <path d="M5 3 2.75 5.25M19 3 21.25 5.25" />
      <path d="M6.3 19.2 4.75 20.75M17.7 19.2 19.25 20.75" />
      <path strokeLinejoin="bevel" d="M9 13.75 11 15.75 15 11.75" />
    </Icon>
  );
}

export function AlarmClockMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7.75)} />
      <path d="M5 3 2.75 5.25M19 3 21.25 5.25" />
      <path d="M6.3 19.2 4.75 20.75M17.7 19.2 19.25 20.75" />
      <path d="M8.75 13.5H15.25" />
    </Icon>
  );
}

/** Smoke alarm: ceiling disc with drifting smoke trails. */
export function AlarmSmokeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21 3.25C21.55 3.25 21.75 3.45 21.75 4V6C21.75 7.1 20.85 8 19.75 8H4.25C3.15 8 2.25 7.1 2.25 6V4C2.25 3.45 2.45 3.25 3 3.25Z" />
      <path d="M19 8 18.2 11C18.06 11.6 17.6 12 17 12H7C6.4 12 5.94 11.6 5.8 11L5 8" />
      <path d="M6 21C6 18.5 8 18.5 8 16M11 21C11 18.5 13 18.5 13 16M16 21C16 18.5 18 18.5 18 16" />
    </Icon>
  );
}

/** Angry face: knotted brows over the frown. */
export function AngryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M8.25 16.25C9 14.5 10.4 13.65 12 13.65C13.6 13.65 15 14.5 15.75 16.25" />
      <path d="M7.5 8 10 9.5M16.5 8 14 9.5" />
      <path
        d={squircle(9.25, 10.75, 1.05) + squircle(14.75, 10.75, 1.05)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/** Annoyed face, -_- : long flat eyes over a short mouth, the reverse of
 *  MehIcon's dot eyes over a long mouth. */
export function AnnoyedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M10.25 15.75H13.75" />
      <path d="M6.75 9.75H10.5M13.5 9.75H17.25" />
    </Icon>
  );
}

export function ArchiveXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 3.5H19.5C21.34 3.5 21.5 3.66 21.5 5.5V6C21.5 7.84 21.34 8 19.5 8H4.5C2.66 8 2.5 7.84 2.5 6V5.5C2.5 3.66 2.66 3.5 4.5 3.5Z" />
      <path d="M4.5 8V18.5C4.5 20.34 4.66 20.5 6.5 20.5H17.5C19.34 20.5 19.5 20.34 19.5 18.5V8" />
      <path d="M9.75 10.75 14.25 15.25M14.25 10.75 9.75 15.25" />
    </Icon>
  );
}

/** Waveform: one continuous peaks-and-valleys stroke. */
export function AudioWaveformIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 13C3.35 13 4.25 12.1 4.25 11V7C4.25 5.9 5.15 5 6.25 5C7.35 5 8.25 5.9 8.25 7V20C8.25 21.1 9.15 22 10.25 22C11.35 22 12.25 21.1 12.25 20V4C12.25 2.9 13.15 2 14.25 2C15.35 2 16.25 2.9 16.25 4V17C16.25 18.1 17.15 19 18.25 19C19.35 19 20.25 18.1 20.25 17V13C20.25 11.9 21.15 11 22.25 11" />
    </Icon>
  );
}

export function BadgeMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M8.5 12H15.5" />
    </Icon>
  );
}

/** Baseline: the A seated on its rule. */
export function BaselineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 20.5H20" />
      <path strokeLinejoin="bevel" d="M6.75 16.5 12 4.5 17.25 16.5" />
      <path d="M8.7 12H15.3" />
    </Icon>
  );
}

export function BookAIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path strokeLinejoin="bevel" d="M9.25 12.5 12 5.75 14.75 12.5" />
      <path d="M10.2 10.25H13.8" />
    </Icon>
  );
}

export function BookAudioIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M8.5 8.25V11.25M12 6V13.5M15.5 7.5V12" />
    </Icon>
  );
}

export function BookImageIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d={squircle(9.75, 6.75, 1.1)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M8.5 12.75 11.5 9 15.5 12.75" />
    </Icon>
  );
}

export function BookMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M8.5 9.5H15.5" />
    </Icon>
  );
}

/** Tuning the mind: BrainIcon scaled into the top-left with a cog badge
 *  at bottom-right - a cog inside the lobes reads as a flower. */
export function BrainCogIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.35 3.48C7.88 2.81 7.06 2.5 6.28 2.7C5.39 2.93 4.76 3.75 4.8 4.68C3.75 4.92 2.97 5.85 2.97 6.95C2.97 7.49 3.16 8 3.51 8.39C2.89 8.82 2.5 9.52 2.5 10.3C2.5 11.39 3.28 12.33 4.33 12.56C4.37 13.89 5.46 14.98 6.79 14.98C7.38 14.98 7.92 14.78 8.35 14.43" />
      <path d="M8.35 3.48C8.82 2.81 9.64 2.5 10.42 2.7C11.31 2.93 11.94 3.75 11.9 4.68C12.95 4.92 13.73 5.85 13.73 6.95C13.73 7.49 13.54 8 13.19 8.39C13.81 8.82 14.2 9.52 14.2 10.3C14.2 11.39 13.42 12.33 12.37 12.56C12.33 13.89 11.24 14.98 9.91 14.98C9.32 14.98 8.78 14.78 8.35 14.43" />
      <path d="M8.35 3.48V14.43" />
      <path d={squircle(17, 17, 2.75)} />
      <path
        strokeWidth={2.5}
        d="M17 11.75V13.25M17 20.75V22.25M11.75 17H13.25M20.75 17H22.25M13.29 13.29 14.35 14.35M19.65 19.65 20.71 20.71M20.71 13.29 19.65 14.35M14.35 19.65 13.29 20.71"
      />
    </Icon>
  );
}

/** Firewall: the brick wall with a flame at its foot. */
export function BrickWallFireIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V10" />
      <path d="M3.5 9.17H20.5M3.5 14.83H12M12 3.5V9.17M7.25 9.17V14.83" />
      <path d="M17 12.25C18.6 14.15 19.85 15.65 19.85 17.35C19.85 19.1 18.55 20.5 17 20.5C15.45 20.5 14.15 19.1 14.15 17.35C14.15 15.65 15.4 14.15 17 12.25Z" />
    </Icon>
  );
}

/** Office tower: BuildingIcon's high-rise sibling with side wings. */
export function Building2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 21.5V4.5C6 3.4 6.9 2.5 8 2.5H16C17.1 2.5 18 3.4 18 4.5V21.5" />
      <path d="M6 12H4.2C2.62 12 2.5 12.12 2.5 13.7V19.8C2.5 21.38 2.62 21.5 4.2 21.5H6" />
      <path d="M18 9H19.8C21.38 9 21.5 9.12 21.5 10.7V19.8C21.5 21.38 21.38 21.5 19.8 21.5H18" />
      <path d="M10 6.5H14M10 10.5H14M10 14.5H14" />
    </Icon>
  );
}

/** Node graph: ChartBarIcon's frame with linked data points. */
export function ChartNetworkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path
        d={squircle(9.5, 15, 1.3) + squircle(14.5, 8, 1.3) + squircle(19, 13.5, 1.3)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M10.4 13.9 13.6 9.1M15.75 8.9 18 12.55M11 15.35 17.65 13.9" />
    </Icon>
  );
}

/** Read receipt: the double check. */
export function CheckCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.5 12.5 7.25 17.25 17.5 7" />
      <path strokeLinejoin="bevel" d="M13 16.25 14.5 17.75 21.5 10.75" />
    </Icon>
  );
}

export function CircleSmallIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 5.5)} />
    </Icon>
  );
}

export function ClipboardCopyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V18" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path d="M11 13H21.5" />
      <path strokeLinejoin="bevel" d="M18.75 10.25 21.5 13 18.75 15.75" />
    </Icon>
  );
}

export function ClipboardMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path d="M9 13.5H15" />
    </Icon>
  );
}

/** Add time: the clock with a plus at right. */
export function ClockPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(10.5, 12.5, 7.75)} />
      <path d="M10.5 8V12.5H13.75" />
      <path d="M19 14.25V20.75M15.75 17.5H22.25" />
    </Icon>
  );
}

/** Driving rain: the cloud with wind-slanted dashes. */
export function CloudRainWindIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.5 15.5H9A6.25 6.25 0 1 1 15 7.5H17.5A4 4 0 1 1 17.5 15.5Z" />
      <path d="M7.5 18.5 6 21.5M12 18 10.5 21M16.5 18.5 15 21.5" />
    </Icon>
  );
}

/** Code: the bare chevrons - EditorIcon without the slash. */
export function CodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M9.5 6.5 4 12 9.5 17.5M14.5 6.5 20 12 14.5 17.5" />
    </Icon>
  );
}

export function CodepenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.5 21.75 8.75V15.25L12 21.5 2.25 15.25V8.75Z" />
      <path strokeLinejoin="bevel" d="M21.75 8.75 12 15.25 2.25 8.75M2.25 15.25 12 8.75 21.75 15.25" />
      <path d="M12 2.5V8.75M12 15.25V21.5" />
    </Icon>
  );
}

export function CodesandboxIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.5 7.25V16.75L12 21.25 3.5 16.75V7.25Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.25 12 11.75 20.5 7.25" />
      <path d="M12 11.75V21.25" />
      <path d="M7.75 4.9 12 7.25 16.25 4.9" />
      <path d="M7.75 19.1V14.4L3.5 12M20.5 12 16.25 14.4V19.1" />
    </Icon>
  );
}

/** Combine: two tiles merging along the arrowed elbow. */
export function CombineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 2.5H8.5C9.42 2.5 9.5 2.58 9.5 3.5V8.5C9.5 9.42 9.42 9.5 8.5 9.5H3.5C2.58 9.5 2.5 9.42 2.5 8.5V3.5C2.5 2.58 2.58 2.5 3.5 2.5Z" />
      <path d="M15.5 14.5H20.5C21.42 14.5 21.5 14.58 21.5 15.5V20.5C21.5 21.42 21.42 21.5 20.5 21.5H15.5C14.58 21.5 14.5 21.42 14.5 20.5V15.5C14.5 14.58 14.58 14.5 15.5 14.5Z" />
      <path d="M14 2.5C15.1 2.5 16 3.4 16 4.5V7.5C16 8.6 15.1 9.5 14 9.5M19.5 2.5C20.6 2.5 21.5 3.4 21.5 4.5V7.5C21.5 8.6 20.6 9.5 19.5 9.5" />
      <path d="M10 18H5.5C3.84 18 2.5 16.66 2.5 15V14" />
      <path strokeLinejoin="bevel" d="M7 21 10 18 7 15" />
    </Icon>
  );
}

/** Desktop rig: tower beside the screen on its stand. */
export function ComputerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.5 3.5H19.5C20.42 3.5 20.5 3.58 20.5 4.5V19.5C20.5 20.42 20.42 20.5 19.5 20.5H15.5C14.58 20.5 14.5 20.42 14.5 19.5V4.5C14.5 3.58 14.58 3.5 15.5 3.5Z" />
      <path d="M16.75 6.5H18.25M16.75 9.5H18.25" />
      <path d="M4.5 7.5H10.5C11.42 7.5 11.5 7.58 11.5 8.5V14C11.5 14.92 11.42 15 10.5 15H4.5C3.58 15 3.5 14.92 3.5 14V8.5C3.5 7.58 3.58 7.5 4.5 7.5Z" />
      <path d="M7.5 15V17.5M5.5 17.5H9.5" />
    </Icon>
  );
}

export function CopyCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7.5H12C14.3 7.5 14.5 7.7 14.5 10V19C14.5 21.3 14.3 21.5 12 21.5H7C4.7 21.5 4.5 21.3 4.5 19V10C4.5 7.7 4.7 7.5 7 7.5Z" />
      <path d="M7.5 4H17C19.3 4 19.5 4.2 19.5 6.5V16" />
      <path strokeLinejoin="bevel" d="M7 14.25 8.9 16.15 12 12.4" />
    </Icon>
  );
}

export function CopyPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7.5H12C14.3 7.5 14.5 7.7 14.5 10V19C14.5 21.3 14.3 21.5 12 21.5H7C4.7 21.5 4.5 21.3 4.5 19V10C4.5 7.7 4.7 7.5 7 7.5Z" />
      <path d="M7.5 4H17C19.3 4 19.5 4.2 19.5 6.5V16" />
      <path d="M9.5 11.25V17.25M6.5 14.25H12.5" />
    </Icon>
  );
}

export function CopyXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7.5H12C14.3 7.5 14.5 7.7 14.5 10V19C14.5 21.3 14.3 21.5 12 21.5H7C4.7 21.5 4.5 21.3 4.5 19V10C4.5 7.7 4.7 7.5 7 7.5Z" />
      <path d="M7.5 4H17C19.3 4 19.5 4.2 19.5 6.5V16" />
      <path d="M7.25 12 11.75 16.5M11.75 12 7.25 16.5" />
    </Icon>
  );
}

/** Copyleft: the reversed C in its ring. */
export function CopyleftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx={12} cy={12} r={10} />
      <path d="M8.75 9.75C9.45 8.83 10.65 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75C10.65 15.75 9.45 15.17 8.75 14.25" />
    </Icon>
  );
}

/** Dam: intake tower over stepped water. */
export function DamIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 3.25C6.45 3.25 6.25 3.45 6.25 4V20C6.25 20.55 6.45 20.75 7 20.75H11C11.55 20.75 11.75 20.55 11.75 20L10 4C9.94 3.45 9.72 3.25 9.17 3.25Z" />
      <path d="M2.25 6H6.25M2.25 10H6.25M2.25 14H6.25M2.25 18H6.25" />
      <path d="M11 11.3C12.17 11.86 12.54 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12" />
      <path d="M11.75 18C12.1 18.5 13.2 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18" />
    </Icon>
  );
}

/** Dock: the app shelf along the screen's base. */
export function DockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H19.5C21.34 4.5 21.5 4.66 21.5 6.5V17.5C21.5 19.34 21.34 19.5 19.5 19.5H4.5C2.66 19.5 2.5 19.34 2.5 17.5V6.5C2.5 4.66 2.66 4.5 4.5 4.5Z" />
      <path d="M2.5 8.5H21.5" />
      <path d="M6 16H18" />
    </Icon>
  );
}

export function DribbbleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.75 10.9" />
      <path d="M21.25 12.84C14.63 11.43 9.11 13.84 4.87 19.16" />
      <path d="M8.56 2.75C12.93 8.75 14.56 12.17 16.56 20.47" />
    </Icon>
  );
}

/* ---- files, homes & tools sweep ---- */

export function FileSymlinkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M9 17.5C9 14.74 9.24 14.5 12 14.5H15.25" />
      <path strokeLinejoin="bevel" d="M12.75 12 15.25 14.5 12.75 17" />
    </Icon>
  );
}

/** Fullscreen: the stage rect inside ScanIcon's brackets. */
export function FullscreenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M8.5 9.5H15.5C16.42 9.5 16.5 9.58 16.5 10.5V13.5C16.5 14.42 16.42 14.5 15.5 14.5H8.5C7.58 14.5 7.5 14.42 7.5 13.5V10.5C7.5 9.58 7.58 9.5 8.5 9.5Z" />
    </Icon>
  );
}

export function GalleryVerticalEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 2.5H17M5 6.25H19" />
      <path d="M5 10H19C20.84 10 21 10.16 21 12V19.5C21 21.34 20.84 21.5 19 21.5H5C3.16 21.5 3 21.34 3 19.5V12C3 10.16 3.16 10 5 10Z" />
    </Icon>
  );
}

/** Commit graph: main line with a merged branch arc. */
export function GitGraphIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(5, 6, 3) + squircle(5, 18, 3) + squircle(19, 6, 3)} />
      <path d="M5 9V15" />
      <path d="M12 2.75V21.25" />
      <path d="M19 9C19 13.5 16.5 16.5 12 17" />
    </Icon>
  );
}

/** Fist: curled fingers over the clenched palm. */
export function HandFistIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14 11V6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6" />
      <path d="M18 12V8C18 6.9 17.1 6 16 6C14.9 6 14 6.9 14 8" />
      <path d="M10 10.5V6C10 4.9 9.1 4 8 4C6.9 4 6 4.9 6 6V14" />
      <path d="M7 15 5.24 13.24C4.46 12.46 3.19 12.46 2.41 13.24C1.63 14.02 1.63 15.28 2.41 16.06L6 19.65C7.5 21.15 9.2 21.5 12 21.5H14C18.42 21.5 22 17.92 22 13.5C22 12.4 21.1 11.5 20 11.5C18.9 11.5 18 12.4 18 13.5" />
    </Icon>
  );
}

/** HDMI port: the beveled trapezoid jack. */
export function HdmiPortIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M21.75 9.5C21.75 8.95 21.55 8.75 21 8.75H3C2.45 8.75 2.25 8.95 2.25 9.5V13.5C2.25 14.05 2.45 14.25 3 14.25H4L6 16.25H18L20 14.25H21C21.55 14.25 21.75 14.05 21.75 13.5Z"
      />
      <path d="M7.5 12.5H16.5" />
    </Icon>
  );
}

export function Heading1Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 6V18M3.5 12H10.5M10.5 6V18" />
      <path d="M16.25 11.5 19.25 9.5V18" />
    </Icon>
  );
}

export function Heading2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 6V18M3.5 12H10.5M10.5 6V18" />
      <path d="M20.75 18H16.75C16.75 14 20.75 15 20.75 12C20.75 10.5 18.75 9.5 16.75 10.5" />
    </Icon>
  );
}

export function Heading3Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 6V18M3.5 12H10.5M10.5 6V18" />
      <path d="M17.5 10.5C19.2 9.5 21 10.5 21 12C21 13.1 20.1 14 19 14C20.1 14 21 14.9 21 16C21 17.5 19.2 18.5 17.5 17.5" />
    </Icon>
  );
}

/** Heart handshake: clasped hands inside the heart. */
export function HeartHandshakeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C6.5 16.5 3 13.25 3 9.5C3 6.75 5.1 4.75 7.65 4.75C9.4 4.75 11 5.75 12 7.25C13 5.75 14.6 4.75 16.35 4.75C18.9 4.75 21 6.75 21 9.5C21 13.25 17.5 16.5 12 20.5Z" />
      <path d="M12 7.25 9.3 9.95C8.5 10.75 8.5 12.05 9.3 12.85C10.1 13.65 11.4 13.68 12.24 12.92L14.3 11.05C15.35 10.1 16.95 10.1 18 11.05L20.3 13.15" />
      <path d="M17.75 15.5 16 13.75M14.75 17.75 13 16" />
    </Icon>
  );
}

export function HeartPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C6.5 16.5 3 13.25 3 9.5C3 6.75 5.1 4.75 7.65 4.75C9.4 4.75 11 5.75 12 7.25C13 5.75 14.6 4.75 16.35 4.75C18.9 4.75 21 6.75 21 9.5C21 13.25 17.5 16.5 12 20.5Z" />
      <path d="M12 8.5V14.5M9 11.5H15" />
    </Icon>
  );
}

export function HousePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 18V9.6L11.05 3.98C11.6 3.51 12.4 3.51 12.95 3.98L19.5 9.6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18Z" />
      <path d="M12 9.5V15.5M9 12.5H15" />
    </Icon>
  );
}

export function HouseWifiIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 18V9.6L11.05 3.98C11.6 3.51 12.4 3.51 12.95 3.98L19.5 9.6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18Z" />
      <path d="M8.5 13.75C10.5 12.15 13.5 12.15 15.5 13.75" />
      <path d="M10 16.25C11.2 15.4 12.8 15.4 14 16.25" />
      <path d={squircle(12, 18.4, 1.2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Square-bow key on the diagonal. */
export function KeySquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12.4 2.7C13.34 1.76 14.86 1.76 15.8 2.7L21.3 8.2C22.24 9.14 22.24 10.66 21.3 11.6L17.6 15.3C16.66 16.24 15.14 16.24 14.2 15.3L8.7 9.8C7.76 8.86 7.76 7.34 8.7 6.4Z"
      />
      <path d="M14 7 17 10" />
      <path d="M9.4 10.6 2.59 17.41C2.21 17.79 2 18.29 2 18.83V21C2 21.55 2.2 21.75 2.75 21.75H5.25C5.8 21.75 6 21.55 6 21V20C6 19.45 6.2 19.25 6.75 19.25H7.75C8.3 19.25 8.5 19.05 8.5 18.5V17.5C8.5 16.95 8.7 16.75 9.25 16.75H9.42C9.95 16.75 10.46 16.54 10.84 16.16L11.65 15.35" />
    </Icon>
  );
}

export function LampWallUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 3V21" />
      <path d="M3.5 17.5H11C12.66 17.5 14 16.16 14 14.5V11.5" />
      <path strokeLinejoin="bevel" d="M10.5 11.5H17.5L20.5 4.5H7.5Z" />
    </Icon>
  );
}

export function ListCollapseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 10 5.5 7.5 3 5" />
      <path strokeLinejoin="bevel" d="M3 19 5.5 16.5 3 14" />
      <path d="M10 6H21M10 12H21M10 18H21" />
    </Icon>
  );
}

export function ListMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 6H16M3 12H11M3 18H16" />
      <path d="M15 12H21.5" />
    </Icon>
  );
}

/** Spinner: the open arc loader. */
export function LoaderCircleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.25 12A9.25 9.25 0 1 1 12 2.75" />
    </Icon>
  );
}

/** MegaphoneIcon under the set's "off" slash. */
export function MegaphoneOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 10.75 21 5.25V17.75L3 12.5Z" />
      <path d="M11.6 16.8A3 3 0 1 1 5.8 15.2" />
      <path d="M4.25 3 19.75 20" />
    </Icon>
  );
}

/** ChatBubble under the set's "off" slash. */
export function MessageSquareOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M4.25 2.75 19.75 19.25" />
    </Icon>
  );
}

/** Share thread: the bubble parted for an outbound arrow. */
export function MessageSquareShareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M12.5 4H7.5C4.74 4 4.5 4.24 4.5 7V21L9 17.5H16.5C19.26 17.5 19.5 17.26 19.5 14.5V11.5"
      />
      <path d="M16 8 21.5 2.5M17.5 2.5H21.5V6.5" />
    </Icon>
  );
}

/** NavigationIcon under the set's "off" slash. */
export function NavigationOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 19 21.25 12 17.25 5 21.25Z" />
      <path d="M2.75 2.75 21.25 21.25" />
    </Icon>
  );
}

/** Notebook: bound spine, margin rule. */
export function NotebookIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75H17.5C19.34 2.75 19.5 2.91 19.5 4.75V19.25C19.5 21.09 19.34 21.25 17.5 21.25H6.5C4.66 21.25 4.5 21.09 4.5 19.25V4.75C4.5 2.91 4.66 2.75 6.5 2.75Z" />
      <path d="M2.5 6.5H6.5M2.5 10.15H6.5M2.5 13.85H6.5M2.5 17.5H6.5" />
      <path d="M9.75 2.75V21.25" />
    </Icon>
  );
}

/** Notebook with index tabs. */
export function NotebookTabsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75H17.5C19.34 2.75 19.5 2.91 19.5 4.75V19.25C19.5 21.09 19.34 21.25 17.5 21.25H6.5C4.66 21.25 4.5 21.09 4.5 19.25V4.75C4.5 2.91 4.66 2.75 6.5 2.75Z" />
      <path d="M2.5 6.5H4.5M2.5 10.15H4.5M2.5 13.85H4.5M2.5 17.5H4.5" />
      <path d="M15 2.75V21.25" />
      <path d="M15 7.5H19.5M15 12H19.5M15 16.5H19.5" />
    </Icon>
  );
}

export function PackageMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.5 7.25V16.75L12 21.25 3.5 16.75V7.25Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.25 12 11.75 20.5 7.25" />
      <path d="M12 11.75V21.25" />
      <path d="M14 14.5H18.5" />
    </Icon>
  );
}

export function PackageXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 20.5 7.25V16.75L12 21.25 3.5 16.75V7.25Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.25 12 11.75 20.5 7.25" />
      <path d="M12 11.75V21.25" />
      <path d="M14.25 12.5 18.25 16.5M18.25 12.5 14.25 16.5" />
    </Icon>
  );
}

/** PencilIcon under the set's "off" slash. */
export function PencilOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17.55 4.2 19.8 6.45 7.35 18.9 3.6 20.4 5.1 16.65Z" />
      <path d="M15.3 6.45 17.55 8.7" />
      <path d="M2.75 2.75 21.25 21.25" />
    </Icon>
  );
}

/** Print done: the printer with a check on the tray. */
export function PrinterCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7V3.75C7 2.83 7.08 2.75 8 2.75H16C16.92 2.75 17 2.83 17 3.75V7" />
      <path d="M7 17.5H4.5C3.58 17.5 3.5 17.42 3.5 16.5V9C3.5 7.5 4 7 5.5 7H18.5C20 7 20.5 7.5 20.5 9V16.5C20.5 17.42 20.42 17.5 19.5 17.5H17" />
      <path d="M8 13.5H16C16.92 13.5 17 13.58 17 14.5V20.25C17 21.17 16.92 21.25 16 21.25H8C7.08 21.25 7 21.17 7 20.25V14.5C7 13.58 7.08 13.5 8 13.5Z" />
      <path strokeLinejoin="bevel" d="M9.75 17.5 11.5 19.25 14.25 16.25" />
    </Icon>
  );
}

/* ---- rotate, scan & steps sweep ---- */

export function RotateCcwSquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 9.5V7.5C20 6.4 19.1 5.5 18 5.5H12" />
      <path strokeLinejoin="bevel" d="M15 2.5 12 5.5 15 8.5" />
      <path d="M20 13.5V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V9.5C4 8.4 4.9 7.5 6 7.5H8" />
    </Icon>
  );
}

export function RotateCwSquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 9.5V7.5C4 6.4 4.9 5.5 6 5.5H12" />
      <path strokeLinejoin="bevel" d="M9 2.5 12 5.5 9 8.5" />
      <path d="M4 13.5V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V9.5C20 8.4 19.1 7.5 18 7.5H16" />
    </Icon>
  );
}

/** Save all: the disk with its sibling sweeping behind. */
export function SaveAllIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.75 6.5H8.5C6.66 6.5 6.5 6.66 6.5 8.5V19.5C6.5 21.34 6.66 21.5 8.5 21.5H17.5C19.34 21.5 19.5 21.34 19.5 19.5V10.25L15.75 6.5Z" />
      <path d="M9.5 6.5V9.5C9.5 10.42 9.58 10.5 10.5 10.5H14.5" />
      <path d="M17 21.5V16.5C17 15.58 16.92 15.5 16 15.5H10C9.08 15.5 9 15.58 9 16.5V21.5" />
      <path d="M7 3H15.5C17.34 3 17.5 3.16 17.5 5" />
      <path d="M3.5 5.5V16.5" />
    </Icon>
  );
}

/** Iris scan: the eye inside ScanIcon's brackets. */
export function ScanEyeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M7.25 12C8.75 9.9 10.3 9 12 9C13.7 9 15.25 9.9 16.75 12C15.25 14.1 13.7 15 12 15C10.3 15 8.75 14.1 7.25 12Z" />
      <path d={squircle(12, 12, 1.5)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** Health scan: the heart inside the brackets. */
export function ScanHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M12 15.9C10.1 14.5 8.9 13.35 8.9 12C8.9 11 9.65 10.25 10.6 10.25C11.15 10.25 11.68 10.55 12 11C12.32 10.55 12.85 10.25 13.4 10.25C14.35 10.25 15.1 11 15.1 12C15.1 13.35 13.9 14.5 12 15.9Z" />
    </Icon>
  );
}

/** QR scan: code blocks inside the brackets. */
export function ScanQrCodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M8 8.5H11V11.5H8Z" />
      <path d="M13.5 8.5H16M16 11V13.5M8 14H10.5M13 13.5V16H16" />
    </Icon>
  );
}

/** Cut here: scissors on the dashed line. */
export function ScissorsLineDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(4, 8, 2) + squircle(4, 16, 2)} />
      <path d="M5.42 9.42 8 12M14 6 5.42 14.58M10.8 14.8 14 18" />
      <path d="M16 12H18M20.5 12H22.5" />
    </Icon>
  );
}

/** Search code: chevrons in the lens. */
export function SearchCodeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 6)} />
      <path d="M15.6 15.6 20.75 20.75" />
      <path strokeLinejoin="bevel" d="M9.25 9 7 11 9.25 13M12.75 9 15 11 12.75 13" />
    </Icon>
  );
}

export function SearchSlashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 11, 6)} />
      <path d="M15.6 15.6 20.75 20.75" />
      <path d="M13 8.5 9 13.5" />
    </Icon>
  );
}

/** Split rows: the rule pulling apart vertically. */
export function SeparatorHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 12H21.25" />
      <path d="M12 8.75V3" />
      <path strokeLinejoin="bevel" d="M9.25 5.75 12 3 14.75 5.75" />
      <path d="M12 15.25V21" />
      <path strokeLinejoin="bevel" d="M9.25 18.25 12 21 14.75 18.25" />
    </Icon>
  );
}

export function SeparatorVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V21.25" />
      <path d="M8.75 12H3" />
      <path strokeLinejoin="bevel" d="M5.75 9.25 3 12 5.75 14.75" />
      <path d="M15.25 12H21" />
      <path strokeLinejoin="bevel" d="M18.25 9.25 21 12 18.25 14.75" />
    </Icon>
  );
}

export function ShieldMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SHIELD_OUTLINE} />
      <path d="M9 12H15" />
    </Icon>
  );
}

/** Charging phone: the handset with a bolt. */
export function SmartphoneChargingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 2.5H15.5C17.34 2.5 17.5 2.66 17.5 4.5V19.5C17.5 21.34 17.34 21.5 15.5 21.5H8.5C6.66 21.5 6.5 21.34 6.5 19.5V4.5C6.5 2.66 6.66 2.5 8.5 2.5Z" />
      <path strokeLinejoin="bevel" d="M12.5 8 10 12H14L11.5 16" />
    </Icon>
  );
}

/** Add reaction: the smile parted for a plus. */
export function SmilePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.5 11.5V12A9.5 9.5 0 1 1 12.9 2.55" />
      <path d="M8.25 14C9 15.75 10.4 16.6 12 16.6C13.6 16.6 15 15.75 15.75 14" />
      <path
        d={squircle(9, 9.25, 1.15) + squircle(15, 9.25, 1.15)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M16 5H22M19 2V8" />
    </Icon>
  );
}

/** Spline: the handle nodes joined by their curve. */
export function SplineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(19, 5, 2) + squircle(5, 19, 2)} />
      <path d="M5 17A12 12 0 0 1 17 5" />
    </Icon>
  );
}

/** Inspect element: the cursor entering the tile. */
export function SquareMousePointerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C4.18 20.5 3.5 19.82 3.5 12C3.5 4.18 4.18 3.5 12 3.5C19.82 3.5 20.5 4.18 20.5 12" />
      <path strokeLinejoin="bevel" d="M12 12 21.5 15.6 17.4 17.4 15.6 21.5Z" />
    </Icon>
  );
}

/** Squircle: the set's own genome, boxier than RingIcon. */
export function SquircleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5, 0.86)} />
    </Icon>
  );
}

export function StepBackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18 4.5V19.5" />
      <path strokeLinejoin="bevel" d="M14 19.5 4.5 12 14 4.5Z" />
    </Icon>
  );
}

export function StepForwardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 4.5V19.5" />
      <path strokeLinejoin="bevel" d="M10 4.5 19.5 12 10 19.5Z" />
    </Icon>
  );
}

/** Season change: half sun beside the snowflake. Only the three square
 *  rays stay - the diagonal ones crowd the flake at 24px. */
export function SunSnowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 8.75A3.25 3.25 0 0 0 10 15.25" />
      <path d="M10 3.5V2.25M10 21.75V20.5M2.25 12H3.75" />
      <path d="M17.5 7.5V16.5M13.5 9.75 21.5 14.25M21.5 9.75 13.5 14.25" />
    </Icon>
  );
}

/** Flip camera: split housing with swap chevrons. */
export function SwitchCameraIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 19H4.5C3.4 19 2.5 18.1 2.5 17V7.5C2.5 6.4 3.4 5.5 4.5 5.5H9" />
      <path d="M13 5.5H19.5C20.6 5.5 21.5 6.4 21.5 7.5V17C21.5 18.1 20.6 19 19.5 19H15" />
      <path d={squircle(12, 12.25, 3)} />
      <path strokeLinejoin="bevel" d="M18 21.75 15 19 18 16.25" />
      <path strokeLinejoin="bevel" d="M6 2.5 9 5.5 6 8.5" />
    </Icon>
  );
}

/** Responsive pair: the tablet behind its phone. */
export function TabletSmartphoneIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 5.5V4.5C5 3.4 5.9 2.5 7 2.5H19C20.1 2.5 21 3.4 21 4.5V19.5C21 20.6 20.1 21.5 19 21.5H16.5" />
      <path d="M4.5 8H11.5C12.6 8 13 8.4 13 9.5V20C13 21.1 12.6 21.5 11.5 21.5H4.5C3.4 21.5 3 21.1 3 20V9.5C3 8.4 3.4 8 4.5 8Z" />
      <path d="M6.75 18.75H9.25" />
    </Icon>
  );
}

/** Campsite: tent pitched under the pine. */
export function TentTreeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(4, 4, 2)} />
      <path strokeLinejoin="bevel" d="M14 5.5 17 2.5 20 5.5M14 10.5 17 7.5 20 10.5" />
      <path d="M17 14V2.75" />
      <path strokeLinejoin="bevel" d="M17 14H7L2.5 21.5H21.5Z" />
      <path d="M8 14V21.5M9 14 13.75 21.5" />
    </Icon>
  );
}

/** Test tubes: the rack pair with fill lines. */
export function TestTubesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 2.5V19C9 20.4 7.9 21.5 6.5 21.5C5.1 21.5 4 20.4 4 19V2.5" />
      <path d="M20 2.5V19C20 20.4 18.9 21.5 17.5 21.5C16.1 21.5 15 20.4 15 19V2.5" />
      <path d="M3 2.5H10M14 2.5H21" />
      <path d="M9 15.5H4M20 15.5H15" />
    </Icon>
  );
}

/** Text input: the I-beam between field walls. */
export function TextCursorInputIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 4.5H7C8.1 4.5 9 5.4 9 6.5C9 5.4 9.9 4.5 11 4.5H12" />
      <path d="M6 19.5H7C8.1 19.5 9 18.6 9 17.5C9 18.6 9.9 19.5 11 19.5H12" />
      <path d="M9 6.5V17.5" />
      <path d="M13 8.5H19.5C20.6 8.5 21.5 9.4 21.5 10.5V13.5C21.5 14.6 20.6 15.5 19.5 15.5H13" />
      <path d="M5 15.5H4.5C3.4 15.5 2.5 14.6 2.5 13.5V10.5C2.5 9.4 3.4 8.5 4.5 8.5H5" />
    </Icon>
  );
}

export function TicketPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={TICKET_OUTLINE} />
      <path d="M12 9V15M9 12H15" />
    </Icon>
  );
}

/** TimerIcon under the set's "off" slash. */
export function TimerOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 2.5H14" />
      <path d={squircle(12, 14, 7.75)} />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/** Turntable: platter and tonearm in the deck tile. */
export function TurntableIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d={squircle(10, 12, 5.4)} />
      <path d={squircle(10, 12, 1.2)} fill="currentColor" stroke="none" />
      <path d={squircle(18, 7, 1.1)} fill="currentColor" stroke="none" />
      <path d="M18 8.1V11.5C18 12.3 17.75 12.9 17.2 13.5L16.2 14.5" />
    </Icon>
  );
}

/** Venus and Mars: the shared ring with both marks. */
export function VenusAndMarsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10 19.75H14M12 16V21.75" />
      <path d="M17 2.25H21.5V6.75M21.5 2.25 16.15 7.6" />
      <path d={squircle(12, 11, 5)} />
    </Icon>
  );
}

/** Wallet cards: card wave tucked under the fold. */
export function WalletCardsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M3.5 9C3.5 7.9 4.4 7 5.5 7H18.5C19.6 7 20.5 7.9 20.5 9" />
      <path d="M3.5 11.5H6.5C7.3 11.5 8.1 11.8 8.6 12.4L9.7 13.3C11.3 14.9 13.8 14.9 15.4 13.3L16.5 12.4C17 11.8 17.8 11.5 18.6 11.5H20.5" />
    </Icon>
  );
}

/** Magic wand: the rod trailing spark ticks. */
export function WandSparklesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.5 3.78 20.22 2.5C19.75 2.03 19 2.03 18.5 2.5L2.5 18.5C2.03 19 2.03 19.75 2.5 20.22L3.78 21.5C4.25 21.97 5.03 21.97 5.5 21.5L21.5 5.5C21.97 5.03 21.97 4.25 21.5 3.78Z" />
      <path d="M14 7 17 10" />
      <path d="M5 6V10M19 14V18M10 2.25V4.25M7 8H3M21.5 16H17.5M11 3H9" />
    </Icon>
  );
}

/* ---- charts, shapes & layout sweep ---- */

/** Bar chart, two thick horizontal bars off the axis. */
export function ChartBarBigIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={4} d="M6.75 8H13.75M6.75 14.5H19.25" />
    </Icon>
  );
}
export function ChartBarDecreasingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={3} d="M6.75 6.5H19M6.75 11.5H14.5M6.75 16.5H10.5" />
    </Icon>
  );
}
export function ChartBarIncreasingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={3} d="M6.75 6.5H10.5M6.75 11.5H14.5M6.75 16.5H19" />
    </Icon>
  );
}
export function ChartColumnBigIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={4} d="M10 20.5V11.5M16 20.5V6.75" />
    </Icon>
  );
}
export function ChartColumnDecreasingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={3} d="M7.5 20.5V6.5M12.25 20.5V11M17 20.5V15.5" />
    </Icon>
  );
}
/** Stacked columns: segment gaps read as the stack splits. */
export function ChartColumnStackedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25V18.5C4 20.34 4.16 20.5 6 20.5H20.75" />
      <path strokeWidth={3} d="M9.25 20.5V15.75M9.25 13.75V9.5M15 20.5V13M15 11V5.75" />
    </Icon>
  );
}
export function ChartNoAxesColumnIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeWidth={3} d="M5.5 20.5V10M12 20.5V3.5M18.5 20.5V14" />
    </Icon>
  );
}
export function ChartNoAxesCombinedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeWidth={3} d="M4.5 20.5V16.5M9.5 20.5V13.5M14.5 20.5V16M19.5 20.5V11" />
      <path strokeLinejoin="bevel" d="M3.5 9.25 9.25 5.75 13.5 8.25 20.5 3.75" />
    </Icon>
  );
}
export function ChartNoAxesGanttIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeWidth={3} d="M3.5 6.5H13M8 12H20.5M12.5 17.5H17.5" />
    </Icon>
  );
}
export function CircleDotDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} strokeDasharray="4.5 3.5" />
      <path d={squircle(12, 12, 2.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
/** Fading circles: solid right half, dashed left half. */
export function CircleFadingArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25A9.75 9.75 0 0 1 12 21.75" />
      <path strokeDasharray="3.4 3.9" d="M12 21.75A9.75 9.75 0 0 1 12 2.25" />
      <path d="M12 16.25V7.75" />
      <path strokeLinejoin="bevel" d="M8.75 11 12 7.75 15.25 11" />
    </Icon>
  );
}
export function CircleFadingPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25A9.75 9.75 0 0 1 12 21.75" />
      <path strokeDasharray="3.4 3.9" d="M12 21.75A9.75 9.75 0 0 1 12 2.25" />
      <path d="M12 7.5V16.5M7.5 12H16.5" />
    </Icon>
  );
}
export function CircleGaugeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M16.9 3.6A9.75 9.75 0 1 0 20.4 7.1" />
      <path d="M12 12 16.75 7.25" />
      <path d={squircle(12, 12, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function ClockFadingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.25A8.75 8.75 0 0 1 12 20.75" />
      <path strokeDasharray="3.2 3.8" d="M12 20.75A8.75 8.75 0 0 1 12 3.25" />
      <path d="M12 7.5V12H15.25" />
    </Icon>
  );
}
export function RectangleHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 6.5H18.5C20.34 6.5 20.5 6.66 20.5 8.5V15.5C20.5 17.34 20.34 17.5 18.5 17.5H5.5C3.66 17.5 3.5 17.34 3.5 15.5V8.5C3.5 6.66 3.66 6.5 5.5 6.5Z" />
    </Icon>
  );
}
export function RectangleVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 3.5H15.5C17.34 3.5 17.5 3.66 17.5 5.5V18.5C17.5 20.34 17.34 20.5 15.5 20.5H8.5C6.66 20.5 6.5 20.34 6.5 18.5V5.5C6.5 3.66 6.66 3.5 8.5 3.5Z" />
    </Icon>
  );
}
export function DiamondMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 21.25 12 12 21.25 2.75 12Z" />
      <path d="M8.75 12H15.25" />
    </Icon>
  );
}
export function DiamondPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 21.25 12 12 21.25 2.75 12Z" />
      <path d="M12 8.75V15.25M8.75 12H15.25" />
    </Icon>
  );
}
export function DiamondPercentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 21.25 12 12 21.25 2.75 12Z" />
      <path d="M9.5 14.5 14.5 9.5" />
      <path
        d={squircle(9.75, 9.75, 1) + squircle(14.25, 14.25, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
export function TriangleDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" strokeDasharray="4 3.3" d="M12 3.5 21.25 20.25H2.75Z" />
    </Icon>
  );
}
export function TriangleRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M20.5 5.5V20.25H3.5Z" />
    </Icon>
  );
}
/** Dim sun: the rays shrink to dots - short strokes read the same as
 *  SunMediumIcon's rays at 24px. */
export function SunDimIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 4.5)} />
      <path
        d={
          squircle(12, 4, 1.2) +
          squircle(12, 20, 1.2) +
          squircle(4, 12, 1.2) +
          squircle(20, 12, 1.2) +
          squircle(6.34, 6.34, 1.2) +
          squircle(17.66, 6.34, 1.2) +
          squircle(6.34, 17.66, 1.2) +
          squircle(17.66, 17.66, 1.2)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
export function SunMediumIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 4.5)} />
      <path d="M12 3V4.75M12 19.25V21M3 12H4.75M19.25 12H21M5.45 5.45 6.7 6.7M17.3 17.3 18.55 18.55M5.45 18.55 6.7 17.3M17.3 6.7 18.55 5.45" />
    </Icon>
  );
}
export function Layers2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 3.75 20.5 8 12 12.25 3.5 8Z" />
      <path strokeLinejoin="bevel" d="M3.5 14 12 18.25 20.5 14" />
    </Icon>
  );
}
/** Stacks step up-left as open corner strokes behind the front tile. */
export function SquareStackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(15, 15, 5.5, 0.92)} />
      <path d="M6.25 14.75V11.75C6.25 6.69 6.69 6.25 11.75 6.25H14.75" />
      <path d="M3 11.5V8.5C3 3.44 3.44 3 8.5 3H11.5" />
    </Icon>
  );
}
export function SquareDashedBottomIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {dashedBottomTile}
    </Icon>
  );
}
export function Grid2x2CheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V12.5" />
      <path d="M12 3.5V20.5M3.5 12H20.5" />
      <path strokeLinejoin="bevel" d="M14.5 17.5 16.75 19.75 21.25 15.25" />
    </Icon>
  );
}
export function Grid2x2PlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V12.5" />
      <path d="M12 3.5V20.5M3.5 12H20.5" />
      <path d="M17.75 14.5V21M14.5 17.75H21" />
    </Icon>
  );
}
export function Grid2x2XIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V12.5" />
      <path d="M12 3.5V20.5M3.5 12H20.5" />
      <path d="M15.25 15.25 20.75 20.75M20.75 15.25 15.25 20.75" />
    </Icon>
  );
}
export function PanelTopDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path strokeDasharray="3.2 2.9" d="M3.5 9.5H20.5" />
    </Icon>
  );
}
export function PanelBottomDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path strokeDasharray="3.2 2.9" d="M3.5 14.5H20.5" />
    </Icon>
  );
}
export function PanelLeftDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path strokeDasharray="3.2 2.9" d="M9.5 4V20" />
    </Icon>
  );
}
export function PanelRightDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path strokeDasharray="3.2 2.9" d="M14.5 4V20" />
    </Icon>
  );
}
export function PanelsTopLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9H20.5M9.5 9V20" />
    </Icon>
  );
}
export function PanelsLeftBottomIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M9.5 4V20M9.5 14.5H20.5" />
    </Icon>
  );
}
export function LayoutPanelTopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 3.5H19.5C20.42 3.5 20.5 3.58 20.5 4.5V9.5C20.5 10.42 20.42 10.5 19.5 10.5H4.5C3.58 10.5 3.5 10.42 3.5 9.5V4.5C3.5 3.58 3.58 3.5 4.5 3.5Z" />
      <path d="M4.5 13.5H9.5C10.42 13.5 10.5 13.58 10.5 14.5V19.5C10.5 20.42 10.42 20.5 9.5 20.5H4.5C3.58 20.5 3.5 20.42 3.5 19.5V14.5C3.5 13.58 3.58 13.5 4.5 13.5Z" />
      <path d="M14.5 13.5H19.5C20.42 13.5 20.5 13.58 20.5 14.5V19.5C20.5 20.42 20.42 20.5 19.5 20.5H14.5C13.58 20.5 13.5 20.42 13.5 19.5V14.5C13.5 13.58 13.58 13.5 14.5 13.5Z" />
    </Icon>
  );
}
export function ProportionsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d="M12.5 8.25H16.5V15.75" />
      <path d="M7.5 12.25H10.75V15.75" />
    </Icon>
  );
}
export function Table2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.35H20.5M12 9.35V20" />
    </Icon>
  );
}
export function TableCellsMergeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.35H20.5M3.5 14.65H20.5" />
      <path d="M12 4V9.35M12 14.65V20" />
    </Icon>
  );
}
export function TableCellsSplitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 9.35H20.5M3.5 14.65H20.5" />
      <path d="M12 9.35V14.65" />
    </Icon>
  );
}
export function InspectionPanelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path
        d={
          squircle(7.5, 7.5, 1.05) +
          squircle(16.5, 7.5, 1.05) +
          squircle(7.5, 16.5, 1.05) +
          squircle(16.5, 16.5, 1.05)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
export function VectorSquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 3.25H7C7.55 3.25 7.75 3.45 7.75 4V7C7.75 7.55 7.55 7.75 7 7.75H4C3.45 7.75 3.25 7.55 3.25 7V4C3.25 3.45 3.45 3.25 4 3.25Z" />
      <path d="M17 3.25H20C20.55 3.25 20.75 3.45 20.75 4V7C20.75 7.55 20.55 7.75 20 7.75H17C16.45 7.75 16.25 7.55 16.25 7V4C16.25 3.45 16.45 3.25 17 3.25Z" />
      <path d="M4 16.25H7C7.55 16.25 7.75 16.45 7.75 17V20C7.75 20.55 7.55 20.75 7 20.75H4C3.45 20.75 3.25 20.55 3.25 20V17C3.25 16.45 3.45 16.25 4 16.25Z" />
      <path d="M17 16.25H20C20.55 16.25 20.75 16.45 20.75 17V20C20.75 20.55 20.55 20.75 20 20.75H17C16.45 20.75 16.25 20.55 16.25 20V17C16.25 16.45 16.45 16.25 17 16.25Z" />
      <path d="M7.75 5.5H16.25M7.75 18.5H16.25M5.5 7.75V16.25M18.5 7.75V16.25" />
    </Icon>
  );
}
export function SpaceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 9.75V12.5C3.5 13.84 4.16 14.5 5.5 14.5H18.5C19.84 14.5 20.5 13.84 20.5 12.5V9.75" />
    </Icon>
  );
}
export function CornerDownLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19.5 4.5V10.5C19.5 13.26 19.26 13.5 16.5 13.5H4.25" />
      <path strokeLinejoin="bevel" d="M8.5 9.25 4.25 13.5 8.5 17.75" />
    </Icon>
  );
}
/** Move arrows: full-bleed stems with small heads, unlike the wider Arrow set. */
export function MoveUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.25V2.75" />
      <path strokeLinejoin="bevel" d="M9.5 5.25 12 2.75 14.5 5.25" />
    </Icon>
  );
}
export function MoveDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V21.25" />
      <path strokeLinejoin="bevel" d="M9.5 18.75 12 21.25 14.5 18.75" />
    </Icon>
  );
}
export function MoveLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.25 12H2.75" />
      <path strokeLinejoin="bevel" d="M5.25 9.5 2.75 12 5.25 14.5" />
    </Icon>
  );
}
export function MoveRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 12H21.25" />
      <path strokeLinejoin="bevel" d="M18.75 9.5 21.25 12 18.75 14.5" />
    </Icon>
  );
}
export function MoveHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 12H21.25" />
      <path
        strokeLinejoin="bevel"
        d="M5.25 9.5 2.75 12 5.25 14.5M18.75 9.5 21.25 12 18.75 14.5"
      />
    </Icon>
  );
}
export function MoveVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V21.25" />
      <path
        strokeLinejoin="bevel"
        d="M9.5 5.25 12 2.75 14.5 5.25M9.5 18.75 12 21.25 14.5 18.75"
      />
    </Icon>
  );
}
export function MoveUpLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18.75 18.75 5.25 5.25" />
      <path d="M5.25 11.5V5.25H11.5" />
    </Icon>
  );
}
export function MoveUpRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.25 18.75 18.75 5.25" />
      <path d="M18.75 11.5V5.25H12.5" />
    </Icon>
  );
}
export function MoveDownLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M18.75 5.25 5.25 18.75" />
      <path d="M5.25 12.5V18.75H11.5" />
    </Icon>
  );
}
export function MoveDownRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.25 5.25 18.75 18.75" />
      <path d="M18.75 12.5V18.75H12.5" />
    </Icon>
  );
}
export function ListCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 5.75H20.5M3.5 11.75H20.5M3.5 17.75H11.5" />
      <path strokeLinejoin="bevel" d="M14.75 17.5 17 19.75 21.5 15.25" />
    </Icon>
  );
}
export function ListFilterPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.75 6.5H19.5M7.5 12H16.5M10.5 17.5H13.5" />
      <path d="M4.75 3.75V9.25M2 6.5H7.5" />
    </Icon>
  );
}
export function LogsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeWidth={2.5} d="M3.25 6H5.25M3.25 12H5.25M3.25 18H5.25" />
      <path strokeWidth={2.5} d="M8 6H10M8 12H10M8 18H10" />
      <path d="M13 6H20.75M13 12H20.75M13 18H20.75" />
    </Icon>
  );
}
export const GripVerticalIcon = GripIcon;

/* ---- files, comm & devices sweep ---- */

export function BookCopyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.75 19V6.75C7.75 5.5 8.75 4.5 10 4.5H20.5V21H10C8.75 21 7.75 20 7.75 18.75C7.75 17.5 8.75 16.5 10 16.5H20.5" />
      <path d="M4.75 16.4C4 16.05 3.5 15.3 3.5 14.45V4.75C3.5 3.5 4.5 2.5 5.75 2.5H16.25" />
    </Icon>
  );
}
export function BookDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H8.5" />
      <path d="M4.5 15V11.5M4.5 8V4.75C4.5 3.5 5.5 2.5 6.75 2.5H8.5M11.25 2.5H14M16.75 2.5H19.5V5.25M19.5 8.25V11M19.5 14V17H16.75M14 17H11.25M11.25 21.5H14M16.75 21.5H19.5V19.75" />
    </Icon>
  );
}
export function BookHeadphonesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M8.9 12V10.6C8.9 8.75 10.25 7.4 12 7.4C13.75 7.4 15.1 8.75 15.1 10.6V12" />
      <path
        d={squircle(8.9, 11.9, 1.15) + squircle(15.1, 11.9, 1.15)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
export function BookTypeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M9 8.75V7.75H15V8.75" />
      <path d="M12 7.75V13.75" />
      <path d="M10.75 13.75H13.25" />
    </Icon>
  );
}
export function CalendarFoldIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V14.5L14.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V7C3.5 5.16 3.66 5 5.5 5Z"
      />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M14.5 20.5V16.5C14.5 15.13 15.13 14.5 16.5 14.5H20.5" />
    </Icon>
  );
}
export function ClipboardPenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path strokeLinejoin="bevel" d="M14.7 10.4 16.85 12.55 11.1 18.3 8.5 18.85 9.05 16.25Z" />
    </Icon>
  );
}
export function ClipboardTypeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 4.5H7C5.16 4.5 5 4.66 5 6.5V19.5C5 21.34 5.16 21.5 7 21.5H17C18.84 21.5 19 21.34 19 19.5V6.5C19 4.66 18.84 4.5 17 4.5H15.5" />
      <path d="M9.5 2.5H14.5C15.42 2.5 15.5 2.58 15.5 3.5V5C15.5 5.92 15.42 6 14.5 6H9.5C8.58 6 8.5 5.92 8.5 5V3.5C8.5 2.58 8.58 2.5 9.5 2.5Z" />
      <path d="M9.25 11V10H14.75V11" />
      <path d="M12 10V16.5" />
      <path d="M10.75 16.5H13.25" />
    </Icon>
  );
}
export function FileDiffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M12 11V15.5M9.75 13.25H14.25" />
      <path d="M9.75 17.75H14.25" />
    </Icon>
  );
}
export function FileStackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M15 7.5H11C8.24 7.5 8 7.74 8 10.5V18C8 20.76 8.24 21 11 21H16.5C19.26 21 19.5 20.76 19.5 18V12ZM15 7.5V10.5C15 11.6 15.4 12 16.5 12H19.5" />
      <path d="M4.75 15V7.75C4.75 5.5 5.25 5 7.5 5H13.75" />
      <path d="M2.5 11.75V5.25C2.5 3.45 2.9 3 4.75 3H10.5" />
    </Icon>
  );
}
export function FolderClosedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M2.5 9.25H21.5" />
    </Icon>
  );
}
export function FolderGit2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={FOLDER_OUTLINE} />
      <path d="M9.25 9.75V17" />
      <path d={squircle(14.75, 11.5, 1.9)} />
      <path d="M14.75 13.4C14.75 15.5 13.25 16.5 9.25 16.5" />
    </Icon>
  );
}
export function FolderOpenDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 14L7.45 11.1C7.79 10.43 8.48 10 9.24 10H20C21.3 10 22.2 11.3 21.94 12.5L20.39 18.5C20.16 19.38 19.37 20 18.45 20H4C2.16 20 2 19.84 2 18V5C2 3.62 2.12 3.5 3.5 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3H18C19.38 6.3 19.5 6.42 19.5 7.8V10" />
      <path d={squircle(12.5, 15, 1.5)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function NotebookTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75H17.5C19.34 2.75 19.5 2.91 19.5 4.75V19.25C19.5 21.09 19.34 21.25 17.5 21.25H6.5C4.66 21.25 4.5 21.09 4.5 19.25V4.75C4.5 2.91 4.66 2.75 6.5 2.75Z" />
      <path d="M2.5 6.5H6.5M2.5 10.15H6.5M2.5 13.85H6.5M2.5 17.5H6.5" />
      <path d="M9.75 2.75V21.25" />
      <path d="M12.5 8.5H16.5M12.5 12H16.5M12.5 15.5H16.5" />
    </Icon>
  );
}
export function NotepadTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 4.5H17.5C19.34 4.5 19.5 4.66 19.5 6.5V19C19.5 20.84 19.34 21 17.5 21H6.5C4.66 21 4.5 20.84 4.5 19V6.5C4.5 4.66 4.66 4.5 6.5 4.5Z" />
      <path d="M8 2.5V6M12 2.5V6M16 2.5V6" />
      <path d="M8 10.5H16M8 14H16M8 17.5H12.5" />
    </Icon>
  );
}
export function ReceiptTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M8.5 7.5H15.5M8.5 11H15.5M8.5 14.5H12.5" />
    </Icon>
  );
}
export function LetterTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.5 15.25 7 5.75 10.5 15.25" />
      <path d="M4.75 12H9.25" />
      <path d="M14.5 7.5H20.75M14.5 11.75H20.75M3.5 19.25H20.75" />
    </Icon>
  );
}
/** The fi ligature: f bowl flowing into a dotted-less i. */
export function LigatureIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 20.5V8.5C8.5 5.75 10.25 4.25 12.75 4.25C14 4.25 15 4.6 15.75 5.25" />
      <path d="M5.75 10.75H11.25" />
      <path d="M15.75 10.75V20.5" />
      <path d="M5.75 20.5H11.25M13 20.5H18.5" />
    </Icon>
  );
}
/** Bubble-letter T. */
export function TypeOutlineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C19.05 4.5 19.25 4.7 19.25 5.25V8C19.25 8.55 19.05 8.75 18.5 8.75H14.75V18.75C14.75 19.3 14.55 19.5 14 19.5H10C9.45 19.5 9.25 19.3 9.25 18.75V8.75H5.5C4.95 8.75 4.75 8.55 4.75 8V5.25C4.75 4.7 4.95 4.5 5.5 4.5Z" />
    </Icon>
  );
}
export function LibraryBigIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 3.5H7C7.92 3.5 8 3.58 8 4.5V19.5C8 20.42 7.92 20.5 7 20.5H4.5C3.58 20.5 3.5 20.42 3.5 19.5V4.5C3.5 3.58 3.58 3.5 4.5 3.5Z" />
      <path d="M11 3.5H13.5C14.42 3.5 14.5 3.58 14.5 4.5V19.5C14.5 20.42 14.42 20.5 13.5 20.5H11C10.08 20.5 10 20.42 10 19.5V4.5C10 3.58 10.08 3.5 11 3.5Z" />
      <path d="M16.4 5.4 20.65 19.9" />
    </Icon>
  );
}
export function MessageCircleDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeDasharray="4.1 3.4" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1" />
      <path strokeLinejoin="bevel" d="M3.75 16.1 2.5 21.5 7.9 20.25" />
    </Icon>
  );
}
export function MessageCircleReplyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path strokeLinejoin="bevel" d="M11.4 8.9 8.8 11.5 11.4 14.1" />
      <path d="M8.8 11.5H13.4C14.9 11.5 15.6 12.2 15.6 13.7V14.9" />
    </Icon>
  );
}
export function MessageCircleWarningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M7.9 20.25A9.25 9.25 0 1 0 3.75 16.1L2.5 21.5Z" />
      <path d="M12 7.75V12.25" />
      <path d={squircle(12, 14.9, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function MessageSquareDiffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M12 5.9V10.1M9.9 8H14.1" />
      <path d="M9.9 13H14.1" />
    </Icon>
  );
}
export function MessageSquareLockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M10 10.75H14C14.55 10.75 14.75 10.95 14.75 11.5V14.25C14.75 14.8 14.55 15 14 15H10C9.45 15 9.25 14.8 9.25 14.25V11.5C9.25 10.95 9.45 10.75 10 10.75Z" />
      <path d="M10.5 10.75V9.5C10.5 8.55 11.15 7.9 12 7.9C12.85 7.9 13.5 8.55 13.5 9.5V10.75" />
    </Icon>
  );
}
export function GitBranchPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(18, 6, 3) + squircle(6, 18, 3)} />
      <path d="M6 3V15" />
      <path d="M18 9C18 15.3 15.3 18 9 18" />
      <path d="M18.75 14.75V20.75M15.75 17.75H21.75" />
    </Icon>
  );
}
export function GitCompareArrowsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(18, 18, 3)} />
      <path d="M18 14.9V9C18 6.24 17.76 6 15 6H12.25" />
      <path strokeLinejoin="bevel" d="M14.25 3.75 12 6 14.25 8.25" />
      <path d="M6 9.1V15C6 17.76 6.24 18 9 18H11.75" />
      <path strokeLinejoin="bevel" d="M9.75 15.75 12 18 9.75 20.25" />
    </Icon>
  );
}
export function GitPullRequestArrowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3) + squircle(18, 18, 3)} />
      <path d="M6 9V21.25" />
      <path d="M18 14.9V9C18 6.5 16.1 4.6 13.6 4.6H12" />
      <path strokeLinejoin="bevel" d="M14 2.6 12 4.6 14 6.6" />
    </Icon>
  );
}
export function GitPullRequestCreateIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(6, 6, 3)} />
      <path d="M6 9V21.25" />
      <path d="M12.5 6H15C17.76 6 18 6.24 18 9V11.25" />
      <path d="M18 14.75V21.25M14.75 18H21.25" />
    </Icon>
  );
}
export function RedoDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 9.25H9.75C6.7 9.25 4.25 11.5 4.25 14.5C4.25 17.5 6.7 19.75 9.75 19.75H13" />
      <path strokeLinejoin="bevel" d="M15.25 4.5 20 9.25 15.25 14" />
      <path d={squircle(12, 14.5, 1.5)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function UndoDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 9.25H14.25C17.3 9.25 19.75 11.5 19.75 14.5C19.75 17.5 17.3 19.75 14.25 19.75H11" />
      <path strokeLinejoin="bevel" d="M8.75 4.5 4 9.25 8.75 14" />
      <path d={squircle(12, 14.5, 1.5)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function RefreshCcwDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.75 12A8.75 8.75 0 0 0 12 3.25C9.4 3.25 7.05 4.25 5.2 6.05L3.25 8" />
      <path d="M3.25 3.25V8H8" />
      <path d="M3.25 12A8.75 8.75 0 0 0 12 20.75C14.6 20.75 16.95 19.75 18.8 17.95L20.75 16" />
      <path d="M20.75 20.75V16H16" />
      <path d={squircle(12, 12, 1.5)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function RefreshCwOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.25 12A8.75 8.75 0 0 1 12 3.25C14.6 3.25 16.95 4.25 18.8 6.05L20.75 8" />
      <path d="M20.75 3.25V8H16" />
      <path d="M20.75 12A8.75 8.75 0 0 1 12 20.75C9.4 20.75 7.05 19.75 5.2 17.95L3.25 16" />
      <path d="M3.25 20.75V16H8" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function Repeat2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.75 9 5.5 6.25 8.25 9" />
      <path d="M5.5 6.25H16.5C18.7 6.25 20.5 8.05 20.5 10.25V11.5" />
      <path strokeLinejoin="bevel" d="M21.25 15 18.5 17.75 15.75 15" />
      <path d="M18.5 17.75H7.5C5.3 17.75 3.5 15.95 3.5 13.75V12.5" />
    </Icon>
  );
}
export function Unlink2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 17H7.5C4.7 17 2.5 14.8 2.5 12C2.5 9.2 4.7 7 7.5 7H9" />
      <path d="M15 7H16.5C19.3 7 21.5 9.2 21.5 12C21.5 14.8 19.3 17 16.5 17H15" />
    </Icon>
  );
}
export function MicrochipIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 4.5H16C17.84 4.5 18 4.66 18 6.5V17.5C18 19.34 17.84 19.5 16 19.5H8C6.16 19.5 6 19.34 6 17.5V6.5C6 4.66 6.16 4.5 8 4.5Z" />
      <path d="M6 7.5H3.75M6 12H3.75M6 16.5H3.75M18 7.5H20.25M18 12H20.25M18 16.5H20.25" />
      <path d="M9.5 4.5V2.25M14.5 4.5V2.25M9.5 19.5V21.75M14.5 19.5V21.75" />
      <path d="M9.75 12H14.25" />
    </Icon>
  );
}
export function MonitorDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d={squircle(17.25, 7.75, 1.6)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function MonitorPauseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path strokeWidth={2.5} d="M10.25 7V13M13.75 7V13" />
    </Icon>
  );
}
export function MonitorStopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4H19.5C21.34 4 21.5 4.16 21.5 6V14C21.5 15.84 21.34 16 19.5 16H4.5C2.66 16 2.5 15.84 2.5 14V6C2.5 4.16 2.66 4 4.5 4Z" />
      <path d="M12 16V20.5M7.5 20.5H16.5" />
      <path d="M9.75 7.5H14.25C14.8 7.5 15 7.7 15 8.25V11.75C15 12.3 14.8 12.5 14.25 12.5H9.75C9.2 12.5 9 12.3 9 11.75V8.25C9 7.7 9.2 7.5 9.75 7.5Z" />
    </Icon>
  );
}
export function KeyboardMusicIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 6H20C21.84 6 22 6.16 22 8V16C22 17.84 21.84 18 20 18H4C2.16 18 2 17.84 2 16V8C2 6.16 2.16 6 4 6Z" />
      <path d="M8.5 6V12.5M12 6V12.5M15.5 6V12.5" />
      <path d="M8 15H16" />
    </Icon>
  );
}
export function KeyboardOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 6H20C21.84 6 22 6.16 22 8V16C22 17.84 21.84 18 20 18H4C2.16 18 2 17.84 2 16V8C2 6.16 2.16 6 4 6Z" />
      <path
        d={squircle(6, 10, 0.9) + squircle(18, 10, 0.9)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M8 14.5H16" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function MouseOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C15.6 2.75 18 5.15 18 8.75V15.25C18 18.85 15.6 21.25 12 21.25C8.4 21.25 6 18.85 6 15.25V8.75C6 5.15 8.4 2.75 12 2.75Z" />
      <path d="M12 6.25V9.75" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function MousePointerBanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 4.5 14.5 8.75 10.2 10.2 8.75 14.5Z" />
      <path d={squircle(17, 17, 4.75)} />
      <path d="M13.65 13.65 20.35 20.35" />
    </Icon>
  );
}
export function PointerOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4 4 10.4 19.6 12.5 12.5 19.6 10.4Z" />
      <path d="M12.5 12.5 19.75 19.75" />
      <path d="M2.75 2 22 21.25" />
    </Icon>
  );
}
export function LassoSelectIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 21.5C5.75 20.6 5 19.3 5 17.9" />
      <path
        strokeDasharray="4.1 3.3"
        d="M3.3 14A6.8 6.8 0 0 1 2.25 10.25C2.25 5.85 6.6 2.5 12 2.5C17.4 2.5 21.75 5.85 21.75 10.25C21.75 14.65 17.4 18 12 18C10.25 18 8.6 17.68 7.15 17.1"
      />
      <path d={squircle(5, 16, 2)} />
    </Icon>
  );
}
export function ImagePlayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path strokeLinejoin="bevel" d="M9.75 8.5 15 12 9.75 15.5Z" />
    </Icon>
  );
}
export function ImageUpscaleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 13H10C10.92 13 11 13.08 11 14V18.5C11 19.42 10.92 19.5 10 19.5H5.5C4.58 19.5 4.5 19.42 4.5 18.5V14C4.5 13.08 4.58 13 5.5 13Z" />
      <path d="M4.5 9.75V6.5C4.5 5.16 5.16 4.5 6.5 4.5H9.75" />
      <path d="M13.75 10.25 19.75 4.25" />
      <path d="M15.25 4.25H19.75V8.75" />
    </Icon>
  );
}
/** Wallpaper: full-bleed scene in Scan brackets, no frame. */
export function WallpaperIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d={squircle(8.5, 8.75, 1.5)} fill="currentColor" stroke="none" />
      <path strokeLinejoin="bevel" d="M4.75 16.5 9 12.25 12.5 15.75 15.5 12.75 19.25 16.5" />
    </Icon>
  );
}
export function TvMinimalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V16C21.5 17.84 21.34 18 19.5 18H4.5C2.66 18 2.5 17.84 2.5 16V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d="M8 21H16" />
    </Icon>
  );
}
export function TvMinimalPlayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H19.5C21.34 5 21.5 5.16 21.5 7V16C21.5 17.84 21.34 18 19.5 18H4.5C2.66 18 2.5 17.84 2.5 16V7C2.5 5.16 2.66 5 4.5 5Z" />
      <path d="M8 21H16" />
      <path strokeLinejoin="bevel" d="M10 8.5 14.75 11.5 10 14.5Z" />
    </Icon>
  );
}
export function RadioReceiverIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 9.5H19.5C21.34 9.5 21.5 9.66 21.5 11.5V16.5C21.5 18.34 21.34 18.5 19.5 18.5H4.5C2.66 18.5 2.5 18.34 2.5 16.5V11.5C2.5 9.66 2.66 9.5 4.5 9.5Z" />
      <path d="M5.75 9.5 13.25 3.75" />
      <path d="M5.75 18.5V21.25M18.25 18.5V21.25" />
      <path strokeWidth={2.5} d="M6.25 14H11.25" />
      <path d={squircle(17.25, 14, 1.6)} />
    </Icon>
  );
}
export function CassetteTapeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5.5H19.5C21.34 5.5 21.5 5.66 21.5 7.5V16.5C21.5 18.34 21.34 18.5 19.5 18.5H4.5C2.66 18.5 2.5 18.34 2.5 16.5V7.5C2.5 5.66 2.66 5.5 4.5 5.5Z" />
      <path d={squircle(8.5, 10.5, 1.9) + squircle(15.5, 10.5, 1.9)} />
      <path d="M10.4 10.5H13.6" />
      <path strokeLinejoin="bevel" d="M6 18.5 7.5 15.5H16.5L18 18.5" />
    </Icon>
  );
}
export function BoomBoxIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 9.5H19.5C21.34 9.5 21.5 9.66 21.5 11.5V18C21.5 19.84 21.34 20 19.5 20H4.5C2.66 20 2.5 19.84 2.5 18V11.5C2.5 9.66 2.66 9.5 4.5 9.5Z" />
      <path d="M6.5 9.5V7.25C6.5 6.15 7.4 5.25 8.5 5.25H15.5C16.6 5.25 17.5 6.15 17.5 7.25V9.5" />
      <path d={squircle(7.75, 14.75, 2.4) + squircle(16.25, 14.75, 2.4)} />
    </Icon>
  );
}
export function Music2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(9.25, 17.5, 3)} />
      <path d="M12.25 17.5V3.25" />
      <path d="M12.25 3.25H16.75" />
    </Icon>
  );
}
export function Disc2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d={squircle(12, 12, 4.25)} />
      <path d={squircle(12, 12, 1.3)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function WalletMinimalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H19.5C21.34 4.5 21.5 4.66 21.5 6.5V17.5C21.5 19.34 21.34 19.5 19.5 19.5H4.5C2.66 19.5 2.5 19.34 2.5 17.5V6.5C2.5 4.66 2.66 4.5 4.5 4.5Z" />
      <path d={squircle(17.25, 12, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function SackDollarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 8C6.35 9.85 4.5 13.05 4.5 16.25C4.5 19.75 7 21.25 12 21.25C17 21.25 19.5 19.75 19.5 16.25C19.5 13.05 17.65 9.85 14.5 8Z" />
      <path strokeLinejoin="bevel" d="M9.5 8 8.1 4.9C7.85 4.35 8.2 3.75 8.8 3.75H15.2C15.8 3.75 16.15 4.35 15.9 4.9L14.5 8" />
      <path d="M14.1 11.9H11.4C10.45 11.9 9.8 12.5 9.8 13.35C9.8 14.2 10.45 14.8 11.4 14.8H12.6C13.55 14.8 14.2 15.4 14.2 16.25C14.2 17.1 13.55 17.7 12.6 17.7H9.9" />
      <path d="M12 10.6V11.9M12 17.7V19" />
    </Icon>
  );
}
export function CreativeCommonsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M10.75 10.55A2.3 2.3 0 1 0 10.75 13.45M17.25 10.55A2.3 2.3 0 1 0 17.25 13.45" />
    </Icon>
  );
}

/* ---- world & things sweep ---- */

export function BeanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.35 3.6C6.1 3.6 3 7.2 3 11.3C3 16.6 7.45 20.5 12.55 20.5C17.35 20.5 21 17.1 21 12.8C21 9.9 19.1 8.4 16.35 8.4C13.6 8.4 13.55 3.6 10.35 3.6Z" />
      <path d="M7.4 8.1C6.65 8.85 6.2 9.8 6.1 10.85" />
    </Icon>
  );
}
/** Clover: four compass leaves around an open center with a diagonal
 *  stem - the stem and missing center ring keep it distinct from Flower. */
export function CloverIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        d={
          squircle(12, 6.5, 3.2) +
          squircle(17.5, 12, 3.2) +
          squircle(12, 17.5, 3.2) +
          squircle(6.5, 12, 3.2)
        }
      />
      <path d="M16.2 16.2 21.25 21.25" />
    </Icon>
  );
}
export function Flower2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 6.9, 3.1)} />
      <path d="M12 10V21.25" />
      <path strokeLinejoin="bevel" d="M12 16.75C12 14 9.7 12.6 7 12.6C7 15.35 9.3 16.75 12 16.75Z" />
    </Icon>
  );
}
export function TreePalmIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M13 9.4C13.5 5.9 16.5 3.7 20.1 4.2C18.2 7 15.6 8.9 13 9.4Z" />
      <path strokeLinejoin="bevel" d="M13 9.4C12.5 5.9 9.5 3.7 5.9 4.2C7.8 7 10.4 8.9 13 9.4Z" />
      <path strokeLinejoin="bevel" d="M13 9.4C10.2 7.7 6.6 8.1 4.1 10.4C7.4 11.2 10.7 10.8 13 9.4Z" />
      <path strokeLinejoin="bevel" d="M13 9.4C15.8 7.7 19.4 8.1 21.9 10.4C18.6 11.2 15.3 10.8 13 9.4Z" />
      <path d="M13 9.4C12.1 13.3 12.35 17.35 13.6 21.25" />
    </Icon>
  );
}
export function EarthIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d="M2.5 10.75 6.1 11.95C7.05 12.27 7.5 12.9 7.5 13.9C7.5 14.85 8.15 15.5 9.1 15.5C10.05 15.5 10.7 16.15 10.7 17.1V19.85" />
      <path d="M12.9 2.3 13.95 4.4C14.4 5.3 14.1 6.15 13.2 6.6L12.15 7.1C11.25 7.55 10.95 8.4 11.4 9.3L11.9 10.3C12.35 11.2 13.2 11.5 14.1 11.05L16.2 10C17.1 9.55 17.95 9.85 18.4 10.75L19.75 13.45" />
    </Icon>
  );
}
export function MapPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8 2.75 13 4.5 17.2 3.05C17.9 2.8 18.5 3.1 18.5 3.85V13.2C18.5 13.8 18.28 14.15 17.68 14.36L13 16 8 14.25 3.8 15.7C3.1 15.95 2.5 15.65 2.5 14.9V5.55C2.5 4.95 2.72 4.6 3.32 4.39Z"
      />
      <path d="M8 2.75V14.25M13 4.5V16" />
      <path d="M19 14.25V20.75M15.75 17.5H22.25" />
    </Icon>
  );
}
export function MapPinHouseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M10.5 20.75H5.25C3.95 20.75 3.5 20.3 3.5 19V9.9L9 5.15 14.5 9.9" />
      <path d="M17.75 21.4C16.7 20.5 13.75 17.6 13.75 15C13.75 12.75 15.55 11 17.75 11C19.95 11 21.75 12.75 21.75 15C21.75 17.6 18.8 20.5 17.75 21.4Z" />
      <path d={squircle(17.75, 14.9, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function MapPinMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.5C10.15 19.9 4.75 14.85 4.75 10.15C4.75 6.1 8 2.9 12 2.9C16 2.9 19.25 6.1 19.25 10.15C19.25 14.85 13.85 19.9 12 21.5Z" />
      <path d="M9.25 10.15H14.75" />
    </Icon>
  );
}
export function LocateOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 6.5)} />
      <path d="M12 2.25V5.5M12 18.5V21.75M2.25 12H5.5M18.5 12H21.75" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function RouteOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(5.75, 18.75, 2.6) + squircle(18.25, 5.25, 2.6)} />
      <path d="M8.35 18.75H17.25C19.18 18.75 20.75 17.18 20.75 15.25C20.75 13.32 19.18 11.75 17.25 11.75H6.75C4.82 11.75 3.25 10.18 3.25 8.25C3.25 6.32 4.82 4.75 6.75 4.75H15.65" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function FlagOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.25 2.75V21.25" />
      <path strokeLinejoin="bevel" d="M5.25 4.25H19.75L16.75 9 19.75 13.75H5.25" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function FlagTriangleLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17 2.75V21.25" />
      <path strokeLinejoin="bevel" d="M17 4.4 8.25 8.85 17 13.3Z" />
    </Icon>
  );
}
export function FlagTriangleRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 2.75V21.25" />
      <path strokeLinejoin="bevel" d="M7 4.4 15.75 8.85 7 13.3Z" />
    </Icon>
  );
}
export function SliceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M8.75 13.75 2.75 19.75H11.75V16.75Z" />
      <path d="M8.75 13.75 18 4.5C18.8 3.7 20.05 3.7 20.85 4.5C21.65 5.3 21.65 6.55 20.85 7.35L11.75 16.75" />
    </Icon>
  );
}
export function HeaterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 7.5H19.5C21.34 7.5 21.5 7.66 21.5 9.5V16.5C21.5 18.34 21.34 18.5 19.5 18.5H4.5C2.66 18.5 2.5 18.34 2.5 16.5V9.5C2.5 7.66 2.66 7.5 4.5 7.5Z" />
      <path d="M6.5 10.5V15.5M10.17 10.5V15.5M13.83 10.5V15.5M17.5 10.5V15.5" />
      <path d="M5.75 18.5V21M18.25 18.5V21" />
    </Icon>
  );
}
/** Lectern: slanted desk slab on a post - the tilt is what says
 *  "reading stand" rather than funnel or table. */
export function LecternIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.75 10.25 18.75 5.25 19.5 7.25 5.5 12.25Z" />
      <path d="M12 10.4V21.25" />
      <path d="M8.25 21.25H15.75" />
    </Icon>
  );
}
export function UniversityIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.75 10.5 12 3.75 20.25 10.5" />
      <path d={squircle(12, 8, 1.05)} fill="currentColor" stroke="none" />
      <path d="M6 10.5V17.75M12 10.5V17.75M18 10.5V17.75" />
      <path d="M4.5 17.75H19.5" />
      <path d="M3 21.25H21" />
    </Icon>
  );
}
export function TrainFrontIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5C7.2 3.5 4.25 4.9 4.25 8.4V14.75C4.25 16.59 4.41 16.75 6.25 16.75H17.75C19.59 16.75 19.75 16.59 19.75 14.75V8.4C19.75 4.9 16.8 3.5 12 3.5Z" />
      <path d="M4.25 10.75H19.75M12 3.5V10.75" />
      <path
        d={squircle(8, 13.75, 1.2) + squircle(16, 13.75, 1.2)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M8.75 16.75 6.75 20.75M15.25 16.75 17.25 20.75" />
    </Icon>
  );
}
export function TramFrontIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6 5H18C19.84 5 20 5.16 20 7V14.5C20 16.34 19.84 16.5 18 16.5H6C4.16 16.5 4 16.34 4 14.5V7C4 5.16 4.16 5 6 5Z" />
      <path strokeLinejoin="bevel" d="M8.5 5 12 2.25 15.5 5" />
      <path d="M4 10.5H20M12 5V10.5" />
      <path
        d={squircle(8, 13.5, 1.2) + squircle(16, 13.5, 1.2)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M8.75 16.5 7 20.75M15.25 16.5 17 20.75" />
    </Icon>
  );
}
export function DicesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 10.5H11.5C13.34 10.5 13.5 10.66 13.5 12.5V19.5C13.5 21.34 13.34 21.5 11.5 21.5H4.5C2.66 21.5 2.5 21.34 2.5 19.5V12.5C2.5 10.66 2.66 10.5 4.5 10.5Z" />
      <path
        d={
          squircle(5.9, 13.9, 0.95) +
          squircle(8, 16, 0.95) +
          squircle(10.1, 18.1, 0.95)
        }
        fill="currentColor"
        stroke="none"
      />
      <path d="M15.5 2.5H19.5C21.34 2.5 21.5 2.66 21.5 4.5V8.5C21.5 10.34 21.34 10.5 19.5 10.5H15.5C13.66 10.5 13.5 10.34 13.5 8.5V4.5C13.5 2.66 13.66 2.5 15.5 2.5Z" />
      <path d={squircle(17.5, 6.5, 0.95)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
/** Helping hand: the HandCoins palm raising an offer upward. */
export function HandHelpingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 15.5H13C14.1 15.5 15 14.6 15 13.5C15 12.4 14.1 11.5 13 11.5H10C9.4 11.5 8.9 11.7 8.6 12.1L3 17.5" />
      <path d="M7 21.5 8.6 20.1C8.9 19.7 9.4 19.5 10 19.5H14C15.1 19.5 16.1 19.1 16.8 18.3L21.4 13.9C22.2 13.13 22.24 11.86 21.49 11.04C20.74 10.22 19.47 10.17 18.65 10.93L14.45 14.83" />
      <path d="M2.25 16.5 7.75 22" />
      <path d="M14.5 8.75V2.75" />
      <path strokeLinejoin="bevel" d="M12 5.25 14.5 2.75 17 5.25" />
    </Icon>
  );
}
export function WeightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 5.4, 2.6)} />
      <path d="M10.2 7.5 6.35 18.85C5.95 20.05 6.6 20.95 7.85 20.95H16.15C17.4 20.95 18.05 20.05 17.65 18.85L13.8 7.5" />
    </Icon>
  );
}
export function WindArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 2.75V10.75" />
      <path strokeLinejoin="bevel" d="M4 8.25 6.5 10.75 9 8.25" />
      <path d="M17.5 11.5A2.5 2.5 0 1 1 19.5 15.5H2.75" />
      <path d="M12.8 21.1A2 2 0 1 0 14 17.5H5.5" />
    </Icon>
  );
}
export function VibrateOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M2.25 8 4.25 10 2.25 12 4.25 14 2.25 16" />
      <path strokeLinejoin="bevel" d="M21.75 8 19.75 10 21.75 12 19.75 14 21.75 16" />
      <path d="M9.5 5H14.5C15.42 5 15.5 5.08 15.5 6V18C15.5 18.92 15.42 19 14.5 19H9.5C8.58 19 8.5 18.92 8.5 18V6C8.5 5.08 8.58 5 9.5 5Z" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function Package2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.75 7.4 12 2.9 20.25 7.4V18.9C20.25 20.15 19.4 21 18.15 21H5.85C4.6 21 3.75 20.15 3.75 18.9Z" />
      <path d="M3.75 7.4H20.25" />
      <path d="M12 2.9V7.4" />
    </Icon>
  );
}
export function PaintbrushVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8 3.25H16C16.92 3.25 17 3.33 17 4.25V10C17 10.92 16.92 11 16 11H8C7.08 11 7 10.92 7 10V4.25C7 3.33 7.08 3.25 8 3.25Z" />
      <path d="M7 7.25H17" />
      <path strokeLinejoin="bevel" d="M10 11V13L12 15 14 13V11" />
      <path d="M12 15V21.25" />
    </Icon>
  );
}

/* ---- square, circle & UI parity sweep ---- */

/** Arrow-out family: the frame opens at the corner the arrow escapes. */
export function SquareArrowOutUpLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5C19.82 3.5 20.5 4.18 20.5 12C20.5 19.82 19.82 20.5 12 20.5C4.18 20.5 3.5 19.82 3.5 12" />
      <path d="M10.25 10.25 3.25 3.25" />
      <path d="M8.25 3.25H3.25V8.25" />
    </Icon>
  );
}
export function SquareArrowOutUpRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5C4.18 3.5 3.5 4.18 3.5 12C3.5 19.82 4.18 20.5 12 20.5C19.82 20.5 20.5 19.82 20.5 12" />
      <path d="M13.75 10.25 20.75 3.25" />
      <path d="M15.75 3.25H20.75V8.25" />
    </Icon>
  );
}
export function SquareArrowOutDownLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C19.82 20.5 20.5 19.82 20.5 12C20.5 4.18 19.82 3.5 12 3.5C4.18 3.5 3.5 4.18 3.5 12" />
      <path d="M10.25 13.75 3.25 20.75" />
      <path d="M3.25 15.75V20.75H8.25" />
    </Icon>
  );
}
export function SquareArrowOutDownRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 20.5C4.18 20.5 3.5 19.82 3.5 12C3.5 4.18 4.18 3.5 12 3.5C19.82 3.5 20.5 4.18 20.5 12" />
      <path d="M13.75 13.75 20.75 20.75" />
      <path d="M20.75 15.75V20.75H15.75" />
    </Icon>
  );
}
export function CircleArrowOutUpLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25A9.75 9.75 0 1 1 2.25 12" />
      <path d="M12 12 3.25 3.25" />
      <path d="M8.75 3.25H3.25V8.75" />
    </Icon>
  );
}
export function CircleArrowOutUpRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25A9.75 9.75 0 1 0 21.75 12" />
      <path d="M12 12 20.75 3.25" />
      <path d="M15.25 3.25H20.75V8.75" />
    </Icon>
  );
}
export function CircleArrowOutDownLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.25 12A9.75 9.75 0 1 1 12 21.75" />
      <path d="M12 12 3.25 20.75" />
      <path d="M3.25 15.25V20.75H8.75" />
    </Icon>
  );
}
export function CircleArrowOutDownRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.75 12A9.75 9.75 0 1 0 12 21.75" />
      <path d="M12 12 20.75 20.75" />
      <path d="M20.75 15.25V20.75H15.25" />
    </Icon>
  );
}
export function CircleFadingArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.25A9.75 9.75 0 0 1 12 21.75" />
      <path strokeDasharray="3.4 3.9" d="M12 21.75A9.75 9.75 0 0 1 12 2.25" />
      <path d="M12 7.75V16.25" />
      <path strokeLinejoin="bevel" d="M8.75 13 12 16.25 15.25 13" />
    </Icon>
  );
}
export function CircleUserRoundIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 10)} />
      <path d={squircle(12, 9.5, 3.1)} />
      <path d="M6.5 19.4C7.1 16.6 9.3 15.1 12 15.1C14.7 15.1 16.9 16.6 17.5 19.4" />
    </Icon>
  );
}
export function SquareUserRoundIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d={squircle(12, 9.75, 3)} />
      <path d="M6.75 20.3C7.3 17.5 9.4 16 12 16C14.6 16 16.7 17.5 17.25 20.3" />
    </Icon>
  );
}
export function SquareCheckBigIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.06 3.57C14.19 3.52 13.17 3.5 12 3.5C4.18 3.5 3.5 4.18 3.5 12C3.5 19.82 4.18 20.5 12 20.5C19.82 20.5 20.5 19.82 20.5 12C20.5 11.22 20.49 10.51 20.47 9.86" />
      <path strokeLinejoin="bevel" d="M8.5 11.5 12.25 15.25 21.25 6.25" />
    </Icon>
  );
}
export function SquareDivideIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8 12H16" />
      <path
        d={squircle(12, 8.75, 1.3) + squircle(12, 15.25, 1.3)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
export function SquareFunctionIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M14.9 7.15C13.15 6.75 12.15 7.65 12.15 9.5V14.5C12.15 16.35 11.15 17.25 9.4 16.85" />
      <path d="M9.25 11.5H15" />
    </Icon>
  );
}
export function SquareMIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M8 16.25V7.75L12 12.5 16 7.75V16.25" />
    </Icon>
  );
}
export function SquareMenuIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M7.5 8.5H16.5M7.5 12H16.5M7.5 15.5H16.5" />
    </Icon>
  );
}
export function SquarePilcrowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M12.9 7.5V16.5M15.6 7.5V16.5" />
      <path d="M17 7.5H11.65C10.15 7.5 9 8.55 9 9.9C9 11.25 10.15 12.3 11.65 12.3H12.9" />
    </Icon>
  );
}
export function SquareSplitHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 20.4C3.96 20.04 3.5 18.44 3.5 12C3.5 5.56 3.96 3.96 8.5 3.6" />
      <path d="M15.5 3.6C20.04 3.96 20.5 5.56 20.5 12C20.5 18.44 20.04 20.04 15.5 20.4" />
      <path d="M12 4.5V19.5" />
    </Icon>
  );
}
export function SquareSplitVerticalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.6 8.5C3.96 3.96 5.56 3.5 12 3.5C18.44 3.5 20.04 3.96 20.4 8.5" />
      <path d="M20.4 15.5C20.04 20.04 18.44 20.5 12 20.5C5.56 20.5 3.96 20.04 3.6 15.5" />
      <path d="M4.5 12H19.5" />
    </Icon>
  );
}
export function SquareSquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d={squircle(12, 12, 3.5, 0.92)} />
    </Icon>
  );
}
export function SquareChartGanttIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M7.5 8.25H13.5M9.75 12H16.5M12 15.75H16" />
    </Icon>
  );
}
export function SquareKanbanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8 7.5V13.5M12 7.5V10.75M16 7.5V15.25" />
    </Icon>
  );
}
export function SquareDashedKanbanIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M10.5 3.5H13.5M10.5 20.5H13.5M3.5 10.5V13.5M20.5 10.5V13.5" />
      <path d="M8 7.5V13.5M12 7.5V10.75M16 7.5V15.25" />
    </Icon>
  );
}
export function SquareDashedMousePointerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 8V5.5C3.5 4.16 4.16 3.5 5.5 3.5H8M16 3.5H18.5C19.84 3.5 20.5 4.16 20.5 5.5V8M8 20.5H5.5C4.16 20.5 3.5 19.84 3.5 18.5V16" />
      <path d="M10.5 3.5H13.5M3.5 10.5V13.5" />
      <path strokeLinejoin="bevel" d="M12 12 21 15.75 17.15 17.15 15.75 21Z" />
    </Icon>
  );
}
export function SquareLibraryIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path d="M8.25 7.5V16.5M11.75 7.5V16.5" />
      <path d="M14.25 8 16.5 16.25" />
    </Icon>
  );
}
/** Scissors shrunk into the tile, cutting toward the dashed edge. */
export function SquareBottomDashedScissorsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {dashedBottomTile}
      <path d={squircle(8.67, 8.67, 1.8) + squircle(8.67, 15.33, 1.8)} />
      <path d="M16.46 7.55 9.84 14.16M13.4 13.4 16.46 16.46M9.84 9.84 12 12" />
    </Icon>
  );
}
export function SquircleDashedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5, 0.86)} strokeDasharray="4.2 3.4" />
    </Icon>
  );
}
export function Grid3x3Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M9.17 3.5V20.5M14.83 3.5V20.5M3.5 9.17H20.5M3.5 14.83H20.5" />
    </Icon>
  );
}
export function LaptopMinimalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={LAPTOP_OUTLINE} />
      <path d="M2.5 19.5H21.5" />
    </Icon>
  );
}
export function LaptopMinimalCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={LAPTOP_OUTLINE} />
      <path d="M2.5 19.5H21.5" />
      <path strokeLinejoin="bevel" d="M9.25 10.75 11.25 12.75 14.75 9.25" />
    </Icon>
  );
}
export function TextSelectIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={SCAN_CORNERS} />
      <path d="M10.5 3.5H13.5M10.5 20.5H13.5M3.5 10.5V13.5M20.5 10.5V13.5" />
      <path d="M8 9H16M8 12H16M8 15H12" />
    </Icon>
  );
}
export function TouchpadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 14.5H20.5M12 14.5V20" />
    </Icon>
  );
}
export function TouchpadOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path d="M3.5 14.5H20.5M12 14.5V20" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function CaseLowerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(7, 13.6, 2.9)} />
      <path d="M9.9 10.7V16.5" />
      <path d={squircle(17, 13.6, 2.9)} />
      <path d="M19.9 10.7V16.5" />
    </Icon>
  );
}
export function CaseUpperIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 16.5 6.5 7.5 10 16.5" />
      <path d="M4.3 13.75H8.7" />
      <path strokeLinejoin="bevel" d="M13.5 16.5 17 7.5 20.5 16.5" />
      <path d="M14.8 13.75H19.2" />
    </Icon>
  );
}
export function CalendarCheck2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V7C3.5 5.16 3.66 5 5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V12" />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path strokeLinejoin="bevel" d="M15 18.25 17.25 20.5 21.75 16" />
    </Icon>
  );
}
export function CalendarX2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V7C3.5 5.16 3.66 5 5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V12" />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M15.75 15.75 21.25 21.25M21.25 15.75 15.75 21.25" />
    </Icon>
  );
}
export function BetweenHorizontalStartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 4.5H19.5C20.42 4.5 20.5 4.58 20.5 5.5V9.5C20.5 10.42 20.42 10.5 19.5 10.5H13C12.08 10.5 12 10.42 12 9.5V5.5C12 4.58 12.08 4.5 13 4.5Z" />
      <path d="M13 13.5H19.5C20.42 13.5 20.5 13.58 20.5 14.5V18.5C20.5 19.42 20.42 19.5 19.5 19.5H13C12.08 19.5 12 19.42 12 18.5V14.5C12 13.58 12.08 13.5 13 13.5Z" />
      <path d="M2.75 12H8.5" />
      <path strokeLinejoin="bevel" d="M6.25 9.75 8.5 12 6.25 14.25" />
    </Icon>
  );
}
export function BetweenHorizontalEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H11C11.92 4.5 12 4.58 12 5.5V9.5C12 10.42 11.92 10.5 11 10.5H4.5C3.58 10.5 3.5 10.42 3.5 9.5V5.5C3.5 4.58 3.58 4.5 4.5 4.5Z" />
      <path d="M4.5 13.5H11C11.92 13.5 12 13.58 12 14.5V18.5C12 19.42 11.92 19.5 11 19.5H4.5C3.58 19.5 3.5 19.42 3.5 18.5V14.5C3.5 13.58 3.58 13.5 4.5 13.5Z" />
      <path d="M21.25 12H15.5" />
      <path strokeLinejoin="bevel" d="M17.75 9.75 15.5 12 17.75 14.25" />
    </Icon>
  );
}
export function BetweenVerticalStartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 12H9.5C10.42 12 10.5 12.08 10.5 13V19.5C10.5 20.42 10.42 20.5 9.5 20.5H5.5C4.58 20.5 4.5 20.42 4.5 19.5V13C4.5 12.08 4.58 12 5.5 12Z" />
      <path d="M14.5 12H18.5C19.42 12 19.5 12.08 19.5 13V19.5C19.5 20.42 19.42 20.5 18.5 20.5H14.5C13.58 20.5 13.5 20.42 13.5 19.5V13C13.5 12.08 13.58 12 14.5 12Z" />
      <path d="M12 2.75V8.5" />
      <path strokeLinejoin="bevel" d="M9.75 6.25 12 8.5 14.25 6.25" />
    </Icon>
  );
}
export function BetweenVerticalEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H9.5C10.42 3.5 10.5 3.58 10.5 4.5V11C10.5 11.92 10.42 12 9.5 12H5.5C4.58 12 4.5 11.92 4.5 11V4.5C4.5 3.58 4.58 3.5 5.5 3.5Z" />
      <path d="M14.5 3.5H18.5C19.42 3.5 19.5 3.58 19.5 4.5V11C19.5 11.92 19.42 12 18.5 12H14.5C13.58 12 13.5 11.92 13.5 11V4.5C13.5 3.58 13.58 3.5 14.5 3.5Z" />
      <path d="M12 21.25V15.5" />
      <path strokeLinejoin="bevel" d="M9.75 17.75 12 15.5 14.25 17.75" />
    </Icon>
  );
}
export function BotMessageSquareIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M4.5 21V7C4.5 4.24 4.74 4 7.5 4H16.5C19.26 4 19.5 4.24 19.5 7V14.5C19.5 17.26 19.26 17.5 16.5 17.5H9Z"
      />
      <path d="M12 4V2" />
      <path d="M9.5 8.75V11.75M14.5 8.75V11.75" />
    </Icon>
  );
}
export function BotOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 8H16.5C19.26 8 19.5 8.24 19.5 11V17C19.5 19.76 19.26 20 16.5 20H7.5C4.74 20 4.5 19.76 4.5 17V11C4.5 8.24 4.74 8 7.5 8Z" />
      <path d="M12 8V4" />
      <path d="M9.5 12.5V15.5M14.5 12.5V15.5" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export const Layers3Icon = LayersIcon;
export const UserRoundIcon = UserIcon;
export const UserRoundCheckIcon = UserCheckIcon;
export const UserRoundCogIcon = UserCogIcon;
export const UserRoundMinusIcon = UserMinusIcon;
export const UserRoundPenIcon = UserPenIcon;
export const UserRoundPlusIcon = UserPlusIcon;
export const UserRoundSearchIcon = UserSearchIcon;
export const UserRoundXIcon = UserXIcon;
export const UsersRoundIcon = UsersIcon;
export const ScrollTextIcon = ScrollIcon;

/* ---- currency & commerce sweep ---- */

/** Currency receipts: the Receipt zigzag hem with a mini glyph. */
export function ReceiptCentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M14.1 8.9C13.5 8.3 12.7 7.95 11.85 7.95C10.1 7.95 8.7 9.5 8.7 11.4C8.7 13.3 10.1 14.85 11.85 14.85C12.7 14.85 13.5 14.5 14.1 13.9" />
      <path d="M12 6.5V16.3" />
    </Icon>
  );
}
export function ReceiptEuroIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M14.75 8.4C14.15 7.85 13.35 7.5 12.5 7.5C10.7 7.5 9.25 9.3 9.25 11.5C9.25 13.7 10.7 15.5 12.5 15.5C13.35 15.5 14.15 15.15 14.75 14.6" />
      <path d="M8 10.25H12.75M8 12.75H12" />
    </Icon>
  );
}
export function ReceiptIndianRupeeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M9.25 7.25H14.75M9.25 10.75H14.75" />
      <path d="M10.5 7.25C13.75 7.25 13.75 13.75 10.5 13.75H9.25" />
      <path d="M10.5 13.75 14.25 17" />
    </Icon>
  );
}
export function ReceiptJapaneseYenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path strokeLinejoin="bevel" d="M9.25 6.75 12 10.25 14.75 6.75M12 10.25V16.5" />
      <path d="M9.5 13.5H14.5" />
    </Icon>
  );
}
export function ReceiptPoundSterlingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M14.4 9.15C14.4 6.9 10.7 6.9 10.7 9.15V12.9C10.7 14.35 10.1 15.25 8.75 15.6H15.25" />
      <path d="M9 11.75H13" />
    </Icon>
  );
}
export function ReceiptRussianRubleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M10.25 16.5V6.5H13C14.45 6.5 15.4 7.5 15.4 8.63C15.4 9.75 14.45 10.75 13 10.75H10.25" />
      <path d="M8.5 13.75H13" />
    </Icon>
  );
}
export function ReceiptSwissFrancIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={RECEIPT_OUTLINE}
      />
      <path d="M10.5 16.5V6.75H15.25" />
      <path d="M10.5 10.75H14.25M8.75 14H12.75" />
    </Icon>
  );
}
/** Currency badges: the BadgeEuro seal carrying the other glyphs. */
export function BadgeCentIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M14.1 9.9C13.5 9.3 12.7 8.95 11.85 8.95C10.1 8.95 8.7 10.5 8.7 12.4C8.7 14.3 10.1 15.85 11.85 15.85C12.7 15.85 13.5 15.5 14.1 14.9" />
      <path d="M12 7.5V17.3" />
    </Icon>
  );
}
export function BadgeIndianRupeeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M9.25 7.75H14.75M9.25 11.25H14.75" />
      <path d="M10.5 7.75C13.75 7.75 13.75 14.25 10.5 14.25H9.25" />
      <path d="M10.5 14.25 14.25 17.5" />
    </Icon>
  );
}
export function BadgeJapaneseYenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path strokeLinejoin="bevel" d="M9.25 7.25 12 10.75 14.75 7.25M12 10.75V17" />
      <path d="M9.5 14H14.5" />
    </Icon>
  );
}
export function BadgePoundSterlingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M14.4 9.65C14.4 7.4 10.7 7.4 10.7 9.65V13.4C10.7 14.85 10.1 15.75 8.75 16.1H15.25" />
      <path d="M9 12.25H13" />
    </Icon>
  );
}
export function BadgeRussianRubleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M10.25 17V7H13C14.45 7 15.4 8 15.4 9.13C15.4 10.25 14.45 11.25 13 11.25H10.25" />
      <path d="M8.5 14.25H13" />
    </Icon>
  );
}
export function BadgeSwissFrancIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d={BADGE_OUTLINE}
      />
      <path d="M10.5 17V7.25H15.25" />
      <path d="M10.5 11.25H14.25M8.75 14.5H12.75" />
    </Icon>
  );
}
export function PhilippinePesoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M8.5 20.5V3.75H13.75C16.65 3.75 18.75 5.8 18.75 8.4C18.75 11 16.65 13.05 13.75 13.05H8.5" />
      <path d="M5.25 6.75H21M5.25 10H21" />
    </Icon>
  );
}
/** Banknote variants: the tile opens bottom-right for the badge. */
export function BanknoteArrowDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 18.5H5.5C3.66 18.5 3.5 18.34 3.5 16.5V7.5C3.5 5.66 3.66 5.5 5.5 5.5H18.5C20.34 5.5 20.5 5.66 20.5 7.5V12.5" />
      <path d={squircle(10.5, 12, 2.75)} />
      <path d={squircle(6.5, 12, 0.9)} fill="currentColor" stroke="none" />
      <path d="M18.75 14.75V21.25" />
      <path strokeLinejoin="bevel" d="M16.25 18.75 18.75 21.25 21.25 18.75" />
    </Icon>
  );
}
export function BanknoteArrowUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 18.5H5.5C3.66 18.5 3.5 18.34 3.5 16.5V7.5C3.5 5.66 3.66 5.5 5.5 5.5H18.5C20.34 5.5 20.5 5.66 20.5 7.5V12.5" />
      <path d={squircle(10.5, 12, 2.75)} />
      <path d={squircle(6.5, 12, 0.9)} fill="currentColor" stroke="none" />
      <path d="M18.75 21.25V14.75" />
      <path strokeLinejoin="bevel" d="M16.25 17.25 18.75 14.75 21.25 17.25" />
    </Icon>
  );
}
export function BanknoteXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13 18.5H5.5C3.66 18.5 3.5 18.34 3.5 16.5V7.5C3.5 5.66 3.66 5.5 5.5 5.5H18.5C20.34 5.5 20.5 5.66 20.5 7.5V12.5" />
      <path d={squircle(10.5, 12, 2.75)} />
      <path d={squircle(6.5, 12, 0.9)} fill="currentColor" stroke="none" />
      <path d="M16.25 15.5 21.25 20.5M21.25 15.5 16.25 20.5" />
    </Icon>
  );
}
export function TicketMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={TICKET_OUTLINE} />
      <path d="M9 12H15" />
    </Icon>
  );
}
export function TicketSlashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={TICKET_OUTLINE} />
      <path d="M13.9 8.25 10.1 15.75" />
    </Icon>
  );
}
export function TicketXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={TICKET_OUTLINE} />
      <path d="M9.75 9.75 14.25 14.25M14.25 9.75 9.75 14.25" />
    </Icon>
  );
}
export function BriefcaseBusinessIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 7V5C9 3.62 9.12 3.5 10.5 3.5H13.5C14.88 3.5 15 3.62 15 5V7" />
      <path d="M5.5 7H18.5C20.34 7 20.5 7.16 20.5 9V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V9C3.5 7.16 3.66 7 5.5 7Z" />
      <path d="M3.5 12.5H10M14 12.5H20.5" />
      <path d="M10 11H14V14.5H10Z" />
    </Icon>
  );
}
export function BriefcaseMedicalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 7V5C9 3.62 9.12 3.5 10.5 3.5H13.5C14.88 3.5 15 3.62 15 5V7" />
      <path d="M5.5 7H18.5C20.34 7 20.5 7.16 20.5 9V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V9C3.5 7.16 3.66 7 5.5 7Z" />
      <path d="M12 10.75V16.25M9.25 13.5H14.75" />
    </Icon>
  );
}
export function BriefcaseConveyorBeltIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 5.5V4.5C9.5 3.58 9.58 3.5 10.5 3.5H13.5C14.42 3.5 14.5 3.58 14.5 4.5V5.5" />
      <path d="M6.5 5.5H17.5C19.34 5.5 19.5 5.66 19.5 7.5V14C19.5 15.84 19.34 16 17.5 16H6.5C4.66 16 4.5 15.84 4.5 14V7.5C4.5 5.66 4.66 5.5 6.5 5.5Z" />
      <path
        d={
          squircle(5.5, 19.75, 1.1) +
          squircle(9.85, 19.75, 1.1) +
          squircle(14.15, 19.75, 1.1) +
          squircle(18.5, 19.75, 1.1)
        }
      />
    </Icon>
  );
}
export function IdCardLanyardIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 8H19.5C21.34 8 21.5 8.16 21.5 10V19C21.5 20.84 21.34 21 19.5 21H4.5C2.66 21 2.5 20.84 2.5 19V10C2.5 8.16 2.66 8 4.5 8Z" />
      <path d="M8.5 2.75 12 8 15.5 2.75" />
      <path d={squircle(8, 12.5, 1.9)} />
      <path d="M5.5 17.75C5.85 16.35 6.8 15.65 8 15.65C9.2 15.65 10.15 16.35 10.5 17.75" />
      <path d="M14 12H19M14 16H19" />
    </Icon>
  );
}
export function BookOpenTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 5.5C10 4 7.5 3.5 4.5 3.5C3.58 3.5 3.5 3.58 3.5 4.5V17.5C3.5 18.42 3.58 18.5 4.5 18.5C7.5 18.5 10 19 12 20.5C14 19 16.5 18.5 19.5 18.5C20.42 18.5 20.5 18.42 20.5 17.5V4.5C20.5 3.58 20.42 3.5 19.5 3.5C16.5 3.5 14 4 12 5.5Z" />
      <path d="M12 5.5V20.5" />
      <path d="M6.75 8.5H9.5M14.5 8.5H17.25M6.75 12H9.5M14.5 12H17.25" />
    </Icon>
  );
}
export function BugPlayIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 13.5, 7)} />
      <path strokeWidth={2.5} d="M7 3.5 9.75 7M17 3.5 14.25 7" />
      <path
        strokeWidth={2.5}
        d="M5.4 11.5 2 10M18.6 11.5 22 10M5.6 16.5 2.25 18.75M18.4 16.5 21.75 18.75"
      />
      <path strokeLinejoin="bevel" d="M10 11 14.5 13.75 10 16.5Z" />
    </Icon>
  );
}
/** Fire-alarm bell: dome, striker dot, junction box. */
export function BellElectricIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(11, 10.25, 7.25)} />
      <path d={squircle(11, 10.25, 1.5)} fill="currentColor" stroke="none" />
      <path d="M17.75 17.25H20C20.55 17.25 20.75 17.45 20.75 18V20.25C20.75 20.8 20.55 21 20 21H17.75C17.2 21 17 20.8 17 20.25V18C17 17.45 17.2 17.25 17.75 17.25Z" />
      <path d="M3.75 21H13.75" />
    </Icon>
  );
}
export function TestTubeDiagonalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15.54 2.45 21.55 8.46" />
      <path d="M16.77 3.69 6.17 14.3C4.8 15.66 4.45 17.53 5.46 18.54C6.47 19.55 8.34 19.2 9.7 17.83L20.31 7.23" />
      <path d="M10.23 10.23 13.77 13.77" />
    </Icon>
  );
}
export function BrushCleaningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V8" />
      <path d="M8.5 8H15.5C16.42 8 16.5 8.08 16.5 9V12.5H7.5V9C7.5 8.08 7.58 8 8.5 8Z" />
      <path strokeLinejoin="bevel" d="M7.5 12.5H16.5L17.5 16H6.5Z" />
      <path d="M9.25 16 8.75 19.25M12 16V19.25M14.75 16 15.25 19.25" />
    </Icon>
  );
}

/* ---- arrows, sort & align final sweep ---- */

export function ArrowBigUpDashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 3 19.5 11.5H15.5V15H8.5V11.5H4.5Z" />
      <path strokeWidth={2.5} d="M8.75 19H15.25" />
    </Icon>
  );
}
export function ArrowBigDownDashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 21 4.5 12.5H8.5V9H15.5V12.5H19.5Z" />
      <path strokeWidth={2.5} d="M8.75 5H15.25" />
    </Icon>
  );
}
export function ArrowBigLeftDashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3 12 11.5 4.5V8.5H15V15.5H11.5V19.5Z" />
      <path strokeWidth={2.5} d="M19 8.75V15.25" />
    </Icon>
  );
}
export function ArrowBigRightDashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M21 12 12.5 4.5V8.5H9V15.5H12.5V19.5Z" />
      <path strokeWidth={2.5} d="M5 8.75V15.25" />
    </Icon>
  );
}
export function ArrowDown10Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.25V19" />
      <path strokeLinejoin="bevel" d="M3.75 15.75 7 19 10.25 15.75" />
      <path d="M14.25 5.75 15.75 4.5V10.5M14 10.5H17.5" />
      <path d="M14.5 13.5H16.5C17.05 13.5 17.25 13.7 17.25 14.25V18.75C17.25 19.3 17.05 19.5 16.5 19.5H14.5C13.95 19.5 13.75 19.3 13.75 18.75V14.25C13.75 13.7 13.95 13.5 14.5 13.5Z" />
    </Icon>
  );
}
export function ArrowUp01Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 19V5.25" />
      <path strokeLinejoin="bevel" d="M3.75 8.5 7 5.25 10.25 8.5" />
      <path d="M14.5 4.5H16.5C17.05 4.5 17.25 4.7 17.25 5.25V9.75C17.25 10.3 17.05 10.5 16.5 10.5H14.5C13.95 10.5 13.75 10.3 13.75 9.75V5.25C13.75 4.7 13.95 4.5 14.5 4.5Z" />
      <path d="M14.25 14.75 15.75 13.5V19.5M14 19.5H17.5" />
    </Icon>
  );
}
export function ArrowUp10Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 19V5.25" />
      <path strokeLinejoin="bevel" d="M3.75 8.5 7 5.25 10.25 8.5" />
      <path d="M14.25 5.75 15.75 4.5V10.5M14 10.5H17.5" />
      <path d="M14.5 13.5H16.5C17.05 13.5 17.25 13.7 17.25 14.25V18.75C17.25 19.3 17.05 19.5 16.5 19.5H14.5C13.95 19.5 13.75 19.3 13.75 18.75V14.25C13.75 13.7 13.95 13.5 14.5 13.5Z" />
    </Icon>
  );
}
export function ArrowDownZAIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.25V19" />
      <path strokeLinejoin="bevel" d="M3.75 15.75 7 19 10.25 15.75" />
      <path d="M14 4.75H18.25L14 10.5H18.25" />
      <path strokeLinejoin="bevel" d="M13.75 19.25 16 13.5 18.25 19.25" />
      <path d="M14.6 17.25H17.4" />
    </Icon>
  );
}
export function ArrowUpAZIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 19V5.25" />
      <path strokeLinejoin="bevel" d="M3.75 8.5 7 5.25 10.25 8.5" />
      <path strokeLinejoin="bevel" d="M13.75 10.5 16 4.75 18.25 10.5" />
      <path d="M14.6 8.5H17.4" />
      <path d="M14 13.5H18.25L14 19.25H18.25" />
    </Icon>
  );
}
export function ArrowDownNarrowWideIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.25V19" />
      <path strokeLinejoin="bevel" d="M3.75 15.75 7 19 10.25 15.75" />
      <path d="M13.75 5.25H16.75M13.75 11.75H18.75M13.75 18.25H21.25" />
    </Icon>
  );
}
export function ArrowDownWideNarrowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 5.25V19" />
      <path strokeLinejoin="bevel" d="M3.75 15.75 7 19 10.25 15.75" />
      <path d="M13.75 5.25H21.25M13.75 11.75H18.75M13.75 18.25H16.75" />
    </Icon>
  );
}
export function ArrowUpNarrowWideIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 19V5.25" />
      <path strokeLinejoin="bevel" d="M3.75 8.5 7 5.25 10.25 8.5" />
      <path d="M13.75 5.25H16.75M13.75 11.75H18.75M13.75 18.25H21.25" />
    </Icon>
  );
}
export function ArrowUpWideNarrowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 19V5.25" />
      <path strokeLinejoin="bevel" d="M3.75 8.5 7 5.25 10.25 8.5" />
      <path d="M13.75 5.25H21.25M13.75 11.75H18.75M13.75 18.25H16.75" />
    </Icon>
  );
}
export function ArrowDownToDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V13.5" />
      <path strokeLinejoin="bevel" d="M8.75 10.25 12 13.5 15.25 10.25" />
      <path d={squircle(12, 19, 2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function ArrowUpFromDotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 13.5V2.75" />
      <path strokeLinejoin="bevel" d="M8.75 6 12 2.75 15.25 6" />
      <path d={squircle(12, 19, 2)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
export function ArrowsUpFromLineIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 14.5V4.75M17 14.5V4.75" />
      <path
        strokeLinejoin="bevel"
        d="M4.5 7.25 7 4.75 9.5 7.25M14.5 7.25 17 4.75 19.5 7.25"
      />
      <path d="M3.5 19.25H20.5" />
    </Icon>
  );
}
export function ArrowDownUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 4.75V19.25" />
      <path strokeLinejoin="bevel" d="M3.75 16 7 19.25 10.25 16" />
      <path d="M17 19.25V4.75" />
      <path strokeLinejoin="bevel" d="M13.75 8 17 4.75 20.25 8" />
    </Icon>
  );
}
export function AlignHorizontalDistributeStartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H9.5C10.42 5 10.5 5.08 10.5 6V18C10.5 18.92 10.42 19 9.5 19H4.5C3.58 19 3.5 18.92 3.5 18V6C3.5 5.08 3.58 5 4.5 5Z" />
      <path d="M14.5 7H19.5C20.42 7 20.5 7.08 20.5 8V16C20.5 16.92 20.42 17 19.5 17H14.5C13.58 17 13.5 16.92 13.5 16V8C13.5 7.08 13.58 7 14.5 7Z" />
      <path d="M3.5 2.25V5M3.5 19V21.75M13.5 2.25V7M13.5 17V21.75" />
    </Icon>
  );
}
export function AlignHorizontalDistributeEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5H9.5C10.42 5 10.5 5.08 10.5 6V18C10.5 18.92 10.42 19 9.5 19H4.5C3.58 19 3.5 18.92 3.5 18V6C3.5 5.08 3.58 5 4.5 5Z" />
      <path d="M14.5 7H19.5C20.42 7 20.5 7.08 20.5 8V16C20.5 16.92 20.42 17 19.5 17H14.5C13.58 17 13.5 16.92 13.5 16V8C13.5 7.08 13.58 7 14.5 7Z" />
      <path d="M10.5 2.25V5M10.5 19V21.75M20.5 2.25V7M20.5 17V21.75" />
    </Icon>
  );
}
export function AlignHorizontalSpaceAroundIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 7H14.5C15.42 7 15.5 7.08 15.5 8V16C15.5 16.92 15.42 17 14.5 17H9.5C8.58 17 8.5 16.92 8.5 16V8C8.5 7.08 8.58 7 9.5 7Z" />
      <path d="M4 2.25V21.75M20 2.25V21.75" />
    </Icon>
  );
}
export function AlignVerticalDistributeStartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 3.5H19C19.92 3.5 20 3.58 20 4.5V9.5C20 10.42 19.92 10.5 19 10.5H5C4.08 10.5 4 10.42 4 9.5V4.5C4 3.58 4.08 3.5 5 3.5Z" />
      <path d="M7 13.5H17C17.92 13.5 18 13.58 18 14.5V19.5C18 20.42 17.92 20.5 17 20.5H7C6.08 20.5 6 20.42 6 19.5V14.5C6 13.58 6.08 13.5 7 13.5Z" />
      <path d="M2.25 3.5H4M20 3.5H21.75M2.25 13.5H6M18 13.5H21.75" />
    </Icon>
  );
}
export function AlignVerticalDistributeEndIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 3.5H19C19.92 3.5 20 3.58 20 4.5V9.5C20 10.42 19.92 10.5 19 10.5H5C4.08 10.5 4 10.42 4 9.5V4.5C4 3.58 4.08 3.5 5 3.5Z" />
      <path d="M7 13.5H17C17.92 13.5 18 13.58 18 14.5V19.5C18 20.42 17.92 20.5 17 20.5H7C6.08 20.5 6 20.42 6 19.5V14.5C6 13.58 6.08 13.5 7 13.5Z" />
      <path d="M2.25 10.5H4M20 10.5H21.75M2.25 20.5H6M18 20.5H21.75" />
    </Icon>
  );
}
export function AlignVerticalSpaceAroundIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 9.5H17C17.92 9.5 18 9.58 18 10.5V13.5C18 14.42 17.92 14.5 17 14.5H7C6.08 14.5 6 14.42 6 13.5V10.5C6 9.58 6.08 9.5 7 9.5Z" />
      <path d="M2.25 4H21.75M2.25 20H21.75" />
    </Icon>
  );
}
export function ChevronsRightLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M19.5 17 14.5 12 19.5 7" />
      <path strokeLinejoin="bevel" d="M4.5 17 9.5 12 4.5 7" />
    </Icon>
  );
}
export function ChevronsLeftRightEllipsisIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M8.5 7 3.5 12 8.5 17" />
      <path strokeLinejoin="bevel" d="M15.5 7 20.5 12 15.5 17" />
      <path
        d={
          squircle(9.75, 12, 0.9) +
          squircle(12, 12, 0.9) +
          squircle(14.25, 12, 0.9)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

/* ---- world & organics parity sweep ---- */

/** Five fat bevel leaves off a stem - leaflets widened so the counters
 *  stay open at 24px instead of filling to a silhouette. */
export function CannabisIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.5C13.95 5.1 13.95 8.9 12 12.1C10.05 8.9 10.05 5.1 12 2.5Z" />
      <path strokeLinejoin="bevel" d="M3.9 5.6C7 5.9 9.9 7.75 11.5 11.4C7.65 11 4.9 8.6 3.9 5.6Z" />
      <path strokeLinejoin="bevel" d="M20.1 5.6C17 5.9 14.1 7.75 12.5 11.4C16.35 11 19.1 8.6 20.1 5.6Z" />
      <path strokeLinejoin="bevel" d="M2.4 12.3C5.3 11.05 8.75 11.5 11.3 12.85C8.5 14.6 4.9 14.4 2.4 12.3Z" />
      <path strokeLinejoin="bevel" d="M21.6 12.3C18.7 11.05 15.25 11.5 12.7 12.85C15.5 14.6 19.1 14.4 21.6 12.3Z" />
      <path d="M12 13V21.25" />
    </Icon>
  );
}
export function CarTaxiFrontIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.75 5V3H14.25V5" />
      <path d="M21 8 19 10 17.5 6.3C17.2 5.52 16.45 5 15.65 5H8.4C7.6 5 6.85 5.52 6.55 6.3L5 10 3 8" />
      <path d="M4.5 10H19.5C21.34 10 21.5 10.16 21.5 12V16C21.5 17.84 21.34 18 19.5 18H4.5C2.66 18 2.5 17.84 2.5 16V12C2.5 10.16 2.66 10 4.5 10Z" />
      <path
        d={squircle(7, 14, 1) + squircle(17, 14, 1)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M5 18V20M19 18V20" />
    </Icon>
  );
}
export function CigaretteOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CIGARETTE_OUTLINE} />
      <path d="M16 15.5V18.5" />
      <path d="M17.5 12.25C18.75 12.25 19.75 11.25 19.75 10C19.75 8.75 18.75 7.75 17.5 7.75" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function CandyOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 7.5 7.5 9.5A4.95 4.95 0 1 0 14.5 16.5L16.5 14.5A4.95 4.95 0 1 0 9.5 7.5Z" />
      <path
        strokeLinejoin="bevel"
        d="M16 7 17 2 18.37 2.68A3 3 0 0 0 19.7 3H21V4.3C21 4.76 21.1 5.22 21.32 5.63L22 7 17 8"
      />
      <path
        strokeLinejoin="bevel"
        d="M8 17 7 22 5.63 21.32A3 3 0 0 0 4.3 21H3V19.7C3 19.24 2.9 18.78 2.68 18.37L2 17 7 16"
      />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function DoorClosedLockedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 20.5V5C4.5 3.16 4.66 3 6.5 3H17.5C19.34 3 19.5 3.16 19.5 5V20.5" />
      <path d="M2.75 20.5H21.25" />
      <path d="M14 10.5H17.5C18.05 10.5 18.25 10.7 18.25 11.25V13.75C18.25 14.3 18.05 14.5 17.5 14.5H14C13.45 14.5 13.25 14.3 13.25 13.75V11.25C13.25 10.7 13.45 10.5 14 10.5Z" />
      <path d="M14.25 10.5V9.5C14.25 8.6 14.9 7.95 15.75 7.95C16.6 7.95 17.25 8.6 17.25 9.5V10.5" />
    </Icon>
  );
}
export function HotelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 21.25V5.5C5.5 3.66 5.66 3.5 7.5 3.5H16.5C18.34 3.5 18.5 3.66 18.5 5.5V21.25" />
      <path d="M3 21.25H21" />
      <path
        d={
          squircle(9.5, 7.5, 1) +
          squircle(14.5, 7.5, 1) +
          squircle(9.5, 11.5, 1) +
          squircle(14.5, 11.5, 1)
        }
        fill="currentColor"
        stroke="none"
      />
      <path d="M10 21.25V17.5C10 16.4 10.9 15.5 12 15.5C13.1 15.5 14 16.4 14 17.5V21.25" />
    </Icon>
  );
}
export function HousePlugIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 18V9.6L11.05 3.98C11.6 3.51 12.4 3.51 12.95 3.98L19.5 9.6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18Z" />
      <path d="M9.75 13.5H14.25V15C14.25 16.25 13.25 17.25 12 17.25C10.75 17.25 9.75 16.25 9.75 15Z" />
      <path d="M10.75 11.5V13.5M13.25 11.5V13.5" />
      <path d="M12 17.25V19.5" />
    </Icon>
  );
}
export function IceCreamBowlIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(7.75, 8, 3) + squircle(16.25, 8, 3) + squircle(12, 5.75, 3)} />
      <path
        strokeLinejoin="bevel"
        d="M3.75 11.5H20.25L18.95 16.35C18.55 17.9 17.45 18.75 15.85 18.75H8.15C6.55 18.75 5.45 17.9 5.05 16.35Z"
      />
      <path d="M12 18.75V21.25" />
    </Icon>
  );
}
export function TurkishLiraIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9 3.75V16C9 18.5 11 20.25 13.5 20.25C16.5 20.25 18.75 18 18.75 15" />
      <path d="M5.75 10.75 12.25 7.25M5.75 14.75 12.25 11.25" />
    </Icon>
  );
}
export function LandPlotIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 13.75V3.25" />
      <path strokeLinejoin="bevel" d="M12 3.5 17.5 6.25 12 9Z" />
      <path strokeLinejoin="bevel" d="M12 13.75 19.25 17.25 12 20.75 4.75 17.25Z" />
    </Icon>
  );
}
export function LeafyGreenIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.5 20.25C6.5 20.25 4 16.75 4 12.75C4 7.5 8.75 3.75 15 3.75C17 3.75 19 4.25 20.5 5.25C19.9 6.5 19.1 7.55 18.15 8.45C19 9.1 19.7 9.9 20.2 10.85C19.35 11.75 18.35 12.5 17.25 13.05C17.6 14 17.8 15 17.85 16.1C15.95 18.7 13.85 20.25 11.5 20.25Z" />
      <path d="M2.75 21.25C6.5 15.5 10.5 11.5 16.5 8.5" />
    </Icon>
  );
}
export function RatIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 14.5C5.5 10.75 9 9 12.5 9H15C17.5 9 19.5 11 19.5 13.5C19.5 16 17.5 18 15 18H7.5C5 18 3.4 16.1 4 14.5Z" />
      <path d={squircle(15.75, 7.5, 2.1)} />
      <path d="M19.5 14.5C21.25 14.5 22 15.75 21.5 17.5" />
      <path d="M4.4 13.9 2.4 12.9M4.4 15.1 2.5 16.2" />
      <path d={squircle(8, 12.75, 0.9)} fill="currentColor" stroke="none" />
    </Icon>
  );
}
/** Shrimp: rounded head and a straight back curling round into the tail
 *  fan, segment lines across the curl, eye and two feelers. A ring-shaped
 *  body reads as a rotate arrow. */
export function ShrimpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.5 19.5A7 7 0 0 0 14.5 5.5H6C4 5.5 3.25 6.25 3.25 7.25C3.25 8.25 4 9 6 9H14.5A3.5 3.5 0 0 1 14.5 16" />
      <path strokeLinejoin="bevel" d="M14.5 16 11 15.25 12 17.75 11 20.25 14.5 19.5" />
      <path d="M11 5.5V9M16.97 10.03 19.45 7.55M16.97 14.97 19.45 17.45" />
      <path d={squircle(6, 7.25, 0.85)} fill="currentColor" stroke="none" />
      <path d="M5.5 5.5C6.5 3.25 9.5 2.25 13 2.75M4 5.75C3.25 4 3.75 2.75 5.25 2" />
    </Icon>
  );
}
export function WheatOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 21.25V3" />
      <path d="M12 8.5C10.25 8.5 9 7.25 8.75 5.25M12 8.5C13.75 8.5 15 7.25 15.25 5.25" />
      <path d="M12 13.75C9.5 13.75 7.75 12.25 7.25 9.75M12 13.75C14.5 13.75 16.25 12.25 16.75 9.75" />
      <path d="M12 19C9.5 19 7.75 17.5 7.25 15M12 19C14.5 19 16.25 17.5 16.75 15" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/* ---- devices, files & things final sweep ---- */

/** Two minified Ampersand glyphs side by side. */
export function AmpersandsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M10.5 12.5C10.5 15.3 8.45 17.4 6.1 17.4A2.6 2.6 0 0 1 3.5 14.8C3.5 11.4 7.9 12.5 7.9 9.9A1.65 1.65 0 1 0 4.6 9.9C4.6 11.6 6 14.5 11.25 17.4" />
      <path d="M20.25 12.5C20.25 15.3 18.2 17.4 15.85 17.4A2.6 2.6 0 0 1 13.25 14.8C13.25 11.4 17.65 12.5 17.65 9.9A1.65 1.65 0 1 0 14.35 9.9C14.35 11.6 15.75 14.5 21 17.4" />
    </Icon>
  );
}
export function AppWindowMacIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4H18.5C20.34 4 20.5 4.16 20.5 6V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6C3.5 4.16 3.66 4 5.5 4Z" />
      <path
        d={squircle(6.5, 7.25, 0.9) + squircle(9.75, 7.25, 0.9) + squircle(13, 7.25, 0.9)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
/** Axis 3d: three arrowed axes 120 degrees apart from a shared origin,
 *  like a 3D move gizmo. */
export function Axis3dIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 13V3.5M12 13 3.75 17.75M12 13 20.25 17.75" />
      <path
        strokeLinejoin="bevel"
        d="M9.75 5.75 12 3.5 14.25 5.75M4.4 14.65 3.75 17.75 6.9 18.4M17.1 18.4 20.25 17.75 19.6 14.65"
      />
    </Icon>
  );
}
/** Hex nut. */
export function BoltIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M12 2.75 19.75 7.25V16.75L12 21.25 4.25 16.75V7.25Z" />
      <path d={squircle(12, 12, 3.4)} />
    </Icon>
  );
}
export function ContactIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V18C20.5 19.84 20.34 20 18.5 20H5.5C3.66 20 3.5 19.84 3.5 18V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d="M8 2.25V4.5M16 2.25V4.5" />
      <path d={squircle(12, 10.5, 2.4)} />
      <path d="M7.75 16.75C8.3 14.75 9.9 13.75 12 13.75C14.1 13.75 15.7 14.75 16.25 16.75" />
    </Icon>
  );
}
/** File shifted right; code marks escape the page. */
export function FileCode2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M15 3H11C8.24 3 8 3.24 8 6V18C8 20.76 8.24 21 11 21H17.5C20.26 21 20.5 20.76 20.5 18V8.5ZM15 3V7C15 8.1 15.4 8.5 16.5 8.5H20.5" />
      <path strokeLinejoin="bevel" d="M5.25 11.75 2.5 14.5 5.25 17.25" />
      <path strokeLinejoin="bevel" d="M11.5 11.75 14.25 14.5 11.5 17.25" />
    </Icon>
  );
}
export function FileJson2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M15 3H11C8.24 3 8 3.24 8 6V18C8 20.76 8.24 21 11 21H17.5C20.26 21 20.5 20.76 20.5 18V8.5ZM15 3V7C15 8.1 15.4 8.5 16.5 8.5H20.5" />
      <path d="M5.5 11.75C4.5 11.75 4.25 12.35 4.25 13.25C4.25 14.5 3.25 14.4 3.25 15C3.25 15.6 4.25 15.5 4.25 16.75C4.25 17.65 4.5 18.25 5.5 18.25" />
      <path d="M15.5 11.75C16.5 11.75 16.75 12.35 16.75 13.25C16.75 14.5 17.75 14.4 17.75 15C17.75 15.6 16.75 15.5 16.75 16.75C16.75 17.65 16.5 18.25 15.5 18.25" />
    </Icon>
  );
}
export function FileMusicIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d={squircle(9.75, 16.5, 1.6) + squircle(14.5, 15.5, 1.6)} />
      <path d="M11.35 16.5V12.75L16.1 11.75V15.5" />
    </Icon>
  );
}
export function FileTypeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {fileTile}
      <path d="M9.5 12.75V11.75H14.5V12.75" />
      <path d="M12 11.75V18.25" />
      <path d="M10.75 18.25H13.25" />
    </Icon>
  );
}
export function FlipHorizontal2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.5 6.75V17.25L8.75 12Z" />
      <path strokeLinejoin="bevel" d="M20.5 6.75V17.25L15.25 12Z" />
      <path d="M12 2.5V4.5M12 8V10M12 14V16M12 19.5V21.5" />
    </Icon>
  );
}
export function FlipVertical2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.75 3.5H17.25L12 8.75Z" />
      <path strokeLinejoin="bevel" d="M6.75 20.5H17.25L12 15.25Z" />
      <path d="M2.5 12H4.5M8 12H10M14 12H16M19.5 12H21.5" />
    </Icon>
  );
}
export function FoldersIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.3 7.9H19.9C21 7.9 21.1 8 21.1 9.1V17.7C21.1 18.8 21 18.9 19.9 18.9H7.1C6 18.9 5.9 18.8 5.9 17.7V6.9C5.9 5.8 6 5.7 7.1 5.7H9.24C9.74 5.7 10.21 5.94 10.51 6.34L10.89 6.85C11.19 7.25 11.66 7.5 12.16 7.5Z" />
      <path d="M2.75 15.75V4.5C2.75 3.4 2.85 3.3 3.95 3.3H6.55C7.05 3.3 7.52 3.54 7.82 3.94L8.2 4.45C8.5 4.85 8.97 5.1 9.47 5.1H16.75C17.85 5.1 17.95 5.2 17.95 6.3" />
    </Icon>
  );
}
export function Gamepad2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 7.5H17.5C20.5 7.5 22 9.5 21.75 12.5L21.35 15.9C21.2 17.3 20.1 18.25 18.8 18.25C18 18.25 17.3 17.9 16.8 17.3L15.35 15.5H8.65L7.2 17.3C6.7 17.9 6 18.25 5.2 18.25C3.9 18.25 2.8 17.3 2.65 15.9L2.25 12.5C2 9.5 3.5 7.5 6.5 7.5Z" />
      <path d="M6.75 11.75H10.25M8.5 10V13.5" />
      <path
        d={squircle(15.4, 12.9, 1.05) + squircle(17.6, 10.7, 1.05)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
export function ImportIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75V12.5" />
      <path strokeLinejoin="bevel" d="M8.75 9.25 12 12.5 15.25 9.25" />
      <path d="M3.5 15.5V18.5C3.5 20.34 3.66 20.5 5.5 20.5H18.5C20.34 20.5 20.5 20.34 20.5 18.5V15.5" />
    </Icon>
  );
}
export function PocketIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H19.5C21.34 4.5 21.5 4.66 21.5 6.5V11C21.5 16.25 17.25 20.5 12 20.5C6.75 20.5 2.5 16.25 2.5 11V6.5C2.5 4.66 2.66 4.5 4.5 4.5Z" />
      <path strokeLinejoin="bevel" d="M8 10 12 14 16 10" />
    </Icon>
  );
}
export function RefreshCcwIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.75 12A8.75 8.75 0 0 0 12 3.25C9.4 3.25 7.05 4.25 5.2 6.05L3.25 8" />
      <path d="M3.25 3.25V8H8" />
      <path d="M3.25 12A8.75 8.75 0 0 0 12 20.75C14.6 20.75 16.95 19.75 18.8 17.95L20.75 16" />
      <path d="M20.75 20.75V16H16" />
    </Icon>
  );
}
export function SendHorizontalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M3.25 3.5 20.75 12 3.25 20.5 6.25 12Z" />
      <path d="M6.25 12H20.75" />
    </Icon>
  );
}
export function Settings2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3.5 7H12.5" />
      <path d={squircle(17.5, 7, 2.5)} />
      <path d="M11.5 17H20.5" />
      <path d={squircle(6.5, 17, 2.5)} />
    </Icon>
  );
}
/** Bare prompt, no tile: the TerminalTile glyph unboxed. */
export function TerminalIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4 5.75 10 11.5 4 17.25" />
      <path d="M12 18.25H20" />
    </Icon>
  );
}
export function TextQuoteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M9.5 6.5H20.5M9.5 12H20.5M9.5 17.5H16" />
      <path strokeWidth={2.5} d="M4.25 6.5V17.5" />
    </Icon>
  );
}
/** Theater: a stage with its curtains drawn back to the wings - masks
 *  belong to DramaIcon. */
export function TheaterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.5 3.5H21.5M2.5 20.5H21.5M3.5 3.5V20.5M20.5 3.5V20.5" />
      <path d="M11 3.5C11 8.25 8.5 11.75 3.5 12.5C5.5 14 6.25 16.75 6.25 20.5" />
      <path d="M13 3.5C13 8.25 15.5 11.75 20.5 12.5C18.5 14 17.75 16.75 17.75 20.5" />
    </Icon>
  );
}
export function TrainFrontTunnelIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M2.75 21.25V11.5C2.75 6.4 6.9 2.75 12 2.75C17.1 2.75 21.25 6.4 21.25 11.5V21.25" />
      <path d="M8 10.75H16C17.1 10.75 17.5 11.15 17.5 12.25V15.75C17.5 16.85 17.1 17.25 16 17.25H8C6.9 17.25 6.5 16.85 6.5 15.75V12.25C6.5 11.15 6.9 10.75 8 10.75Z" />
      <path d="M6.5 13.75H17.5M12 10.75V13.75" />
      <path d="M9 17.25 7.5 20.5M15 17.25 16.5 20.5" />
    </Icon>
  );
}
export function BluetoothConnectedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.5 7 17.5 16.5 12 21V3L17.5 7.5 6.5 17" />
      <path d="M3.5 12H5.5M18.5 12H20.5" />
    </Icon>
  );
}
export function BluetoothSearchingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.5 7 15.5 16.5 10 21V3L15.5 7.5 4.5 17" />
      <path d="M18.25 10C19.35 11.2 19.35 12.8 18.25 14" />
      <path d="M20.25 8C22.15 10.3 22.15 13.7 20.25 16" />
    </Icon>
  );
}
export function BusFrontIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 8H2.75M21.25 8H20" />
      <path d="M6 4.5H18C19.84 4.5 20 4.66 20 6.5V16C20 17.84 19.84 18 18 18H6C4.16 18 4 17.84 4 16V6.5C4 4.66 4.16 4.5 6 4.5Z" />
      <path d="M4 11.5H20" />
      <path
        d={squircle(8, 14.75, 1.2) + squircle(16, 14.75, 1.2)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M7.5 18V20.75M16.5 18V20.75" />
    </Icon>
  );
}
export function BeefIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12.25 3.5C7.1 3.5 3.25 6.4 3.25 10.4C3.25 13.2 5 14.4 6.6 15.7C7.75 16.6 8.5 17.8 8.9 19.25C9.2 20.4 10.05 20.95 11.1 20.6C16.9 18.6 20.75 14.2 20.75 9.75C20.75 6.1 17.2 3.5 12.25 3.5Z" />
      <path d={squircle(12.75, 10.25, 3.25)} />
    </Icon>
  );
}
export function EggFriedIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.6 2.75C15 2.75 15.8 5.4 17.9 6.35C20.1 7.35 21.25 9 21.25 11C21.25 12.8 20.15 13.8 20.15 15.75C20.15 18.8 17.85 21.1 14.8 21.1C12.35 21.1 11.9 19.65 9.8 19.65C7.15 19.65 4.9 18.15 4.9 15.45C4.9 13.55 6.05 12.8 6.05 10.65C6.05 8.15 7.15 6.4 9.1 5.4C10.05 4.9 10.1 2.75 11.6 2.75Z" />
      <path d={squircle(11.75, 12, 3.4)} />
    </Icon>
  );
}
export function EggOffIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75C15.75 2.75 18.5 8.25 18.5 13.25C18.5 17.75 15.75 21.25 12 21.25C8.25 21.25 5.5 17.75 5.5 13.25C5.5 8.25 8.25 2.75 12 2.75Z" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}
export function FlameKindlingIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.9C12.7 4.6 13.9 6 15.1 7C16.4 8.1 17 9.35 17 10.8C17 13.55 14.75 15.65 12 15.65C9.25 15.65 7 13.55 7 10.8C7 9.95 7.3 9.2 7.7 8.55C8.05 9.5 8.8 10.1 9.75 10.1C10.7 10.1 11.5 9.3 11.5 8.35C11.5 7.75 11.25 7.4 11 6.9C10.5 5.85 10.75 4.65 12 2.9Z" />
      <path d="M4.75 21 19.25 16.4M4.75 16.4 19.25 21" />
    </Icon>
  );
}
export function HopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.25C15.5 3.25 18 5.75 18 9.25C18 15 15 19.5 12 21.25C9 19.5 6 15 6 9.25C6 5.75 8.5 3.25 12 3.25Z" />
      <path d="M8 8.75C9.4 9.7 10.75 9.85 12 9.2C13.25 9.85 14.6 9.7 16 8.75" />
      <path d="M8 13C9.4 13.95 10.75 14.1 12 13.45C13.25 14.1 14.6 13.95 16 13" />
    </Icon>
  );
}
export function CigaretteIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={CIGARETTE_OUTLINE} />
      <path d="M16 15.5V18.5" />
      <path d="M17 12.25C18.25 12.25 19.25 11.25 19.25 10C19.25 8.75 18.25 7.75 17 7.75" />
      <path d="M20.5 12.25C21.15 11.65 21.5 10.85 21.5 10C21.5 9.15 21.15 8.35 20.5 7.75" />
    </Icon>
  );
}
export function SquareCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.5, 0.92)} />
      <path strokeLinejoin="bevel" d="M8.75 12 11.25 14.5 15.25 9.75" />
    </Icon>
  );
}
export function CopyMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7.5H12C14.3 7.5 14.5 7.7 14.5 10V19C14.5 21.3 14.3 21.5 12 21.5H7C4.7 21.5 4.5 21.3 4.5 19V10C4.5 7.7 4.7 7.5 7 7.5Z" />
      <path d="M7.5 4H17C19.3 4 19.5 4.2 19.5 6.5V16" />
      <path d="M7.25 14.5H11.75" />
    </Icon>
  );
}
export function CopySlashIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 7.5H12C14.3 7.5 14.5 7.7 14.5 10V19C14.5 21.3 14.3 21.5 12 21.5H7C4.7 21.5 4.5 21.3 4.5 19V10C4.5 7.7 4.7 7.5 7 7.5Z" />
      <path d="M7.5 4H17C19.3 4 19.5 4.2 19.5 6.5V16" />
      <path d="M11.4 11 7.6 18" />
    </Icon>
  );
}
export function BookUp2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 19.25V4.75C4.5 3.5 5.5 2.5 6.75 2.5H19.5V21.5H6.75C5.5 21.5 4.5 20.5 4.5 19.25C4.5 18 5.5 17 6.75 17H19.5" />
      <path d="M12 12.75V4.75" />
      <path strokeLinejoin="bevel" d="M9.5 7.25 12 4.75 14.5 7.25" />
      <path strokeLinejoin="bevel" d="M9.5 11 12 8.5 14.5 11" />
    </Icon>
  );
}
export function GlobeLockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(8.75, 15.25, 6.25)} />
      <path d="M2.5 15.25H15" />
      <path d="M8.75 9C10.97 10.76 12.32 12.84 12.32 15.25C12.32 17.66 10.97 19.74 8.75 21.5C6.53 19.74 5.18 17.66 5.18 15.25C5.18 12.84 6.53 10.76 8.75 9" />
      <path d="M17 6H21C21.55 6 21.75 6.2 21.75 6.75V9.75C21.75 10.3 21.55 10.5 21 10.5H17C16.45 10.5 16.25 10.3 16.25 9.75V6.75C16.25 6.2 16.45 6 17 6Z" />
      <path d="M17.5 6V5C17.5 3.9 18.15 3.25 19 3.25C19.85 3.25 20.5 3.9 20.5 5V6" />
    </Icon>
  );
}
export function SubtitlesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 4.5H19.5C21.34 4.5 21.5 4.66 21.5 6.5V17.5C21.5 19.34 21.34 19.5 19.5 19.5H4.5C2.66 19.5 2.5 19.34 2.5 17.5V6.5C2.5 4.66 2.66 4.5 4.5 4.5Z" />
      <path d="M6.5 11.5H8.5M12.5 11.5H17.5M6.5 15.5H12.5M16.5 15.5H17.5" />
    </Icon>
  );
}
export function Scale3dIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 17.5H6C6.55 17.5 6.75 17.7 6.75 18.25V20.25C6.75 20.8 6.55 21 6 21H4C3.45 21 3.25 20.8 3.25 20.25V18.25C3.25 17.7 3.45 17.5 4 17.5Z" />
      <path d="M18 3H20C20.55 3 20.75 3.2 20.75 3.75V5.75C20.75 6.3 20.55 6.5 20 6.5H18C17.45 6.5 17.25 6.3 17.25 5.75V3.75C17.25 3.2 17.45 3 18 3Z" />
      <path d="M6.6 17.4 17.4 6.6" />
      <path d="M5 17.5V6.5M6.75 19.25H17.5" />
    </Icon>
  );
}
export function SpellCheck2Icon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M6.5 16 12 3.5 17.5 16" />
      <path d="M8.75 11.75H15.25" />
      <path d="M3 20C4.5 18.75 6 18.75 7.5 20C9 21.25 10.5 21.25 12 20C13.5 18.75 15 18.75 16.5 20C18 21.25 19.5 21.25 21 20" />
    </Icon>
  );
}
export function RadiusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 8.75)} />
      <path d="M12 12H20.75" />
      <path d={squircle(12, 12, 1.4)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

/* ---- lucide legacy-name aliases ---- */

export const ActivitySquareIcon = SquareActivityIcon;
export const AreaChartIcon = ChartAreaIcon;
export const BadgeHelpIcon = BadgeQuestionMarkIcon;
export const BoxSelectIcon = SquareDashedIcon;
export const FileEditIcon = FilePenIcon;
export const FolderEditIcon = FolderPenIcon;
export const FlaskConicalIcon = FlaskIcon;
export const GitBranchIcon = BranchIcon;
export const GitCommitHorizontalIcon = CommitIcon;
export const GitForkIcon = ForkIcon;
export const GitMergeIcon = MergeIcon;
export const GitPullRequestIcon = PullRequestIcon;
export const HelpCircleIcon = CircleHelpIcon;
export const IceCreamConeIcon = IceCreamIcon;
export const MoreHorizontalIcon = EllipsisIcon;
export const MoreVerticalIcon = EllipsisVerticalIcon;
export const Navigation2Icon = NavigationIcon;
export const OutdentIcon = IndentDecreaseIcon;
export const PaintbrushIcon = BrushIcon;
export const PenIcon = PencilIcon;
export const PenSquareIcon = SquarePenIcon;
export const PieChartIcon = ChartPieIcon;
export const ParkingCircleIcon = CircleParkingIcon;
export const ParkingSquareIcon = ParkingIcon;
export const PauseCircleIcon = CirclePauseIcon;
export const PercentSquareIcon = SquarePercentIcon;
export const PlayCircleIcon = CirclePlayIcon;
export const PlusCircleIcon = CirclePlusIcon;
export const PlusSquareIcon = SquarePlusIcon;
export const RefreshCwIcon = RefreshIcon;
export const Share2Icon = ShareIcon;
export const SheetIcon = TableIcon;
export const SlidersVerticalIcon = SlidersIcon;
export const StopCircleIcon = CircleStopIcon;
export const TerminalSquareIcon = SquareTerminalIcon;
export const TextIcon = AlignLeftIcon;
export const Trash2Icon = TrashIcon;
export const TriangleAlertIcon = AlertIcon;
export const TwitterIcon = XTwitterIcon;
export const ViewIcon = ScanEyeIcon;
export const Volume2Icon = VolumeIcon;
export const VolumeXIcon = VolumeOffIcon;
export const XIcon = CloseIcon;
export const XCircleIcon = CircleXIcon;
export const XSquareIcon = SquareXIcon;
export const XOctagonIcon = OctagonXIcon;
export const CheckCircleIcon = CircleCheckIcon;
export const CheckCircle2Icon = CircleCheckIcon;
export const PowerCircleIcon = CirclePowerIcon;
export const CheckSquare2Icon = SquareCheckIcon;
export const ArrowDownCircleIcon = CircleArrowDownIcon;
export const ArrowUpCircleIcon = CircleArrowUpIcon;
export const ArrowLeftCircleIcon = CircleArrowLeftIcon;
export const ArrowRightCircleIcon = CircleArrowRightIcon;
export const AlertCircleIcon = CircleAlertIcon;
export const AlertOctagonIcon = OctagonAlertIcon;
export const MinusCircleIcon = CircleMinusIcon;
export const MinusSquareIcon = SquareMinusIcon;
export const GanttChartIcon = ChartNoAxesGanttIcon;
export const GaugeCircleIcon = CircleGaugeIcon;
export const DivideCircleIcon = CircleDivideIcon;
export const LineChartIcon = ChartLineIcon;
export const CandlestickChartIcon = ChartCandlestickIcon;
export const ScatterChartIcon = ChartScatterIcon;
export const EditIcon = SquarePenIcon;
export const Edit2Icon = PencilIcon;
export const Edit3Icon = PenLineIcon;
export const Loader2Icon = LoaderCircleIcon;
export const DivideSquareIcon = SquareDivideIcon;
export const PercentCircleIcon = CirclePercentIcon;
export const IndentIcon = IndentIncreaseIcon;
export const FunctionSquareIcon = SquareFunctionIcon;
export const MenuSquareIcon = SquareMenuIcon;
export const KanbanSquareIcon = SquareKanbanIcon;
export const MSquareIcon = SquareMIcon;
export const SplitSquareHorizontalIcon = SquareSplitHorizontalIcon;
export const SplitSquareVerticalIcon = SquareSplitVerticalIcon;
export const TestTube2Icon = TestTubeDiagonalIcon;
export const VerifiedIcon = BadgeCheckIcon;
export const Wand2Icon = WandSparklesIcon;
export const PalmtreeIcon = TreePalmIcon;

/* ---- one drawing, two names ---- */

export const ArchiveIcon = StashIcon;
export const ArchiveRestoreIcon = StashPopIcon;
export const ArrowBigUpIcon = ShiftIcon;
export const BoomboxIcon = BoomBoxIcon;
export const ClipboardPasteIcon = PasteIcon;
export const Clock3Icon = ClockIcon;
export const Columns2Icon = ColumnsIcon;
export const Dice5Icon = DiceIcon;
export const EqualApproximatelyIcon = ApproxEqualIcon;
export const EqualNotIcon = NotEqualIcon;
export const HamburgerIcon = BurgerIcon;
export const MessageSquareTextIcon = PromptIcon;
export const PalmTreeIcon = TreePalmIcon;
export const PencilLineIcon = PenLineIcon;
export const PenOffIcon = PencilOffIcon;
export const Rows2Icon = RowsIcon;
export const ScreenShareOffIcon = MonitorXIcon;
export const ShrinkIcon = CollapseIcon;
export const SparkleIcon = SparkIcon;
export const UploadIcon = PushIcon;

/* ---- brands & social ---- */

export function TrelloIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 3.5H18.5C20.34 3.5 20.5 3.66 20.5 5.5V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V5.5C3.5 3.66 3.66 3.5 5.5 3.5Z" />
      <path d="M7.5 7.5H10C10.55 7.5 10.75 7.7 10.75 8.25V15.75C10.75 16.3 10.55 16.5 10 16.5H7.5C6.95 16.5 6.75 16.3 6.75 15.75V8.25C6.75 7.7 6.95 7.5 7.5 7.5Z" />
      <path d="M14 7.5H16.5C17.05 7.5 17.25 7.7 17.25 8.25V11.75C17.25 12.3 17.05 12.5 16.5 12.5H14C13.45 12.5 13.25 12.3 13.25 11.75V8.25C13.25 7.7 13.45 7.5 14 7.5Z" />
    </Icon>
  );
}
export function FramerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M5.75 2.75H18.25V9H12L18.25 15.25H5.75V9H12Z" />
      <path strokeLinejoin="bevel" d="M12 21.5V15.25H5.75Z" />
    </Icon>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M15 21.5V17.5C15.1 16.2 14.75 14.95 14 13.95C17 13.95 20 11.95 20 8.45C20.08 7.2 19.73 5.97 19 4.95C19.28 3.8 19.28 2.6 19 1.45C19 1.45 18 1.45 16 2.95C13.36 2.45 10.64 2.45 8 2.95C6 1.45 5 1.45 5 1.45C4.7 2.6 4.7 3.8 5 4.95C4.27 5.96 3.92 7.2 4 8.45C4 11.95 7 13.95 10 13.95C9.61 14.44 9.32 15 9.15 15.6C8.98 16.2 8.93 16.83 9 17.45V21.5" />
      <path d="M9 18.5C4.49 20.5 4 16.5 2 16.5" />
    </Icon>
  );
}

/** The X (Twitter) letterform: solid diagonal, broken counter-diagonal. */
export function XTwitterIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path strokeLinejoin="bevel" d="M4.75 3.5H9L19.25 20.5H15Z" />
      <path d="M19.75 3.5 13.5 11M10.5 13 4.25 20.5" />
    </Icon>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.75 5.25H19.25C21.09 5.25 21.25 5.41 21.25 7.25V16.75C21.25 18.59 21.09 18.75 19.25 18.75H4.75C2.91 18.75 2.75 18.59 2.75 16.75V7.25C2.75 5.41 2.91 5.25 4.75 5.25Z" />
      <path strokeLinejoin="bevel" d="M10 9 15 12 10 15Z" />
    </Icon>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.75 2.75H16.25C19.15 2.75 21.25 4.85 21.25 7.75V16.25C21.25 19.15 19.15 21.25 16.25 21.25H7.75C4.85 21.25 2.75 19.15 2.75 16.25V7.75C2.75 4.85 4.85 2.75 7.75 2.75Z" />
      <path d={squircle(12, 12, 4.25)} />
      <path d={squircle(17.25, 6.75, 1.1)} fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M17.75 2.75H14.75C12.13 2.75 10 4.88 10 7.5V10.25H7V14.25H10V21.25H14V14.25H17L18 10.25H14V7.5C14 6.95 14.45 6.5 15 6.5H17.75Z"
      />
    </Icon>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M13.25 21H9.25V8.5H13.25V9.9C13.95 8.85 15 8.25 16 8.25C19 8.25 21.25 10.5 21.25 13.5V21H17.25V13.9C17.25 12.8 16.35 11.9 15.25 11.9C14.15 11.9 13.25 12.8 13.25 13.9Z" />
      <path d="M3 8.5H6.5V21H3Z" />
      <path d={squircle(4.75, 4.5, 2)} />
    </Icon>
  );
}

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M8.75 5.25C7.25 5.5 5.85 6 4.6 6.75C2.9 9.85 2.35 13.25 2.75 16.6C4.15 17.7 5.85 18.55 7.5 19L8.55 17.25C9.6 17.65 10.8 17.85 12 17.85C13.2 17.85 14.4 17.65 15.45 17.25L16.5 19C18.15 18.55 19.85 17.7 21.25 16.6C21.65 13.25 21.1 9.85 19.4 6.75C18.15 6 16.75 5.5 15.25 5.25L14.55 6.6C13.7 6.45 12.85 6.35 12 6.35C11.15 6.35 10.3 6.45 9.45 6.6Z"
      />
      <path
        d={squircle(9, 12.5, 1.6) + squircle(15, 12.5, 1.6)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function TwitchIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M21.25 2.75H3.5V17.5H8.25V21.25L12 17.5H16.5L21.25 12.75Z"
      />
      <path d="M11.25 11.5V7M16 11.5V7" />
    </Icon>
  );
}

export function RedditIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 7.75C16.83 7.75 20.75 10.55 20.75 14C20.75 17.45 16.83 20.25 12 20.25C7.17 20.25 3.25 17.45 3.25 14C3.25 10.55 7.17 7.75 12 7.75Z" />
      <path d={squircle(3.1, 10.4, 1.75) + squircle(20.9, 10.4, 1.75)} />
      <path d="M12 7.75C12 5.25 13 3.75 15.25 3.5" />
      <path d={squircle(16.75, 3.4, 1.25)} />
      <path
        d={squircle(9, 13, 1.5) + squircle(15, 13, 1.5)}
        fill="currentColor"
        stroke="none"
      />
      <path d="M8.75 16.4C9.75 17.25 10.8 17.65 12 17.65C13.2 17.65 14.25 17.25 15.25 16.4" />
    </Icon>
  );
}

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 2.75A9.25 9.25 0 0 0 3.9 16.45L2.75 21.25 7.7 20.15A9.25 9.25 0 1 0 12 2.75Z" />
      <path d="M8.5 9.35C8.5 8.9 8.85 8.5 9.35 8.5H10.3C10.6 8.5 10.85 8.7 10.9 9L11.2 10.3C11.25 10.5 11.2 10.75 11 10.9L10.4 11.4C10.95 12.55 11.85 13.45 13 14L13.5 13.4C13.65 13.2 13.9 13.15 14.1 13.2L15.4 13.5C15.7 13.55 15.9 13.8 15.9 14.1V15.05C15.9 15.55 15.5 15.9 15.05 15.9C11.45 15.6 8.8 12.95 8.5 9.35Z" />
    </Icon>
  );
}

export function TelegramIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path
        strokeLinejoin="bevel"
        d="M16.75 7.5 6.5 11.5 9.75 12.9 10.75 16 12.5 14.1 15.25 16.25Z"
      />
      <path d="M9.75 12.9 16.75 7.5" />
    </Icon>
  );
}

/** Slack: the four-arm pinwheel reduced to monoline - each arm one
 *  stroke with a filled squircle dot for its companion lozenge. Outlined
 *  3-unit pills fill solid at stroke 2, so the mark is skeletonized. */
export function SlackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.5 2.75V10" />
      <path d="M2.75 9.5H10" />
      <path d="M9.5 21.25V14" />
      <path d="M21.25 14.5H14" />
      <path
        d={
          squircle(20.4, 8.6, 1.4) +
          squircle(8.6, 3.6, 1.4) +
          squircle(3.6, 15.4, 1.4) +
          squircle(15.4, 20.4, 1.4)
        }
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function TiktokIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.75 3.5C15.1 5.9 16.9 7.7 19.5 7.95V10.9C17.7 10.85 16.15 10.3 14.75 9.3V15.6C14.75 18.9 12.45 21.25 9.5 21.25C6.7 21.25 4.5 19.2 4.5 16.6C4.5 13.85 6.9 11.8 9.9 12V15C8.6 14.75 7.5 15.55 7.5 16.6C7.5 17.6 8.4 18.35 9.5 18.35C10.8 18.35 11.75 17.35 11.75 15.6V3.5Z" />
    </Icon>
  );
}

export function BlueskyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 11C10.9 8.1 8.4 4.9 5.6 3.6C4.2 3 3.5 3.55 3.5 5.05C3.5 6 3.85 9.35 4.1 10.25C4.75 12.5 6.6 13.3 8.9 13.1C6 13.65 5.05 15.4 6.75 17.25C8.9 19.55 10.9 17.55 12 14.9C13.1 17.55 15.1 19.55 17.25 17.25C18.95 15.4 18 13.65 15.1 13.1C17.4 13.3 19.25 12.5 19.9 10.25C20.15 9.35 20.5 6 20.5 5.05C20.5 3.55 19.8 3 18.4 3.6C15.6 4.9 13.1 8.1 12 11Z" />
    </Icon>
  );
}

export function FigmaIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.84 5.84A3.08 3.08 0 0 1 8.92 2.76H12V8.92H8.92A3.08 3.08 0 0 1 5.84 5.84Z" />
      <path d="M12 2.76H15.08A3.08 3.08 0 1 1 15.08 8.92H12Z" />
      <path d="M12 12A3.08 3.08 0 1 1 18.16 12A3.08 3.08 0 1 1 12 12Z" />
      <path d="M5.84 18.16A3.08 3.08 0 0 1 8.92 15.08H12V18.16A3.08 3.08 0 1 1 5.84 18.16Z" />
      <path d="M5.84 12A3.08 3.08 0 0 1 8.92 8.92H12V15.08H8.92A3.08 3.08 0 0 1 5.84 12Z" />
    </Icon>
  );
}

export function SpotifyIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M7.5 9.75C10.5 9 14.5 9.25 17 10.9M7.9 12.9C10.4 12.3 13.55 12.55 15.75 13.9M8.4 15.9C10.3 15.5 12.6 15.7 14.35 16.7" />
    </Icon>
  );
}

export function GoogleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M21.25 12A9.25 9.25 0 1 1 18.5 5.4" />
      <path d="M21.25 12H13" />
    </Icon>
  );
}

/** The GitLab tanuki, simplified to one beveled outline. */
export function GitlabIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path
        strokeLinejoin="bevel"
        d="M22 13.29 18.67 3.29C18.6 3.1 18.42 3 18.26 3C18.1 3 17.93 3.1 17.86 3.29L15.6 9.96H8.32L6.1 3.29C6.03 3.1 5.86 3 5.7 3C5.54 3 5.36 3.1 5.29 3.29L2 13.29C1.9 13.6 2 13.94 2.27 14.12L12 21 21.69 14.12C21.96 13.94 22.1 13.6 22 13.29Z"
      />
    </Icon>
  );
}

/** npm: the registry tile with the n block. */
export function NpmIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 5.5H19.5C21.34 5.5 21.5 5.66 21.5 7.5V16.5C21.5 18.34 21.34 18.5 19.5 18.5H4.5C2.66 18.5 2.5 18.34 2.5 16.5V7.5C2.5 5.66 2.66 5.5 4.5 5.5Z" />
      <path d="M8.5 15.5V8.5H15.5V15.5H12.5V11.5" />
    </Icon>
  );
}

/** Chrome: ring, hub lens, three intersecting blade lines. */
export function ChromeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.5)} />
      <path d={squircle(12, 12, 4)} />
      <path d="M21.2 8H12M4 6.1 8.55 14M10.9 21.9 15.45 14" />
    </Icon>
  );
}

/** Android: the head dome with antennae and dot eyes. */
export function AndroidIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 16.75C4.5 12.5 7.85 9.25 12 9.25C16.15 9.25 19.5 12.5 19.5 16.75Z" />
      <path d="M7.75 10.4 6 7.5M16.25 10.4 18 7.5" />
      <path
        d={squircle(9, 13.5, 1) + squircle(15, 13.5, 1)}
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}
