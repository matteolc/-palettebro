type ShadcnTheme = Record<string, string | Record<string, string | Record<string, string>>>;

export function flattenShadcnTheme(theme: ShadcnTheme): Record<string, string> {
  const result: Record<string, string> = {};

  function flattenObject(obj: Record<string, string | Record<string, string | Record<string, string>>>, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'object' && value !== null) {
        if (key === 'DEFAULT') {
          // For DEFAULT keys, we don't add a suffix
          flattenObject(value, prefix);
        } else {
          flattenObject(value, newKey);
        }
      } else {
        if (key === 'DEFAULT') {
          result[prefix] = value;
        } else {
          result[newKey] = value;
        }
      }
    }
  }

  flattenObject(theme);
  return result;
} 