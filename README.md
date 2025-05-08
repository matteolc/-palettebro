# @palettebro/generator

A powerful, flexible color palette generator for your web application.

## Features

[palettebro.com](https://palettebro.com)

## Installation

```bash
npm install @palettebro/generator
# or
yarn add @palettebro/generator
```

## Usage

```ts
import { getPalette, Theme } from '@palettebro/generator';

const theme: Theme = {
  'color-scheme': 'light',
  variant: 'static',
  preset: 'hue-shift',
  baseColors: {
    primary: '#007bff',
    secondary: '#6c757d',
    accent: '#ffc107',
  },
};

const palette = getPalette({ theme });
console.log(palette);
// { primary: { color: '#007bff', name: 'Blue' }, ... }
```

## API

### Palette Generation

- **`getPalette({ theme: Theme }): Palette`**  
  Generates a palette object based on the provided theme configuration.

### Theme Types

- `ThemeColorScheme`: `'light' | 'dark'`
- `ThemeVariant`: `'mui' | 'static' | 'dynamic' | 'kobayashi'`
- `StaticThemePreset`, `MuiThemePreset`, `GenerativeThemePreset`, `KobayashiImage`: Preset names for each variant.
- `ColorFormats`: `'rgb' | 'hex' | 'hsl' | 'lch' | 'oklch' | 'pantone'`

### Utilities

- **Color conversion:**  
  `palettebroToRgb`, `palettebroToHsl`, `palettebroToLch`, etc.
- **Formatting:**  
  `formatRgb`, `formatHsl`, `formatLch`, `formatRgbToHex`, etc.
- **Sampling:**  
  `sample`, `samples`, `presetSample`, `presetSamples`, etc.

### Types

- `Theme`, `GeneratorOptions`, `Palette`, `PalettebroColor`, etc.

## Presets

- **Static:** split-complementary, tetrad, triad, hue-shift, depth, duotone, etc.
- **MUI:** content, expressive, fidelity, fruit-salad, etc.
- **Generative:** default, high-contrast, pastel, vibrant, dark, etc.
- **Kobayashi:** pretty, casual, dynamic, gorgeous, romantic, etc.

## Example: Custom Theme

```ts
import { getPalette, Theme } from '@palettebro/generator';

const theme: Theme = {
  'color-scheme': 'dark',
  variant: 'mui',
  preset: 'vibrant',
  baseColors: {
    primary: '#ff5722',
  },
  format: 'hsl',
};

const palette = getPalette({ theme });
console.log(palette);
```

## License

MIT