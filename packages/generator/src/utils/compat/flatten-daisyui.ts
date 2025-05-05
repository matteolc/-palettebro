type DaisyuiTheme = Record<string, string>;

export function flattenDaisyuiTheme(theme: DaisyuiTheme): Record<string, string> {
  return Object.entries(theme).reduce((acc, [key, value]) => {
    // Replace the CSS variable reference with the actual value
    const cssVar = value.replace('var(--color-', '').replace(')', '');
    acc[key] = `var(--color-${cssVar})`;
    return acc;
  }, {} as Record<string, string>);
} 