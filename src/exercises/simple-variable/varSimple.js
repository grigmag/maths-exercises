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

import { typicalMethods, upToNTerms, noNumberMult } from '../validationMethods';
import { nerd } from '../checkMethods';

export default function varSimple() {
  const exercise = {
    questionText: null,
    questionMath: null,
    questionLatex: null,
    answerMath: null,
    checkMethod: null,
    validationMethods: null,
  };

  const varNameList = ['x', 'y', 'z', 'b', 'c', 's', 't', 'u', 'v'];
  const maxInt = 10;

  const roll = rollD(4);

  if (roll === 1) {
    // ax + bx + cx

    const [numA, numB, numC] = randomNonZeroIntBetween(-maxInt, maxInt, 3);
    const varA = chooseRandomArrayElement(varNameList);

    exercise.questionMath = `${numA} ${varA} ${showSign(
      numB
    )} ${varA} ${showSign(numC)} ${varA}`;

    exercise.validationMethods = [
      ...typicalMethods,
      upToNTerms(1),
      noNumberMult,
    ];
    exercise.checkMethod = nerd;
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

    exercise.validationMethods = [
      ...typicalMethods,
      upToNTerms(2),
      noNumberMult,
    ];
    exercise.checkMethod = nerd;
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

    exercise.validationMethods = [
      ...typicalMethods,
      upToNTerms(2),
      noNumberMult,
    ];
    exercise.checkMethod = nerd;
  } else if (roll === 4) {
    // a (bx + c)
    const [numA, numB, numC] = randomNonZeroIntBetween(-maxInt, maxInt, 3);
    const varA = chooseRandomArrayElement(varNameList);

    exercise.questionMath = `${numA} (${numB} ${varA} ${showSign(numC)})`;

    exercise.validationMethods = [
      ...typicalMethods,
      upToNTerms(2),
      noNumberMult,
    ];
    exercise.checkMethod = nerd;
  }

  exercise.questionText = 'Κάνε τις πράξεις: ';
  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  return exercise;
}
