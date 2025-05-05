import { rotateHue } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'trr',
  label: 'Right triad',
  description: '',
  params: [],
  samples: 'single',
  apply(color) {
    return rotateHue(color, 120);
  },
} as NodeDef;
