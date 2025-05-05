import {
  rgbFromCulori,
  hslFromCulori,
  hslToCulori,
  rgbToCulori,
} from '../culori';
import { convertHslToRgb, convertRgbToHsl } from 'culori';
import type { HslColor, PalettebroColor } from '../types';
import { rgbToPalettebro, palettebroToRgb } from './rgb';

export const hslToPalettebro = (color: HslColor): PalettebroColor =>
  rgbToPalettebro(rgbFromCulori(convertHslToRgb(hslToCulori(color))));

export const palettebroToHsl = (color: PalettebroColor): HslColor =>
  hslFromCulori(convertRgbToHsl(rgbToCulori(palettebroToRgb(color))));
