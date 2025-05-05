import { closestHue } from './closest-hue';
import type { PalettebroColor } from '../types';
import { setHue } from './set-hue';

export const orangeishColor = (color: PalettebroColor, target = 57) =>
  setHue(color, closestHue(color, target));
