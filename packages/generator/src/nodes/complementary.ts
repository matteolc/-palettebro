import { rotateHue } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'cmp',
  label: 'Complementary',
  description: 'The opposite color',
  params: [],
  samples: 'single',
  apply(color) {
    return rotateHue(color, 180);
  },
} as NodeDef;
