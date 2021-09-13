import index, { numberRoundsGame } from '../index.js';
import generatNumber from '../generat-number.js';

function generatingGameData() {
  const questionsAnswers = [];
  const isEven = (number) => (!(number % 2));

  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number = generatNumber(1, 100);
    const verify = isEven(number) ? 'yes' : 'no';
    questionsAnswers.push([number, verify]);
  }
  return questionsAnswers;
}

const regulationGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function startGeneratingGameData() {
  index(regulationGame, generatingGameData());
}
