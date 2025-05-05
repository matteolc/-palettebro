import lightness from '../nodes/lightness';
import type { Preset } from './types';
import { BOOTSTRAP_TONES } from '../const';

export default (options?: {
  reverseLightDarkShades?: boolean;
}) => {
  const { reverseLightDarkShades } = options ?? {
    isDark: false,
    reverseLightDarkShades: false,
  };

  // Map Bootstrap tones to their corresponding lightness values
  const tonesToLightness: Record<number, number> = {
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: 50,
    600: 40,
    700: 30,
    800: 20,
    900: 10,
  };

  return {
    label: 'Bootstrap Scale',
    description: 'Bootstrap Design scale with tones from 100 to 900',
    nodes: BOOTSTRAP_TONES.map((tone) => ({
      type: lightness.type,
      token: `$-${tone}`,
      args: {
        amount: reverseLightDarkShades
          ? 100 - tonesToLightness[tone]
          : tonesToLightness[tone],
      },
    })),
  } as Preset;
};
