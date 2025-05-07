import { parseColor } from '../color/parse-color';
import type { Palette, Theme, ThemePalette, ThemeVariant } from '../types';
import {
  ThemeColorSchemeEnum,
  ThemeSchema,
  ThemeVariantEnum,
  ThemeVariants,
} from '../const';
import { getDynamicPalette } from './dynamic';
import { getStaticPalette } from './static';
import { getMuiPalette } from './material';

const getVariant = (variant: ThemeVariant | string) => {
  if (ThemeVariants.includes(variant as ThemeVariant)) {
    return {
      [ThemeVariantEnum.mui]: getMuiPalette,
      [ThemeVariantEnum.static]: getStaticPalette,
      [ThemeVariantEnum.dynamic]: getDynamicPalette,
    }[variant as ThemeVariant];
  }
  return getDynamicPalette;
};

export const getPalette = (props: { theme: Theme }): Palette | undefined => {
  const {
    baseColors,
    variant,
    'color-scheme': colorScheme,
    ...rest
  } = props.theme;
  const parsed = ThemeSchema.safeParse(props.theme);
  if (!parsed.success) return undefined;

  const [_, primaryColor] = parseColor(baseColors.primary);
  if (!primaryColor) return undefined;

  return getVariant(parsed.data.variant)({
    primaryColor,
    secondaryColor: baseColors?.secondary
      ? parseColor(baseColors.secondary)[1]
      : undefined,
    accentColor: baseColors?.accent
      ? parseColor(baseColors.accent)[1]
      : undefined,
    isDark: colorScheme === ThemeColorSchemeEnum.dark,
    ...rest,
  } satisfies ThemePalette);
};

export { default as staticPalette } from '../presets/staticPalette';
