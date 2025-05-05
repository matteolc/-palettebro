import { rgbToPalettebro, palettebroToRgb } from './rgb';
import {
  rgbFromCulori,
  culoriLchToRgb,
  lchFromCulori,
  culoriRgbToLch,
  lchToCulori,
  rgbToCulori,
} from '../culori';
import { clampChroma } from 'culori';
import type { LchColor, PalettebroColor } from '../types';

export const lchToPalettebro = (color: LchColor): PalettebroColor =>
  rgbToPalettebro(rgbFromCulori(culoriLchToRgb(clampChroma(lchToCulori(color)))));

export const palettebroToLch = (color: PalettebroColor): LchColor =>
  lchFromCulori(culoriRgbToLch(rgbToCulori(palettebroToRgb(color))));
