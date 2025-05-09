import {
  ColorFormatEnum,
  FrameworkCompatibilityEnum,
  getPalette,
  paletteToCssVars,
  wcag2Contrast,
  wcag3Contrast,
  wcag2ContrastGrade,
  wcag3ContrastGrade,
  type Theme,
} from '@palettebro/generator';

const theme: Theme = {
  baseColors: {
    primary: '#007bff',
  },
};

const palette = getPalette({ theme });
console.dir(palette, { depth: null });

const pantone = getPalette({
  theme: { ...theme, format: ColorFormatEnum.pantone },
});
console.dir(pantone, { depth: null });

const cssVars = paletteToCssVars(palette);
console.dir(cssVars, { depth: null });

const cssVarsDaisyui = paletteToCssVars(
  palette,
  FrameworkCompatibilityEnum.daisyui,
);
console.dir(cssVarsDaisyui, { depth: null });

const token = 'primary';
const bg = palette?.[token]?.color ?? '#fff';
const fg = palette?.[`on-${token}`]?.color ?? '#000';

const wcag2Score = wcag2Contrast(bg, fg) ?? 0;
const wcag3Score = Math.abs(wcag3Contrast(bg, fg));
const wcag2Grade = wcag2ContrastGrade(bg, fg);
const wcag3Grade = wcag3ContrastGrade(bg, fg);

console.dir(
  { wcag2Score, wcag3Score, wcag2Grade, wcag3Grade },
  { depth: null },
);
