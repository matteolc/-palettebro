import lightness from '../nodes/lightness';
import saturation from '../nodes/saturation';
import type { Preset } from './types';

export default {
  label: 'Neutral',
  description: 'Desaturated color with various lightness levels',
  nodes: [
    {
      type: saturation.type,
      isHidden: true,
      token: 'desaturated-$',
      args: {
        amount: 5,
      },
      children: [
        {
          type: lightness.type,
          token: 'neutral-white',
          args: {
            amount: 98,
          },
        },
        {
          type: lightness.type,
          token: 'neutral-light',
          args: {
            amount: 85,
          },
        },
        {
          type: lightness.type,
          token: 'neutral',
          args: {
            amount: 50,
          },
        },
        {
          type: lightness.type,
          token: 'neutral-dark',
          args: {
            amount: 15,
          },
        },
        {
          type: lightness.type,
          token: 'neutral-black',
          args: {
            amount: 2,
          },
        },
      ],
    },
  ],
} as Preset;
