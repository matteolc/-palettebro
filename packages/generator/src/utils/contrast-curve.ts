/**
 * A class containing a value that changes with the contrast level.
 * Used for dynamic color contrast adjustments.
 */
export class ContrastCurve {
  constructor(
    readonly low: number,
    readonly normal: number,
    readonly medium: number,
    readonly high: number,
  ) {}

  get(contrastLevel: number): number {
    if (contrastLevel <= -1.0) {
      return this.low;
    }
    if (contrastLevel < 0.0) {
      return this.lerp(this.low, this.normal, (contrastLevel - (-1)) / 1);
    }
    if (contrastLevel < 0.5) {
      return this.lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
    }
    if (contrastLevel < 1.0) {
      return this.lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
    }
    return this.high;
  }

  private lerp(start: number, end: number, amount: number): number {
    return start * (1 - amount) + end * amount;
  }
} 