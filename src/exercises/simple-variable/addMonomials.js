import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import {
  randomIntBetween,
  randomNonZeroIntBetween,
  rollD,
  chooseRandomArrayElement,
  chooseSomeRandomArrayElements,
  shuffle,
} from '../../utility/random';

import { showSign } from '../../utility/auxMath';

import { nerd, nerdOneVar, nerdTwoVars } from '../checkMethods';

export default function addMonomials() {
  const exercise = {
    questionText: null,
    questionMath: null,
    questionLatex: null,
    answerMath: null,
    checkMethod: null,
  };

  const varNameList = ['x', 'y', 'z', 'b', 'c', 's', 't', 'u', 'v'];
  const maxInt = 10;
  const maxPower = 5;

  // const roll = rollD(2);
  const roll = 1;

  if (roll === 1) {
    // a x^n + b x^n
    const [numA, numB] = randomNonZeroIntBetween(-maxInt, maxInt, 2);
    const varA = chooseRandomArrayElement(varNameList);
    const pow = randomIntBetween(2, maxPower);

    exercise.questionMath = `${numA} ${varA}^${pow} ${showSign(
      numB
    )} ${varA}^${pow}`;
  }

  exercise.checkMethod = nerd;
  exercise.questionText = 'Κάνε τις πράξεις: ';
  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  return exercise;
}
