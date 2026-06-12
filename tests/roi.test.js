import { describe, it, expect } from 'vitest';
import { calculateRoi } from '../src/js/roi.js';

describe('calculateRoi', () => {
  it('computes monthly cost from weekly hours', () => {
    const r = calculateRoi({ hoursPerWeek: 10, hourlyRate: 25, automatablePct: 0.7, monthlyFee: 500 });
    expect(r.monthlyCost).toBe(1083); // 10 * 25 * 4.33
    expect(r.monthlySavings).toBe(758);
    expect(r.annualNet).toBe(3093); // (758.1 - 500) * 12, rounded
  });

  it('never returns negative annual net', () => {
    const r = calculateRoi({ hoursPerWeek: 2, hourlyRate: 15, automatablePct: 0.3, monthlyFee: 500 });
    expect(r.annualNet).toBe(0);
  });

  it('returns payback period when savings exceed the fee', () => {
    const r = calculateRoi({ hoursPerWeek: 20, hourlyRate: 30, automatablePct: 0.8, monthlyFee: 500 });
    expect(r.paybackMonths).toBeGreaterThan(0);
  });

  it('rejects invalid inputs', () => {
    expect(() => calculateRoi({ hoursPerWeek: -1, hourlyRate: 25, automatablePct: 0.5, monthlyFee: 500 })).toThrow(RangeError);
    expect(() => calculateRoi({ hoursPerWeek: 1, hourlyRate: 25, automatablePct: 1.5, monthlyFee: 500 })).toThrow(RangeError);
  });
});
