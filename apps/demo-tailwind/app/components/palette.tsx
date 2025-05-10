import { twMerge } from 'tailwind-merge';
import {
  BASE_COLORS,
  CORE_PALETTE_DATA,
  CORE_PALETTE_RIGHT,
  CORE_PALETTE_SURFACE,
  CHART_PALETTE_COLORS,
  type ColorGroup,
  BOOTSTRAP_SHADES_COUNT,
  MUI_SHADES_COUNT,
  TW_SHADES_COUNT,
} from '~/const';
import {
  isWcag2Readable,
  wcag2ContrastGrade,
  type Wcag2Grade,
  type Wcag2Size,
} from '../../../../packages/generator/dist/index.mjs';
import { wcag2Contrast } from '../../../../packages/generator/dist/index.mjs';

export function BasePaletteColors() {
  return (
    <div className="flex gap-8 justify-center items-end py-8">
      {BASE_COLORS.map((color) => (
        <div key={color.var} className="flex flex-col items-center">
          <div
            className={
              'size-20 border-2 border-inverse-surface rounded-2xl shadow-lg shadow-border'
            }
            style={{
              background: `var(${color.var})`,
            }}
          />
          <div className="mt-3 text-muted-foreground font-semibold text-center">
            {color.name}
          </div>
          <div className="text-xs text-muted-foreground text-center select-all">
            <code>{color.var}</code>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContrastBadge({
  contrast,
  grade,
  isReadable,
  textColor,
  className,
}: {
  contrast: number;
  grade: Wcag2Grade;
  isReadable: boolean;
  textColor: string;
  className?: string;
}) {
  return (
    <div className={twMerge('flex items-center justify-between w-full gap-1')}>
      <div
        className={twMerge(
          'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden',
          'border-transparent text-white',
          isReadable
            ? 'bg-shadow'
            : grade === 'AA18'
              ? 'bg-orange-500'
              : 'bg-destructive',
          className,
          'min-w-12',
        )}
      >
        {grade}
      </div>
      <div
        className="text-xs text-muted-foreground"
        style={{ color: `var(${textColor})` }}
      >
        {contrast}
      </div>
    </div>
  );
}

export function CorePaletteColorContrast({
  name,
  bgColor,
  textColor,
  level,
  size,
  styles,
  className,
}: {
  name: string;
  bgColor: string;
  textColor: string;
  level?: Wcag2Grade;
  size?: Wcag2Size;
  styles: CSSStyleDeclaration | null;
  className?: string;
}) {
  if (!styles) {
    return null;
  }

  const bgColorCss = styles.getPropertyValue(bgColor);
  const textColorCss = styles.getPropertyValue(textColor);

  const contrastWcag2 = wcag2Contrast(bgColorCss, textColorCss);
  const gradeWcag2 = wcag2ContrastGrade(bgColorCss, textColorCss);
  const isReadableWcag2 = isWcag2Readable(bgColorCss, textColorCss, {
    level,
    size,
  });

  return (
    <div className={twMerge('flex flex-col')}>
      <div
        className={twMerge('relative h-24 text-sm w-full rounded-md')}
        style={{
          backgroundColor: `var(${bgColor})`,
          color: `var(${textColor})`,
        }}
      >
        <div className="flex flex-col items-start w-full p-2 justify-between h-full">
          <span className="text-lg font-bold truncate text-left w-full">
            {name}
          </span>
          <ContrastBadge
            contrast={Math.round(contrastWcag2 * 10) / 10}
            grade={gradeWcag2}
            isReadable={isReadableWcag2}
            textColor={textColor}
          />
        </div>
      </div>
    </div>
  );
}

export function CorePaletteColor({
  name,
  bgColor,
  textColor,
  borderRadius,
  className,
}: {
  name: string;
  bgColor: string;
  textColor: string;
  borderRadius?: string;
  className?: string;
}) {
  return (
    <div className={twMerge('flex flex-col', className)}>
      <div
        className={twMerge('relative h-32 text-sm w-full', borderRadius)}
        style={{
          backgroundColor: `var(${bgColor})`,
          color: `var(${textColor})`,
        }}
      >
        <div className="flex flex-col items-start w-full p-2">
          <span className="text-lg font-bold truncate text-left w-full">
            {name}
          </span>
          <span className="text-xs font-normal text-left truncate w-full">
            {bgColor}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CorePalette() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:grid-rows-2">
        {/* Main and Container Colors */}
        {CORE_PALETTE_DATA.map((col, i) => (
          <div
            key={i}
            className={twMerge(
              'col-span-3 lg:col-span-1 flex flex-col',
              i === 0 ? 'rounded-md' : '',
            )}
          >
            {col.map((color, j) => (
              <CorePaletteColor key={j} {...color} />
            ))}
          </div>
        ))}

        {/* Surface/Outline Block */}
        <div className="col-span-3 row-span-4">
          {/* Surface Row */}
          <div className="col-span-4 grid grid-cols-3 gap-0">
            {CORE_PALETTE_SURFACE[0].map((color, i) => (
              <CorePaletteColor key={i} {...color} />
            ))}
          </div>
          {/* Surface Container Row */}
          <div className="col-span-4 grid grid-cols-5 gap-0">
            {CORE_PALETTE_SURFACE[1].map((color, i) => (
              <CorePaletteColor key={i} {...color} />
            ))}
          </div>
          {/* Bottom Row */}
          <div className="col-span-4 grid grid-cols-4 gap-0">
            {CORE_PALETTE_SURFACE[2].map((color, i) => (
              <CorePaletteColor key={i} {...color} />
            ))}
          </div>
        </div>

        {/* Rightmost Column */}
        <div className="col-span-3 lg:col-span-1 grid">
          {/* Last Row */}
          <div className="grid row-span-3 gap-0">
            {CORE_PALETTE_RIGHT[0].map((color, i) => (
              <CorePaletteColor key={i} {...color} />
            ))}
          </div>
          {/* Final Row */}
          <div className="grid row-span-1 grid-cols-2 gap-0">
            {CORE_PALETTE_RIGHT[1].map((color, i) => (
              <CorePaletteColor key={i} {...color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColorPaletteLegend() {
  return (
    <div className="flex flex-col gap-2 p-2 border border-border rounded-md bg-surface w-fit">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div
          className={twMerge(
            'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden',
            'border-transparent text-white bg-shadow',
            'min-w-12',
          )}
        >
          AAA
        </div>
        <div className="text-xs text-muted-foreground">Pass, AAA (7+)</div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <div
          className={twMerge(
            'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden',
            'border-transparent text-white bg-shadow',
            'min-w-12',
          )}
        >
          AA
        </div>
        <div className="text-xs text-muted-foreground">Pass, AA (4.5+)</div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <div
          className={twMerge(
            'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden',
            'border-transparent text-white bg-orange-500',
            'min-w-12',
          )}
        >
          AA18
        </div>
        <div className="text-xs text-muted-foreground">
          Pass, Large Text Only (3+)
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <div
          className={twMerge(
            'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden',
            'border-transparent text-destructive-foreground bg-destructive',
            'min-w-12',
          )}
        >
          DNP
        </div>
        <div className="text-xs text-muted-foreground">Does Not Pass</div>
      </div>
    </div>
  );
}

export function CorePaletteContrast({
  styles,
}: { styles: CSSStyleDeclaration | null }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 grid-rows-2">
        {[
          ...CORE_PALETTE_DATA.flat(),
          ...CORE_PALETTE_SURFACE.flat(),
          ...CORE_PALETTE_RIGHT.flat(),
        ].map((color, i) => (
          <div key={i} className="grid grid-cols-1 gap-4">
            <CorePaletteColorContrast key={i} {...color} styles={styles} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShadePaletteContrast({
  shades,
  styles,
}: { shades: ColorGroup[] | null; styles: CSSStyleDeclaration | null }) {
  if (!shades) {
    return null;
  }
  const count = shades.reduce((acc, group) => acc + group.colors.length, 0);
  const className = twMerge(
    count === MUI_SHADES_COUNT &&
      'grid-cols-1 lg:grid-cols-[repeat(9,minmax(0,1fr))]',
    count === TW_SHADES_COUNT &&
      'grid-cols-1 lg:grid-cols-[repeat(11,minmax(0,1fr))]',
    count === BOOTSTRAP_SHADES_COUNT &&
      'grid-cols-1 lg:grid-cols-[repeat(9,minmax(0,1fr))]',
  );
  return (
    <div className={twMerge('grid gap-4', className)}>
      {shades
        .flatMap((group) => group.colors)
        .map((color) => (
          <CorePaletteColorContrast
            key={color.name}
            {...color}
            styles={styles}
          />
        ))}
    </div>
  );
}

export function ChartPaletteContrast({
  styles,
}: { styles: CSSStyleDeclaration | null }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-4 grid-rows-1">
      {CHART_PALETTE_COLORS.map((color, id) => (
        <CorePaletteColorContrast key={id} {...color} styles={styles} />
      ))}
    </div>
  );
}

export const ChartPalette = () => {
  return (
    <div className="space-y-1 lg:w-full flex flex-col gap-4">
      <div className="text-sm font-medium text-muted-foreground">Chart</div>
      <div className="grid lg:grid-cols-11 gap-0">
        {CHART_PALETTE_COLORS.map((color, id) => (
          <CorePaletteColor key={id} {...color} className="h-16" />
        ))}
      </div>
    </div>
  );
};

export const ShadePalette = ({ shades }: { shades: ColorGroup[] | null }) => {
  if (!shades) {
    return null;
  }

  const count = shades.reduce((acc, group) => acc + group.colors.length, 0);
  const className = twMerge(
    count === MUI_SHADES_COUNT &&
      'grid-cols-1 lg:grid-cols-[repeat(18,minmax(0,1fr))]',
    count === TW_SHADES_COUNT &&
      'grid-cols-1 lg:grid-cols-[repeat(11,minmax(0,1fr))]',
    count === BOOTSTRAP_SHADES_COUNT &&
      'grid-cols-1 lg:grid-cols-[repeat(9,minmax(0,1fr))]',
  );
  return (
    <div className="space-y-8 flex flex-row lg:flex-col gap-4">
      {shades.map((group) => (
        <div className="space-y-1" key={group.label}>
          <div className="text-sm font-medium text-muted-foreground">
            {group.label}
          </div>
          <div className={twMerge('grid gap-0', className)}>
            {group.colors.map((color) => (
              <CorePaletteColor key={color.name} {...color} className="h-16" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const PaletteSectionTitle = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold text-muted-foreground underline underline-offset-8">
      {children}
    </h2>
  );
};
