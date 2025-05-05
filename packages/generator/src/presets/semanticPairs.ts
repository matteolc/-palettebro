import contrasting from '../nodes/contrasting';
import semantics from './semantics';
import type { Preset } from './types';

export default {
  label: 'Semantic color pairs',
  description: '',
  nodes: semantics.nodes.map((node) => ({
    ...node,
    children: [
      {
        type: contrasting.type,
        token: 'on-$',
      },
    ],
  })),
} as Preset;
