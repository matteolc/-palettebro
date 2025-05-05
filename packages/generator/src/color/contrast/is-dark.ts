import { palettebroToRgb } from '../conversion';
import { parseColor } from '../parse-color';

export const isDark = (color: string) => {
  const [_, parsedColor] = parseColor(color);
  if (!parsedColor) return false;

  const { r, g, b } = palettebroToRgb(parsedColor);
  
  // Use relative luminance formula from WCAG 2.0
  const toSRGB = (v: number) => {
    const sRGB = v / 255;
    return sRGB <= 0.03928 
      ? sRGB / 12.92
      : ((sRGB + 0.055) / 1.055) ** 2.4;
  };
  
  const luminance = 
    0.2126 * toSRGB(r) +
    0.7152 * toSRGB(g) +
    0.0722 * toSRGB(b);
    
  return luminance <= 0.179; // Threshold based on WCAG guidelines
};
