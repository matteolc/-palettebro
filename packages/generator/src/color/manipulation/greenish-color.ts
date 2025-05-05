import { closestHue } from './closest-hue';
import type { PalettebroColor } from '../types';
import { setHue } from './set-hue';

export const greenishColor = (color: PalettebroColor, target = 144) =>
  setHue(color, closestHue(color, target));
