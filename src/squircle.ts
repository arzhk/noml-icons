/** Superellipse "squircle" path helper - the geometric core of the whole
 *  set, shared with the Noml Sans typeface's design DNA (exponent 2.55).
 *
 *  One cubic per quadrant; handle ratio k = 0.70 puts the curve through
 *  the 45-degree point of the exponent-2.55 superellipse. Pass a larger k
 *  (0.85-0.92) for large lone tiles - at icon sizes a big exp-2.55
 *  squircle reads as a plain circle, mirroring how the font varies
 *  exponent with optical size. */
export function squircle(cx: number, cy: number, r: number, k = 0.7): string {
  // Round every coordinate, not just h: float sums like 16.1 + 1.1 print
  // as 17.200000000000003 otherwise.
  const round = (v: number) => Math.round(v * 100) / 100;
  const h = round(r * k);
  const x = (d: number) => round(cx + d);
  const y = (d: number) => round(cy + d);
  return (
    `M${x(r)} ${y(0)}` +
    `C${x(r)} ${y(h)} ${x(h)} ${y(r)} ${x(0)} ${y(r)}` +
    `C${x(-h)} ${y(r)} ${x(-r)} ${y(h)} ${x(-r)} ${y(0)}` +
    `C${x(-r)} ${y(-h)} ${x(-h)} ${y(-r)} ${x(0)} ${y(-r)}` +
    `C${x(h)} ${y(-r)} ${x(r)} ${y(-h)} ${x(r)} ${y(0)}Z`
  );
}
