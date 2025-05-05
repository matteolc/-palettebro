import { Wcag3Level } from './const';
import type { Wcag3Grade } from './types';

export const wcag3Grade = (level: number): Wcag3Grade => {
  if (level >= Wcag3Level.all) return '5';
  if (level >= Wcag3Level.body) return '4';
  if (level >= Wcag3Level.large) return '3';
  if (level >= Wcag3Level.text) return '2';
  if (level >= Wcag3Level.nonText) return '1';
  return '0';
};
