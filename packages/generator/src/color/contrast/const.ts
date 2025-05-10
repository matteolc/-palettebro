import { createEnum } from "../../utils";

export const Wcag2Levels = ['AAA', 'AA', 'AA18', 'DNP'] as const;
export const Wcag2LevelEnum = createEnum(Wcag2Levels);

export enum Wcag2Level {
  aaa = 7,
  aa = 4.5,
  aa18 = 3,
  dnp = 0,
}

export const Wcag2Sizes = ['small', 'large'] as const;
export const Wcag2SizeEnum = createEnum(Wcag2Sizes);

export const Wcag3Levels = ['5', '4', '3', '2', '1', '0'] as const;
export const Wcag3LevelEnum = createEnum(Wcag3Levels);

export enum Wcag3Level {
  all = 75,
  body = 60,
  large = 45,
  text = 30,
  nonText = 15,
  ko = 0,
}

export const wcag2To3Equivalences = {
  [Wcag2Level.aaa]: Wcag3Level.all,
  [Wcag2Level.aa]: Wcag3Level.body,
  [Wcag2Level.aa18]: Wcag3Level.large,
  [Wcag2Level.dnp]: Wcag3Level.ko,
};

export const wcag3To2Equivalences = {
  [Wcag3Level.all]: Wcag2Level.aaa,
  [Wcag3Level.body]: Wcag2Level.aa,
  [Wcag3Level.large]: Wcag2Level.aa18,
  [Wcag3Level.text]: Wcag2Level.aa18,
  [Wcag3Level.nonText]: Wcag2Level.dnp,
  [Wcag3Level.ko]: Wcag2Level.dnp,
};

