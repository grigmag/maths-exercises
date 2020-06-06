import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import { randomIntBetween } from '../../utility/random';
import { wrapNegative } from '../../utility/auxMath';

import { exBlueprint } from './exBlueprint';

export default function generateExercise() {
  const exercise = { ...exBlueprint };
  exercise.questionText = 'Απλοποίησε το κλάσμα:';

  const maxInt = 10;
  const maxMult = 5;

  // numA / numB

  let numA, numB, mult;

  mult = randomIntBetween(2, maxMult);
  numA = mult * randomIntBetween(1, maxInt);
  numB = mult * randomIntBetween(1, maxInt);

  exercise.questionMath = `${wrapNegative(numA)} / ${wrapNegative(numB)}`;

  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  return exercise;
}
