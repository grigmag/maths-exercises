import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

export const noSpaceBetweenNumbers = (ans) => {
  // answer should not contain numbers separated
  // only by spaces (e.g. '1  1')
  return !ans.match(/[0-9] +[0-9]/);
};

export const noConsecutiveSigns = (ans) => {
  // Answer should not contain consecutive signs
  // e.g. '++', '-  +', '* +'
  return !ans.match(/[+\-*/] *[+\-*/]/);
};

export const parsedNormally = (ans) => {
  // check if nerdamer parses the answer
  try {
    nerdamer(ans);
    return true;
  } catch (err) {
    return false;
  }
};

export const typicalMethods = [
  noSpaceBetweenNumbers,
  noConsecutiveSigns,
  parsedNormally,
];

export const onlyNumbers = (ans) => {
  // answer should contain only numbers and signs
  return !ans.match(/[^0-9+\-*/^ ]/);
};

export const upToNTerms = (n) => {
  // Return function that expects the answer to
  // contain up to n terms
  // i.e. the expression should have less than n
  // + or - signs, except for a possible sign at the start
  return (ans) => {
    const signs = ['+', '-'];
    const numSigns = ans
      .slice(1)
      .split('')
      .filter((char) => signs.includes(char)).length;
    return numSigns < n;
  };
};

export const noNumberMult = (ans) => {
  // answer should not contain multiplication
  // between numbers e.g. '2*10'
  return !ans.match(/[0-9] *\* *[0-9]/);
};
