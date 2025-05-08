# @palettebro/demo-nodejs

A simple Node.js demo app using [`@palettebro/generator`](https://www.npmjs.com/package/@palettebro/generator) to generate a color palette from a theme.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the demo in development mode

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run the built app

```bash
npm start
```

## How it works

The entry point is [`src/index.ts`](src/index.ts):

- Imports `getPalette` and `Theme` from `@palettebro/generator`.
- Defines a simple theme with a primary color.
- Generates a palette and prints it to the console.

---

This project uses [Vite](https://vitejs.dev/) for building and [TypeScript](https://www.typescriptlang.org/) for type safety.
