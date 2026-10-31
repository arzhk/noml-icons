# Icon review flags — first pass (2026-07-21)

Automated visual sweep of all 1749 icons (proofs/sheets/sheet-01..18.png).
Mark each line: `fix` / `skip`, or just delete lines you veto.

## High severity (broken, illegible, or clear style breaks)
STATUS: FIXED (compare-batch-01.png) — except dino, intentionally kept: doc comment says it's a deliberate pixel-art Chrome-dino brand mark.

- dot | sheet 6 | CONFIRMED BUG: filled squircle radius 9 nearly fills the viewbox; should be a small centered dot
- bat | sheet 2 | wing-only silhouette with jagged edge, illegible blob at 24px
- cannabis | sheet 4 | solid filled leaf silhouette, style outlier, black blob at 24px
- dino | sheet 6 | pixel-art filled sprite, complete style outlier, illegible at 24px
- ferris-wheel | sheet 7 | spokes merge into near-solid blob at 24px
- grape | sheet 8 | overlapping cluster circles fuse into solid blob at 24px
- mosque | sheet 11 | far too much architectural detail, unreadable at 24px
- origami | sheet 12 | overlapping angular strokes fill in, reads solid at both sizes
- slack | sheet 14 | logo pieces misaligned and clumped, doesn't read as the Slack mark
- tablets | sheet 16 | solid filled circles, style outlier and illegible at 24px
- wheat | sheet 18 | grain head solid filled, style outlier, black blob at 24px
- wheat-off | sheet 18 | same filled head plus slash, doubly muddy
- whisk | sheet 18 | balloon filled solid, reads as black leaf blob

## Filled-solid style outliers (outline family, these render filled/heavy)
STATUS: REVIEWED (compare-batch-02.png). Fixed: windmill (sail weight), calendar-cog, cloud-cog, user-cog + server/file/folder/monitor-cog (8-tooth badge cogs -> 4 longer teeth). Kept as intentional filled accents: radiation, plunger, hourglass, fireplace, telegram, discord, taco, wine, wine-bottle, wallet-cards, strawberry, carrot, panda.

- radiation | sheet 13 | filled trefoil wedges
- plunger | sheet 13 | cup renders as solid filled dome
- hourglass | sheet 9 | hatched/filled sand triangles read heavier than family
- fireplace | sheet 7 | thick near-filled frame, heavier than family
- telegram | sheet 16 | solid filled disc vs outline brand marks
- discord | sheet 6 | solid filled glyph vs outline brand marks
- taco | sheet 16 | near-solid filled dome, shapeless at 24px
- windmill | sheet 18 | filled blade pair reads as solid bowtie
- wine | sheet 18 | bowl renders filled
- wine-bottle | sheet 18 | solid filled label/neck band
- wallet-cards | sheet 17 | inner flap is heavy filled wedge
- calendar-cog | sheet 3 | gear renders as heavy filled blob inside calendar
- strawberry | sheet 16 | filled crown plus seed dots go muddy at 24px
- carrot | sheet 4 | leaf strokes merge into filled blobs
- panda | sheet 12 | filled ears/eye patches merge with head outline at 24px

## Muddy / merges at 24px (too much detail)
STATUS: REVIEWED (inspect-muddy-a/b/c/d.png). Fixed: antenna (3 rakes), drama (dropped back-mask features), lungs (fuller lobes), piano (2 keys + 1 divider), shell (ribs stopped short of hinge). All others verified legible at 24px and kept.

- air-vent | sheet 1 | airflow curls read as hooks, muddy at 24px
- antenna | sheet 1 | diagonal hatching collapses into smudge
- biohazard | sheet 2 | arcs plus dashes merge into mud
- candy-off | sheet 4 | slash over wrapper stripes piles up muddy
- dessert | sheet 6 | drizzle squiggles merge into mush
- dam | sheet 6 | dense parallel lines plus waves merge
- drama | sheet 6 | overlapping masks with facial detail go muddy
- croissant | sheet 6 | inner segment strokes merge into lumpy blob
- fingerprint | sheet 7 | concentric arcs too close, merge into mud
- fire-hydrant | sheet 7 | too many small elements merge
- flame | sheet 7 | inner flame stroke merges with outline
- flame-kindling | sheet 7 | flame plus crossed logs too dense
- file-json-2 | sheet 7 | braces collide with file border
- gingerbread | sheet 8 | limbs and face detail merge
- globe-lock | sheet 8 | lock overlaps globe meridians
- guitar | sheet 8 | diagonal body plus headstock illegible at 24px
- handshake | sheet 9 | interlocked hands merge into dark mass
- hand-platter | sheet 9 | dome and hand strokes collide
- heart-handshake | sheet 9 | hands merge with heart outline
- hop | sheet 9 | interior wavy lines merge with pin outline
- hot-air-balloon | sheet 9 | balloon stripes merge
- ice-cream-bowl | sheet 9 | scoops, spoon, bowl collide
- leafy-green | sheet 10 | vein strokes cross and merge into mud
- lungs | sheet 10 | lobes collapse into two blobs, reads as "oo"
- mail-question | sheet 10 | question badge merges with envelope flap
- microchip | sheet 11 | pin stubs merge into noise
- non-binary | sheet 11 | asterisk, stem, circle merge
- cloud-moon-rain | sheet 5 | cloud + moon + drops merge into mud
- pencil-ruler | sheet 12 | crossed tools plus ticks turn muddy
- piano | sheet 12 | key strokes merge into solid grille
- pinwheel | sheet 12 | blades overlap into dense X-blob
- pool | sheet 13 | ladder plus waves crowd and merge
- rat | sheet 13 | body collapses to blob, animal unrecognizable
- roller-coaster | sheet 13 | track loops and supports merge
- salad | sheet 14 | topping cluster fuses against bowl rim
- sandwich | sheet 14 | stacked layers merge into solid mass
- satellite | sheet 14 | jumbled diagonal blocks hard to parse
- shell | sheet 14 | rib strokes merge into dark fan blob
- spray-can | sheet 15 | spray dots turn to noise
- square-bottom-dashed-scissors | sheet 15 | scissors in dashed frame too dense
- squirrel | sheet 15 | fine detail merges, silhouette muddy
- star-off | sheet 15 | slash over star fragments looks accidental
- sun-snow | sheet 16 | moon, snowflake, ray dashes merge into clutter
- tent-tree | sheet 16 | tent + tree + sun dot too much detail
- thermometer-snowflake | sheet 16 | snowflake collapses into splat
- tractor | sheet 16 | wheels, cab, exhaust merge into cluster
- train-track | sheet 17 | diagonal rungs merge into hatched blob
- tree-palm | sheet 17 | frond strokes merge into blob
- trees | sheet 17 | two overlapping trees smear together
- turtle | sheet 17 | shell/leg detail merges into lumpy blob
- usb | sheet 17 | filled nodes crowd the branch end
- user-cog | sheet 17 | cog teeth merge into filled splat (also user-round-cog)
- utensils-crossed | sheet 17 | fork tines and knife merge at crossing
- volleyball | sheet 17 | seam curves merge, reads near-solid
- waffle | sheet 17 | grid inside circle clogs, reads as dark disc
- yarn | sheet 18 | strand lines merge into dense "Q" blob
- audio-waveform | sheet 2 | serpentine squiggle reads as scribble, blobs at 24px

## Metaphor unrecognizable / reads as wrong thing
STATUS: REVIEWED (inspect-metaphor-a/b.png, inspect-geo.png). Fixed: beaker(no - kept, lucide-canonical), bomb (spark rays), brain-cog (seam + longer teeth), building-2 (squared wings), clover (compass leaves + stem), dart (fletching), folder-root (node dot + root line), football (longer lace ticks), lectern (slanted slab), mic-vocal (grille inside ball), pocket-knife (angled blade), safety-pin (open arms), shrimp (open curl), toothbrush (joined handle, side bristles). Kept as intentional/canonical: file (family uses plain tiles), fried-egg, helicopter, match, maximize + minimize (deliberate window-chrome glyphs), ratio, star-half (exact half of StarIcon), whistle, cloud-cog (fixed under cogs).

- beaker | sheet 2 | straight-sided vessel reads as cup/battery
- bomb | sheet 3 | squircle with fuse-dot reads as Mars/male symbol
- brain-cog | sheet 3 | scalloped outline reads as flower/badge, not brain
- building-2 | sheet 3 | rounded side wings read as headphone ears
- clover | sheet 5 | four leaves read as "88" with a tail
- cloud-cog | sheet 5 | gear reads as plain circle with a nub
- dart | sheet 6 | reads as wrench/ratchet
- file | sheet 7 | plain rounded rectangle, no dog-ear
- football | sheet 8 | laces reduced to one diagonal, reads as leaf/eye
- folder-root | sheet 8 | interior glyph unrecognizable
- fried-egg | sheet 8 | wobbly irregular outline off the geometric language
- helicopter | sheet 9 | abstract geometry, hard to recognize even at 96px
- lectern | sheet 10 | reads as inverted funnel/T-table
- match | sheet 10 | reads as feather/paintbrush
- maximize | sheet 10 | plain rounded square, no corner/arrow cues
- minimize | sheet 11 | single dash, identical to minus
- mic-vocal | sheet 11 | diagonal reads as off/ban slash, confusable with mic-off
- pocket-knife | sheet 13 | reads as boat/hat
- ratio | sheet 13 | overlapping side tabs look accidental
- safety-pin | sheet 14 | reads as pencil/diagonal stick
- shrimp | sheet 14 | spiral swirl unrecognizable
- star-half | sheet 15 | reads as wonky lightning bolt
- toothbrush | sheet 16 | reads as plain diagonal slash
- whistle | sheet 18 | reads as frying pan with key stub

## Geometry looks broken
STATUS: REVIEWED (inspect-geo.png, compare-final-checks.png). Fixed: bow-arrow (strung bow redraw), git-graph (merge arc lands on center lane), worm (continuous body + head dot). Kept: circle-arrow-out-* (canonical lucide geometry), clock-1/6/11/12 (hands genuinely overlap at those times, same as lucide), folder-git-2 (standard branch topology), lamp-wall-down/up (read fine at 96px).

- bow-arrow | sheet 3 | bow halves disconnected, no string, gaps look accidental
- circle-arrow-out-down-left | sheet 4 | arrow merges with circle gap, reads as speech bubble
- circle-arrow-out-down-right | sheet 4 | same, mirrored
- circle-arrow-out-up-left | sheet 4 | arrowhead illegible, stray diagonal
- clock-1 | sheet 5 | hands merge into solid wedge
- clock-11 | sheet 5 | hands merge into solid wedge
- clock-12 | sheet 5 | hands collapse to single bar
- clock-6 | sheet 5 | collinear hands form one vertical stroke
- folder-git-2 | sheet 8 | branch glyph collides with folder edge, reads as stray "9"
- git-graph | sheet 8 | disconnected nodes read as "819", not a commit graph
- lamp-wall-down | sheet 9 | mount and shade read as disconnected fragments
- lamp-wall-up | sheet 9 | same disconnected-fragment problem
- worm | sheet 18 | coil broken into segments with accidental-looking gaps

## Duplicates / near-duplicates (decide: keep one, alias, or differentiate)
STATUS: KEPT ALL per user decision (2026-07-21) - removing exports would look like dropped support.

- palmtree vs palm-tree vs tree-palm | three palm trees shipped
- grid vs grid-3x3 | visually identical
- indent vs indent-increase | visually identical
- sun vs sun-medium | indistinguishable
- wand-2 vs wand-sparkles | indistinguishable at 24px
- boombox vs boom-box | near-identical designs, two names
- cassette vs cassette-tape | near-duplicates
- circle-user vs circle-user-round | near-duplicates

---

# Second pass — AAA bar (2026-10-31)

Fresh sheets (proofs/sheets, regenerated after the first-pass fixes) plus an
automated scan of all 1652 unique drawings for look-alikes and ink density
(scripts/find-review-candidates.tsx, proofs/candidates.png). The 97 aliases
are skipped: they re-export one drawing under a second name on purpose.

## Rendering bugs
STATUS: FIXED (compare-pass2-batch1.png). Clock 1/2/10/11 hands get bevel joins; signal bars now 4/7.75/11.5/15 tall; currency glyphs redrawn with strokes clear of each other.

- clock-1 | sheet 5 | hands meet at 30 degrees, the miter join spikes into a filled wedge
- clock-2 | sheet 5 | hands meet at 60 degrees, smaller miter spike
- clock-10 | sheet 5 | same miter spike
- clock-11 | sheet 5 | same miter spike
- signal-low | sheet 14 | its only bar is 2 units tall and renders as a dot, identical to signal-zero
- badge-japanese-yen | sheet 2 | crossbars 2 units apart fuse into a solid block
- receipt-japanese-yen | sheet 13 | same fused crossbars
- badge-indian-rupee | sheet 2 | crossbars fuse, glyph reads solid
- receipt-indian-rupee | sheet 13 | same
- badge-russian-ruble | sheet 2 | bowl and crossbar fuse
- receipt-russian-ruble | sheet 13 | same
- badge-swiss-franc | sheet 2 | crossbar fuses with the stem
- receipt-swiss-franc | sheet 13 | same

## Same drawing under two names (separate code, not aliases)
STATUS: DONE per user decision (2026-10-31): one drawing, both names exported. 15 pairs became aliases in the "one drawing, two names" block of src/icons.tsx. Redrawn instead: table (2x3 grid), theater (stage with curtains). Kept: function vs function-square - FunctionIcon is sized to CpuIcon's tile on purpose.

- arrow-big-up vs shift | pixel-identical
- dice vs dice-5 | pixel-identical
- monitor-x vs screen-share-off | pixel-identical
- clock vs clock-3 | pixel-identical
- push vs upload | pixel-identical
- archive vs stash | same drawing
- archive-restore vs stash-pop | same drawing
- equal-not vs not-equal | same glyph
- approx-equal vs equal-approximately | same glyph
- clipboard-paste vs paste | same drawing
- collapse vs shrink | same drawing
- message-square-text vs prompt | same drawing
- columns vs columns-2 | same drawing
- rows vs rows-2 | same drawing
- table vs table-2 | same drawing
- function vs function-square | same drawing
- burger vs hamburger | two burgers
- drama vs theater | two theater-mask icons

## Different meanings that read the same at 24px
STATUS: FIXED (compare-pass2-batch3.png). spark/sparkle, pen-line/pencil-line and pen-off/pencil-off turned out to mean the same thing and became aliases.

- mars vs mars-stroke | the extra stroke tick is too small to see
- mountain vs mountain-snow | snow cap barely visible
- briefcase vs briefcase-business | only a tiny clasp differs
- laptop vs laptop-minimal | near-identical
- annoyed vs meh | brows too small to read
- spark vs sparkle | same four-point star
- snowflake vs asterisk | snowflake has no branches, reads as an asterisk
- sun vs sun-dim | dim rays drawn like full rays
- spell-check vs spell-check-2 | the -2 variant should carry a wavy underline
- pen-line vs pencil-line | pen and pencil drawn the same
- pen-off vs pencil-off | pen and pencil drawn the same
- book-audio vs book-plus | audio bars read as a plus sign
- dice-1 vs square-dot | near-identical
- disc-2 vs target | both concentric rings with a dot
- book-dashed vs box-select | book loses its spine, reads as a dashed square
- pickaxe vs umbrella | symmetric arc on a stick reads as an umbrella
- plunger vs lamp-ceiling | dome on a stick reads as a ceiling lamp

## Style breaks
STATUS: FIXED (compare-pass2-batch1.png, compare-pass2-batch2.png). Kept: square-split-horizontal/vertical on the bracket tile - cut from the squircle, the brackets read as parentheses. File family got the cut corner with a fold (user picked option B).

Square tiles: 27 square-* icons use the squircle tile, these 18 use a
sharp rounded-rect tile, so square-plus and square-minus don't match.

- square-plus | sheet 15 | sharp tile
- square-x | sheet 15 | sharp tile
- square-pen | sheet 15 | sharp tile
- square-check | sheet 15 | sharp tile
- square-check-big | sheet 15 | sharp tile
- square-divide | sheet 15 | sharp tile
- square-function | sheet 15 | sharp tile
- square-m | sheet 15 | sharp tile
- square-menu | sheet 15 | sharp tile
- square-pilcrow | sheet 15 | sharp tile
- square-square | sheet 15 | sharp tile
- square-user-round | sheet 15 | sharp tile
- square-kanban | sheet 15 | sharp tile
- square-library | sheet 15 | sharp tile
- square-chart-gantt | sheet 15 | sharp tile
- square-split-horizontal | sheet 15 | sharp tile
- square-split-vertical | sheet 15 | sharp tile
- square-mouse-pointer | sheet 15 | sharp tile
- wheat | sheet 18 | still a filled silhouette
- wheat-off | sheet 18 | still a filled silhouette
- whisk | sheet 18 | still a filled silhouette

File family (45 icons): the file tile has no folded corner, so file-plus,
file-minus, file-x, file-check read as square-plus/minus/x/check at 24px.
First pass kept plain tiles on purpose; at the AAA bar this is the largest
distinctness gap in the set. Decision (2026-10-31): add a folded corner.

- file | sheet 7 | plain tile
- file-archive | sheet 7 | plain tile
- file-audio | sheet 7 | plain tile
- file-badge | sheet 7 | plain tile
- file-box | sheet 7 | plain tile
- file-chart-column | sheet 7 | plain tile
- file-chart-line | sheet 7 | plain tile
- file-chart-pie | sheet 7 | plain tile
- file-check | sheet 7 | plain tile
- file-code | sheet 7 | plain tile
- file-code-2 | sheet 7 | plain tile
- file-cog | sheet 7 | plain tile
- file-diff | sheet 7 | plain tile
- file-digit | sheet 7 | plain tile
- file-down | sheet 7 | plain tile
- file-heart | sheet 7 | plain tile
- file-image | sheet 7 | plain tile
- file-input | sheet 7 | plain tile
- file-json | sheet 7 | plain tile
- file-json-2 | sheet 7 | plain tile
- file-key | sheet 7 | plain tile
- file-lock | sheet 7 | plain tile
- file-minus | sheet 7 | plain tile
- file-music | sheet 7 | plain tile
- file-output | sheet 7 | plain tile
- file-pen | sheet 7 | plain tile
- file-plus | sheet 7 | plain tile
- file-question | sheet 7 | plain tile
- file-scan | sheet 7 | plain tile
- file-search | sheet 7 | plain tile
- file-sliders | sheet 7 | plain tile
- file-spreadsheet | sheet 7 | plain tile
- file-stack | sheet 7 | plain tiles
- file-symlink | sheet 7 | plain tile
- file-terminal | sheet 7 | plain tile
- file-text | sheet 7 | plain tile
- file-type | sheet 7 | plain tile
- file-up | sheet 7 | plain tile
- file-user | sheet 7 | plain tile
- file-video | sheet 7 | plain tile
- file-volume | sheet 7 | plain tile
- file-warning | sheet 7 | plain tile
- file-x | sheet 7 | plain tile
- files | sheet 7 | plain tiles

## Unclear metaphors
STATUS: REDRAWN (compare-pass2-batch4.png). axis-3d, bat, bomb, brain-cog, cake-slice, hammer, mitten, safety-pin, screwdriver, shrimp, toothbrush and whistle were picked by the user from option sheets.

- abacus | sheet 1 | beads invisible, reads as a table
- axis-3d | sheet 2 | hatched corner reads as noise
- bat | sheet 2 | reads as a crown or bowl
- bomb | sheet 3 | still reads as the male symbol
- brain-cog | sheet 3 | still reads as a flower
- bridge | sheet 3 | reads as a covered dish
- cake-slice | sheet 3 | reads as a price tag
- calendar-clock | sheet 3 | clock badge reads as a square
- folder-clock | sheet 8 | clock badge reads as a square
- file-clock | sheet 7 | clock badge reads as a square
- cog | sheet 5 | ring with stubs reads as a radio button
- frying-pan | sheet 8 | reads as a magnifier
- hammer | sheet 8 | reads as a letter T or a pushpin
- helicopter | sheet 9 | still abstract
- lungs | sheet 10 | reads as scissors
- match | sheet 10 | reads as a paintbrush
- mitten | sheet 11 | reads as a bell
- ping-pong | sheet 12 | reads as search
- quote | sheet 13 | marks read as "SS"
- safety-pin | sheet 14 | reads as a stick
- screwdriver | sheet 14 | reads as a stick
- shrimp | sheet 14 | reads as a rotate arrow
- toothbrush | sheet 16 | plain diagonal line
- whistle | sheet 18 | reads as a frying pan
- circle-arrow-out-down-left | sheet 4 | arrow fuses into the ring, reads as a speech bubble
- circle-arrow-out-down-right | sheet 4 | same
- circle-arrow-out-up-left | sheet 4 | same
- circle-arrow-out-up-right | sheet 4 | same
- lamp-wall-down | sheet 9 | still reads as fragments
- lamp-wall-up | sheet 9 | still reads as fragments

## Still muddy at 24px (left as-is in first pass)
STATUS: REVIEWED (compare-pass2-batch5.png). Fixed: biohazard, dessert (now a cupcake), elevator, flag-checkered, globe-lock, phone-off, sandwich, satellite, sun-snow, thermometer-snowflake, usb, yarn, cloud-moon-rain. ORIGINAL per user decision (2026-10-31): ferris-wheel, hand-platter, heart-handshake, roller-coaster and salad were redrawn as options, and the user chose "Original" for each over every new option; pinwheel, tent-tree and train-track the user asked to keep outright.

- biohazard | sheet 2 | arcs and dashes merge
- dessert | sheet 6 | drizzle merges
- elevator | sheet 6 | arrows crowd the doors
- ferris-wheel | sheet 7 | spokes merge
- flag-checkered | sheet 7 | checks merge
- globe-lock | sheet 8 | lock collides with globe
- hand-platter | sheet 9 | dome and hand collide
- heart-handshake | sheet 9 | hands merge with heart
- phone-off | sheet 12 | slash merges with handset
- pinwheel | sheet 12 | blades merge
- roller-coaster | sheet 13 | loops merge
- salad | sheet 14 | toppings fuse
- sandwich | sheet 14 | layers fuse
- satellite | sheet 14 | blocks jumble
- sun-snow | sheet 16 | clutter
- tent-tree | sheet 16 | too much detail
- thermometer-snowflake | sheet 16 | snowflake splats
- train-track | sheet 17 | rungs merge
- usb | sheet 17 | nodes crowd
- yarn | sheet 18 | strands merge
- cloud-moon-rain | sheet 5 | merges
