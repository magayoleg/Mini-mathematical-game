import index, { numberRoundsGame } from '../index.js';
import generatNumber from '../generat-number.js';

function generatingGameData() {
  const questionsAnswers = [];
  const isLow = (number1, number2) => (number1 < number2);

  for (let i = 0; i < numberRoundsGame; i += 1) {
    const firstNumber = generatNumber(1, 30);
    const secondNumber = generatNumber(1, 15);
    const minNumber = isLow(firstNumber, secondNumber) ? firstNumber : secondNumber;
    const isSplit = (number1, number2, divisor) => (!(number1 % divisor) && !(number2 % divisor));

    for (let j = minNumber; j > 0; j -= 1) {
      if (isSplit(firstNumber, secondNumber, j)) {
        questionsAnswers.push([`${firstNumber} ${secondNumber}`, String(j)]);
        break;
      }
    }
  }

  return questionsAnswers;
}

const regulationGame = 'Find the greatest common divisor of given numbers.';

export default function startGeneratingGameData() {
  index(regulationGame, generatingGameData());
}
