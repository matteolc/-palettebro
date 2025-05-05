import { formatHex, round } from 'culori';
import { clamp } from '../../utils/math';
import type { RgbColor } from '../types';
import { rgbToCulori } from '../culori';

export const formatRgb = ({ r, g, b, a = 1 }: RgbColor, precision = 3) => {
  const rr = round(precision)(r);
  const rg = round(precision)(g);
  const rb = round(precision)(b);
  const ra = round(precision)(clamp(a, 1));
  return ra < 1
    ? `rgba(${rr}, ${rg}, ${rb}, ${ra})`
    : `rgb(${rr}, ${rg}, ${rb})`;
};

export const formatRgbToHex = (color: RgbColor) => formatHex(rgbToCulori(color));

