import { typicalMethods, noNumberMult } from '../validationMethods';
import { nerd } from '../checkMethods';

export const exBlueprint = {
  questionText: 'Κάνε τις πράξεις:',
  questionMath: null,
  questionLatex: null,
  answerMath: null,
  checkMethod: nerd,
  validationMethods: [...typicalMethods, noNumberMult],
};
