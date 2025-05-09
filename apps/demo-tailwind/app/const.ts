export const BASE_COLORS = [
  {
    name: 'Primary',
    var: '--color-primary',
  },
  {
    name: 'Secondary',
    var: '--color-secondary',
  },
  {
    name: 'Accent',
    var: '--color-accent',
  },
];

export const CORE_PALETTE_DATA = [
  // First Row - Main Colors
  [
    {
      name: 'Primary',
      bgColor: '--color-primary',
      textColor: '--color-on-primary',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Primary',
      bgColor: '--color-on-primary',
      textColor: '--color-primary',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
  [
    {
      name: 'Secondary',
      bgColor: '--color-secondary',
      textColor: '--color-on-secondary',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Secondary',
      bgColor: '--color-on-secondary',
      textColor: '--color-secondary',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
  [
    {
      name: 'Accent',
      bgColor: '--color-accent',
      textColor: '--color-on-accent',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Accent',
      bgColor: '--color-on-accent',
      textColor: '--color-accent',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
  [
    {
      name: 'Error',
      bgColor: '--color-error',
      textColor: '--color-on-error',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Error',
      bgColor: '--color-on-error',
      textColor: '--color-error',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
  // Container Colors
  [
    {
      name: 'Primary Container',
      bgColor: '--color-primary-container',
      textColor: '--color-on-primary-container',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Primary Container',
      bgColor: '--color-on-primary-container',
      textColor: '--color-primary-container',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
  [
    {
      name: 'Secondary Container',
      bgColor: '--color-secondary-container',
      textColor: '--color-on-secondary-container',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Secondary Container',
      bgColor: '--color-on-secondary-container',
      textColor: '--color-secondary-container',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
  [
    {
      name: 'Accent Container',
      bgColor: '--color-accent-container',
      textColor: '--color-on-accent-container',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Accent Container',
      bgColor: '--color-on-accent-container',
      textColor: '--color-accent-container',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
  [
    {
      name: 'Error Container',
      bgColor: '--color-error-container',
      textColor: '--color-on-error-container',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'On Error Container',
      bgColor: '--color-on-error-container',
      textColor: '--color-error-container',
      borderRadius: 'rounded-b-md',
      className: 'h-16',
    },
  ],
];

export const CORE_PALETTE_SURFACE = [
  // Surface Row
  [
    {
      name: 'Surface Dim',
      bgColor: '--color-surface-dim',
      textColor: '--color-on-surface',
      borderRadius: 'rounded-tl-md',
    },
    {
      name: 'Surface',
      bgColor: '--color-surface',
      textColor: '--color-on-surface',
      borderRadius: 'rounded-tr-md',
    },
    {
      name: 'Surface Bright',
      bgColor: '--color-surface-bright',
      textColor: '--color-on-surface',
      borderRadius: 'rounded-tr-md',
    },
  ],
  // Surface Container Row
  [
    {
      name: 'Surf. Cont. Lowest',
      bgColor: '--color-surface-container-lowest',
      textColor: '--color-on-surface',
      borderRadius: 'rounded-tl-md',
    },
    {
      name: 'Surf. Cont. Low',
      bgColor: '--color-surface-container-low',
      textColor: '--color-on-surface',
    },
    {
      name: 'Surf. Container',
      bgColor: '--color-surface-container',
      textColor: '--color-on-surface',
    },
    {
      name: 'Surf. Cont. High',
      bgColor: '--color-surface-container-high',
      textColor: '--color-on-surface',
    },
    {
      name: 'Surf. Cont. Highest',
      bgColor: '--color-surface-container-highest',
      textColor: '--color-on-surface',
    },
  ],
  // Bottom Row
  [
    {
      name: 'On Surface',
      bgColor: '--color-on-surface',
      textColor: '--color-surface',
      className: 'h-16',
      borderRadius: 'rounded-bl-md',
    },
    {
      name: 'On Surface Variant',
      bgColor: '--color-on-surface-variant',
      textColor: '--color-surface',
      className: 'h-16',
    },
    {
      name: 'Outline',
      bgColor: '--color-outline',
      textColor: '--color-surface',
      className: 'h-16',
    },
    {
      name: 'Outline Variant',
      bgColor: '--color-outline-variant',
      textColor: '--color-on-surface',
      className: 'h-16',
      borderRadius: 'rounded-br-md',
    },
  ],
];

export const CORE_PALETTE_RIGHT = [
  // Last Row
  [
    {
      name: 'Inverse Surface',
      bgColor: '--color-inverse-surface',
      textColor: '--color-surface',
      borderRadius: 'rounded-t-md',
    },
    {
      name: 'Inverse On Surface',
      bgColor: '--color-inverse-on-surface',
      textColor: '--color-on-surface',
      className: 'h-16',
    },
    {
      name: 'Inverse Primary',
      bgColor: '--color-inverse-primary',
      textColor: '--color-on-surface',
      className: 'h-16',
    },
  ],
  // Final Row
  [
    {
      name: 'Scrim',
      bgColor: '--color-scrim',
      textColor: '--color-white',
      className: 'h-16',
      borderRadius: 'rounded-bl-md',
    },
    {
      name: 'Shadow',
      bgColor: '--color-shadow',
      textColor: '--color-white',
      className: 'h-16',
      borderRadius: 'rounded-br-md',
    },
  ],
];

export const TW_COLOR_GROUPS = [
  {
    label: 'Primary',
    colors: [
      {
        name: '50',
        bgColor: '--color-primary-50',
        textColor: '--color-primary-950',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '100',
        bgColor: '--color-primary-100',
        textColor: '--color-primary-950',
      },
      {
        name: '200',
        bgColor: '--color-primary-200',
        textColor: '--color-primary-950',
      },
      {
        name: '300',
        bgColor: '--color-primary-300',
        textColor: '--color-primary-950',
      },
      {
        name: '400',
        bgColor: '--color-primary-400',
        textColor: '--color-primary-950',
      },
      {
        name: '500',
        bgColor: '--color-primary-500',
        textColor: '--color-primary-950',
      },
      {
        name: '600',
        bgColor: '--color-primary-600',
        textColor: '--color-primary-50',
      },
      {
        name: '700',
        bgColor: '--color-primary-700',
        textColor: '--color-primary-50',
      },
      {
        name: '800',
        bgColor: '--color-primary-800',
        textColor: '--color-primary-50',
      },
      {
        name: '900',
        bgColor: '--color-primary-900',
        textColor: '--color-primary-50',
      },
      {
        name: '950',
        bgColor: '--color-primary-950',
        textColor: '--color-primary-50',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
  {
    label: 'Secondary',
    colors: [
      {
        name: '50',
        bgColor: '--color-secondary-50',
        textColor: '--color-secondary-950',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '100',
        bgColor: '--color-secondary-100',
        textColor: '--color-secondary-950',
      },
      {
        name: '200',
        bgColor: '--color-secondary-200',
        textColor: '--color-secondary-950',
      },
      {
        name: '300',
        bgColor: '--color-secondary-300',
        textColor: '--color-secondary-950',
      },
      {
        name: '400',
        bgColor: '--color-secondary-400',
        textColor: '--color-secondary-950',
      },
      {
        name: '500',
        bgColor: '--color-secondary-500',
        textColor: '--color-secondary-950',
      },
      {
        name: '600',
        bgColor: '--color-secondary-600',
        textColor: '--color-secondary-50',
      },
      {
        name: '700',
        bgColor: '--color-secondary-700',
        textColor: '--color-secondary-50',
      },
      {
        name: '800',
        bgColor: '--color-secondary-800',
        textColor: '--color-secondary-50',
      },
      {
        name: '900',
        bgColor: '--color-secondary-900',
        textColor: '--color-secondary-50',
      },
      {
        name: '950',
        bgColor: '--color-secondary-950',
        textColor: '--color-secondary-50',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
  {
    label: 'Accent',
    colors: [
      {
        name: '50',
        bgColor: '--color-accent-50',
        textColor: '--color-accent-950',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '100',
        bgColor: '--color-accent-100',
        textColor: '--color-accent-950',
      },
      {
        name: '200',
        bgColor: '--color-accent-200',
        textColor: '--color-accent-950',
      },
      {
        name: '300',
        bgColor: '--color-accent-300',
        textColor: '--color-accent-950',
      },
      {
        name: '400',
        bgColor: '--color-accent-400',
        textColor: '--color-accent-950',
      },
      {
        name: '500',
        bgColor: '--color-accent-500',
        textColor: '--color-accent-950',
      },
      {
        name: '600',
        bgColor: '--color-accent-600',
        textColor: '--color-accent-50',
      },
      {
        name: '700',
        bgColor: '--color-accent-700',
        textColor: '--color-accent-50',
      },
      {
        name: '800',
        bgColor: '--color-accent-800',
        textColor: '--color-accent-50',
      },
      {
        name: '900',
        bgColor: '--color-accent-900',
        textColor: '--color-accent-50',
      },
      {
        name: '950',
        bgColor: '--color-accent-950',
        textColor: '--color-accent-50',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
];

export const TW_SHADES_COUNT = TW_COLOR_GROUPS.reduce((acc, group) => acc + group.colors.length, 0);

export const MUI_COLOR_GROUPS = [
  {
    label: 'Primary',
    colors: [
      {
        name: '0',
        bgColor: '--color-primary-0',
        textColor: '--color-primary-100',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '5',
        bgColor: '--color-primary-5',
        textColor: '--color-primary-100',
      },
      {
        name: '10',
        bgColor: '--color-primary-10',
        textColor: '--color-primary-100',
      },
      {
        name: '15',
        bgColor: '--color-primary-15',
        textColor: '--color-primary-100',
      },
      {
        name: '20',
        bgColor: '--color-primary-20',
        textColor: '--color-primary-100',
      },
      {
        name: '25',
        bgColor: '--color-primary-25',
        textColor: '--color-primary-100',
      },
      {
        name: '30',
        bgColor: '--color-primary-30',
        textColor: '--color-primary-100',
      },
      {
        name: '35',
        bgColor: '--color-primary-35',
        textColor: '--color-primary-100',
      },
      {
        name: '40',
        bgColor: '--color-primary-40',
        textColor: '--color-primary-100',
      },
      {
        name: '50',
        bgColor: '--color-primary-50',
        textColor: '--color-primary-100',
      },
      {
        name: '60',
        bgColor: '--color-primary-60',
        textColor: '--color-primary-0',
      },
      {
        name: '70',
        bgColor: '--color-primary-70',
        textColor: '--color-primary-0',
      },
      {
        name: '80',
        bgColor: '--color-primary-80',
        textColor: '--color-primary-0',
      },
      {
        name: '90',
        bgColor: '--color-primary-90',
        textColor: '--color-primary-0',
      },
      {
        name: '95',
        bgColor: '--color-primary-95',
        textColor: '--color-primary-0',
      },
      {
        name: '98',
        bgColor: '--color-primary-98',
        textColor: '--color-primary-0',
      },
      {
        name: '99',
        bgColor: '--color-primary-99',
        textColor: '--color-primary-0',
      },
      {
        name: '100',
        bgColor: '--color-primary-100',
        textColor: '--color-primary-0',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
  {
    label: 'Secondary',
    colors: [
      {
        name: '0',
        bgColor: '--color-secondary-0',
        textColor: '--color-secondary-100',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '5',
        bgColor: '--color-secondary-5',
        textColor: '--color-secondary-100',
      },
      {
        name: '10',
        bgColor: '--color-secondary-10',
        textColor: '--color-secondary-100',
      },
      {
        name: '15',
        bgColor: '--color-secondary-15',
        textColor: '--color-secondary-100',
      },
      {
        name: '20',
        bgColor: '--color-secondary-20',
        textColor: '--color-secondary-100',
      },
      {
        name: '25',
        bgColor: '--color-secondary-25',
        textColor: '--color-secondary-100',
      },
      {
        name: '30',
        bgColor: '--color-secondary-30',
        textColor: '--color-secondary-100',
      },
      {
        name: '35',
        bgColor: '--color-secondary-35',
        textColor: '--color-secondary-100',
      },
      {
        name: '40',
        bgColor: '--color-secondary-40',
        textColor: '--color-secondary-100',
      },
      {
        name: '50',
        bgColor: '--color-secondary-50',
        textColor: '--color-secondary-100',
      },
      {
        name: '60',
        bgColor: '--color-secondary-60',
        textColor: '--color-secondary-0',
      },
      {
        name: '70',
        bgColor: '--color-secondary-70',
        textColor: '--color-secondary-0',
      },
      {
        name: '80',
        bgColor: '--color-secondary-80',
        textColor: '--color-secondary-0',
      },
      {
        name: '90',
        bgColor: '--color-secondary-90',
        textColor: '--color-secondary-0',
      },
      {
        name: '95',
        bgColor: '--color-secondary-95',
        textColor: '--color-secondary-0',
      },
      {
        name: '98',
        bgColor: '--color-secondary-98',
        textColor: '--color-secondary-0',
      },
      {
        name: '99',
        bgColor: '--color-secondary-99',
        textColor: '--color-secondary-0',
      },
      {
        name: '100',
        bgColor: '--color-secondary-100',
        textColor: '--color-secondary-0',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
  {
    label: 'Accent',
    colors: [
      {
        name: '0',
        bgColor: '--color-accent-0',
        textColor: '--color-accent-100',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '5',
        bgColor: '--color-accent-5',
        textColor: '--color-accent-100',
      },
      {
        name: '10',
        bgColor: '--color-accent-10',
        textColor: '--color-accent-100',
      },
      {
        name: '15',
        bgColor: '--color-accent-15',
        textColor: '--color-accent-100',
      },
      {
        name: '20',
        bgColor: '--color-accent-20',
        textColor: '--color-accent-100',
      },
      {
        name: '25',
        bgColor: '--color-accent-25',
        textColor: '--color-accent-100',
      },
      {
        name: '30',
        bgColor: '--color-accent-30',
        textColor: '--color-accent-100',
      },
      {
        name: '35',
        bgColor: '--color-accent-35',
        textColor: '--color-accent-100',
      },
      {
        name: '40',
        bgColor: '--color-accent-40',
        textColor: '--color-accent-100',
      },
      {
        name: '50',
        bgColor: '--color-accent-50',
        textColor: '--color-accent-100',
      },
      {
        name: '60',
        bgColor: '--color-accent-60',
        textColor: '--color-accent-0',
      },
      {
        name: '70',
        bgColor: '--color-accent-70',
        textColor: '--color-accent-0',
      },
      {
        name: '80',
        bgColor: '--color-accent-80',
        textColor: '--color-accent-0',
      },
      {
        name: '90',
        bgColor: '--color-accent-90',
        textColor: '--color-accent-0',
      },
      {
        name: '95',
        bgColor: '--color-accent-95',
        textColor: '--color-accent-0',
      },
      {
        name: '98',
        bgColor: '--color-accent-98',
        textColor: '--color-accent-0',
      },
      {
        name: '99',
        bgColor: '--color-accent-99',
        textColor: '--color-accent-0',
      },
      {
        name: '100',
        bgColor: '--color-accent-100',
        textColor: '--color-accent-0',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
];

export const MUI_SHADES_COUNT = MUI_COLOR_GROUPS.reduce((acc, group) => acc + group.colors.length, 0);

export const BOOTSTRAP_COLOR_GROUPS = [
  {
    label: 'Primary',
    colors: [
      {
        name: '100',
        bgColor: '--color-primary-100',
        textColor: '--color-primary-900',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '200',
        bgColor: '--color-primary-200',
        textColor: '--color-primary-900',
      },
      {
        name: '300',
        bgColor: '--color-primary-300',
        textColor: '--color-primary-900',
      },
      {
        name: '400',
        bgColor: '--color-primary-400',
        textColor: '--color-primary-900',
      },
      {
        name: '500',
        bgColor: '--color-primary-500',
        textColor: '--color-primary-900',
      },
      {
        name: '600',
        bgColor: '--color-primary-600',
        textColor: '--color-primary-100',
      },
      {
        name: '700',
        bgColor: '--color-primary-700',
        textColor: '--color-primary-100',
      },
      {
        name: '800',
        bgColor: '--color-primary-800',
        textColor: '--color-primary-100',
      },
      {
        name: '900',
        bgColor: '--color-primary-900',
        textColor: '--color-primary-100',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
  {
    label: 'Secondary',
    colors: [
      {
        name: '100',
        bgColor: '--color-secondary-100',
        textColor: '--color-secondary-900',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '200',
        bgColor: '--color-secondary-200',
        textColor: '--color-secondary-900',
      },
      {
        name: '300',
        bgColor: '--color-secondary-300',
        textColor: '--color-secondary-900',
      },
      {
        name: '400',
        bgColor: '--color-secondary-400',
        textColor: '--color-secondary-900',
      },
      {
        name: '500',
        bgColor: '--color-secondary-500',
        textColor: '--color-secondary-900',
      },
      {
        name: '600',
        bgColor: '--color-secondary-600',
        textColor: '--color-secondary-100',
      },
      {
        name: '700',
        bgColor: '--color-secondary-700',
        textColor: '--color-secondary-100',
      },
      {
        name: '800',
        bgColor: '--color-secondary-800',
        textColor: '--color-secondary-100',
      },
      {
        name: '900',
        bgColor: '--color-secondary-900',
        textColor: '--color-secondary-100',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
  {
    label: 'Accent',
    colors: [
      {
        name: '100',
        bgColor: '--color-accent-100',
        textColor: '--color-accent-900',
        borderRadius: 'rounded-l-md',
      },
      {
        name: '200',
        bgColor: '--color-accent-200',
        textColor: '--color-accent-900',
      },
      {
        name: '300',
        bgColor: '--color-accent-300',
        textColor: '--color-accent-900',
      },
      {
        name: '400',
        bgColor: '--color-accent-400',
        textColor: '--color-accent-900',
      },
      {
        name: '500',
        bgColor: '--color-accent-500',
        textColor: '--color-accent-900',
      },
      {
        name: '600',
        bgColor: '--color-accent-600',
        textColor: '--color-accent-100',
      },
      {
        name: '700',
        bgColor: '--color-accent-700',
        textColor: '--color-accent-100',
      },
      {
        name: '800',
        bgColor: '--color-accent-800',
        textColor: '--color-accent-100',
      },
      {
        name: '900',
        bgColor: '--color-accent-900',
        textColor: '--color-accent-100',
        borderRadius: 'rounded-r-md',
      },
    ],
  },
];

export const BOOTSTRAP_SHADES_COUNT = BOOTSTRAP_COLOR_GROUPS.reduce((acc, group) => acc + group.colors.length, 0);

export const CHART_PALETTE_COLORS = [
  {
    name: '0',
    bgColor: '--color-primary-rainbow-0',
    textColor: '--color-on-primary',
    borderRadius: 'rounded-l-md',
  },
  {
    name: '1',
    bgColor: '--color-primary-rainbow-1',
    textColor: '--color-on-primary',
  },
  {
    name: '2',
    bgColor: '--color-primary-rainbow-2',
    textColor: '--color-on-primary',
  },
  {
    name: '3',
    bgColor: '--color-primary-rainbow-3',
    textColor: '--color-on-primary',
  },
  {
    name: '4',
    bgColor: '--color-primary-rainbow-4',
    textColor: '--color-on-primary',
  },
  {
    name: '5',
    bgColor: '--color-primary-rainbow-5',
    textColor: '--color-on-primary',
  },
  {
    name: '6',
    bgColor: '--color-primary-rainbow-6',
    textColor: '--color-on-primary',
  },
  {
    name: '7',
    bgColor: '--color-primary-rainbow-7',
    textColor: '--color-on-primary',
  },
  {
    name: '8',
    bgColor: '--color-primary-rainbow-8',
    textColor: '--color-on-primary',
  },
  {
    name: '9',
    bgColor: '--color-primary-rainbow-9',
    textColor: '--color-on-primary',
  },
  {
    name: '10',
    bgColor: '--color-primary-rainbow-10',
    textColor: '--color-on-primary',
    borderRadius: 'rounded-r-md',
  },
];

export const SHADCN_PALETTE_SECTIONS = [
  // First row: Background, Card, Popover, Muted, Destructive
  [
    {
      groupKey: 'background',
      items: [
        {
          name: 'Background',
          bgColor: '--color-background',
          textColor: '--color-foreground',
          borderRadius: 'rounded-t-md',
        },
        {
          name: 'Foreground',
          bgColor: '--color-foreground',
          textColor: '--color-background',
          borderRadius: 'rounded-b-md',
          className: 'h-16',
        },
      ],
    },
    {
      groupKey: 'card',
      items: [
        {
          name: 'Card',
          bgColor: '--color-card',
          textColor: '--color-card-foreground',
          borderRadius: 'rounded-t-md',
        },
        {
          name: 'Card Foreground',
          bgColor: '--color-card-foreground',
          textColor: '--color-card',
          borderRadius: 'rounded-b-md',
          className: 'h-16',
        },
      ],
    },
    {
      groupKey: 'popover',
      items: [
        {
          name: 'Popover',
          bgColor: '--color-popover',
          textColor: '--color-popover-foreground',
          borderRadius: 'rounded-t-md',
        },
        {
          name: 'Popover Foreground',
          bgColor: '--color-on-surface',
          textColor: '--color-surface',
          borderRadius: 'rounded-b-md',
          className: 'h-16',
        },
      ],
    },
    {
      groupKey: 'muted',
      items: [
        {
          name: 'Muted',
          bgColor: '--color-muted',
          textColor: '--color-muted-foreground',
          borderRadius: 'rounded-t-md',
        },
        {
          name: 'Muted Foreground',
          bgColor: '--color-muted-foreground',
          textColor: '--color-muted',
          borderRadius: 'rounded-b-md',
          className: 'h-16',
        },
      ],
    },
    {
      groupKey: 'destructive',
      items: [
        {
          name: 'Destructive',
          bgColor: '--color-destructive',
          textColor: '--color-destructive-foreground',
          borderRadius: 'rounded-t-md',
        },
        {
          name: 'Destructive Foreground',
          bgColor: '--color-destructive-foreground',
          textColor: '--color-destructive',
          borderRadius: 'rounded-b-md',
          className: 'h-16',
        },
      ],
    },
  ],
  // Second row: Sidebar grid (4 columns)
  [
    {
      groupKey: 'sidebar',
      items: [
        {
          name: 'Sidebar',
          bgColor: '--color-sidebar',
          textColor: '--color-sidebar-foreground',
          borderRadius: 'rounded-tl-md',
        },
        {
          name: 'Sidebar Foreground',
          bgColor: '--color-sidebar-foreground',
          textColor: '--color-sidebar',
          borderRadius: 'rounded-bl-md',
          className: 'h-16',
        },
      ],
    },
    {
      groupKey: 'sidebar-border',
      items: [
        {
          name: 'Sidebar Border',
          bgColor: '--color-sidebar-border',
          textColor: '--color-sidebar-foreground',
          borderRadius: '',
        },
        {
          name: 'Sidebar Ring',
          bgColor: '--color-sidebar-ring',
          textColor: '--color-sidebar-foreground',
          borderRadius: '',
          className: 'h-16',
        },
      ],
    },
    {
      groupKey: 'sidebar-primary',
      items: [
        {
          name: 'Sidebar Primary',
          bgColor: '--color-sidebar-primary',
          textColor: '--color-sidebar-primary-foreground',
          borderRadius: '',
        },
        {
          name: 'Sidebar Primary FG',
          bgColor: '--color-sidebar-primary-foreground',
          textColor: '--color-sidebar-primary',
          borderRadius: '',
          className: 'h-16',
        },
      ],
    },
    {
      groupKey: 'sidebar-accent',
      items: [
        {
          name: 'Sidebar Accent',
          bgColor: '--color-sidebar-accent',
          textColor: '--color-sidebar-accent-foreground',
          borderRadius: 'rounded-tr-md',
        },
        {
          name: 'Sidebar Accent FG',
          bgColor: '--color-sidebar-accent-foreground',
          textColor: '--color-sidebar-accent',
          borderRadius: 'rounded-br-md',
          className: 'h-16',
        },
      ],
    },
  ],
];

export const SHADCN_BORDER_RING_SECTION = [
  {
    name: 'Border',
    bgColor: '--color-border',
    textColor: '--color-foreground',
    borderRadius: 'rounded-t-md',
    className: 'h-16',
  },
  {
    name: 'Ring',
    bgColor: '--color-ring',
    textColor: '--color-foreground',
    borderRadius: '',
    className: 'h-16',
  },
  {
    name: 'Input',
    bgColor: '--color-input',
    textColor: '--color-background',
    borderRadius: 'rounded-b-md',
    className: 'h-16',
  },
];

export type ColorGroup = typeof MUI_COLOR_GROUPS[number];
export type Color = ColorGroup['colors'][number];
