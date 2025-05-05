import { version } from '../package.json';

export const log = (message: string) => {
  console.info(
    [
      atob('Lyoh'),
      decodeURIComponent('%F0%9F%8F%84'),
      atob('QHBhbGV0dGVicm8vdGFpbHdpbmQtdGhlbWU='),
      version,
      atob(message),
      atob('Ki8='),
    ].join(' '),
  );
};
