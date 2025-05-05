import { closestHue } from './closest-hue';
import type { PalettebroColor } from '../types';
import { setHue } from './set-hue';

export const blueishColor = (color: PalettebroColor, target = 244) =>
  setHue(color, closestHue(color, target));
