import index from '../index.js';
import generateNumber from '../generate-number.js';
import generateGameData from '../generate-game.js';

const regulationGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const numberHalf = Math.sqrt(number);
  for (let j = 2; j <= numberHalf; j += 1) {
    if (!(number % j)) {
      return false;
    }
  }
  return true;
};

function generatePrime() {
  const firstNumber = generateNumber(1, 50);
  const verify = isPrime(firstNumber) ? 'yes' : 'no';
  return [firstNumber, verify];
}

export default () => {
  index(regulationGame, generateGameData(generatePrime));
};
