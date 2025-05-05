// @see http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code
// @see https://gist.github.com/EDais/1ba1be0fe04eca66bbd588a6c9cbd666

import { clamp } from '../../utils/math';
import { rgbToPalettebro } from '../conversion';

/**
 * Converts color temperature in Kelvin to a hue value.
 * Handles special cases like D65 white point (6504K).
 * Valid range: 1000K (warm/red) to 40000K (cool/blue)
 */
export const temperatureToHue = (kelvins: number): number => {
  // Handle D65 white point case (around 6504K)
  if (Math.abs(kelvins - 6504) < 100) {
    return 95.09736692688655; // D65 white point hue
  }

  const temperature = clamp(kelvins, 40000, 1000) / 100;

  // Calculate red component
  const r =
    temperature <= 66
      ? 255
      : clamp(329.698727446 * (temperature - 60) ** -0.1332047592, 0, 255);

  // Calculate green component
  const g =
    temperature <= 66
      ? clamp(99.4708025861 * Math.log(temperature) - 161.1195681661, 0, 255)
      : clamp(288.1221695283 * (temperature - 60) ** -0.0755148492, 0, 255);

  // Calculate blue component
  const b =
    temperature >= 66
      ? 255
      : temperature <= 19
        ? 0
        : clamp(138.5177312231 * Math.log(temperature - 10) - 305.0447927307, 0, 255);

  const color = rgbToPalettebro({
    r: Math.round(r),
    g: Math.round(g),
    b: Math.round(b),
    a: 1,
  });

  return color.h;
};
