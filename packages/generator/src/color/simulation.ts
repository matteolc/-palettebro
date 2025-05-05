import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  convertRgbToLab,
} from 'culori';
import { rgbFromCulori, rgbToCulori } from './culori';
import type { RgbColor } from './types';
import DeltaE from 'delta-e';

export const simulateProtanomaly = (color: RgbColor, severity = 1) => {
  const filter = filterDeficiencyProt(severity);
  return rgbFromCulori(filter(rgbToCulori(color)));
};

export const simulateDeuteranomaly = (color: RgbColor, severity = 1) => {
  const filter = filterDeficiencyDeuter(severity);
  return rgbFromCulori(filter(rgbToCulori(color)));
};

export const simulateTritanomaly = (color: RgbColor, severity = 1) => {
  const filter = filterDeficiencyTrit(severity);
  return rgbFromCulori(filter(rgbToCulori(color)));
};

export const getColorDifference = (color1: RgbColor, color2: RgbColor) => {
  // pre-formatting and running through specific deltaE formula
  const c1 = convertRgbToLab(rgbToCulori(color1));
  const c2 = convertRgbToLab(rgbToCulori(color2));
  const c1Lab = {L: c1.l * 100, A: c1.a, B: c1.b};
  const c2Lab = {L: c2.l * 100, A: c2.a, B: c2.b};
  // Use DeltaE 2000 formula (latest)
  return DeltaE.getDeltaE00(c1Lab, c2Lab);
}