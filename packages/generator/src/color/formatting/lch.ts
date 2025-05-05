import { round } from 'culori';
import type { LchColor } from '../types';

export const formatLch = ({ l, c, h = 0 }: LchColor, precision = 3) =>
  `lch(${l === undefined ? 'none' : `${round(precision)(l)}%`} ${
    c === undefined ? 'none' : `${round(precision)(c)}%`
  } ${round(precision)(h)})`;

