import lightness from '../nodes/lightness';
import type { Preset } from './types';

export default (options?: {
  isDark: boolean;
}) => {
  const { isDark } = options ?? { isDark: false };
  return {
    label: 'Background',
    description: 'Background variations',
    nodes: [
      {
        type: lightness.type,
        token: 'background',
        args: {
          amount: isDark ? 6 : 98,
        },
      },
      {
        type: lightness.type,
        token: 'on-background',
        args: {
          amount: isDark ? 94 : 8,
        },
      },
    ],
  } as Preset;
};
