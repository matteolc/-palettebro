import { blueishColor } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'inf',
  label: 'Informative',
  description: 'A blueish color to convey information',
  params: [],
  samples: 'single',
  apply(color) {
    return blueishColor(color);
  },
} as NodeDef;
