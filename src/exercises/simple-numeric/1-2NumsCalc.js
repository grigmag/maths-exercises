import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import {
  randomIntBetween,
  randomNonZeroIntBetween,
  coinFlip,
} from '../../utility/random';

import { wrapNegative } from '../../utility/auxMath';

import { typicalMethods, onlyNumbers } from '../validationMethods';

import { compareNumbers } from '../checkMethods';

export default function generate2NumsCalc() {
  const exercise = {
    questionText: null,
    questionMath: null,
    questionLatex: null,
    answerMath: null,
    checkMethod: null,
    validationMethods: null,
  };

  const maxInt = 10;
  const signs = ['+', '-', '*', '/'];
  let sign = signs[randomIntBetween(0, 3)];

  // sign = '/'; //test division

  if (sign !== '/') {
    const numA = randomIntBetween(-maxInt, maxInt);
    const numB = randomIntBetween(-maxInt, maxInt);

    exercise.questionMath = `${
      sign === '*' ? wrapNegative(numA) : numA
    } ${sign} ${wrapNegative(numB)}`;
  } else {
    // numA / numB

    let numA, numB, numC;

    if (coinFlip()) {
      numC = randomIntBetween(-maxInt, maxInt);
      numB = randomNonZeroIntBetween(-maxInt, maxInt);
      numA = numB * numC;
    } else {
      numC = randomNonZeroIntBetween(-maxInt, maxInt);
      numA = randomNonZeroIntBetween(-maxInt, maxInt);
      numB = numA * numC;
    }

    exercise.questionMath = `${wrapNegative(numA)} / ${wrapNegative(numB)}`;
  }

  exercise.questionText = 'Υπολόγισε:';
  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  exercise.validationMethods = [...typicalMethods, onlyNumbers];
  exercise.checkMethod = compareNumbers;

  return exercise;
}
