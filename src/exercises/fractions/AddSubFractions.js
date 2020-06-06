import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import { randomIntBetween, coinFlip } from '../../utility/random';
import { wrapNegative } from '../../utility/auxMath';

import { exBlueprint } from './exBlueprint';

export default function generateExercise() {
  const exercise = { ...exBlueprint };

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

  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;

  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  return exercise;
}
