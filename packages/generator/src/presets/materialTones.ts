import lightness from '../nodes/lightness';
import adaptiveContrast from '../nodes/adaptiveContrast';
import type { Preset } from './types';

export default (options?: {
  isDark: boolean;
}) => {
  const { isDark } = options ?? { isDark: false };

  return {
    label: 'Material tones',
    description: 'Material Design tone variations',
    nodes: [
      {
        type: adaptiveContrast.type,
        token: 'on-$',
        args: {
          lightAmount: 100, // Full white in dark mode
          contrastLevel: 0, // Normal contrast level
          threshold: 70, // Switch to contrast mode if base color is >70% light
        },
      },
      {
        type: lightness.type,
        token: '$-container',
        args: {
          amount: isDark ? 30 : 90,
        },
      },
      {
        type: lightness.type,
        token: 'on-$-container',
        args: {
          amount: isDark ? 90 : 30,
        },
      },
    ],
  } as Preset;
}; 