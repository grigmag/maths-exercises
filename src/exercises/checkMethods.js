import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

export const compareNumbers = (submittedAnswer, answerMath) =>
  submittedAnswer === answerMath;

export const nerd = (submittedAnswer, answerMath) => {
  try {
    return nerdamer(submittedAnswer).eq(answerMath);
  } catch (e) {
    return false;
  }
};

export const nerdOneVar = (submittedAnswer, answerMath) => {
  // no more than one sign (except for a possible sign at the start)
  const signs = ['+', '-', '*', '/'];
  try {
    const numSigns = submittedAnswer
      .slice(1)
      .split('')
      .filter((e) => signs.includes(e)).length;
    return numSigns > 1 ? false : nerd(submittedAnswer, answerMath);
  } catch (e) {
    console.log(e);
    return nerd(submittedAnswer, answerMath);
  }
};

export const nerdTwoVars = (submittedAnswer, answerMath) => {
  // no more than two signs (except for a possible sign at the start)
  const signs = ['+', '-', '*', '/'];
  try {
    const numSigns = submittedAnswer
      .slice(1)
      .split('')
      .filter((e) => signs.includes(e)).length;
    return numSigns > 2 ? false : nerd(submittedAnswer, answerMath);
  } catch (e) {
    console.log(e);
    return nerd(submittedAnswer, answerMath);
  }
};
