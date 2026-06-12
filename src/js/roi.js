const WEEKS_PER_MONTH = 4.33;

/**
 * Calculate the ROI figures shown in the calculator.
 * Pure function: no DOM, fully unit-testable.
 */
export function calculateRoi({ hoursPerWeek, hourlyRate, automatablePct, monthlyFee }) {
  if (hoursPerWeek < 0 || hourlyRate < 0) throw new RangeError('Inputs must be non-negative');
  if (automatablePct < 0 || automatablePct > 1) throw new RangeError('automatablePct must be 0–1');

  const monthlyCost = hoursPerWeek * hourlyRate * WEEKS_PER_MONTH;
  const monthlySavings = monthlyCost * automatablePct;
  const annualNet = Math.max(0, (monthlySavings - monthlyFee) * 12);

  return {
    monthlyCost: Math.round(monthlyCost),
    monthlySavings: Math.round(monthlySavings),
    annualNet: Math.round(annualNet),
    paybackMonths:
      monthlySavings > monthlyFee
        ? Math.ceil(3500 / (monthlySavings - monthlyFee)) // setup fee recovery
        : null,
  };
}

export const PACKAGE_MONTHLY_FEE = 500;
