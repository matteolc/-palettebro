import { z } from 'zod';
import { createEnum } from '../utils/create-enum';

export const ColorSchemes = ['light', 'dark'] as const;
export const ThemeColorSchemeEnum = createEnum(ColorSchemes);

export const ThemeVariants = ['mui', 'static', 'dynamic', 'kobayashi'] as const;
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

export const GenerativeThemeModes = ['transformer', 'diffusion', 'creative'] as const;
export const GenerativeThemeModeEnum = createEnum(GenerativeThemeModes);

export const GenerativeThemePages = [
  'website-magazine',
  'brand-2',
  'brand-3',
  'website-1',
] as const;
export const GenerativeThemePageEnum = createEnum(GenerativeThemePages);

export const GenerativeThemePresets = [
  'default',
  'high-contrast',
  'bright-light',
  'pastel',
  'vibrant',
  'dark',
  'hyper-color',
] as const;
export const GenerativeThemePresetEnum = createEnum(GenerativeThemePresets);

export const KobayashiImages = [
  'pretty',
  'casual',
  'dynamic',
  'gorgeous',
  'romantic',
  'natural',
  'elegant',
  'chich',
  'classic',
  'clear',
  'modern',
] as const;
export const KobayashiImageEnum = createEnum(KobayashiImages);

export const ColorShadesPresets = ['tailwind', 'mui', 'bootstrap'] as const;
export const ColorShadesPresetEnum = createEnum(ColorShadesPresets);

export const ColorFormats = ['rgb', 'hex', 'hsl', 'lch', 'oklch', 'pantone'] as const;
export const ColorFormatEnum = createEnum(ColorFormats);

export const FrameworkCompatibilities = ['mui', 'shadcn', 'bootstrap', 'daisyui'] as const;
export const FrameworkCompatibilityEnum = createEnum(FrameworkCompatibilities);

export const ThemeSchema = z.object({
  format: z.enum(ColorFormats).default(ColorFormatEnum.hex).optional(),
  'color-scheme': z.enum(ColorSchemes).optional().default(ThemeColorSchemeEnum.light),
  variant: z.enum(ThemeVariants).optional().default(ThemeVariantEnum.static),
  preset: z.enum([
    ...StaticThemePresets,
    ...MuiThemePresets,
    ...GenerativeThemePresets,
    ...KobayashiImages,
  ]).optional().default('hue-shift'),
  reverse: z.boolean().optional().default(false),
  contrast: z.number().optional().default(0),
  reverseLightDarkShades: z.boolean().optional().default(true),
  colorShadesPreset: z.enum(ColorShadesPresets).optional().default(ColorShadesPresetEnum.tailwind),
  frameworkCompatibilty: z.enum(FrameworkCompatibilities).optional().default(FrameworkCompatibilityEnum.shadcn),
  baseColors: z
    .object({
      primary: z.string(),
      secondary: z.string().optional(),
      accent: z.string().optional(),
      neutral: z.string().optional(),
    })
});
