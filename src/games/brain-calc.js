/* eslint no-eval: 0 */
import index, { numberRoundsGame } from '../index.js';
import generatNumber from '../generat-number.js';

function calculate(number1, number2, randomSign) {
  let result = 0;
  switch (randomSign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }
  return result;
}

function generatingGameData() {
  const questionsAnswers = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number1 = generatNumber(1, 15);
    const number2 = generatNumber(1, 10);
    const operation = ['+', '-', '*'];
    const indexRandomSign = Math.floor(Math.random() * operation.length);
    const randomSign = operation[indexRandomSign];
    const resultCalculation = calculate(number1, number2, randomSign);
    const mathExpressionToString = `${number1} ${randomSign} ${number2}`;

    questionsAnswers.push([mathExpressionToString, String(resultCalculation)]);
  }
  return questionsAnswers;
}

const regulationGame = 'What is the result of the expression?';

export default function startGeneratingGameData() {
  index(regulationGame, generatingGameData());
}
