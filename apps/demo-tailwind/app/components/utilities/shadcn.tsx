import { CorePaletteColor } from '~/components/palette';
import { SHADCN_BORDER_RING_SECTION, SHADCN_PALETTE_SECTIONS } from '~/const';

export const ShadcnUtilities = () => {
  return (
    <div className="grid grid-cols-5 gap-4 grid-rows-2 w-full">
      {/* First row: 5 columns */}
      {SHADCN_PALETTE_SECTIONS[0].map((section) => (
        <div className="col-span-1 flex flex-col" key={section.groupKey}>
          {section.items.map((item) => (
            <CorePaletteColor
              key={item.name}
              name={item.name}
              bgColor={item.bgColor}
              textColor={item.textColor}
              borderRadius={item.borderRadius}
              className={item.className}
            />
          ))}
        </div>
      ))}
      {/* Second row: Sidebar grid (4 columns) + Border/Ring (1 column) */}
      <div className="grid grid-cols-4 col-span-4 gap-0">
        {SHADCN_PALETTE_SECTIONS[1].map((section) => (
          <div className="col-span-1 flex flex-col" key={section.groupKey}>
            {section.items.map((item) => (
              <CorePaletteColor
                key={item.name}
                name={item.name}
                bgColor={item.bgColor}
                textColor={item.textColor}
                borderRadius={item.borderRadius}
                className={item.className}
              />
            ))}
          </div>
        ))}
      </div>
      {/* Border and Ring */}
      <div className="col-span-1">
        <div className="grid grid-rows-3 gap-0">
          {SHADCN_BORDER_RING_SECTION.map((item) => (
            <CorePaletteColor
              key={item.name}
              name={item.name}
              bgColor={item.bgColor}
              textColor={item.textColor}
              borderRadius={item.borderRadius}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
