import nerdamer from 'nerdamer/nerdamer.core';
import 'nerdamer/Algebra';
import 'nerdamer/Solve';

import {
  randomIntBetween,
  randomNonZeroIntBetween,
  rollD,
  chooseSomeRandomArrayElements,
} from '../../utility/random';

import { power } from '../../utility/auxMath';

import { upToNTerms } from '../validationMethods';

import { varNameList } from '../auxData';
import { exBlueprint } from './exBlueprint';

export default function generateExercise() {
  const exercise = { ...exBlueprint };

  const maxInt = 5;
  const maxPower = 4;

  // Generate monomial
  const [numA, numB] = randomNonZeroIntBetween(-maxInt, maxInt, 2);
  const varNames = chooseSomeRandomArrayElements(varNameList, 3);

  const pow = () => randomIntBetween(1, maxPower);

  const monomials = [];

  for (let i = 0; i < 2; ++i) {
    const varsNum = rollD(3);
    const vars = chooseSomeRandomArrayElements(varNames, varsNum);

    let monomial = '';
    for (const variable of vars) {
      monomial += `${variable}${power(pow())} `;
    }

    monomials.push(monomial);
  }

  exercise.questionMath = `(${numA} ${monomials[0]}) / (${numB} ${monomials[1]})`;
  exercise.questionLatex = `$\\frac{${numA} ${monomials[0]}}{${numB} ${monomials[1]}}$`;

  // exercise.questionLatex = String.raw`$ ${nerdamer.convertToLaTeX(
  //   exercise.questionMath
  // )} $`;

  exercise.answerMath = nerdamer(exercise.questionMath).toString();

  exercise.validationMethods = [...exercise.validationMethods, upToNTerms(1)];
  return exercise;
}
