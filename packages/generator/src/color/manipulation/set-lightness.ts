import type { PalettebroColor } from '../types';

export const setLightness = (color: PalettebroColor, l: number) => ({
  ...color,
  l,
});
