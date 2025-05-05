import { rotateHue } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'ttl',
  label: 'Left tetrad',
  description: '',
  params: [],
  samples: 'single',
  apply(color) {
    return rotateHue(color, -90);
  },
} as NodeDef;
