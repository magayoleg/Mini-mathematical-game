import index from '../index.js';
import generateNumber from '../generate-number.js';
import generateGameData from '../generate-game.js';

const regulationGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generatePrime() {
  const number1 = generateNumber(1, 50) + 3;
  const number2 = Math.ceil(number1 / 2);
  const isPrime = (number, divisor) => !(number % divisor);
  let verify = 'yes';
  for (let j = 2; j <= number2; j += 1) {
    if (isPrime(number1, j)) verify = 'no';
  }
  return [number1, verify];
}

export default () => {
  index(regulationGame, generateGameData(generatePrime));
};
