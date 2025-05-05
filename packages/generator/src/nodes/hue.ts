import { rotateHue } from '../color/manipulation';
import type { NodeDef } from './types';

export default {
  type: 'h',
  label: 'Hue',
  params: [
    {
      type: 'range',
      name: 'degrees',
      label: 'Degrees',
      unit: '°',
      min: 0,
      max: 360,
      default: 180,
    },
  ],
  samples: 'continuous',
  apply(color, { degrees }) {
    return rotateHue(color, degrees);
  },
} as NodeDef;
