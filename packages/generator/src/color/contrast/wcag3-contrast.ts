import { sRGBtoY } from 'apca-w3';

import { APCAcontrast } from 'apca-w3';
import { palettebroToRgb } from '../conversion';
import { parseColor } from '../parse-color';

export const wcag3Contrast = (bg: string, fg: string) => {
  const [_, bgColor] = parseColor(bg);
  const [__, fgColor] = parseColor(fg);

  if (!bgColor || !fgColor) return 0;

  const { r: bgR, g: bgG, b: bgB } = palettebroToRgb(bgColor);
  const { r: fgR, g: fgG, b: fgB } = palettebroToRgb(fgColor);

  return Math.abs(
    APCAcontrast(
      sRGBtoY([fgR, fgG, fgB]), 
      sRGBtoY([bgR, bgG, bgB])
    ) as number,
  );
};
