import {
  argbFromHex,
  hexFromArgb,
  type DynamicScheme,
  SchemeTonalSpot,
  Hct,
  SchemeFruitSalad,
  SchemeVibrant,
  SchemeRainbow,
  SchemeNeutral,
  SchemeMonochrome,
  SchemeFidelity,
  SchemeExpressive,
  SchemeContent,
  type TonalPalette,
} from '@material/material-color-utilities';
import type {
  Palette,
  MuiThemePreset,
  PalettebroColor,
  ThemePalette,
} from '../types';
import { formatPalettebroToHex, nearestColorName } from '../color';
import {
  parseColor,
  presetSamplesWithKeyAndName,
  presetSampleWithKeyAndNameHash,
} from '../index';
import { MATERIAL_TONES, MuiThemePresetEnum } from '../const';
import rainbow from '../presets/rainbow';

// Create a type for the scheme constructor
type SchemeConstructor = new (
  hct: Hct,
  isDark: boolean,
  contrast: number,
) => DynamicScheme;

// Map preset keys to their scheme constructors
const schemeConstructors: Record<MuiThemePreset, SchemeConstructor> = {
  content: SchemeContent,
  expressive: SchemeExpressive,
  fidelity: SchemeFidelity,
  'fruit-salad': SchemeFruitSalad,
  monochrome: SchemeMonochrome,
  neutral: SchemeNeutral,
  rainbow: SchemeRainbow,
  'tonal-spot': SchemeTonalSpot,
  vibrant: SchemeVibrant,
};

// Create a single scheme
const createScheme = (
  Constructor: SchemeConstructor,
  props: { hct: Hct; isDark: boolean; contrast: number },
): DynamicScheme => {
  return new Constructor(props.hct, props.isDark, props.contrast);
};

// Create the preset map
const presetMap = (props: { hct: Hct; isDark: boolean; contrast: number }) =>
  Object.entries(schemeConstructors).reduce(
    (schemes, [key, Constructor]) => {
      schemes[key as MuiThemePreset] = createScheme(Constructor, props);
      return schemes;
    },
    {} as Record<MuiThemePreset, DynamicScheme>,
  );

const createColorEntry = (color: number) => ({
  name: nearestColorName(hexFromArgb(color)),
  color: hexFromArgb(color),
});

const tonesFromPalette = (palette: TonalPalette, token: string) =>
  MATERIAL_TONES.reduce(
    (acc, tone) => {
      acc[`${token}-${tone}`] = createColorEntry(palette.tone(tone));
      return acc;
    },
    {} as Record<string, { name: string; color: string }>,
  );

const formatPalette = (presets: Palette, token: string) =>
  Object.entries(presets).reduce(
    (acc, [key, value]) => {
      acc[key.replace('$', token)] = value;
      return acc;
    },
    {} as Record<string, { name: string; color: string }>,
  );

const generateChartColors = (
  color: PalettebroColor | undefined,
  token: string,
) =>
  color
    ? formatPalette(
        presetSampleWithKeyAndNameHash(
          presetSamplesWithKeyAndName(rainbow.nodes, color),
          'hex',
        ),
        token,
      )
    : {};

export const getMuiPalette = (theme: ThemePalette) => {
  const argb = argbFromHex(formatPalettebroToHex(theme.primaryColor));
  const hct = Hct.fromInt(argb);

  const presetKey = (MuiThemePresetEnum[theme.preset as MuiThemePreset] ||
    'fidelity') as MuiThemePreset;
  const scheme = presetMap({
    hct,
    isDark: theme.isDark,
    contrast: theme.contrast ?? 0.0,
  })[presetKey];

  return {
    // Primary colors
    primary: createColorEntry(scheme.primary),
    ...tonesFromPalette(scheme.primaryPalette, 'primary'),
    'inverse-primary': createColorEntry(scheme.inversePrimary),
    'on-primary': createColorEntry(scheme.onPrimary),
    'primary-container': createColorEntry(scheme.primaryContainer),
    'on-primary-container': createColorEntry(scheme.onPrimaryContainer),

    // Secondary colors
    secondary: createColorEntry(scheme.secondary),
    ...tonesFromPalette(scheme.secondaryPalette, 'secondary'),
    'on-secondary': createColorEntry(scheme.onSecondary),
    'secondary-container': createColorEntry(scheme.secondaryContainer),
    'on-secondary-container': createColorEntry(scheme.onSecondaryContainer),

    // Tertiary colors
    tertiary: createColorEntry(scheme.tertiary),
    ...tonesFromPalette(scheme.tertiaryPalette, 'tertiary'),
    'on-tertiary': createColorEntry(scheme.onTertiary),
    'tertiary-container': createColorEntry(scheme.tertiaryContainer),
    'on-tertiary-container': createColorEntry(scheme.onTertiaryContainer),

    // Error colors
    error: createColorEntry(scheme.error),
    'on-error': createColorEntry(scheme.onError),
    'error-container': createColorEntry(scheme.errorContainer),
    'on-error-container': createColorEntry(scheme.onErrorContainer),

    // Background and surface colors
    background: createColorEntry(scheme.background),
    'on-background': createColorEntry(scheme.onBackground),
    surface: createColorEntry(scheme.surface),
    'surface-dim': createColorEntry(scheme.surfaceDim),
    'surface-bright': createColorEntry(scheme.surfaceBright),
    'surface-container-lowest': createColorEntry(scheme.surfaceContainerLowest),
    'surface-container-low': createColorEntry(scheme.surfaceContainerLow),
    'surface-container': createColorEntry(scheme.surfaceContainer),
    'surface-container-high': createColorEntry(scheme.surfaceContainerHigh),
    'surface-container-highest': createColorEntry(
      scheme.surfaceContainerHighest,
    ),
    'on-surface': createColorEntry(scheme.onSurface),
    'surface-variant': createColorEntry(scheme.surfaceVariant),
    'on-surface-variant': createColorEntry(scheme.onSurfaceVariant),
    'inverse-surface': createColorEntry(scheme.inverseSurface),
    'inverse-on-surface': createColorEntry(scheme.inverseOnSurface),

    // Outline and shadow colors
    outline: createColorEntry(scheme.outline),
    'outline-variant': createColorEntry(scheme.outlineVariant),
    shadow: createColorEntry(scheme.shadow),
    scrim: createColorEntry(scheme.scrim),
    'surface-tint': createColorEntry(scheme.surfaceTint),

    // Custom colors
    accent: createColorEntry(scheme.tertiary),
    ...tonesFromPalette(scheme.tertiaryPalette, 'accent'),
    'on-accent': createColorEntry(scheme.onTertiary),
    'accent-container': createColorEntry(scheme.tertiaryContainer),
    'on-accent-container': createColorEntry(scheme.onTertiaryContainer),
    ...generateChartColors(
      parseColor(hexFromArgb(scheme.primary))[1],
      'primary',
    ),
  } as Record<string, { name: string; color: string }>;
};
