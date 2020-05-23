import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import {
  randomIntBetween,
  randomNonZeroIntBetween,
  coinFlip,
  rollD,
  chooseRandomArrayElement,
  chooseSomeRandomArrayElements,
  shuffle,
} from '../../utility/random';

import { wrapNegative, showSign } from '../../utility/auxMath';

import { nerdOneVar, nerdTwoVars } from '../checkMethods';

export default function generate2NumsCalc() {
  const exercise = {
    questionText: null,
    questionMath: null,
    questionLatex: null,
    answerMath: null,
    checkMethod: null,
  };

  const varNameList = ['x', 'y', 'z', 'a', 'b', 'c'];
  const maxInt = 10;

  const roll = rollD(2);
  // const roll = 2; //testing

  if (roll === 1) {
    // ax + bx + cx

    const [numA, numB, numC] = randomNonZeroIntBetween(-maxInt, maxInt, 3);
    const varA = chooseRandomArrayElement(varNameList);

    exercise.questionMath = `${numA} ${varA} ${showSign(
      numB
    )} ${varA} ${showSign(numC)} ${varA}`;
    exercise.checkMethod = nerdOneVar;
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
    exercise.checkMethod = nerdTwoVars;
  }

  exercise.questionText = 'Απλοποίησε: ';
  exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
    exercise.questionMath
  )} $`;
  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  return exercise;
}
