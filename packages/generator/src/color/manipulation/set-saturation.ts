import type { PalettebroColor } from '../types';

export const setSaturation = (color: PalettebroColor, s: number) => ({
  ...color,
  s,
});
