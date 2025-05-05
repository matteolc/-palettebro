import type { PalettebroColor } from '../color/types';

export type SampleType = 'single' | 'discrete' | 'continuous';

export type BooleanParam = {
  type: 'boolean';
  name: string;
  label: string;
  default: boolean;
};

export type ColorParam = {
  type: 'color';
  name: string;
  label: string;
  default: PalettebroColor;
};

export type RangeParam = {
  type: 'range';
  name: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  default: number;
};

export type Param = BooleanParam | ColorParam | RangeParam;

export type Args = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [name: string]: any;
};

export type NodeDef = {
  type: string;
  label: string;
  argsLabel?: (args: Args) => string;
  description?: string;
  params: Param[];
  samples: SampleType;
  apply: (color: PalettebroColor, args: Args) => PalettebroColor;
};

export type NodeOutput = [color: PalettebroColor, name: string];
export type NodeOutputRecord = Record<Node['id'], NodeOutput>;

export type Node = {
  id: string;
  def: NodeDef;
  token: string;
  isHidden: boolean;
  input: NodeOutput;
  args: Args;
  output: NodeOutput;
  children: Node[];
  parent?: Node;
  addChild: (node: Node) => void;
  removeChild: (node: Node) => void;
  connect: (outputs: NodeOutputRecord) => void;
  destroy: () => void;
};
