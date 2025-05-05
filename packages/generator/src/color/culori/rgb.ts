import {
  type Rgb,
  convertLabToLch,
  convertOklabToOkhsl,
  convertRgbToLab,
  convertRgbToOklab,
} from 'culori';
import type { RgbColor } from '../types';
import { ColorFormatEnum } from '../../const';

const rgbFromCulori = ({ r, g, b, alpha }: Rgb): RgbColor => ({
  r: r * 255,
  g: g * 255,
  b: b * 255,
  a: alpha,
});

const rgbToCulori = ({ r, g, b, a }: RgbColor): Rgb => ({
  mode: ColorFormatEnum.rgb,
  r: r / 255,
  g: g / 255,
  b: b / 255,
  alpha: a,
});

const culoriRgbToLch = (color: Rgb) =>
  convertLabToLch(convertRgbToLab(color));

const culoriRgbToOkhsl = (color: Rgb) =>
  convertOklabToOkhsl(convertRgbToOklab(color));

const culoriRgbToOklch = (color: Rgb) =>
  convertLabToLch(convertRgbToOklab(color), ColorFormatEnum.oklch);

export {
  rgbFromCulori,
  rgbToCulori,
  culoriRgbToLch,
  culoriRgbToOkhsl,
  culoriRgbToOklch,
};
