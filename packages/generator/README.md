# @palettebro/generator

A powerful, flexible color palette generator for your web application.

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

## License

MIT