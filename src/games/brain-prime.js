import index, { numberRoundsGame } from '../index.js';
import generatNumber from '../generat-number.js';

function generatingGameData() {
  const questionsAnswers = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number1 = generatNumber(1, 50) + 3;
    const number2 = Math.ceil(number1 / 2);
    const isSimple = (number, divisor) => !(number % divisor);
    let verify = 'yes';
    for (let j = 2; j <= number2; j += 1) {
      if (isSimple(number1, j)) verify = 'no';
    }
    questionsAnswers.push([number1, verify]);
  }
  return questionsAnswers;
}

const regulationGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default function startGeneratingGameData() {
  index(regulationGame, generatingGameData());
}
