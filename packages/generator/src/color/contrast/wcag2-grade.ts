import type { Wcag2Grade } from './types';
import { Wcag2Level } from './const';

export function wcag2Grade(contrastLevel: number): Wcag2Grade {
  if (contrastLevel >= Wcag2Level.aaa) return 'AAA';
  if (contrastLevel >= Wcag2Level.aa) return 'AA';
  if (contrastLevel >= Wcag2Level.aa18) return 'AA18';
  return 'KO';
}
