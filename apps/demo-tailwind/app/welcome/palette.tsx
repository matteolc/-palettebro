import React from "react";

const COLORS = [
  {
    name: "Primary",
    var: "--color-primary",
  },
  {
    name: "Secondary",
    var: "--color-secondary",
  },
  {
    name: "Accent",
    var: "--color-accent",
  },
];

export function PaletteShowcase() {
  return (
    <div className="flex gap-8 justify-center items-end py-8">
      {COLORS.map((color) => (
        <div key={color.var} className="flex flex-col items-center">
          <div
            style={{
              background: `var(${color.var})`,
              width: 80,
              height: 80,
              borderRadius: 16,
              border: "2px solid #e5e7eb",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
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
