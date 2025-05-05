import { temperatureToHue } from '../manipulation';
import type { PalettebroColor } from '../types';
import { scaleLightness } from './scale-lightness';

export const highlightColor = (
  color: PalettebroColor,
  temp: number,
  amount = 25,
  hueShiftAmount = 15,
) => scaleLightness(color, amount, temperatureToHue(temp), hueShiftAmount);
