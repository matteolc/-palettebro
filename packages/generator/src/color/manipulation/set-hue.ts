import type { PalettebroColor } from '../types';

export const setHue = (color: PalettebroColor, h: number) => ({
  ...color,
  h,
});
