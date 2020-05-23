import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import { randomIntBetween } from '../../utility/random';

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

  const maxInt = 10;
  const maxMult = 5;

  // numA / numB

  let numA, numB, mult;

  mult = randomIntBetween(2, maxMult);
  numA = mult * randomIntBetween(1, maxInt);
  numB = mult * randomIntBetween(1, maxInt);

  exercise.questionMath = `${wrapNegative(numA)} / ${wrapNegative(numB)}`;

  exercise.questionText = 'Απλοποίησε το κλάσμα:';
  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();
  exercise.checkMethod = compareNumbers;

  // console.log('nerd: ', nerdamer('5/40').toString()); // test

  return exercise;
}