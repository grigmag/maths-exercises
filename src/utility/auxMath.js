export function showSign(num) {
  return num > 0 ? `+${num}` : `${num}`;
}

export function wrapNum(num) {
  return num > 0 ? `(+${num})` : `(${num})`;
}

export function wrapNegative(num) {
  return num < 0 ? `(${num})` : num;
}

export function wrapWithVarIfNegative(num, varName) {
  return `${num < 0 ? `(${num} ${varName})` : `${num} ${varName}`}`;
}
