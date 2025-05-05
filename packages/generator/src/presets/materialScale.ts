import lightness from '../nodes/lightness';
import type { Preset } from './types';
import { MATERIAL_TONES } from '../const';

export default (options?: {
  reverseLightDarkShades?: boolean;
}) => {
  const { reverseLightDarkShades } = options ?? { isDark: false, reverseLightDarkShades: false };

  return {
    label: 'Material Scale',
    description: 'Material Design scale with tones from 0 to 100',
    nodes: MATERIAL_TONES.map((tone) => ({
      type: lightness.type,
      token: `$-${tone}`,
      args: {
        amount: reverseLightDarkShades ? 100 - tone : tone,
      },
    })),
  } as Preset;
}; 