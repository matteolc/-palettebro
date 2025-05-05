export const createEnum = <T extends readonly string[]>(values: T) => {
  return values.reduce(
    (acc, value) => {
      acc[value as T[number]] = value;
      return acc;
    },
    {} as { [key in T[number]]: key },
  );
};
