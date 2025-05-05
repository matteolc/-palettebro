import informative from '../nodes/informative';
import negative from '../nodes/negative';
import positive from '../nodes/positive';
import warning from '../nodes/warning';
import type { Preset } from './types';

export default {
  label: 'Semantic colors',
  description:
    'Colors to convey information, positiveness, danger, negativeness',
  nodes: [
    {
      type: informative.type,
      token: 'info',
    },
    {
      type: positive.type,
      token: 'success',
    },
    {
      type: warning.type,
      token: 'warning',
    },
    {
      type: negative.type,
      token: 'error',
    },
  ],
} as Preset;
