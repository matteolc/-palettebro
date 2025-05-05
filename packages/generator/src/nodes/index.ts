import { formatPalettebroToHex } from '../color/formatting';
import { nearestColorName } from '../color/nearest-color-name';
import type { PalettebroColor } from '../color/types';
import { sentenceCase } from '../utils/strings';
import analogous from './analogous';
import color from './color';
import complementary from './complementary';
import contrasting from './contrasting';
import highlight from './highlight';
import hue from './hue';
import informative from './informative';
import lightness from './lightness';
import negative from './negative';
import positive from './positive';
import saturation from './saturation';
import shadow from './shadow';
import splitComplementaryLeft from './splitComplementaryLeft';
import splitComplementaryRight from './splitComplementaryRight';
import tetradLeft from './tetradLeft';
import tetradRight from './tetradRight';
import tone from './tone';
import triadLeft from './triadLeft';
import triadRight from './triadRight';
import type { NodeDef } from './types';
import warning from './warning';
import adaptiveContrast from './adaptiveContrast';

export default {
  [analogous.type]: analogous,
  [color.type]: color,
  [complementary.type]: complementary,
  [contrasting.type]: contrasting,
  [highlight.type]: highlight,
  [hue.type]: hue,
  [informative.type]: informative,
  [lightness.type]: lightness,
  [negative.type]: negative,
  [positive.type]: positive,
  [saturation.type]: saturation,
  [shadow.type]: shadow,
  [splitComplementaryLeft.type]: splitComplementaryLeft,
  [splitComplementaryRight.type]: splitComplementaryRight,
  [tetradLeft.type]: tetradLeft,
  [tetradRight.type]: tetradRight,
  [tone.type]: tone,
  [triadLeft.type]: triadLeft,
  [triadRight.type]: triadRight,
  [warning.type]: warning,
  [adaptiveContrast.type]: adaptiveContrast,
} as const;

export const defList = [
  analogous,
  complementary,
  splitComplementaryLeft,
  splitComplementaryRight,
  tetradLeft,
  tetradRight,
  triadLeft,
  triadRight,
  contrasting,
  informative,
  positive,
  warning,
  negative,
  highlight,
  shadow,
  lightness,
  saturation,
  hue,
  color,
  tone,
  adaptiveContrast,
];

export const defaultArgs = (def: NodeDef) =>
  Object.fromEntries(def.params.map(({ name, default: d }) => [name, d]));

export const generateName = (
  token: string | undefined,
  color: PalettebroColor,
  parentColorName?: string,
) =>
  token
    ? parentColorName
      ? token.replace('$', parentColorName)
      : token
    : sentenceCase(nearestColorName(formatPalettebroToHex(color)));
