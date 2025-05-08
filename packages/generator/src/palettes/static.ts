import {
  presetSampleWithKeyAndNameHash,
  presetSamplesWithKeyAndName,
} from '../index';
import staticPalette from '../presets/staticPalette';
import type { GeneratorOptions } from '../types';

export const getStaticPalette = (theme: GeneratorOptions) =>
  presetSampleWithKeyAndNameHash([
    ...presetSamplesWithKeyAndName(
      staticPalette(theme).nodes,
      theme.primaryColor,
    ),
  ], theme.format);
