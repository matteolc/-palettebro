# @palettebro/tailwind

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