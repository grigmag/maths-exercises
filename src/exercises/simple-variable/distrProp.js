import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import {
  randomNonZeroIntBetween,
  rollD,
  chooseRandomArrayElement,
  chooseSomeRandomArrayElements,
  shuffle,
  coinFlip,
} from '../../utility/random';

import { showSign, ignoreOne } from '../../utility/auxMath';

import { upToNTerms } from '../validationMethods';

import { varNameList } from '../auxData';
import { exBlueprint } from './exBlueprint';

export default function generateExercise() {
  const exercise = { ...exBlueprint };

  const maxIntLarge = 5;
  const maxIntSmall = 3;

  // const roll = rollD(4);
  const roll = 1;

  const [varA, varB] = chooseSomeRandomArrayElements(varNameList, 2);

  const numSmall = () => randomNonZeroIntBetween(-maxIntSmall, maxIntSmall);
  const numLarge = () => randomNonZeroIntBetween(-maxIntLarge, maxIntLarge);

  if (roll === 1) {
    // a (bx + c)

    // const [numA, numC] = randomNonZeroIntBetween(-maxIntLarge, maxIntLarge, 2);
    // const numB = randomNonZeroIntBetween(-maxIntSmall, maxIntSmall);

    exercise.questionMath = `${numLarge()} (${ignoreOne(
      numSmall()
    )} ${varA} ${showSign(numLarge())} ${coinFlip() ? varB : ''}) `;

    // exercise.validationMethods = [...exercise.validationMethods, upToNTerms(1)];
  } else if (roll === 2) {
    // a (bx + cy)
  }

  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  return exercise;
}
