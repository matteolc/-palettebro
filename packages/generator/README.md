# @palettebro/generator

Simple yet powerful color palette generator for your web application based on [Culori](https://culorijs.org/). The generator manipulates colors in the `HSL`/`OKLCH` color spaces to aid in:

- Easily use advanced color manipulation functions to create the palette you desire
- Automatically generate `light` and `dark` themes
- Use [MUI](https://m3.material.io/) palettes with Tailwind 4
- Reverse the scale of `light` and `dark` color shades to drastically reduce the use of `dark:` selectors
- Output palette colors in multiple formats including `pantone`: `rgb`, `hex`, `hsl`, `lch`, `oklch`

## Purpose

This library automates the generation of a comprehensive color palette given a minimum of one to a maxium of three colors (`primary`, `secondary`, `accent` -a `primary` color is always required). The library generates shades, tones and surface colors most common in modern web design.

`primary`, `secondary` and `accent` colors get:

- A set of shades with a range compatible with different frameworks (*)
- Container and foreground tints (`on-primary`, `primary-container`, `on-primary-container`)

Additionally:

- The `primary` color gets a rainbow scale to use in charts
- Various surface and outline colors are generated following [Material UI 3](https://m3.material.io/styles/color/roles) color roles guidelines

(*) Currently supported Tailwind, Material UI and Bootstap

### Palette
![Palette](../../docs/palette.png)

### MUI Shades
![Shades MUI](../../docs/shades-mui.png)

### Tailwind Shades
![Shades](../../docs/shades-tw.png)

## How To Use

`@palettebro/generator` works in three different modes or `variants`. Each `variant` has different `presets` that control how `primary`, `secondary` and `accent` colors relate to each other:

- `static`. This variant requires you to specify only a `primary` color. `secondary` and `accent` colors are generated from the `primary` color according to some color wheel manipulation rule specified in the `preset`. For instance, the `triad` preset will choose `secondary` and `accent` colors as equally spaced in the color wheel.
- `mui`. This variant requires you to specify only a `primary` color. `secondary` and `accent` colors are generated from the `primary` color using the [@material/material-color-utilities](https://github.com/material-foundation/material-color-utilities) library. All available `presets` from the library are available, such as `monochrome` or `tonal-spot`
- `dynamic`. This variant accepts up to three colors: `primary`, `secondary` and `accent`. You can generate these colors as you wish, or just input one or two colors if you want a two-colors scheme (like `primary` and `accent`). Use this `variant` to have full control over the generated palette (however you will loose the ability generate harmonious two or three color combinations, as you will have to provide these yourself).

For the full list of `options` refer to [types.ts](src/types/index.ts)

## Installation

```bash
npm install @palettebro/generator
# or
yarn add @palettebro/generator
```

## Usage

See [Demo](../../apps/demo-nodejs/README.md)

### Example: Custom Theme

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

## Libraries Used

- [Culori](https://culorijs.org/): A comprehensive color library for JavaScript, used for color conversions, manipulations, and calculations.
- [@material/material-color-utilities](https://github.com/material-foundation/material-color-utilities): Utilities for Material Design color systems, including tonal palettes and dynamic color schemes.
- [apca-w3](https://www.npmjs.com/package/apca-w3): Implements the APCA (Advanced Perceptual Contrast Algorithm) for accessible color contrast calculations.
- [delta-e](https://www.npmjs.com/package/delta-e): Provides Delta E color difference formulas for measuring perceptual differences between colors.
- [nearest-color](https://www.npmjs.com/package/nearest-color): Finds the closest named color to a given color value.
- [simple-color-converter](https://www.npmjs.com/package/simple-color-converter): Converts between various color formats (RGB, HSL, LAB, etc.) with a simple API.

## Note About Color Names

Color names are assigned by finding the closest match to a given color using the [nearest-color](https://www.npmjs.com/package/nearest-color) library. The matching is performed against [this](https://github.com/meodai/color-names) list of color names and their corresponding hex values, which aims to provide meaningful and recognizable names for a wide range of colors. If no close match is found, the original hex value is used as the name.

🚨 The color names list adds `~130KB` to the base bundle size of `~6KB`

## License

MIT