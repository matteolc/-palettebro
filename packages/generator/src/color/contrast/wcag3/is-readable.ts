import { Wcag3ContrastThresholds } from '../const';
import { wcag3Contrast } from './contrast';

/**
 * Check if a foreground color is readable on a background color according to WCAG3 (APCA) bronze guidelines
 * @param bg - The background color
 * @param fg - The foreground color
 * @param options - The options for the contrast check
 * @returns true if the foreground color is readable on the background color, false otherwise
 */
export const isWcag3Readable = (
  bg: string,
  fg: string,
  options?: { size?: 'body' | 'large' | 'nonText' },
) => {
  const contrast = wcag3Contrast(bg, fg);
  const size = options?.size ?? 'body';
  const threshold = Wcag3ContrastThresholds.bronze[size];
  return contrast >= threshold;
};
