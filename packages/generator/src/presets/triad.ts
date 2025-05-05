import triadLeft from '../nodes/triadLeft';
import triadRight from '../nodes/triadRight';
import type { Preset } from './types';

export default {
  label: 'Triad',
  description: '',
  nodes: [
    {
      type: triadLeft.type,
      token: 'left-$-triad',
    },
    {
      type: triadRight.type,
      token: 'right-$-triad',
    },
  ],
} as Preset;
