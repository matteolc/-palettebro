import * as v from 'valibot';
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

export const ThemePresetEnum =createEnum( [...StaticThemePresets, ...MuiThemePresets])

export const ColorShadesPresets = ['tailwind', 'mui', 'bootstrap'] as const;
export const ColorShadesPresetEnum = createEnum(ColorShadesPresets);

export const ColorFormats = [
  'rgb',
  'hex',
  'hsl',
  'lch',
  'oklch',
] as const;
export const ColorFormatEnum = createEnum(ColorFormats);

export const FrameworkCompatibilities = ['shadcn', 'daisyui'] as const;
export const FrameworkCompatibilityEnum = createEnum(FrameworkCompatibilities);

export const ThemeSchema = v.object({
  format: v.optional(v.enum(ColorFormatEnum), ColorFormatEnum.hex),
  'color-scheme': v.optional(v.enum(ThemeColorSchemeEnum), ThemeColorSchemeEnum.light),
  variant: v.optional(v.enum(ThemeVariantEnum), ThemeVariantEnum.static),
  preset: v.optional(v.enum(ThemePresetEnum), StaticThemePresetEnum['hue-shift']),
  reverse: v.optional(v.boolean(), false),
  contrast: v.optional(v.number(), 0),
  reverseLightDarkShades: v.optional(v.boolean(), true),
  colorShadesPreset: v.optional(v.enum(ColorShadesPresetEnum), ColorShadesPresetEnum.tailwind),
  frameworkCompatibilty: v.optional(v.enum(FrameworkCompatibilityEnum), FrameworkCompatibilityEnum.shadcn),
  baseColors: v.object({
    primary: v.string(),
    secondary: v.optional(v.string()),
    accent: v.optional(v.string()),
  }),
});
