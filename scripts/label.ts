/** "ArrowDownToLineIcon" -> "arrow-down-to-line", "AArrowDownIcon" ->
 *  "a-arrow-down", "Axis3dIcon" -> "axis-3d", "Grid2x2Icon" -> "grid-2x2";
 *  "SuiteIcon" -> "suite". */
export function label(exportName: string): string {
  return exportName
    .replace(/Icon$/, "")
    .replace(/[A-Za-z0-9](?=[A-Z])|(?<![0-9])[A-Za-z](?=[0-9])/g, "$&-")
    .toLowerCase();
}
