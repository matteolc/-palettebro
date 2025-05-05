import { Hct, argbFromHex, hexFromArgb } from '@material/material-color-utilities';
import { formatPalettebroToHex } from '../color/formatting';
import { parseColor } from '../color/parse-color';
import type { PalettebroColor } from '../color/types';
import type { NodeDef, Args } from './types';

const tone: NodeDef = {
  type: 'tone',
  label: 'Tone',
  description: 'Adjust the tone (HCT) of a color',
  params: [
    {
      name: 'amount',
      type: 'range',
      label: 'Amount',
      unit: '%',
      default: 0,
      min: 0,
      max: 100,
    },
  ],
  samples: 'continuous',
  apply: (color: PalettebroColor, args: Args) => {
    const argb = argbFromHex(formatPalettebroToHex(color));
    const hct = Hct.fromInt(argb);
    const newArgb = Hct.from(hct.hue, hct.chroma, args.amount).toInt();
    const hex = hexFromArgb(newArgb);
    const [_, newColor] = parseColor(hex);
    if (!newColor) {
      return color; // Return original color if parsing fails
    }
    return newColor;
  },
};

export default tone; 