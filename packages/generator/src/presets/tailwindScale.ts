import lightness from '../nodes/lightness';
import type { Preset } from './types';
import { TAILWIND_TONES } from '../const';

export default (options?: {
  reverseLightDarkShades?: boolean;
}) => {
  const { reverseLightDarkShades } = options ?? { reverseLightDarkShades: false };

  // Map Tailwind tones to their corresponding lightness values
  const tonesToLightness: Record<number, number> = {
    50: 95,
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: 50,
    600: 40,
    700: 30,
    800: 20,
    900: 10,
    950: 5,
  };

  return {
    label: 'Tailwind Scale',
    description: 'Tailwind scale with tones from 50 to 950',
    nodes: TAILWIND_TONES.map((tone) => ({
      type: lightness.type,
      token: `$-${tone}`,
      args: {
        amount: reverseLightDarkShades ? 100 - tonesToLightness[tone] : tonesToLightness[tone],
      },
    })),
  } as Preset;
}; 