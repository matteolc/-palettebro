import { daisyuiTheme } from './daisyui';
import { flattenDaisyuiTheme } from './flatten-daisyui';
import { shadcnTheme } from './shadcn';
import { flattenShadcnTheme } from './flatten-shadcn';
import { FrameworkCompatibilityEnum } from '../../const';
import type { FrameworkCompatibility } from '../../types';

const mapCssVars = (
  inputCssVars: Record<string, string>,
  cssVars: Record<string, string>,
) => {
  return Object.entries(inputCssVars).reduce(
    (acc, [key, value]) => {
      const cssVar = value.replace('var(--color-', '').replace(')', '');
      acc[`--color-${key}`] = cssVars[`--color-${cssVar}`] || value;
      return acc;
    },
    {} as Record<string, string>,
  );
};

const mapShadcnTheme = (cssVars: Record<string, string>) => {
  const shadcnVars = flattenShadcnTheme(shadcnTheme);
  return mapCssVars(shadcnVars, cssVars);
};

const mapDaisyuiTheme = (cssVars: Record<string, string>) => {
  const daisyuiVars = flattenDaisyuiTheme(daisyuiTheme);
  return mapCssVars(daisyuiVars, cssVars);
};

export const mapFramework = (
  frameworkCompatibilty?: FrameworkCompatibility,
) => {
  return {
    [FrameworkCompatibilityEnum.shadcn]: mapShadcnTheme,
    [FrameworkCompatibilityEnum.daisyui]: mapDaisyuiTheme,
  }[frameworkCompatibilty ?? FrameworkCompatibilityEnum.shadcn];
};
