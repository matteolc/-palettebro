import { parse, parseHex, type Rgb } from 'culori';
import { hslToPalettebro, lchToPalettebro, rgbToPalettebro } from './conversion';
import { hslFromCulori, lchFromCulori, rgbFromCulori } from './culori';
import type { PalettebroColor } from './types';
import { converter } from 'culori';
import { ColorFormatEnum } from '..';

export const parseColor = (
  color?: string | null,
): [string, PalettebroColor | undefined] => {
  try {
    if (!color || typeof color !== 'string') {
      console.error('Invalid color input', color);
      return [color ?? '', undefined];
    }

    const hex = parseHex(color);

    if (hex) {
      return [ColorFormatEnum.hex, rgbToPalettebro(rgbFromCulori(hex as Rgb))];
    }

    const parsed = parse(color);

    switch (parsed?.mode) {
      case ColorFormatEnum.rgb:
        return [ColorFormatEnum.rgb, rgbToPalettebro(rgbFromCulori(parsed))];
      case ColorFormatEnum.hsl:
        return [ColorFormatEnum.hsl, hslToPalettebro(hslFromCulori(parsed))];
      case ColorFormatEnum.lch:
        return [ColorFormatEnum.lch, lchToPalettebro(lchFromCulori(parsed))];
      case ColorFormatEnum.oklch:
        return [
          ColorFormatEnum.lch,
          lchToPalettebro({ ...converter('lch')(parsed), h: parsed.h ?? 0 }),
        ];
      default:
        return [color, undefined];
    }
  } catch (error) {
    console.error(`Color parsing failed for "${color}":`, error);
    return [color ?? '', undefined];
  }
};
