import type { ContrastType } from './types';
import type { Wcag3Level } from './const';

import {
  type Wcag2Level,
  wcag2To3Equivalences,
  wcag3To2Equivalences,
} from './const';

/**
 * Convert a WCAG level between WCAG2 and WCAG3
 * @param type - The type of contrast
 * @param level - The level to convert
 * @returns The converted level
 */
export const equivalence = (type: ContrastType, level: number) => {
  switch (type) {
    case 'wcag2':
      return wcag3To2Equivalences?.[level as Wcag3Level] ?? level;

    case 'wcag3':
      return wcag2To3Equivalences?.[level as Wcag2Level] ?? level;

    default:
      return level;
  }
};
