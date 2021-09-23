import index from '../index.js';
import generateNumber from '../generate-number.js';
import generateGameData from '../generate-game.js';

const regulationGame = 'Find the greatest common divisor of given numbers.';

function greatestCommonDivisor(number1, number2) {
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);
  const r = maxNumber % minNumber;
  return r === 0 ? minNumber : greatestCommonDivisor(minNumber, r);
}

function oneRound() {
  const firstNumber = generateNumber(4, 30);
  const secondNumber = generateNumber(4, 30);
  const GCD = greatestCommonDivisor(firstNumber, secondNumber);
  const questionAnswer = [`${firstNumber} ${secondNumber}`, String(GCD)];
  return questionAnswer;
}

export default () => {
  index(regulationGame, generateGameData(oneRound));
};
