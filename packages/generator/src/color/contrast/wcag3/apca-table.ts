import { wcag3Contrast } from './contrast';

// Font sizes and weights as per the APCA table
const FONT_SIZES = [12, 14, 15, 16, 18, 21, 24, 28, 32, 36, 42, 48, 60, 72, 96];
const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// APCA requirements table (Lc values or 'Ø')
const APCA_REQUIREMENTS: Record<number, Record<number, string | number>> = {
  12: {100: 'Ø', 200: 'Ø', 300: 'Ø', 400: 'Ø', 500: 'Ø', 600: 'Ø', 700: 'Ø', 800: 'Ø', 900: 'Ø'},
  14: {100: 'Ø', 200: 'Ø', 300: 'Ø', 400: '100B', 500: '100B', 600: '90B', 700: '75B', 800: 'Ø', 900: 'Ø'},
  15: {100: 'Ø', 200: 'Ø', 300: 'Ø', 400: '100B', 500: '90B', 600: '75B', 700: '70+15', 800: 'Ø', 900: 'Ø'},
  16: {100: 'Ø', 200: 'Ø', 300: 'Ø', 400: '90B', 500: '75B', 600: '70+15', 700: '60+15', 800: '60', 900: 'Ø'},
  18: {100: 'Ø', 200: 'Ø', 300: '100B', 400: '75B', 500: '70+15', 600: '60+15', 700: '55+15', 800: '55', 900: '55'},
  21: {100: 'Ø', 200: 'Ø', 300: '90B', 400: '70B', 500: '60+15', 600: '55+15', 700: '50+15', 800: '50', 900: '50'},
  24: {100: 'Ø', 200: 'Ø', 300: '75B', 400: '60+15', 500: '55+15', 600: '50+15', 700: '45+15', 800: '45', 900: '45'},
  28: {100: 'Ø', 200: '100', 300: '70+15', 400: '55+15', 500: '50+15', 600: '45+15', 700: '43+15', 800: '43', 900: '43'},
  32: {100: 'Ø', 200: '90', 300: '65+15', 400: '50+15', 500: '45+15', 600: '43+15', 700: '40+15', 800: '40', 900: '40'},
  36: {100: 'Ø', 200: '75', 300: '60+15', 400: '45+15', 500: '43+15', 600: '40+15', 700: '38+15', 800: '38', 900: '38'},
  42: {100: '100', 200: '70', 300: '55', 400: '43', 500: '40', 600: '38', 700: '35', 800: '35', 900: '35'},
  48: {100: '90', 200: '60', 300: '50', 400: '40', 500: '38', 600: '35', 700: '33', 800: '33', 900: '33'},
  60: {100: '75', 200: '55', 300: '45', 400: '38', 500: '35', 600: '33', 700: '30', 800: '30', 900: '30'},
  72: {100: '60', 200: '50', 300: '40', 400: '35', 500: '33', 600: '30', 700: '30', 800: '30', 900: '30'},
  96: {100: '50', 200: '45', 300: '35', 400: '33', 500: '30', 600: '30', 700: '30', 800: '30', 900: '30'},
};

function parseRequirement(req: string | number): number | null {
  if (req === 'Ø') return null;
  if (typeof req === 'number') return req;
  // Handle cases like '70+15', '100B', etc.
  if (req.endsWith('B')) return Number.parseInt(req, 10); // treat 'B' as base value
  if (req.includes('+')) {
    const [base, add] = req.split('+').map(Number);
    return base + add;
  }
  return Number.parseInt(req, 10);
}

export type APCAContrastTableCell = {
  required: string | number;
  actual: number;
  passes: boolean | null; // null if not applicable
};

export type APCAContrastTable = Record<number, Record<number, APCAContrastTableCell>>;

export function generateAPCAContrastTable(bg: string, fg: string): APCAContrastTable {
  const table: APCAContrastTable = {};
  for (const size of FONT_SIZES) {
    table[size] = {};
    for (const weight of FONT_WEIGHTS) {
      const required = APCA_REQUIREMENTS[size][weight];
      const actual = wcag3Contrast(bg, fg);
      const reqValue = parseRequirement(required);
      let passes: boolean | null = null;
      if (reqValue !== null) {
        passes = actual >= reqValue;
      }
      table[size][weight] = { required, actual, passes };
    }
  }
  return table;
}

export function formatAPCAContrastTable(table: APCAContrastTable): string {
  const header = ['Font', ...FONT_WEIGHTS].join('\t');
  const rows = [header];
  for (const size of FONT_SIZES) {
    const row = [size.toString()];
    for (const weight of FONT_WEIGHTS) {
      const cell = table[size][weight];
      if (cell.required === 'Ø') {
        row.push('Ø');
      } else {
        // Show value and pass/fail
        row.push(`${cell.passes ? '✔️' : '❌'}`);
      }
    }
    rows.push(row.join('\t'));
  }
  return rows.join('\n');
} 