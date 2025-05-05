import lightness from '../nodes/lightness';
import type { Preset } from './types';

export default {
  label: 'Scale',
  description: 'Different lightness levels from dark to light',
  nodes: [
    { type: lightness.type, token: '$-950', args: { amount: 0 } },
    { type: lightness.type, token: '$-900', args: { amount: 10 } },
    { type: lightness.type, token: '$-800', args: { amount: 20 } },
    { type: lightness.type, token: '$-700', args: { amount: 30 } },
    { type: lightness.type, token: '$-600', args: { amount: 40 } },
    { type: lightness.type, token: '$-500', args: { amount: 50 } },
    { type: lightness.type, token: '$-400', args: { amount: 60 } },
    { type: lightness.type, token: '$-300', args: { amount: 70 } },
    { type: lightness.type, token: '$-200', args: { amount: 80 } },
    { type: lightness.type, token: '$-100', args: { amount: 90 } },
    { type: lightness.type, token: '$-50', args: { amount: 100 } },
  ],
} as Preset;
