import type { Oklch } from 'culori';
import { oklch, round } from 'culori';

export const oklchColorToString = ({ l, c, h }: Oklch) =>
  `${round(6)(l * 100)}% ${round(6)(c)} ${round(6)(h ?? 0)}`;

export const colorToRawOklchString = (color: string) => {
  const result = oklch(color);
  return result ? oklchColorToString(result) : '0.0% 0.0 0.0';
};
