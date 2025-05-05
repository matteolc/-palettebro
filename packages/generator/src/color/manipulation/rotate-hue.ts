import { circular } from '../../utils/math';
import type { PalettebroColor } from '../types';

export const rotateHue = ({ h, ...color }: PalettebroColor, degrees: number) => ({
  ...color,
  h: circular(h + degrees),
});
