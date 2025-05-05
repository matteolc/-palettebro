import splitComplementaryLeft from '../nodes/splitComplementaryLeft';
import splitComplementaryRight from '../nodes/splitComplementaryRight';
import type { Preset } from './types';

export default {
  label: 'Split complementary',
  description: '',
  nodes: [
    {
      type: splitComplementaryLeft.type,
      token: 'left-$-complementary',
    },
    {
      type: splitComplementaryRight.type,
      token: 'right-$-complementary',
    },
  ],
} as Preset;
