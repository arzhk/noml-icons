/** Noml Icons - the Noml suite's icon set, drawn in the Noml Sans design
 *  DNA: geometric monoline, flat butt terminals, beveled apexes, and
 *  superellipse squircle rounds. 24-unit grid, stroke 2, currentColor.
 *  Every icon takes only a className. */
import type { ComponentType, ReactNode } from "react";
import { squircle } from "./squircle.js";

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

/** Export to file: DiffIcon's portrait tile with a down arrow inside. */
export function FileDownIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M12 6.5V16" />
      <path strokeLinejoin="bevel" d="M8.75 12.75 12 16 15.25 12.75" />
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

/** Tiny filled squircle status dot (colored via text-* classes). */
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
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M8 8.5H16M8 12H16M8 15.5H13" />
    </Icon>
  );
}

/** Closed folder with tab, FolderOpenIcon's sibling. */
export function FolderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3Z" />
    </Icon>
  );
}

/** New folder: the closed folder with a plus inside. */
export function FolderPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3Z" />
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
      <path d="M11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3Z" />
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
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M12 7.5V16.5M7.5 12H16.5" />
    </Icon>
  );
}

/** Git repo folder: the closed folder with a commit node inside. */
export function FolderGitIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3Z" />
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
      <path d="M12 21.5C8 19.5 4.75 17 4.75 12.5V6.75C4.75 4.91 4.91 4.75 6.75 4.75H17.25C19.09 4.75 19.25 4.91 19.25 6.75V12.5C19.25 17 16 19.5 12 21.5Z" />
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
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d={squircle(11.25, 11.25, 2.75)} />
      <path d="M13.35 13.35 15.75 15.75" />
    </Icon>
  );
}

/** Build: mallet - squircle-cornered head block, straight handle. (A 45-
 *  degree claw hammer read as a marker pen at 14px.) */
export function HammerIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 3.5H17C18.84 3.5 19 3.66 19 5.5V7C19 8.84 18.84 9 17 9H7C5.16 9 5 8.84 5 7V5.5C5 3.66 5.16 3.5 7 3.5Z" />
      <path strokeWidth={2.5} d="M12 9V21" />
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
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M9 9 15 15M15 9 9 15" />
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
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path strokeLinejoin="bevel" d="M10.5 8.75 7.75 12 10.5 15.25M13.5 8.75 16.25 12 13.5 15.25" />
    </Icon>
  );
}

/** Unsaved/conflicted file: portrait tile with a bang. */
export function FileWarningIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M12 7.5V13" />
      <path d={squircle(12, 16.5, 1.2)} fill="currentColor" stroke="none" />
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
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
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
      <path d="M12 21.5C8 19.5 4.75 17 4.75 12.5V6.75C4.75 4.91 4.91 4.75 6.75 4.75H17.25C19.09 4.75 19.25 4.91 19.25 6.75V12.5C19.25 17 16 19.5 12 21.5Z" />
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

/** Mirror of DownloadIcon: same tray, arrow leaves it. */
export function UploadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 11V18C5 20.76 5.24 21 8 21H16C18.76 21 19 20.76 19 18V11" />
      <path d="M12 3.25V14.75" />
      <path strokeLinejoin="bevel" d="M7.75 7.5 12 3.25 16.25 7.5" />
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
      <path d="M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V17C20.5 18.84 20.34 19 18.5 19H5.5C3.66 19 3.5 18.84 3.5 17V7C3.5 5.16 3.66 5 5.5 5Z" />
      <path strokeLinejoin="bevel" d="M3.5 7.5 12 13 20.5 7.5" />
    </Icon>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V7C3.5 5.16 3.66 5 5.5 5Z" />
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
      <path d="M20.5 16.75V18.9C20.5 20 19.6 20.9 18.5 20.8C9.2 20 4 14.8 3.2 5.5C3.1 4.4 4 3.5 5.1 3.5H7.25C7.9 3.5 8.45 3.95 8.6 4.58L9.35 7.7C9.47 8.2 9.3 8.72 8.9 9.05L7.4 10.3C8.7 13.1 10.9 15.3 13.7 16.6L14.95 15.1C15.28 14.7 15.8 14.53 16.3 14.65L19.42 15.4C20.05 15.55 20.5 16.1 20.5 16.75Z" />
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

export function ArchiveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4.5 3.5H19.5C21.34 3.5 21.5 3.66 21.5 5.5V6C21.5 7.84 21.34 8 19.5 8H4.5C2.66 8 2.5 7.84 2.5 6V5.5C2.5 3.66 2.66 3.5 4.5 3.5Z" />
      <path d="M4.5 8V18.5C4.5 20.34 4.66 20.5 6.5 20.5H17.5C19.34 20.5 19.5 20.34 19.5 18.5V8" />
      <path d="M10 12H14" />
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
      <path d="M3.5 9.5H20.5M9.5 9.5V20" />
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
      <path d="M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V17C20.5 18.84 20.34 19 18.5 19H5.5C3.66 19 3.5 18.84 3.5 17V7C3.5 5.16 3.66 5 5.5 5Z" />
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
      <path d="M3.5 8V5.5C3.5 4.16 4.16 3.5 5.5 3.5H8M16 3.5H18.5C19.84 3.5 20.5 4.16 20.5 5.5V8M20.5 16V18.5C20.5 19.84 19.84 20.5 18.5 20.5H16M8 20.5H5.5C4.16 20.5 3.5 19.84 3.5 18.5V16" />
    </Icon>
  );
}

export function LaptopIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 4.5H17.5C19.34 4.5 19.5 4.66 19.5 6.5V16.25H4.5V6.5C4.5 4.66 4.66 4.5 6.5 4.5Z" />
      <path d="M2.5 19.5H21.5" />
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
      <path d="M12 21.5C8 19.5 4.75 17 4.75 12.5V6.75C4.75 4.91 4.91 4.75 6.75 4.75H17.25C19.09 4.75 19.25 4.91 19.25 6.75V12.5C19.25 17 16 19.5 12 21.5Z" />
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
      <path d={squircle(12, 12, 9.25)} />
      <path d="M12 8V16M8 12H16" />
    </Icon>
  );
}

export function CircleMinusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
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
      <path d="M9.5 7.5C9.5 6.4 8.6 5.5 7.5 5.5H5.5C4.4 5.5 3.5 6.4 3.5 7.5V9.5C3.5 10.6 4.4 11.5 5.5 11.5H9.5V13C9.5 15.75 8 17.75 5.25 18.5" />
      <path d="M20.5 7.5C20.5 6.4 19.6 5.5 18.5 5.5H16.5C15.4 5.5 14.5 6.4 14.5 7.5V9.5C14.5 10.6 15.4 11.5 16.5 11.5H20.5V13C20.5 15.75 19 17.75 16.25 18.5" />
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
      <path d={squircle(12, 12, 9.25)} />
      <path strokeLinejoin="bevel" d="M10 8.5 15.5 12 10 15.5Z" />
    </Icon>
  );
}

export function CirclePauseIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
      <path d="M9.75 8.5V15.5M14.25 8.5V15.5" />
    </Icon>
  );
}

export function CircleUserIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d={squircle(12, 12, 9.25)} />
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
        d="M21.5 12 19.62 15.16 18.72 18.72 15.16 19.62 12 21.5 8.84 19.62 5.28 18.72 4.38 15.16 2.5 12 4.38 8.84 5.28 5.28 8.84 4.38 12 2.5 15.16 4.38 18.72 5.28 19.62 8.84Z"
      />
      <path strokeLinejoin="bevel" d="M8.75 12 11 14.25 15.5 9.75" />
    </Icon>
  );
}

export function SquarePlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d="M12 8.5V15.5M8.5 12H15.5" />
    </Icon>
  );
}

export function SquareXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 4.5H18.5C20.34 4.5 20.5 4.66 20.5 6.5V17.5C20.5 19.34 20.34 19.5 18.5 19.5H5.5C3.66 19.5 3.5 19.34 3.5 17.5V6.5C3.5 4.66 3.66 4.5 5.5 4.5Z" />
      <path d="M9 9 15 15M15 9 9 15" />
    </Icon>
  );
}

/* ---- files & folders ---- */

export function FileUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M12 16.5V8.5" />
      <path strokeLinejoin="bevel" d="M9.25 11.25 12 8.5 14.75 11.25" />
    </Icon>
  );
}

export function FileCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path strokeLinejoin="bevel" d="M8.75 12.5 11 14.75 15.5 10.25" />
    </Icon>
  );
}

export function FileJsonIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M10 8.75C9 8.75 8.75 9.35 8.75 10.25C8.75 11.5 7.75 11.4 7.75 12C7.75 12.6 8.75 12.5 8.75 13.75C8.75 14.65 9 15.25 10 15.25" />
      <path d="M14 8.75C15 8.75 15.25 9.35 15.25 10.25C15.25 11.5 16.25 11.4 16.25 12C16.25 12.6 15.25 12.5 15.25 13.75C15.25 14.65 15 15.25 14 15.25" />
    </Icon>
  );
}

export function FileArchiveIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.5 3H16.5C19.26 3 19.5 3.24 19.5 6V18C19.5 20.76 19.26 21 16.5 21H7.5C4.74 21 4.5 20.76 4.5 18V6C4.5 3.24 4.74 3 7.5 3Z" />
      <path d="M10 3V4.5M10 7V8.5M10 11V12.5" />
      <path d={squircle(10, 16.5, 1.9)} />
    </Icon>
  );
}

export function FilesIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M6.5 5.5H13.5C15.34 5.5 15.5 5.66 15.5 7.5V19.5C15.5 21.34 15.34 21.5 13.5 21.5H6.5C4.66 21.5 4.5 21.34 4.5 19.5V7.5C4.5 5.66 4.66 5.5 6.5 5.5Z" />
      <path d="M9 2.5H16.5C18.34 2.5 18.5 2.66 18.5 4.5V17" />
    </Icon>
  );
}

export function FolderXIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11.41 6.3H20C21.38 6.3 21.5 6.42 21.5 7.8V18.5C21.5 19.88 21.38 20 20 20H4C2.62 20 2.5 19.88 2.5 18.5V5C2.5 3.62 2.62 3.5 4 3.5H7.4C8.03 3.5 8.62 3.8 9 4.3L9.81 5.5C10.19 6 10.78 6.3 11.41 6.3Z" />
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
      <path d="M3.5 9.5V7C3.5 5.16 3.66 5 5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V9.5C19.12 9.5 18 10.62 18 12C18 13.38 19.12 14.5 20.5 14.5V17C20.5 18.84 20.34 19 18.5 19H5.5C3.66 19 3.5 18.84 3.5 17V14.5C4.88 14.5 6 13.38 6 12C6 10.62 4.88 9.5 3.5 9.5Z" />
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
      <path d="M12 21.5C8 19.5 4.75 17 4.75 12.5V6.75C4.75 4.91 4.91 4.75 6.75 4.75H17.25C19.09 4.75 19.25 4.91 19.25 6.75V12.5C19.25 17 16 19.5 12 21.5Z" />
      <path d="M4.25 3.5 19.75 20.5" />
    </Icon>
  );
}

/* ---- calendar & time ---- */

export function CalendarPlusIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V7C3.5 5.16 3.66 5 5.5 5Z" />
      <path d="M8 2.75V6.75M16 2.75V6.75M3.5 10H20.5" />
      <path d="M12 12V17.5M9.25 14.75H14.75" />
    </Icon>
  );
}

export function CalendarCheckIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5.5 5H18.5C20.34 5 20.5 5.16 20.5 7V18.5C20.5 20.34 20.34 20.5 18.5 20.5H5.5C3.66 20.5 3.5 20.34 3.5 18.5V7C3.5 5.16 3.66 5 5.5 5Z" />
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
        d="M4.75 21.25V4.75C4.75 2.91 4.91 2.75 6.75 2.75H17.25C19.09 2.75 19.25 2.91 19.25 4.75V21.25L16.85 20 14.45 21.25 12 20 9.55 21.25 7.15 20Z"
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

/* ---- brands & social ---- */

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

export function SlackIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14.5 2.5C15.33 2.5 16 3.17 16 4V8.5C16 9.33 15.33 10 14.5 10C13.67 10 13 9.33 13 8.5V4C13 3.17 13.67 2.5 14.5 2.5Z" />
      <path d="M19 8.5V10H20.5C21.33 10 22 9.33 22 8.5C22 7.67 21.33 7 20.5 7C19.67 7 19 7.67 19 8.5Z" />
      <path d="M9.5 14C10.33 14 11 14.67 11 15.5V20C11 20.83 10.33 21.5 9.5 21.5C8.67 21.5 8 20.83 8 20V15.5C8 14.67 8.67 14 9.5 14Z" />
      <path d="M5 15.5V14H3.5C2.67 14 2 14.67 2 15.5C2 16.33 2.67 17 3.5 17C4.33 17 5 16.33 5 15.5Z" />
      <path d="M15.5 14H20C20.83 14 21.5 14.67 21.5 15.5C21.5 16.33 20.83 17 20 17H15.5C14.67 17 14 16.33 14 15.5C14 14.67 14.67 14 15.5 14Z" />
      <path d="M15.5 19H14V20.5C14 21.33 14.67 22 15.5 22C16.33 22 17 21.33 17 20.5C17 19.67 16.33 19 15.5 19Z" />
      <path d="M4 7H8.5C9.33 7 10 7.67 10 8.5C10 9.33 9.33 10 8.5 10H4C3.17 10 2.5 9.33 2.5 8.5C2.5 7.67 3.17 7 4 7Z" />
      <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2C7.67 2 7 2.67 7 3.5C7 4.33 7.67 5 8.5 5Z" />
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12V9H8.5A3.5 3.5 0 0 1 5 5.5Z" />
      <path d="M12 2H15.5A3.5 3.5 0 1 1 15.5 9H12Z" />
      <path d="M12 12.5A3.5 3.5 0 1 1 19 12.5A3.5 3.5 0 1 1 12 12.5Z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12V19.5A3.5 3.5 0 1 1 5 19.5Z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12V16H8.5A3.5 3.5 0 0 1 5 12.5Z" />
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
