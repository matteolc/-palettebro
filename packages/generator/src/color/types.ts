import type { Rgb, Hsl, Lch } from 'culori';

type ShortAlpha = {
  a?: number;
};
export type RgbColor = Pick<Rgb, 'r' | 'g' | 'b'> & ShortAlpha;
export type HslColor = Pick<Hsl, 'h' | 's' | 'l'> & ShortAlpha;
export type LchColor = Pick<Lch, 'l' | 'c' | 'h'> & ShortAlpha;
export type PalettebroColor = Required<Pick<Hsl, 'h' | 's' | 'l'>> & ShortAlpha;
