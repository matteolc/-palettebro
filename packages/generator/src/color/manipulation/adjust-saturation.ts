import { clamp } from '../../utils/math';
import type { PalettebroColor } from '../types';

/**
 * Adjusts color saturation while preserving perceived brightness.
 * Uses lightness compensation to maintain visual balance.
 * 
 * @param color - The source color to modify
 * @param amount - The amount to adjust saturation (-100 to 100)
 */
export const adjustSaturation = (
  { h, s, l, ...color }: PalettebroColor,
  amount: number,
) => {
  const newSaturation = clamp(s + amount, 0, 100);
  
  // Compensate lightness to maintain perceived brightness
  // More saturated colors appear darker, so we adjust lightness accordingly
  const lightnessCompensation = (s - newSaturation) * 0.1;
  
  return {
    ...color,
    s: newSaturation,
    l: clamp(l + lightnessCompensation, 0, 100),
    h,
  };
}; 