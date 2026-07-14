/** Superellipse "squircle" path helper - the geometric core of the whole
 *  set, shared with the Noml Sans typeface's design DNA (exponent 2.55).
 *
 *  One cubic per quadrant; handle ratio k = 0.70 puts the curve through
 *  the 45-degree point of the exponent-2.55 superellipse. Pass a larger k
 *  (0.85-0.92) for large lone tiles - at icon sizes a big exp-2.55
 *  squircle reads as a plain circle, mirroring how the font varies
 *  exponent with optical size. */
export function squircle(cx: number, cy: number, r: number, k = 0.7): string {
  const h = Math.round(r * k * 100) / 100;
  return (
    `M${cx + r} ${cy}` +
    `C${cx + r} ${cy + h} ${cx + h} ${cy + r} ${cx} ${cy + r}` +
    `C${cx - h} ${cy + r} ${cx - r} ${cy + h} ${cx - r} ${cy}` +
    `C${cx - r} ${cy - h} ${cx - h} ${cy - r} ${cx} ${cy - r}` +
    `C${cx + h} ${cy - r} ${cx + r} ${cy - h} ${cx + r} ${cy}Z`
  );
}
