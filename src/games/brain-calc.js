/* eslint no-eval: 0 */
import index from '../index.js';
import generateNumber from '../generate-number.js';
import generateGameData from '../generate-game.js';

const regulationGame = 'What is the result of the expression?';

function calculate(number1, number2, operation) {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operation ${operation} is not supported`);
  }
}

function oneRound() {
  const number1 = generateNumber(1, 15);
  const number2 = generateNumber(1, 10);
  const operation = ['+', '-', '*'];
  const indexOperation = Math.floor(Math.random() * operation.length);
  const randomOperation = operation[indexOperation];
  const answer = calculate(number1, number2, randomOperation);
  const question = `${number1} ${randomOperation} ${number2}`;
  return [question, String(answer)];
}

export default () => {
  index(regulationGame, generateGameData(oneRound));
};
