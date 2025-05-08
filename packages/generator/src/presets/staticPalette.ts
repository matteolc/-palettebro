import splitComplementaryLeft from '../nodes/splitComplementaryLeft';
import splitComplementaryRight from '../nodes/splitComplementaryRight';
import tetradLeft from '../nodes/tetradLeft';
import tetradRight from '../nodes/tetradRight';
import triadLeft from '../nodes/triadLeft';
import triadRight from '../nodes/triadRight';
import hue from '../nodes/hue';
import highlight from '../nodes/highlight';
import shadow from '../nodes/shadow';
import saturation from '../nodes/saturation';
import contrasting from '../nodes/contrasting';
import lightness from '../nodes/lightness';
import type { GeneratorOptions } from '../types';
import type { Preset } from './types';
import primary from '../nodes/primary';
import { randomUsableColor } from '../color';
import defs from '../nodes';
import shades from '../nodes/shades';
import { ColorShadesPresetEnum, StaticThemePresetEnum } from '../const';

type NodeArgs = {
  hue?: {
    degrees: number;
  };
  highlight?: {
    amount: number;
    shift: number;
    temp: number;
  };
  shadow?: {
    amount: number;
    shift: number;
    temp: number;
  };
  saturation?: {
    amount: number;
  };
  contrasting?: {
    amount: number;
  };
  lightness?: {
    amount: number;
  };
};

type NodeDef = {
  type: string;
  args?: NodeArgs[keyof NodeArgs];
};

type NodeConfig = {
  secondary: {
    default: NodeDef;
    reverse: NodeDef;
  };
  accent: {
    default: NodeDef;
    reverse: NodeDef;
  };
};

const presetNodeMapping: Record<
  keyof typeof StaticThemePresetEnum,
  NodeConfig
> = {
  vaporwave: {
    secondary: {
      default: {
        type: hue.type,
        args: { degrees: 195 },
      },
      reverse: {
        type: saturation.type,
        args: { amount: 100 },
      },
    },
    accent: {
      default: {
        type: highlight.type,
        args: { amount: 45, shift: 25, temp: 550 },
      },
      reverse: {
        type: contrasting.type,
        args: { amount: 95 },
      },
    },
  },
  'retro-futurism': {
    secondary: {
      default: {
        type: saturation.type,
        args: { amount: 75 },
      },
      reverse: {
        type: highlight.type,
        args: { amount: 55, shift: 35, temp: 720 },
      },
    },
    accent: {
      default: {
        type: hue.type,
        args: { degrees: 210 },
      },
      reverse: {
        type: contrasting.type,
        args: { amount: 100 },
      },
    },
  },
  cyberpunk: {
    secondary: {
      default: {
        type: hue.type,
        args: { degrees: 180 },
      },
      reverse: {
        type: saturation.type,
        args: { amount: 80 },
      },
    },
    accent: {
      default: {
        type: contrasting.type,
        args: { amount: 90 },
      },
      reverse: {
        type: highlight.type,
        args: { amount: 35, shift: 25, temp: 700 },
      },
    },
  },
  glassmorphism: {
    secondary: {
      default: {
        type: saturation.type,
        args: { amount: -50 },
      },
      reverse: {
        type: lightness.type,
        args: { amount: 85 },
      },
    },
    accent: {
      default: {
        type: highlight.type,
        args: { amount: 20, shift: 5, temp: 620 },
      },
      reverse: {
        type: shadow.type,
        args: { amount: 10, shift: 5, temp: 620 },
      },
    },
  },
  'neo-brutalist': {
    secondary: {
      default: {
        type: saturation.type,
        args: { amount: 40 },
      },
      reverse: {
        type: lightness.type,
        args: { amount: 95 },
      },
    },
    accent: {
      default: {
        type: contrasting.type,
        args: { amount: 100 },
      },
      reverse: {
        type: contrasting.type,
        args: { amount: 100 },
      },
    },
  },
  duotone: {
    secondary: {
      default: {
        type: saturation.type,
        args: { amount: -40 },
      },
      reverse: {
        type: contrasting.type,
        args: { amount: 80 },
      },
    },
    accent: {
      default: {
        type: highlight.type,
        args: {
          amount: 25,
          shift: 5, // Small hue shift to maintain harmony
          temp: 650, // Neutral temperature
        },
      },
      reverse: {
        type: shadow.type,
        args: {
          amount: 25,
          shift: 5, // Small hue shift to maintain harmony
          temp: 650, // Neutral temperature
        },
      },
    },
  },
  depth: {
    secondary: {
      default: {
        type: highlight.type,
        args: { amount: 15, shift: 10, temp: 650 },
      },
      reverse: {
        type: shadow.type,
        args: { amount: 15, shift: 10, temp: 650 },
      },
    },
    accent: {
      default: {
        type: shadow.type,
        args: { amount: 25, shift: 10, temp: 650 },
      },
      reverse: {
        type: highlight.type,
        args: { amount: 25, shift: 10, temp: 650 },
      },
    },
  },
  'hue-shift': {
    secondary: {
      default: {
        type: hue.type,
        args: { degrees: 30 },
      },
      reverse: {
        type: hue.type,
        args: { degrees: 30 },
      },
    },
    accent: {
      default: {
        type: hue.type,
        args: { degrees: 60 },
      },
      reverse: {
        type: hue.type,
        args: { degrees: 60 },
      },
    },
  },
  'split-complementary': {
    secondary: {
      default: { type: splitComplementaryLeft.type },
      reverse: { type: splitComplementaryRight.type },
    },
    accent: {
      default: { type: splitComplementaryRight.type },
      reverse: { type: splitComplementaryLeft.type },
    },
  },
  tetrad: {
    secondary: {
      default: { type: tetradLeft.type },
      reverse: { type: tetradRight.type },
    },
    accent: {
      default: { type: tetradRight.type },
      reverse: { type: tetradLeft.type },
    },
  },
  triad: {
    secondary: {
      default: { type: triadLeft.type },
      reverse: { type: triadRight.type },
    },
    accent: {
      default: { type: triadRight.type },
      reverse: { type: triadLeft.type },
    },
  },
  'nordic-minimalism': {
    secondary: {
      default: {
        type: saturation.type,
        args: { amount: -30 }, // Desaturated look
      },
      reverse: {
        type: lightness.type,
        args: { amount: 95 }, // High lightness for contrast
      },
    },
    accent: {
      default: {
        type: hue.type,
        args: { degrees: 200 }, // Cool blue tones
      },
      reverse: {
        type: shadow.type,
        args: { amount: 15, shift: 5, temp: 650 },
      },
    },
  },
  'sunset-gradient': {
    secondary: {
      default: {
        type: hue.type,
        args: { degrees: 35 }, // Warm orange
      },
      reverse: {
        type: saturation.type,
        args: { amount: 80 }, // Boost saturation
      },
    },
    accent: {
      default: {
        type: hue.type,
        args: { degrees: 320 }, // Magenta shift
      },
      reverse: {
        type: highlight.type,
        args: { amount: 40, shift: 10, temp: 550 },
      },
    },
  },
  'electric-neon': {
    secondary: {
      default: {
        type: saturation.type,
        args: { amount: 100 }, // Max saturation
      },
      reverse: {
        type: hue.type,
        args: { degrees: 120 }, // Green shift
      },
    },
    accent: {
      default: {
        type: contrasting.type,
        args: { amount: 100 }, // Maximum contrast
      },
      reverse: {
        type: hue.type,
        args: { degrees: 270 }, // Purple shift
      },
    },
  },
  'earth-tones': {
    secondary: {
      default: {
        type: saturation.type,
        args: { amount: -20 }, // Muted colors
      },
      reverse: {
        type: lightness.type,
        args: { amount: 75 }, // Natural lightness
      },
    },
    accent: {
      default: {
        type: hue.type,
        args: { degrees: 50 }, // Terracotta
      },
      reverse: {
        type: shadow.type,
        args: { amount: 20, shift: 15, temp: 450 },
      },
    },
  },
  'pastel-dreams': {
    secondary: {
      default: {
        type: lightness.type,
        args: { amount: 85 }, // Soft pastel base
      },
      reverse: {
        type: saturation.type,
        args: { amount: 40 }, // Gentle saturation
      },
    },
    accent: {
      default: {
        type: hue.type,
        args: { degrees: 280 }, // Lavender tones
      },
      reverse: {
        type: highlight.type,
        args: { amount: 25, shift: 5, temp: 600 },
      },
    },
  },
  'monochrome-depth': {
    secondary: {
      default: {
        type: lightness.type,
        args: { amount: 30 }, // Dark accents
      },
      reverse: {
        type: lightness.type,
        args: { amount: 70 }, // Light accents
      },
    },
    accent: {
      default: {
        type: saturation.type,
        args: { amount: -100 }, // Full desaturation
      },
      reverse: {
        type: shadow.type,
        args: { amount: 25, shift: 0, temp: 650 }, // Neutral shadows
      },
    },
  },
} as const;

const isValidStaticPreset = (
  preset: string,
): preset is keyof typeof StaticThemePresetEnum => {
  return preset in presetNodeMapping;
};

export default (options?: GeneratorOptions) => {
  const getNodeDef = (nodeDef: NodeDef, token: string) => {
    const baseNodeDef = {
      ...defs[nodeDef.type],
      token,
      children: shades({
        isDark: options?.isDark ?? false,
        colorShadesPreset:
          options?.colorShadesPreset ?? ColorShadesPresetEnum.tailwind,
        reverseLightDarkShades: options?.reverseLightDarkShades ?? false,
      }),
    };

    if (!nodeDef.args) return baseNodeDef;

    return {
      ...baseNodeDef,
      args: nodeDef.args,
    };
  };

  const defaultPreset = StaticThemePresetEnum.triad;
  let currentPreset = options?.preset ?? defaultPreset;

  if (!isValidStaticPreset(currentPreset)) {
    currentPreset = defaultPreset;
  }

  const direction = options?.reverse ? 'reverse' : 'default';

  return {
    label: 'Static palette',
    description: 'A static palette with fixed color combinations',
    nodes: [
      primary({
        isDark: options?.isDark ?? false,
        primaryColor: options?.primaryColor ?? randomUsableColor(),
        colorShadesPreset:
          options?.colorShadesPreset ?? ColorShadesPresetEnum.tailwind,
        reverseLightDarkShades: options?.reverseLightDarkShades ?? false,
        children: [
          getNodeDef(
            presetNodeMapping[currentPreset].secondary[direction],
            'secondary',
          ),
          getNodeDef(
            presetNodeMapping[currentPreset].accent[direction],
            'accent',
          ),
        ],
      }),
    ],
  } as Preset;
};
