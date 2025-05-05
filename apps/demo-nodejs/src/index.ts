import { getPalette, type Theme } from '@palettebro/generator';

const theme: Theme = {
  baseColors: {
    primary: '#007bff',
  },
};

const palette = getPalette({ theme });
console.dir(palette, { depth: null });