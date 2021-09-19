import index, { numberRoundsGame } from '../index.js';
import generateNumber from '../generate-number.js';

const regulationGame = 'Find the greatest common divisor of given numbers.';

function generateGameData() {
  const rounds = [];

  for (let i = 0; i < numberRoundsGame; i += 1) {
    const firstNumber = generateNumber(1, 30);
    const secondNumber = generateNumber(1, 15);
    const minNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
    const isSplit = (number1, number2, divisor) => (!(number1 % divisor) && !(number2 % divisor));

    for (let j = minNumber; j > 0; j -= 1) {
      if (isSplit(firstNumber, secondNumber, j)) {
        rounds.push([`${firstNumber} ${secondNumber}`, String(j)]);
        break;
      }
    }
  }

  return rounds;
}

export default () => {
  index(regulationGame, generateGameData());
};
