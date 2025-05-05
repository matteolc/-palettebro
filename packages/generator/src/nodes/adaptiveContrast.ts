import { setLightness, contrastingColor, setHue, setSaturation } from '../color/manipulation';
import { ContrastCurve } from '../utils/contrast-curve';
import type { NodeDef } from './types';

// Contrast curves for different aspects of the color
const contrastAmountCurve = new ContrastCurve(70, 80, 90, 100); // Increased contrast range
const preserveHueCurve = new ContrastCurve(40, 30, 20, 10); // Reduced hue preservation
const saturationCurve = new ContrastCurve(0.9, 0.7, 0.5, 0.3); // Wider saturation range

export default {
  type: 'adp',
  label: 'Adaptive Contrast',
  description: 'Uses lightness in dark mode, but falls back to contrast if needed',
  params: [
    {
      type: 'range',
      name: 'lightAmount',
      label: 'Light Amount',
      unit: '%',
      min: 0,
      max: 100,
      default: 100,
    },
    {
      type: 'range',
      name: 'contrastLevel',
      label: 'Contrast Level',
      unit: '',
      min: -1,
      max: 1,
      default: 0,
    },
    {
      type: 'range',
      name: 'threshold',
      label: 'Lightness Threshold',
      unit: '%',
      min: 0,
      max: 100,
      default: 65, // Slightly lower threshold
    },
  ],
  samples: 'continuous',
  apply(color, { lightAmount, contrastLevel, threshold }) {
    // Special handling for highly saturated colors
    const isHighlySaturated = color.s > 90;
    const effectiveThreshold = isHighlySaturated ? threshold - 10 : threshold;
    const effectiveContrastLevel = isHighlySaturated ? Math.min(contrastLevel + 0.3, 1) : contrastLevel;

    // If color is too light (above threshold), use contrast
    if (color.l > effectiveThreshold) {
      // Get dynamic values based on contrast level
      const contrastAmount = contrastAmountCurve.get(effectiveContrastLevel);
      const preserveHue = preserveHueCurve.get(effectiveContrastLevel);
      const saturationFactor = saturationCurve.get(effectiveContrastLevel);

      const contrastedColor = contrastingColor(color, contrastAmount);
      
      // For highly saturated colors, we want to preserve less of the original hue
      const effectivePreserveHue = isHighlySaturated ? preserveHue * 0.5 : preserveHue;
      
      // Calculate weighted average between the original hue and the contrasted hue
      const hueWeight = effectivePreserveHue / 100;
      const targetHue = color.h;
      const currentHue = contrastedColor.h;
      
      // Interpolate between the current hue and target hue
      const newHue = currentHue + (targetHue - currentHue) * hueWeight;
      
      // Apply dynamic saturation, reduce more for highly saturated colors
      const effectiveSaturationFactor = isHighlySaturated ? saturationFactor * 0.6 : saturationFactor;
      const desaturated = setSaturation(contrastedColor, contrastedColor.s * effectiveSaturationFactor);
      
      // Apply the interpolated hue
      return setHue(desaturated, newHue);
    }
    
    // For dark colors, simply use lightness
    return setLightness(color, lightAmount);
  },
} as NodeDef; 