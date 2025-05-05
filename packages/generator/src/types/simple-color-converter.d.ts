declare module 'simple-color-converter' {
  interface ColorConverterOptions {
    color: string;
    to?: string;
  }

  interface RGBColor {
    r: number;
    g: number;
    b: number;
  }

  interface HSLColor {
    h: number;
    s: number;
    l: number;
  }

  interface HSVColor {
    h: number;
    s: number;
    v: number;
  }

  interface LABColor {
    l: number;
    a: number;
    b: number;
  }

  interface CMYKColor {
    c: number;
    m: number;
    y: number;
    k: number;
  }

  interface RALColor {
    ral: number;
    name: string;
    lrv: number;
  }

  export type ColorValue = string | RGBColor | HSLColor | HSVColor | LABColor | CMYKColor | RALColor;

  class SimpleColorConverter {
    constructor(options: ColorConverterOptions);
    color: ColorValue;
    toString(): string;
  }

  export default SimpleColorConverter;
}
