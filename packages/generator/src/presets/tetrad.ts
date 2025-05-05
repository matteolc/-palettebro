import tetradLeft from '../nodes/tetradLeft';
import tetradRight from '../nodes/tetradRight';
import type { Preset } from './types';

export default {
  label: 'Tetrad',
  description: '',
  nodes: [
    {
      type: tetradLeft.type,
      token: 'left-$-tetrad',
    },
    {
      type: tetradRight.type,
      token: 'right-$-tetrad',
    },
  ],
} as Preset;
