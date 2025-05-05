import type { PalettebroColor } from '../types';

export const randomUsableColor = (): PalettebroColor => ({
  h: Math.round(Math.random() * 360),
  s: 50 + Math.random() * 50,
  l: 30 + Math.random() * 60,
});
