import { circularInterval } from '../../utils/math';
import { clamp } from '../../utils/math';
import type { PalettebroColor } from '../types';

export const scaleLightness = (
  { h, l, ...color }: PalettebroColor,
  amount: number,
  targetH: number,
  hueShiftAmount = 0,
) => ({
  ...color,
  l: clamp(l + amount, 100),
  h: hueShiftAmount
    ? circularInterval(
        h,
        targetH,
        Math.abs(amount / 100) * (hueShiftAmount / 100),
      )
    : h,
});
