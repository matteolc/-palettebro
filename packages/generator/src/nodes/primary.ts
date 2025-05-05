import negative from './negative';
import rainbow from '../presets/rainbow';
import saturation from './saturation';
import color from './color';
import lightness from './lightness';
import materialTones from '../presets/materialTones';
import shadowAndScrim from '../presets/shadowAndScrim';
import outlineScale from '../presets/outlineScale';
import background from '../presets/background';
import surface from '../presets/surface';
import shades from './shades';
import type { ColorShadesPreset, PalettebroColor } from '../types';
import type { NodeDef } from './types';

export default (props: {
  isDark: boolean;
  primaryColor: PalettebroColor;
  colorShadesPreset: ColorShadesPreset;
  reverseLightDarkShades: boolean;
  children?: NodeDef[];
}) => {
  const {
    isDark,
    primaryColor,
    colorShadesPreset,
    reverseLightDarkShades,
    children,
  } = props;
  return {
    type: color.type,
    isHidden: false,
    token: 'primary',
    args: {
      color: primaryColor,
    },
    children: [
      ...(children ?? []),
      ...shades({ isDark, colorShadesPreset, reverseLightDarkShades }),
      ...rainbow.nodes,
      {
        type: lightness.type,
        token: 'inverse-primary',
        args: {
          amount: isDark ? 40 : 80,
        },
      },
      {
        type: negative.type,
        token: 'error',
        isHidden: false,
        children: [...materialTones({ isDark }).nodes],
      },
      ...background({ isDark }).nodes,
      {
        type: saturation.type,
        isHidden: true,
        args: {
          amount: isDark ? 8 : 12.5,
        },
        children: [
          ...surface({ isDark }).nodes,
          ...outlineScale({ isDark }).nodes,
          ...shadowAndScrim({ isDark }).nodes,
        ],
      },
    ],
  };
};
