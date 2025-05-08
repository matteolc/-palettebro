import color from '../nodes/color';
import { ColorShadesPresetEnum } from '../const';
import type { Preset } from './types';
import shades from '../nodes/shades';
import primary from '../nodes/primary';
import { randomUsableColor } from '../color';
import type { GeneratorOptions } from '../types';

export default (
  options?: GeneratorOptions & { token: 'primary' | 'secondary' | 'accent' },
) => {
  return {
    label: 'Dynamic palette',
    description:
      'A dynamic palette that can generate primary, secondary, or accent color schemes',
    nodes: [
      {
        type: color.type,
        isHidden: false,
        token: options?.token,
        args: {
          color:
            options?.token === 'primary'
              ? options?.primaryColor
              : options?.token === 'secondary'
                ? options?.secondaryColor
                : options?.accentColor,
        },
        children:
          options?.token === 'primary'
            ? [
                primary({
                  isDark: options?.isDark ?? false,
                  primaryColor: options?.primaryColor ?? randomUsableColor(),
                  colorShadesPreset:
                    options?.colorShadesPreset ??
                    ColorShadesPresetEnum.tailwind,
                  reverseLightDarkShades:
                    options?.reverseLightDarkShades ?? false,
                }),
              ]
            : shades({
                isDark: options?.isDark ?? false,
                colorShadesPreset:
                  options?.colorShadesPreset ?? ColorShadesPresetEnum.tailwind,
                reverseLightDarkShades:
                  options?.reverseLightDarkShades ?? false,
              }),
      },
    ],
  } as Preset;
};
