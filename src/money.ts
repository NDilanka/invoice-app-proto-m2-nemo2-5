export type Line = { amount: number };

// ISO 4217 currency decimal places mapping
// 0 decimals: JPY, KRW, VND, CLP, PYG, etc.
// 2 decimals: USD, EUR, GBP, CAD, AUD, etc. (most currencies)
// 3 decimals: KWD, BHD, JOD, OMR, TND, etc.
const CURRENCY_DECIMALS: Record<string, number> = {
  // 0 decimal places
  JPY: 0,
  KRW: 0,
  VND: 0,
  CLP: 0,
  PYG: 0,
  IDR: 0,
  ISK: 0,
  HUF: 0,
  TWD: 0,
  // 3 decimal places
  KWD: 3,
  BHD: 3,
  JOD: 3,
  OMR: 3,
  TND: 3,
  IQD: 3,
  LYD: 3,
};

function getCurrencyDecimals(currency: string): number {
  return CURRENCY_DECIMALS[currency] ?? 2;
}

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const decimals = getCurrencyDecimals(currency);
  return sum.toFixed(decimals);
}