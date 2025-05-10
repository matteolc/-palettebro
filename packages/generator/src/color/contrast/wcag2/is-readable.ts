import { Wcag2LevelEnum, Wcag2SizeEnum } from '../const';
import type { Wcag2Grade, Wcag2Size } from '../types';
import { wcag2Contrast } from './contrast';

/**
 * Check if a foreground color is readable on a background color according to WCAG2 guidelines
 * @param bg - The background color
 * @param fg - The foreground color
 * @param options - The options for the contrast check
 * @returns true if the foreground color is readable on the background color, false otherwise
 */
export const isWcag2Readable = (
  bg: string,
  fg: string,
  options?: { level?: Wcag2Grade; size?: Wcag2Size },
) => {
  const contrast = wcag2Contrast(bg, fg);
  if (!contrast) return false;

  const { level = Wcag2LevelEnum.AA, size = Wcag2SizeEnum.small } = options ?? {};

  switch (level + size) {
    case `${Wcag2LevelEnum.AA}${Wcag2SizeEnum.small}`:
    case `${Wcag2LevelEnum.AAA}${Wcag2SizeEnum.large}`:
      return contrast >= 4.5;
    case `${Wcag2LevelEnum.AA}${Wcag2SizeEnum.large}`:
      return contrast >= 3;
    case `${Wcag2LevelEnum.AAA}${Wcag2SizeEnum.small}`:
      return contrast >= 7;
    default:
      return false;
  }
};
