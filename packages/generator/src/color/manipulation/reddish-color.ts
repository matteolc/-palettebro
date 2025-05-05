import { closestHue } from './closest-hue';
import type { PalettebroColor } from '../types';
import { setHue } from './set-hue';

export const reddishColor = (color: PalettebroColor, target = 25) =>
  setHue(color, closestHue(color, target));
