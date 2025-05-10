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
  type Wcag2Grade,
  type Wcag3Grade,
  isWcag2Readable,
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


/**
 * Builds a WCAG2 contrast accessibility table for a given Palette.
 * Only includes relevant pairs: e.g., primary/on-primary, primary-container/on-primary-container, etc.
 * Returns an array of objects: { bgKey, fgKey, bgColor, fgColor, contrast }
 */
function buildWcag2ContrastTable(
  palette: Record<string, { color: string; name: string }>,
) {
  const pairs: Array<{ bgKey: string; fgKey: string }> = [];
  const baseTokens = [
    'primary',
    'secondary',
    'tertiary',
    'accent',
    'error',
    'background',
    'surface',
    'surface-dim',
    'surface-bright',
    'surface-container-lowest',
    'surface-container-low',
    'surface-container',
    'surface-container-high',
    'surface-container-highest',
    'surface-variant',
    'inverse-surface',
    'outline',
    'outline-variant',
  ];

  // Direct on- pairs
  for (const token of baseTokens) {
    const onKey = `on-${token}`;
    if (palette[token] && palette[onKey]) {
      pairs.push({ bgKey: token, fgKey: onKey });
    }
  }

  // Container pairs
  for (const token of baseTokens) {
    const containerKey = `${token}-container`;
    const onContainerKey = `on-${token}-container`;
    if (palette[containerKey] && palette[onContainerKey]) {
      pairs.push({ bgKey: containerKey, fgKey: onContainerKey });
    }
  }

  // Special: on-background, on-surface, etc. (as fg on background/surface)
  const specialPairs = [
    { bgKey: 'background', fgKey: 'on-background' },
    { bgKey: 'surface', fgKey: 'on-surface' },
    { bgKey: 'surface-variant', fgKey: 'on-surface-variant' },
    { bgKey: 'inverse-surface', fgKey: 'inverse-on-surface' },
    { bgKey: 'error-container', fgKey: 'on-error-container' },
    { bgKey: 'error', fgKey: 'on-error' },
  ];
  for (const { bgKey, fgKey } of specialPairs) {
    if (palette[bgKey] && palette[fgKey]) {
      pairs.push({ bgKey, fgKey });
    }
  }

  // Build the table
  const table = pairs.map(({ bgKey, fgKey }) => {
    const bgColor = palette[bgKey].color;
    const fgColor = palette[fgKey].color;
    const contrastWcag2 = wcag2Contrast(bgColor, fgColor);
    const gradeWcag2 = wcag2ContrastGrade(bgColor, fgColor);
    const contrastWcag3 = wcag3Contrast(bgColor, fgColor);
    const gradeWcag3 = wcag3ContrastGrade(bgColor, fgColor);
    const isReadableWcag2AASmall = isWcag2Readable(
      bgColor,
      fgColor,
    );
    const isReadableWcag2AAASmall = isWcag2Readable(
      bgColor,
      fgColor,
      {
        level: 'AAA',
        size: 'small',
      },
    );
    const isReadableWcag2AALarge = isWcag2Readable(
      bgColor,
      fgColor,
      {
        size: 'large',
      },
    );
    const isReadableWcag2AAALarge = isWcag2Readable(
      bgColor,
      fgColor,
      {
        level: 'AAA',
        size: 'large',
      },
    );
    return {
      bgKey,
      fgKey,
      bgColor,
      fgColor,
      contrastWcag2,
      gradeWcag2,
      contrastWcag3,
      gradeWcag3,
      isReadableWcag2AASmall,
      isReadableWcag2AAASmall,
      isReadableWcag2AALarge,
      isReadableWcag2AAALarge,
    };
  });
  return table;
}

// Example usage:
if (palette) {
  const wcag2Table = buildWcag2ContrastTable(palette);
  console.dir(wcag2Table, { depth: null });
}
