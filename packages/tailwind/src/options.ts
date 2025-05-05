import {
  ColorShadesPresetEnum,
  ThemeVariantEnum,
  randomUsableColor,
  formatPalettebroToHex,
  StaticThemePresetEnum,
  FrameworkCompatibilityEnum,
} from '@palettebro/generator';
import type { PluginOptions } from './types';

/**
 * Default plugin options.
 * @see {@link PluginOptions}
 */
export default {
  primary: formatPalettebroToHex(randomUsableColor()),
  variant: ThemeVariantEnum.static,
  preset: StaticThemePresetEnum['hue-shift'],
  reverse: false,
  contrast: 0,
  reverseLightDarkShades: true,
  colorShadesPreset: ColorShadesPresetEnum.tailwind,
  frameworkCompatibilty: FrameworkCompatibilityEnum.shadcn,
} satisfies PluginOptions;
