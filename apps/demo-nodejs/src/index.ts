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
  isWcag2Readable,
  isWcag3Readable,
  generateAPCAContrastTable,
  formatAPCAContrastTable,
} from '@palettebro/generator';

/* Theme */
const theme: Theme = {
  baseColors: {
    primary: '#412f9c',
  },
};

/* Palette */
const palette = getPalette({ theme });
if (!palette) {
  throw new Error('Palette not found');
}
console.dir(palette, { depth: null });

/* Pantone palette */
const pantone = getPalette({
  theme: { ...theme, format: ColorFormatEnum.hex },
});
console.dir(pantone, { depth: null });

/* CSS variables */
const cssVars = paletteToCssVars(palette);
console.dir(cssVars, { depth: null });

/* DaisyUI CSS variables */
const cssVarsDaisyui = paletteToCssVars(
  palette,
  FrameworkCompatibilityEnum.daisyui,
);
console.dir(cssVarsDaisyui, { depth: null });

/* Background and foreground color contrast */
const bgColor = palette.background.color;
const fgColor = palette['on-background'].color;
console.dir(
  {
    isReadableWcag2: isWcag2Readable(bgColor, fgColor, {
      level: 'AA',
      size: 'large',
    }),
    isReadableWcag3: isWcag3Readable(bgColor, fgColor, {
      size: 'large',
    }),
    contrastWcag2: Math.round(wcag2Contrast(bgColor, fgColor)),
    gradeWcag2: wcag2ContrastGrade(bgColor, fgColor),
    contrastWcag3: Math.round(wcag3Contrast(bgColor, fgColor)),
    gradeWcag3: wcag3ContrastGrade(bgColor, fgColor),
    gradeWcag3Large: wcag3ContrastGrade(bgColor, fgColor, 'large'),
    gradeWcag3NonText: wcag3ContrastGrade(bgColor, fgColor, 'nonText'),
  },
  { depth: null },
);


const table = generateAPCAContrastTable(bgColor, fgColor);
console.log(formatAPCAContrastTable(table)); 
