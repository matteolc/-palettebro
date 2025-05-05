import lightness from '../nodes/lightness';
import saturation from '../nodes/saturation';
import type { Preset } from './types';

export default (options?: {
  isDark: boolean;
}) => {
  return {
    label: 'Shadow and Scrim',
    description: 'Material Design shadow and scrim colors from neutral palette',
    nodes: [
      {
        type: saturation.type,
        token: 'neutral',
        isHidden: true,
        args: {
          // Using very low saturation for neutral palette
          amount: 5,
        },
        children: [
          {
            type: lightness.type,
            token: 'shadow',
            args: {
              // Both shadow and scrim use tone 0
              amount: 0,
            },
          },
          {
            type: lightness.type,
            token: 'scrim',
            args: {
              // Both shadow and scrim use tone 0
              amount: 0,
            },
          },
        ],
      },
    ],
  } as Preset;
}; 