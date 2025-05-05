import {
  presetSampleWithKeyAndNameHash,
  presetSamplesWithKeyAndName,
} from '../index';
import staticPalette from '../presets/staticPalette';
import type { ThemePalette } from '../types';

export const getStaticPalette = (theme: ThemePalette) =>
  presetSampleWithKeyAndNameHash([
    ...presetSamplesWithKeyAndName(
      staticPalette(theme).nodes,
      theme.primaryColor,
    ),
  ], theme.format);
