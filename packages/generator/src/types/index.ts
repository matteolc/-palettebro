import type { z } from 'zod';
import type { PalettebroColor } from '../color/types';
import type {
  ColorFormats,
  ColorSchemes,
  ColorShadesPresets,
  FrameworkCompatibilities,
  MuiThemePresets,
  StaticThemePresets,
  ThemeSchema,
  ThemeVariants,
} from '../const';

export type ThemeColorScheme = (typeof ColorSchemes)[number];
export type ThemeVariant = (typeof ThemeVariants)[number];
export type StaticThemePreset = (typeof StaticThemePresets)[number];
export type MuiThemePreset = (typeof MuiThemePresets)[number];
export type ColorShadesPreset = (typeof ColorShadesPresets)[number];
export type ColorFormat = (typeof ColorFormats)[number];
export type FrameworkCompatibility = (typeof FrameworkCompatibilities)[number];

export type Theme = z.input<typeof ThemeSchema>;

export type GeneratorOptions = {
  primaryColor: PalettebroColor;
  secondaryColor?: PalettebroColor;
  accentColor?: PalettebroColor;
  isDark: boolean;
} & Pick<
  Theme,
    'format'
  | 'preset'
  | 'contrast'
  | 'reverse'
  | 'reverseLightDarkShades'
  | 'colorShadesPreset'
>;

export type Palette = Record<string, { color: string; name: string }>;

export type {
  PalettebroColor,
  RgbColor,
  HslColor,
  LchColor,
} from '../color/types';
