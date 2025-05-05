import { rotateHue } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'ttr',
  label: 'Right tetrad',
  description: '',
  params: [],
  samples: 'single',
  apply(color) {
    return rotateHue(color, 90);
  },
} as NodeDef;
