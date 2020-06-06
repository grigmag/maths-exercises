import { typicalMethods, onlyNumbers } from '../validationMethods';
import { compareNumbers } from '../checkMethods';

export const exBlueprint = {
  questionText: 'Κάνε τις πράξεις και απλοποίησε:',
  questionMath: null,
  questionLatex: null,
  answerMath: null,
  checkMethod: compareNumbers,
  validationMethods: [...typicalMethods, onlyNumbers],
};
