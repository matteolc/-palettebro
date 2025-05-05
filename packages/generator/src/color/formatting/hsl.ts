import type { HslColor } from '../types';
import { round } from 'culori';

export const formatHsl = ({ h = 0, s, l }: HslColor, precision = 3) =>
  `hsl(${round(precision)(h)} ${
    s === undefined ? 'none' : `${round(precision)(s)}%`
  } ${l === undefined ? 'none' : `${round(precision)(l)}%`})`;
