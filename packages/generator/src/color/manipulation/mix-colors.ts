import { clamp } from '../../utils/math';
import type { PalettebroColor } from '../types';

/**
 * Mixes two colors with optional weight.
 * Uses linear interpolation in the Oklab color space for perceptual uniformity.
 * 
 * @param color1 - The first color to mix
 * @param color2 - The second color to mix
 * @param weight - The mixing weight (0-1), where 0 is full color1 and 1 is full color2
 */
export const mixColors = (
  color1: PalettebroColor,
  color2: PalettebroColor,
  weight = 0.5
): PalettebroColor => {
  const w = clamp(weight, 0, 1);
  
  // Linear interpolation between the two colors
  return {
    h: color1.h + (color2.h - color1.h) * w,
    s: color1.s + (color2.s - color1.s) * w,
    l: color1.l + (color2.l - color1.l) * w,
    a: color1.a !== undefined && color2.a !== undefined 
      ? color1.a + (color2.a - color1.a) * w 
      : undefined,
  };
}; 