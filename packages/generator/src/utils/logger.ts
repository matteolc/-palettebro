import { version } from '../../package.json';
import { formatPalettebroToHex } from '../color/formatting';
import { nearestColorName } from '../color/nearest-color-name';
import type { PalettebroColor } from '../types';

const log = (message: string) => {
  console.info(
    [
      atob('Lyoh'),
      decodeURIComponent('%F0%9F%8F%84'),
      atob('QHBhbGV0dGVicm8vdGhlbWUtZ2VuZXJhdG9y'),
      version,
      message,
      atob('Ki8='),
    ].join(' '),
  );
};

const logColor = (
  type: string,
  color: string | undefined,
  parsedColor: PalettebroColor | undefined,
  isDark: boolean,
) => {
  if (!color) return;
  if (!parsedColor) return;

  const hexColor = formatPalettebroToHex(parsedColor);
  log(`Generating ${isDark ? 'dark' : 'light'} theme for ${type} color: ${nearestColorName(hexColor)} (${hexColor})`);
};


