import { z } from 'zod';
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

export const ColorShadesPresets = ['tailwind', 'mui', 'bootstrap'] as const;
export const ColorShadesPresetEnum = createEnum(ColorShadesPresets);

export const ColorFormats = [
  'rgb',
  'hex',
  'hsl',
  'lch',
  'oklch',
  'pantone',
] as const;
export const ColorFormatEnum = createEnum(ColorFormats);

export const FrameworkCompatibilities = [
  'mui',
  'shadcn',
  'bootstrap',
  'daisyui',
] as const;
export const FrameworkCompatibilityEnum = createEnum(FrameworkCompatibilities);

export const ThemeSchema = z.object({
  format: z.enum(ColorFormats).default(ColorFormatEnum.hex).optional(),
  'color-scheme': z
    .enum(ColorSchemes)
    .optional()
    .default(ThemeColorSchemeEnum.light),
  variant: z
    .enum(ThemeVariants)
    .optional()
    .default(ThemeVariantEnum.static),
  preset: z
    .enum([
      ...StaticThemePresets,
      ...MuiThemePresets,
    ])
    .optional()
    .default(StaticThemePresetEnum['hue-shift']),
  reverse: z.boolean().optional().default(false),
  contrast: z.number().optional().default(0),
  reverseLightDarkShades: z.boolean().optional().default(true),
  colorShadesPreset: z
    .enum(ColorShadesPresets)
    .optional()
    .default(ColorShadesPresetEnum.tailwind),
  frameworkCompatibilty: z
    .enum(FrameworkCompatibilities)
    .optional()
    .default(FrameworkCompatibilityEnum.shadcn),
  baseColors: z.object({
    primary: z.string(),
    secondary: z.string().optional(),
    accent: z.string().optional(),
    neutral: z.string().optional(),
  }),
});
