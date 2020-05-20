import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import { randomIntBetween, coinFlip } from '../../utility/random';

import { wrapNegative } from '../../utility/auxMath';

import { compareNumbers } from '../checkMethods';

export default function generate2NumsCalc() {
  const exercise = {
    questionText: null,
    questionMath: null,
    questionLatex: null,
    answerMath: null,
    checkMethod: null,
  };

  const maxInt = 7;

  // numA / numB +- num / numD

  let numA, numB, numC, numD;

  numA = randomIntBetween(1, maxInt);
  numB = randomIntBetween(2, maxInt);

  numC = randomIntBetween(1, maxInt);
  numD = randomIntBetween(2, maxInt);

  exercise.questionMath = `${wrapNegative(numA)} / ${wrapNegative(numB)} ${
    coinFlip() ? '+' : '-'
  } ${wrapNegative(numC)} / ${wrapNegative(numD)}`;

  exercise.questionText = 'Κάνε τις πράξεις και απλοποίησε:';
  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();
  exercise.checkMethod = compareNumbers;

  return exercise;
}
