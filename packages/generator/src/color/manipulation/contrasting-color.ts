import { clamp } from '../../utils/math';
import type { PalettebroColor } from '../types';

export const contrastingColor = (
  { l, ...color }: PalettebroColor,
  amount = 80,
) => {
  const ratio = amount / 100;

  return {
    ...color,
    l: clamp(l > 50 ? l - l * ratio : l + (100 - l) * ratio),
  };
};
