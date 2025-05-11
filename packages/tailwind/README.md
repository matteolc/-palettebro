# @palettebro/tailwind

[![License: MIT][license-image]][license-url]
[![CI][ci-image]][ci-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

A Tailwind 4 plugin for adding `@palettebro/generator` colors to Tailwind color utilities.

## Installation

```bash
npm install @palettebro/tailwind
# or
yarn add @palettebro/tailwind
```

## Usage

See [Demo](../../apps/demo-tailwind/README.md)

### Example

Add the plugin to your `css`:

```css
@plugin '@palettebro/tailwind' {
  reverseLightDarkShades: true;
  primary: #412f9c;
}
```

Use classes as:

```jsx
<MyComponent className="bg-surface-container text-on-surface">
```

Or CSS variables as:

```jsx
<MyComponent className="bg-(--color-surface-container) text-(--color--on-surface)">
```

## License

MIT

[license-image]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[ci-image]: https://img.shields.io/github/actions/workflow/status/matteolc/-palettebro/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/matteolc/-palettebro/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@palettebro%2Ftailwind.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@palettebro%2Ftailwind
[downloads-image]: https://img.shields.io/npm/dm/@palettebro%2Ftailwind.svg?style=flat-square