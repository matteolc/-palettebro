import { getPalette, paletteToCssVars } from '@palettebro/generator';
import type { Theme, ThemeColorScheme } from '@palettebro/generator';
import type { CssInJs, PluginOptions } from './types';

export const injectThemes = (
  addBase: (base: CssInJs) => void,
  options: PluginOptions,
) => {
  const { primary, secondary, accent, ...rest } = options;
  const theme = {
    ...rest,
    baseColors: {
      primary,
      secondary,
      accent,
    },
  };
  const [light, dark] = [
    paletteToCssVars(getPalette({
      theme: {
        ...(theme as Theme),
        // The following option only applies to the dark theme
        reverseLightDarkShades: false,
        'color-scheme': 'light' as ThemeColorScheme,
      },
    })),
    paletteToCssVars(getPalette({
      theme: {
        ...(theme as Theme),
        'color-scheme': 'dark' as ThemeColorScheme,
      },
    })),
  ];
  addBase({
    '[data-theme=light]': light,
    '[data-theme=dark]': dark,
  });
};
