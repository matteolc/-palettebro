export enum Wcag2Level {
  aaa = 7,
  aa = 4.5,
  aa18 = 3,
  ko = 0,
}

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
  [Wcag2Level.ko]: Wcag3Level.ko,
};

export const wcag3To2Equivalences = {
  [Wcag3Level.all]: Wcag2Level.aaa,
  [Wcag3Level.body]: Wcag2Level.aa,
  [Wcag3Level.large]: Wcag2Level.aa18,
  [Wcag3Level.text]: Wcag2Level.aa18,
  [Wcag3Level.nonText]: Wcag2Level.ko,
  [Wcag3Level.ko]: Wcag2Level.ko,
};

