import { wcag2Grade } from '..';
import { wcag2Contrast } from './contrast';

export const wcag2ContrastGrade = (bg: string, fg: string) => {
  const contrast = wcag2Contrast(bg, fg);
  if (!contrast) return wcag2Grade(0);

  return wcag2Grade(contrast);
};
