import type { FrameworkCompatibility, Palette } from '../types';
import { colorToRawOklchString } from '../color/formatting/oklch';
import { mapFramework } from './compat/map-to-css';

export const paletteToCssVars = (
  palette: Palette | undefined,
  frameworkCompatibilty?: FrameworkCompatibility,
) => {
  if (!palette) return {};
  
  const cssVars: Record<string, string> = {};
  for (const [key, value] of Object.entries(palette)) {
    Object.assign(cssVars, {
      [`--color-${key}`]: `oklch(${colorToRawOklchString(value.color)})`,
    });
  }

  Object.assign(cssVars, mapFramework(frameworkCompatibilty)(cssVars));
  return cssVars;
};
