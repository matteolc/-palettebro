import { closestAngle } from '../../utils/math';
import type { PalettebroColor } from '../types';

export const closestHue = ({ h }: PalettebroColor, target: number) =>
  closestAngle(h, target, 15);
