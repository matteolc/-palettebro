/**
 * Generates an object containing the color shades for a given token name.
 * @param colorName - The name of the color token to generate shades for.
 * @param tones - The tones to generate shades for.
 * @returns An object containing the color shades.
 * @example
 * ```ts
 * const colorShades = getColorShades('primary', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]);
 * // {
 * //   50: 'var(--color-primary-50)',
 * //   100: 'var(--color-primary-100)',
 * //   200: 'var(--color-primary-200)',
 * //   ...
 * // }
 * ```
 */
export const getColorShades = (colorName: string, tones: number[]) => ({
  ...tones.reduce<Record<number, string>>((acc, tone) => {
    acc[tone] = `var(--color-${colorName}-${tone})`;
    return acc;
  }, {}),
});

/**
 * Creates a function that generates color shades for a given color name.
 * @param tones - The tones to generate shades for.
 * @returns A function that generates color shades for a given color name.
 */
export const fn_getColorShades = (tones: number[]) => (colorName: string) =>
  getColorShades(colorName, tones);

/**
 * Creates an object containing the color variants for a given color name.
 * @param colorName - The name of the color to generate variants for.
 * @returns An object containing the color variants.
 * @example
 * ```ts
 * const colorVariants = getColorVariants('primary');
 * // {
 * //   'on-primary': 'var(--color-on-primary)',
 * //   'primary-container': 'var(--color-primary-container)',
 * //   'on-primary-container': 'var(--color-on-primary-container)',
 * // }
 * ```
 */
export const getColorVariants = (colorName: string) => ({
  [`on-${colorName}`]: `var(--color-on-${colorName})`,
  [`${colorName}-container`]: `var(--color-${colorName}-container)`,
  [`on-${colorName}-container`]: `var(--color-on-${colorName}-container)`,
});

/**
 * Creates an object containing the color variants for a given color name.
 * @param colorName - The name of the color to generate variants for.
 * @returns An object containing the color variants.
 * @example
 * ```ts
 * const colorVariants = shadcn_getColorVariants('primary');
 * // {
 * //   DEFAULT: 'var(--color-primary)',
 * //   foreground: 'var(--color-on-primary)',
 * // }
 * ```
 */
export const shadcn_getColorVariants = (colorName: string) => ({
  DEFAULT: `var(--color-${colorName})`,
  foreground: `var(--color-on-${colorName})`,
});
