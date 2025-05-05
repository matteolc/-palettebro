import plugin, { type PluginAPI, type Config } from 'tailwindcss/plugin';
import { getPaletteColors } from './theming/colors';
import { injectThemes } from './inject-themes';
import type { PluginOptions } from './types';
import defaultPluginOptions from './options';
import { log } from './logger';

export const getColorUtilities = (options: PluginOptions) =>
  getPaletteColors(options);

const twPlugin: ReturnType<typeof plugin.withOptions<PluginOptions>> =
  plugin.withOptions<PluginOptions>(
    (options?: PluginOptions): ((api: PluginAPI) => void) => {
      return ({ addBase, addVariant }) => {
        log('SW5pdGlhbGl6aW5nIFRhaWx3aW5kIHBsdWdpbg==');

        injectThemes(addBase, { ...defaultPluginOptions, ...options });
        addVariant('dark', '&:where([data-theme=dark], [data-theme=dark] *)');
      };
    },
    (options?: PluginOptions): Partial<Config> => {
      log('RXh0ZW5kaW5nIFRhaWx3aW5kIHRoZW1lIGNvbG9ycw==');

      return {
        theme: {
          extend: {
            colors: getPaletteColors({
              ...defaultPluginOptions,
              ...options,
            }),
            supports: {
              oklch: 'color(display-p3 1 0 0)',
              'color-scheme': 'light dark',
            },
            colorScheme: {
              light: 'light',
              dark: 'dark',
            },
          },
        },
      };
    },
  );

export default twPlugin;
