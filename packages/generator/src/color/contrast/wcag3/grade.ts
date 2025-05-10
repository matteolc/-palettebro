import { Wcag3Level, Wcag3LevelEnum } from '../const';
import type { Wcag3Grade } from '../types';

export const wcag3Grade = (level: number): Wcag3Grade => {
  if (level >= Wcag3Level.all) return Wcag3LevelEnum[5];
  if (level >= Wcag3Level.body) return Wcag3LevelEnum[4];
  if (level >= Wcag3Level.large) return Wcag3LevelEnum[3];
  if (level >= Wcag3Level.text) return Wcag3LevelEnum[2];
  if (level >= Wcag3Level.nonText) return Wcag3LevelEnum[1];
  return Wcag3LevelEnum[0];
};
