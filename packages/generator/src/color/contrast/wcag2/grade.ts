import type { Wcag2Grade } from '../types';
import { Wcag2Level, Wcag2LevelEnum } from '../const';

export function wcag2Grade(contrastLevel: number): Wcag2Grade {
  if (contrastLevel >= Wcag2Level.aaa) return Wcag2LevelEnum.AAA;
  if (contrastLevel >= Wcag2Level.aa) return Wcag2LevelEnum.AA;
  if (contrastLevel >= Wcag2Level.aa18) return Wcag2LevelEnum.AA18;
  return Wcag2LevelEnum.DNP;
}
