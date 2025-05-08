# @palettebro/demo-nodejs

A simple Node.js demo app using [`@palettebro/generator`](https://www.npmjs.com/package/@palettebro/generator) to generate a color palette from a theme.

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Build

```bash
pnpm build
```

### Run

```bash
pnpm start
```

## How it works

The entry point is [`src/index.ts`](src/index.ts):

- Imports `getPalette` and `Theme` from `@palettebro/generator`.
- Defines a simple theme with a primary color.
- Generates a palette and prints it to the console.