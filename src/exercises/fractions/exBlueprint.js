import { typicalMethods, onlyNumbers } from '../validationMethods';
import { compareNumbers } from '../checkMethods';

export const exBlueprint = {
  questionText: 'Calculate and simplify:',
  questionMath: null,
  questionLatex: null,
  answerMath: null,
  checkMethod: compareNumbers,
  validationMethods: [...typicalMethods, onlyNumbers],
};
