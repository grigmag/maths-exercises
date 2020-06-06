import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

export const compareNumbers = (submittedAnswer, answerMath) => {
  let processedAnswer = submittedAnswer.replace(/ /g, '');
  if (processedAnswer[0] === '+') {
    processedAnswer = processedAnswer.slice(1);
  }
  return processedAnswer === answerMath;
};

export const nerd = (submittedAnswer, answerMath) => {
  try {
    return nerdamer(submittedAnswer).eq(answerMath);
  } catch (e) {
    return false;
  }
};
