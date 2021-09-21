import index, { numberRoundsGame } from '../index.js';
import generateNumber from '../generate-number.js';

const regulationGame = 'Find the greatest common divisor of given numbers.';

function greatestCommonDivisor(number1, number2) {
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);
  const r = maxNumber % minNumber;
  return r === 0 ? minNumber : greatestCommonDivisor(minNumber, r);
}

function generateGameData() {
  const rounds = [];

  for (let i = 0; i < numberRoundsGame; i += 1) {
    const firstNumber = generateNumber(4, 30);
    const secondNumber = generateNumber(4, 30);
    const GCD = greatestCommonDivisor(firstNumber, secondNumber)
    rounds.push([`${firstNumber} ${secondNumber}`, String(GCD)])
  }

  return rounds;
}

export default () => {
  index(regulationGame, generateGameData());
};