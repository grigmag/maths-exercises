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

export function power(num) {
  // Currently unsuitable for printing the latex of negative powers
  return num === 1 ? '' : `^${num}`;
}

export function ignoreOne(num) {
  if (num === 1) {
    return '';
  } else if (num === -1) {
    return '-';
  } else {
    return num;
  }
}
