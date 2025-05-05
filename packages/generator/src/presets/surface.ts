import tone from '../nodes/tone';
import type { Preset } from './types';
import { ContrastCurve } from '../utils/contrast-curve';

export default (options?: {
  isDark: boolean;
  contrastLevel?: number;
}) => {
  const { isDark, contrastLevel = 0 } = options ?? { isDark: false, contrastLevel: 0 };
  return {
    label: 'Surface',
    description: 'Material UI surface variations',
    nodes: [
      {
        type: tone.type,
        token: 'surface',
        args: {
          amount: isDark ? 6 : 98,
        },
      },
      {
        type: tone.type,
        token: 'surface-dim',
        args: {
          amount: isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(contrastLevel),
        },
      },
      {
        type: tone.type,
        token: 'surface-bright',
        args: {
          amount: isDark ? new ContrastCurve(24, 24, 29, 34).get(contrastLevel) : 98,
        },
      },
      {
        type: tone.type,
        token: 'surface-container-lowest',
        args: {
          amount: isDark ? new ContrastCurve(4, 4, 2, 0).get(contrastLevel) : 100,
        },
      },
      {
        type: tone.type,
        token: 'surface-container-low',
        args: {
          amount: isDark 
            ? new ContrastCurve(10, 10, 11, 12).get(contrastLevel)
            : new ContrastCurve(96, 96, 96, 95).get(contrastLevel),
        },
      },
      {
        type: tone.type,
        token: 'surface-container',
        args: {
          amount: isDark
            ? new ContrastCurve(12, 12, 16, 20).get(contrastLevel)
            : new ContrastCurve(94, 94, 92, 90).get(contrastLevel),
        },
      },
      {
        type: tone.type,
        token: 'surface-container-high',
        args: {
          amount: isDark
            ? new ContrastCurve(17, 17, 21, 25).get(contrastLevel)
            : new ContrastCurve(92, 92, 88, 85).get(contrastLevel),
        },
      },
      {
        type: tone.type,
        token: 'surface-container-highest',
        args: {
          amount: isDark
            ? new ContrastCurve(22, 22, 26, 30).get(contrastLevel)
            : new ContrastCurve(90, 90, 84, 80).get(contrastLevel),
        },
      },
      {
        type: tone.type,
        token: 'on-surface',
        args: {
          amount: isDark ? 90 : 10,
        },
      },
      {
        type: tone.type,
        token: 'surface-variant',
        args: {
          amount: isDark ? 30 : 90,
        },
      },
      {
        type: tone.type,
        token: 'on-surface-variant',
        args: {
          amount: isDark ? 80 : 30,
        },
      },
      {
        type: tone.type,
        token: 'inverse-surface',
        args: {
          amount: isDark ? 90 : 20,
        },
      },
      {
        type: tone.type,
        token: 'inverse-on-surface',
        args: {
          amount: isDark ? 20 : 95,
        },
      },
    ],
  } as Preset;
}; 