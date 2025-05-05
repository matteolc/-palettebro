import { rotateHue } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'scl',
  label: 'Left split complementary',
  description: '',
  params: [],
  samples: 'single',
  apply(color) {
    return rotateHue(color, -150);
  },
} as NodeDef;
