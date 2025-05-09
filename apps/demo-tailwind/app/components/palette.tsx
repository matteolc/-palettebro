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
      <div className="grid grid-cols-4 gap-4 grid-rows-2">
        {/* Main and Container Colors */}
        {CORE_PALETTE_DATA.map((col, i) => (
          <div
            key={i}
            className={twMerge(
              'col-span-1 flex flex-col',
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
        <div className="col-span-1 grid">
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

export const ChartPalette = () => {
  return (
    <div className="space-y-1 w-full">
      <div className="text-sm font-medium text-muted-foreground">Chart</div>
      <div className="grid grid-cols-11 gap-0">
        {CHART_PALETTE_COLORS.map((color, id) => (
          <CorePaletteColor key={id} {...color} className="h-16" />
        ))}
      </div>
    </div>
  );
};

export const ShadePalette = ({ shades }: { shades: ColorGroup[] }) => {
  const count = shades.reduce((acc, group) => acc + group.colors.length, 0);
  const className = twMerge(
    count === MUI_SHADES_COUNT && 'grid-cols-[repeat(18,minmax(0,1fr))]',
    count === TW_SHADES_COUNT && 'grid-cols-[repeat(11,minmax(0,1fr))]',
    count === BOOTSTRAP_SHADES_COUNT && 'grid-cols-[repeat(9,minmax(0,1fr))]',
  );
  return (
    <div className="space-y-8">
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
    <h2 className="text-3xl font-bold text-muted-foreground underline underline-offset-8">{children}</h2>
  );
};
