import type { PalettebroColor } from '../color/types';
import defs, { generateName } from '../nodes';
import type { Args, NodeDef, Param } from '../nodes/types';
import type { PresetNode } from '../presets/types';
import { range } from '../utils/generators';
import { interval } from '../utils/math';
import type { ColorFormat } from '../types';
import { ColorFormatEnum } from '../const';
import { formatters } from '../const/formatters';

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
  format: ColorFormat = ColorFormatEnum.oklch,
) => {
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
