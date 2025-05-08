import {
  presetSampleWithKeyAndNameHash,
  presetSamplesWithKeyAndName,
} from '../index';
import dynamicPalette from '../presets/dynamicPalette';
import type { GeneratorOptions, PalettebroColor } from '../types';

export const getDynamicPalette = (theme: GeneratorOptions) => {
  const { primaryColor, secondaryColor, accentColor, format } = theme;

  const createPaletteSamples = (token: 'primary' | 'secondary' | 'accent', color: PalettebroColor) =>
    presetSamplesWithKeyAndName(
      dynamicPalette({ token, ...theme }).nodes,
      color
    );

  const samples = [
    ...createPaletteSamples('primary', primaryColor),
    ...(secondaryColor ? createPaletteSamples('secondary', secondaryColor) : []),
    ...(accentColor ? createPaletteSamples('accent', accentColor) : []),
  ];

  return presetSampleWithKeyAndNameHash(samples, format);
};
