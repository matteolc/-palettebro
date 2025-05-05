import bootstrapScale from '../presets/bootstrapScale';
import materialScale from '../presets/materialScale';
import materialTones from '../presets/materialTones';
import tailwindScale from '../presets/tailwindScale';
import type { ColorShadesPreset } from '../types';
import { ColorShadesPresetEnum } from '../const';

export default (props: {
  isDark: boolean;
  colorShadesPreset: ColorShadesPreset;
  reverseLightDarkShades: boolean;
}) => {
  const { isDark, colorShadesPreset, reverseLightDarkShades } = props;
  return [
    ...materialTones({ isDark }).nodes,
    ...(() => {
      switch (colorShadesPreset) {
        case ColorShadesPresetEnum.mui:
          return materialScale({
            reverseLightDarkShades,
          }).nodes;
        case ColorShadesPresetEnum.bootstrap:
          return bootstrapScale({
            reverseLightDarkShades,
          }).nodes;
        default:
          return tailwindScale({
            reverseLightDarkShades,
          }).nodes;
      }
    })(),
  ];
};
