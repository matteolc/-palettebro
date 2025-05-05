import { reddishColor } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'neg',
  label: 'Negative',
  description: 'A reddish color to convey negativeness',
  params: [],
  samples: 'single',
  apply(color) {
    return reddishColor(color);
  },
} as NodeDef;
