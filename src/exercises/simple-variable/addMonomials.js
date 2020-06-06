import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import {
  randomIntBetween,
  randomNonZeroIntBetween,
  rollD,
  chooseRandomArrayElement,
  chooseSomeRandomArrayElements,
} from '../../utility/random';

import { showSign, power } from '../../utility/auxMath';

import { upToNTerms } from '../validationMethods';

import { varNameList } from '../auxData';
import { exBlueprint } from './exBlueprint';

export default function generateExercise() {
  const exercise = { ...exBlueprint };

  const maxInt = 10;
  const maxPower = 5;

  const roll = rollD(4);

  if (roll === 1) {
    // a x^n + b x^n
    const [numA, numB] = randomNonZeroIntBetween(-maxInt, maxInt, 2);
    const varA = chooseRandomArrayElement(varNameList);
    const pow = randomIntBetween(2, maxPower);

    exercise.questionMath = `${numA} ${varA}${power(pow)} ${showSign(
      numB
    )} ${varA}${power(pow)}`;
  } else if (roll === 2 || roll === 3) {
    // a x^m y^n + b x^m y^n
    const [numA, numB] = randomNonZeroIntBetween(-maxInt, maxInt, 2);
    const [varX, varY] = chooseSomeRandomArrayElements(varNameList, 2);
    const [powM, powN] = randomIntBetween(1, maxPower, 2);

    exercise.questionMath = `${numA} ${varX}${power(powM)} ${varY}${power(
      powN
    )} ${showSign(numB)} ${varX}${power(powM)} ${varY}${power(powN)}`;
  } else if (roll === 4) {
    // a x^m y^n z^k + b x^m y^n z^k
    const [numA, numB] = randomNonZeroIntBetween(-maxInt, maxInt, 2);
    const [varX, varY, varZ] = chooseSomeRandomArrayElements(varNameList, 3);
    const [powM, powN, powK] = randomIntBetween(1, maxPower, 3);

    exercise.questionMath = `${numA} ${varX}${power(powM)} ${varY}${power(
      powN
    )} ${varZ}${power(powK)} ${showSign(numB)} ${varX}${power(
      powM
    )} ${varY}${power(powN)} ${varZ}${power(powK)}`;
  }

  // exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
  //   exercise.questionMath
  // )} $`;
  exercise.questionLatex = '$ ' + exercise.questionMath + ' $';
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  exercise.validationMethods = [...exercise.validationMethods, upToNTerms(1)];
  return exercise;
}
