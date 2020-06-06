import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import {
  randomNonZeroIntBetween,
  rollD,
  chooseRandomArrayElement,
  chooseSomeRandomArrayElements,
  shuffle,
} from '../../utility/random';

import { showSign } from '../../utility/auxMath';

import { upToNTerms } from '../validationMethods';

import { varNameList } from '../auxData';
import { exBlueprint } from './exBlueprint';

export default function generateExercise() {
  const exercise = { ...exBlueprint };

  const maxInt = 10;

  const roll = rollD(4);

  if (roll === 1) {
    // ax + bx + cx

    const [numA, numB, numC] = randomNonZeroIntBetween(-maxInt, maxInt, 3);
    const varA = chooseRandomArrayElement(varNameList);

    exercise.questionMath = `${numA} ${varA} ${showSign(
      numB
    )} ${varA} ${showSign(numC)} ${varA}`;

    exercise.validationMethods = [...exercise.validationMethods, upToNTerms(1)];
  } else if (roll === 2) {
    // a x + b x + c y + d y
    const [numA, numB, numC, numD] = randomNonZeroIntBetween(
      -maxInt,
      maxInt,
      4
    );
    const [varA, varB] = chooseSomeRandomArrayElements(varNameList, 2);
    const varOrder = shuffle([varA, varA, varB, varB]);

    exercise.questionMath = `${numA} ${varOrder[0]} ${showSign(numB)} ${
      varOrder[1]
    } ${showSign(numC)} ${varOrder[2]} ${showSign(numD)} ${varOrder[3]}`;

    exercise.validationMethods = [...exercise.validationMethods, upToNTerms(2)];
  } else if (roll === 3) {
    // (ax + b) +- (cx + d)
    const [numA, numB, numC, numD] = randomNonZeroIntBetween(
      -maxInt,
      maxInt,
      4
    );

    const varA = chooseRandomArrayElement(varNameList);
    const sign = chooseRandomArrayElement(['+', '-']);

    exercise.questionMath = `(${numA} ${varA} ${showSign(
      numB
    )}) ${sign} (${numC} ${varA} ${showSign(numD)})`;

    exercise.validationMethods = [...exercise.validationMethods, upToNTerms(2)];
  } else if (roll === 4) {
    // a (bx + c)
    const [numA, numB, numC] = randomNonZeroIntBetween(-maxInt, maxInt, 3);
    const varA = chooseRandomArrayElement(varNameList);

    exercise.questionMath = `${numA} (${numB} ${varA} ${showSign(numC)})`;

    exercise.validationMethods = [...exercise.validationMethods, upToNTerms(2)];
  }

  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  return exercise;
}
