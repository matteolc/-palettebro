import type {
  ColorShadesPreset,
  StaticThemePreset,
  ThemeVariant,
  FrameworkCompatibility,
} from '@palettebro/generator';

/**
 * Plugin options.
 * @property {string} primary - The primary color.
 * @property {string} secondary - The secondary color.
 * @property {string} accent - The accent color.
 * @property {ThemeVariant} variant - The theme variant.
 * @property {StaticThemePreset} preset - The theme preset.
 * @property {boolean} reverse - Whether to reverse the secondary and accent colors.
 * @property {number} contrast - The contrast value.
 * @property {boolean} reverseLightDarkShades - Whether to reverse the light and dark shades.
 * @property {ColorShadesPreset} colorShadesPreset - The color shades preset.
 * @property {FrameworkCompatibility} frameworkCompatibilty - The framework compatibility.
 */
export type PluginOptions = {
  primary?: string;
  secondary?: string;
  accent?: string;
  variant?: ThemeVariant;
  preset?: StaticThemePreset;
  reverse?: boolean;
  contrast?: number;
  reverseLightDarkShades?: boolean;
  colorShadesPreset?: ColorShadesPreset;
  frameworkCompatibilty?: FrameworkCompatibility;
};

export type CssInJs = {
  [key: string]: string | string[] | CssInJs | CssInJs[];
};
