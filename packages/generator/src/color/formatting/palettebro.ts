import { formatRgbToHex } from './rgb';
import {
  palettebroToHsl,
  palettebroToLch,
  palettebroToRgb,
} from '../conversion';
import { formatHsl } from './hsl';
import { formatLch } from './lch';
import { formatRgb } from './rgb';
import type { ColorFormat, PalettebroColor } from '../../types';
import { ColorFormatEnum } from '../../const';

export const formatPalettebroToHex = (color: PalettebroColor) =>
  formatRgbToHex(palettebroToRgb(color));

export const formatPalettebro = (color: PalettebroColor, precision = 3) =>
  color?.a !== undefined
    ? formatRgb(palettebroToRgb(color), precision)
    : formatPalettebroToHex(color);

export const formatPalettebroTo = (
  color: PalettebroColor,
  format: ColorFormat,
  precision = 3,
) =>
  format === ColorFormatEnum.hex
    ? formatPalettebroToHex(color)
    : format === ColorFormatEnum.hsl
      ? formatHsl(palettebroToHsl(color), precision)
      : format === ColorFormatEnum.lch
        ? formatLch(palettebroToLch(color), precision)
        : formatRgb(palettebroToRgb(color), precision);
