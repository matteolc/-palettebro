import { Wcag3LevelEnum } from '../const';
import type { Wcag3Grade } from '../types';
import { wcag3Contrast } from './contrast';

/**
 * Check if a foreground color is readable on a background color according to WCAG3 guidelines
 * @param bg - The background color
 * @param fg - The foreground color
 * @param options - The options for the contrast check
 * @returns true if the foreground color is readable on the background color, false otherwise
 */
export const isWcag3Readable = (
  bg: string,
  fg: string,
  options?: { level?: Wcag3Grade; size?: string },
) => {
  const contrast = wcag3Contrast(bg, fg);
  const { level = Wcag3LevelEnum[0], size = 'regular' } = options ?? {};
  let threshold = 60;   
  switch (size) {
    case 'regular':
      threshold = level === '0' ? 75 : 60;
      break;
    case 'large':
      threshold = level === '0' ? 60 : 45;
      break;
    default:
      threshold = 60;
  }
  return contrast >= threshold;
};
