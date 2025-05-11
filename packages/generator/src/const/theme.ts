import {
  object,
  optional,
  enum as enumType,
  string,
  boolean,
  number,
} from 'valibot';
import { createEnum } from '../utils/create-enum';

export const ColorSchemes = ['light', 'dark'] as const;
export const ThemeColorSchemeEnum = createEnum(ColorSchemes);

export const ThemeVariants = ['mui', 'static', 'dynamic'] as const;
export const ThemeVariantEnum = createEnum(ThemeVariants);

export const StaticThemePresets = [
  'split-complementary',
  'tetrad',
  'triad',
  'hue-shift',
  'depth',
  'duotone',
  'neo-brutalist',
  'glassmorphism',
  'cyberpunk',
  'vaporwave',
  'retro-futurism',
  'nordic-minimalism',
  'sunset-gradient',
  'electric-neon',
  'earth-tones',
  'pastel-dreams',
  'monochrome-depth',
] as const;
export const StaticThemePresetEnum = createEnum(StaticThemePresets);

export const MuiThemePresets = [
  'content',
  'expressive',
  'fidelity',
  'fruit-salad',
  'monochrome',
  'neutral',
  'rainbow',
  'tonal-spot',
  'vibrant',
] as const;
export const MuiThemePresetEnum = createEnum(MuiThemePresets);

export const ThemePresetEnum = createEnum([
  ...StaticThemePresets,
  ...MuiThemePresets,
]);

export const ColorShadesPresets = ['tailwind', 'mui', 'bootstrap'] as const;
export const ColorShadesPresetEnum = createEnum(ColorShadesPresets);

export const ColorFormats = ['rgb', 'hex', 'hsl', 'lch', 'oklch'] as const;
export const ColorFormatEnum = createEnum(ColorFormats);

export const FrameworkCompatibilities = ['shadcn', 'daisyui'] as const;
export const FrameworkCompatibilityEnum = createEnum(FrameworkCompatibilities);

export const ThemeSchema = object({
  format: optional(enumType(ColorFormatEnum), ColorFormatEnum.hex),
  'color-scheme': optional(
    enumType(ThemeColorSchemeEnum),
    ThemeColorSchemeEnum.light,
  ),
  variant: optional(enumType(ThemeVariantEnum), ThemeVariantEnum.static),
  preset: optional(
    enumType(ThemePresetEnum),
    StaticThemePresetEnum['hue-shift'],
  ),
  reverse: optional(boolean(), false),
  contrast: optional(number(), 0),
  reverseLightDarkShades: optional(boolean(), true),
  colorShadesPreset: optional(
    enumType(ColorShadesPresetEnum),
    ColorShadesPresetEnum.tailwind,
  ),
  frameworkCompatibilty: optional(
    enumType(FrameworkCompatibilityEnum),
    FrameworkCompatibilityEnum.shadcn,
  ),
  baseColors: object({
    primary: string(),
    secondary: optional(string()),
    accent: optional(string()),
  }),
});
