import {
  type Lch,
  type Oklch,
  convertLabToRgb,
  convertLchToLab,
  convertOklabToRgb,
  modeLch,
} from 'culori';
import type { LchColor } from '../types';

const lchFromCulori = ({ l, c, h, alpha }: Lch): LchColor => ({
  l,
  c: (c / modeLch.ranges.c[1]) * 100,
  h: h ?? 0,
  a: alpha,
});

const lchToCulori = ({ l, c, h, a }: LchColor): Lch => ({
  mode: 'lch',
  l,
  c: (c / 100) * modeLch.ranges.c[1],
  h,
  alpha: a,
});

const culoriLchToRgb = (color: Lch) =>
  convertLabToRgb(convertLchToLab(color));

const culoriOklchToRgb = (color: Oklch) =>
  convertOklabToRgb(convertLchToLab(color));

export { lchFromCulori, lchToCulori, culoriLchToRgb, culoriOklchToRgb };
