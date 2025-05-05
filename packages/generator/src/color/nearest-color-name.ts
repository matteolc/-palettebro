import nearestColor from 'nearest-color';
import colornames from '../data/colornames.bestof.json';

const find = nearestColor.from(
  Object.fromEntries(
    Object.entries(colornames).map(([name, hex]) => [name, hex]),
  ),
);

export const nearestColorName = (hex: string) => {
  try {
    return find(hex).name;
  } catch (e) {
    return hex;
  }
};
