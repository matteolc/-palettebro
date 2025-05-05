import lightness from '../nodes/lightness';
import saturation from '../nodes/saturation';
import type { Preset } from './types';

export default (options?: {
  isDark: boolean;
}) => {
  const { isDark } = options ?? { isDark: false };

  return {
    label: 'Outline Scale',
    description: 'Material Design outline colors with neutral variant palette',
    nodes: [
      {
        type: saturation.type,
        token: 'neutral-variant',
        isHidden: true,
        args: {
          // Using a low saturation to match MUI's neutralVariant (chroma/8 + 4)
          amount: 15,
        },
        children: [
          {
            type: lightness.type,
            token: 'outline',
            args: {
              // outline uses tone 60 in dark mode, 50 in light mode
              amount: isDark ? 60 : 50,
            },
          },
          {
            type: lightness.type,
            token: 'outline-variant',
            args: {
              // outline variant uses tone 30 in dark mode, 80 in light mode
              amount: isDark ? 30 : 80,
            },
          },
        ],
      },
    ],
  } as Preset;
}; 