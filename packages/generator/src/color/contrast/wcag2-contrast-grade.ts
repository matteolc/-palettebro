import { wcag2Grade } from '../contrast';
import { wcag2Contrast } from './wcag2-contrast';

export const wcag2ContrastGrade = (bg: string, fg: string) => {
  const contrast = wcag2Contrast(bg, fg);
  if (!contrast) return 'KO';

  return wcag2Grade(contrast);
};
