import { palettebroToLch } from '../color/conversion/lch';
import { formatRgb } from '../color/formatting/rgb';
import { palettebroToHsl, palettebroToRgb } from '../color/conversion';
import { formatRgbToHex } from '../color/formatting/rgb';
import type { PalettebroColor } from '../color/types';
import { ColorFormatEnum } from './theme';
import { formatHsl } from '../color/formatting/hsl';
import { formatLch } from '../color/formatting/lch';
import { colorToRawOklchString } from '../color/formatting/oklch';
import convert from 'simple-color-converter';

export const formatters = {
  [ColorFormatEnum.rgb]: (color: PalettebroColor) =>
    formatRgb(palettebroToRgb(color)),
  [ColorFormatEnum.hex]: (color: PalettebroColor) =>
    formatRgbToHex(palettebroToRgb(color)),
  [ColorFormatEnum.hsl]: (color: PalettebroColor) =>
    formatHsl(palettebroToHsl(color)),
  [ColorFormatEnum.lch]: (color: PalettebroColor) =>
    formatLch(palettebroToLch(color)),
  [ColorFormatEnum.oklch]: (color: PalettebroColor) =>
    `oklch(${colorToRawOklchString(formatRgbToHex(palettebroToRgb(color)))})`,
  [ColorFormatEnum.pantone]: (color: PalettebroColor) =>
    new convert({
      color: formatRgbToHex(palettebroToRgb(color)),
      to: ColorFormatEnum.pantone,
    }).color,
};
