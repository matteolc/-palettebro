import { Wcag3ContrastThresholds } from '../const';
import type { Wcag3Grade } from '../types';

export const wcag3Grade = (contrast: number, size: 'body' | 'large' | 'nonText' = 'body'): Wcag3Grade | undefined => {
  // Only bronze is defined in the spec as of 2024
  if (size === 'body' && contrast >= Wcag3ContrastThresholds.bronze.body) return 'bronze';
  if (size === 'large' && contrast >= Wcag3ContrastThresholds.bronze.large) return 'bronze';
  if (size === 'nonText' && contrast >= Wcag3ContrastThresholds.bronze.nonText) return 'bronze';
  return undefined; // Not passing bronze
};
