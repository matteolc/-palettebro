import { greenishColor } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'pos',
  label: 'Positive',
  description: 'A greenish color to convey positiveness',
  params: [],
  samples: 'single',
  apply(color) {
    return greenishColor(color);
  },
} as NodeDef;
