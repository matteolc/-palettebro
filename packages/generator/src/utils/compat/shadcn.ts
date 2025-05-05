export const shadcnTheme = {
  background: 'var(--color-background)',
  foreground: 'var(--color-on-background)',
  card: {
    DEFAULT: 'var(--color-surface-container-lowest)',
    foreground: 'var(--color-on-surface)',
  },
  popover: {
    DEFAULT: 'var(--color-surface-container-lowest)',
    foreground: 'var(--color-on-surface)',
  },
  muted: {
    DEFAULT: 'var(--color-surface)',
    foreground: 'var(--color-on-surface)',
  },
  destructive: {
    DEFAULT: 'var(--color-error)',
    foreground: 'var(--color-on-error)',
  },
  border: 'var(--color-surface-container-high)',
  input: 'var(--color-outline)',
  ring: 'var(--color-outline-variant)',
  chart: Object.fromEntries(
    Array.from({ length: 11 }, (_, i) => [
      String(i + 1),
      `var(--color-primary-rainbow-${i})`,
    ]),
  ),
  sidebar: {
    DEFAULT: 'var(--color-surface-container)',
    foreground: 'var(--color-on-surface)',
    primary: 'var(--color-primary)',
    'primary-foreground': 'var(--color-on-primary)',
    accent: 'var(--color-accent)',
    'accent-foreground': 'var(--color-on-accent)',
    border: 'var(--color-surface-container-high)',
    ring: 'var(--color-outline-variant)',
  },
};
