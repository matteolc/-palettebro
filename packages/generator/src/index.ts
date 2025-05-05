import {
  palettebroToHsl,
  palettebroToLch,
  palettebroToRgb,
} from './color/conversion';
import {
  formatHsl,
  formatLch,
  formatRgb,
  formatRgbToHex,
} from './color/formatting';
import type { PalettebroColor } from './color/types';
import defs, { generateName } from './nodes';
import type { Args, NodeDef, Param } from './nodes/types';
import type { PresetNode } from './presets/types';
import { range } from './utils/generators';
import { interval } from './utils/math';
import convert from 'simple-color-converter';
import { colorToRawOklchString } from './color/formatting/oklch';
import type { ColorFormat } from './types';
import { ColorFormatEnum } from './const';

export const sample = (def: NodeDef, color: PalettebroColor, ratio?: number) =>
  def.apply(
    color,
    Object.fromEntries(
      def.params.map((param) => [
        param.name,
        ratio !== undefined && param.type === 'range'
          ? interval(param.min, param.max, ratio)
          : param.default,
      ]),
    ),
  );

export const samples = (def: NodeDef, color: PalettebroColor, count: number) =>
  range(count).map((i) => sample(def, color, i / (count - 1)));

export const paramSample = (
  def: NodeDef,
  args: Args,
  paramName: Param['name'],
  color: PalettebroColor,
  ratio: number,
) =>
  def.apply(
    color,
    Object.fromEntries(
      def.params.map((param) => [
        param.name,
        param.name === paramName && param.type === 'range'
          ? interval(param.min, param.max, ratio)
          : param.name in args
            ? args[param.name]
            : param.default,
      ]),
    ),
  );

export const paramSamples = (
  def: NodeDef,
  args: Args,
  paramName: Param['name'],
  color: PalettebroColor,
  count: number,
) =>
  range(count).map((_, i) =>
    paramSample(def, args, paramName, color, i / (count - 1)),
  );

export const presetSample = (
  def: NodeDef,
  color: PalettebroColor,
  args?: Args,
) =>
  def.apply(
    color,
    Object.fromEntries(
      def.params.map(({ name, default: d }) => [
        name,
        args && name in args ? args[name] : d,
      ]),
    ),
  );

export const presetSamples = (nodes: PresetNode[], color: PalettebroColor) =>
  nodes.flatMap(({ type, args, children, isHidden }) => {
    const def = defs[type];
    const sample = presetSample(def, color, args);
    const samples: PalettebroColor[] = [];

    if (!isHidden) {
      samples.push(sample);
    }

    if (children) {
      samples.push(...presetSamples(children, sample));
    }

    return samples;
  });

export const presetSamplesWithKeyAndName = (
  nodes: PresetNode[],
  color: PalettebroColor,
  parentToken?: string,
) => {
  return nodes.flatMap(({ type, args, children, isHidden, token }) => {
    const def = defs[type];
    const sample = presetSample(def, color, args);
    const key = generateName(token, color, parentToken);
    const name = generateName(undefined, sample);
    const samples: [string, string, PalettebroColor][] = [];

    if (!isHidden) {
      samples.push([key, name, sample]);
    }

    if (children) {
      samples.push(...presetSamplesWithKeyAndName(children, sample, token));
    }

    return samples;
  });
};

export const presetSampleWithKeyAndNameHash = (
  samples: [string, string, PalettebroColor][],
  format: ColorFormat = ColorFormatEnum.hex,
) => {
  const formatters = {
    [ColorFormatEnum.rgb]: (color: PalettebroColor) =>
      formatRgb(palettebroToRgb(color)),
    [ColorFormatEnum.hex]: (color: PalettebroColor) =>
      formatRgbToHex(palettebroToRgb(color)),
    [ColorFormatEnum.hsl]: (color: PalettebroColor) =>
      formatHsl(palettebroToHsl(color)),
    [ColorFormatEnum.lch]: (color: PalettebroColor) =>
      formatLch(palettebroToLch(color)),
    [ColorFormatEnum.oklch]: (color: PalettebroColor) =>
      `oklch(${colorToRawOklchString(formatRgbToHex(palettebroToRgb(color)))})`,
    [ColorFormatEnum.pantone]: (color: PalettebroColor) =>
      new convert({
        color: formatRgbToHex(palettebroToRgb(color)),
        to: 'pantone',
      }).color,
  };

  return Object.fromEntries(
    samples.map(([key, name, color]) => [
      key,
      {
        name,
        color: formatters[format](color) as string,
      },
    ]),
  );
};

export * from './color';
export * from './utils';
export * from './const';
export * from './types';
export * from './palettes';
export { staticPalette } from './palettes';
