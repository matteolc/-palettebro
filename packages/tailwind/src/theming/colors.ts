import {
  MATERIAL_TONES,
  TAILWIND_TONES,
  BOOTSTRAP_TONES,
  ColorShadesPresetEnum,
  shadcnTheme,
  daisyuiTheme,
  FrameworkCompatibilityEnum,
} from '@palettebro/generator';
import surfaces from './surfaces';
import {
  fn_getColorShades,
  getColorVariants,
  shadcn_getColorVariants,
} from './functions';
import colors from './base-colors';
import type { PluginOptions } from '../types';

/**
 * Creates a map of color shades for a given color name.
 * @param colorShadesPreset - The color shades preset to use.
 * @returns An object containing the color shades.
 * @example
 * ```ts
 * const colorShades = getPaletteColors(ColorShadesPresetEnum.tailwind);
 * // {
 * //   primary: { 50: 'var(--color-primary-50)', 100: 'var(--color-primary-100)', ... },
 * // }
 * ```
 */
export const getPaletteColors = (options: PluginOptions) => {
  const { colorShadesPreset, frameworkCompatibilty } = options;
  const getColorShades =
    {
      [ColorShadesPresetEnum.mui]: fn_getColorShades(MATERIAL_TONES),
      [ColorShadesPresetEnum.tailwind]: fn_getColorShades(TAILWIND_TONES),
      [ColorShadesPresetEnum.bootstrap]: fn_getColorShades(BOOTSTRAP_TONES),
    }[colorShadesPreset ?? ColorShadesPresetEnum.tailwind];
  const getFrameworkCompatibilty =
    {
      [FrameworkCompatibilityEnum.shadcn]: shadcnTheme,
      [FrameworkCompatibilityEnum.daisyui]: daisyuiTheme,
      [FrameworkCompatibilityEnum.bootstrap]: shadcnTheme,
      [FrameworkCompatibilityEnum.mui]: shadcnTheme,
    }[frameworkCompatibilty ?? FrameworkCompatibilityEnum.shadcn];

  return {
    ...colors.reduce(
      (acc, color) => Object.assign(acc, getColorVariants(color)),
      {},
    ),
    ...colors.reduce<
      Record<
        string,
        {
          [key: string | number]: string | undefined;
        }
      >
    >((acc, color) => {
      acc[color] = {
        ...getColorShades(color),
        ...shadcn_getColorVariants(color),
      };
      return acc;
    }, {}),
    ...surfaces,
    ...getFrameworkCompatibilty,
  };
};
