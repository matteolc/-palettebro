import { wcag3Grade } from './grade';
import { wcag3Contrast } from './contrast';

export const wcag3ContrastGrade = (bg: string, fg: string) => {
  const contrast = wcag3Contrast(bg, fg);
  return wcag3Grade(contrast);
};
