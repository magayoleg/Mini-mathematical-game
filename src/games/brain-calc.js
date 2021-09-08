/* eslint no-eval: 0 */
import { gameEngine, numberRoundsGame } from '../index.js';

function generatingRandomNumber(minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(randomNumber);
}

function calculatesNumbers(number1, number2, randomSign) {
  const result = eval(`${number1} ${randomSign} ${number2}`);
  return result;
}

function generatingGameData() {
  const arrayQuestionsAndAnswers = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number1 = generatingRandomNumber(1, 15);
    const number2 = generatingRandomNumber(1, 10);
    const arrayUsedSing = ['+', '-', '*'];
    const indexRandomSign = Math.floor(Math.random() * arrayUsedSing.length);
    const randomSign = arrayUsedSing[indexRandomSign];
    const resultCalculation = calculatesNumbers(number1, number2, randomSign);
    const mathExpressionToString = `${number1} ${randomSign} ${number2}`;

    arrayQuestionsAndAnswers.push([mathExpressionToString, resultCalculation]);
  }
  return arrayQuestionsAndAnswers;
}

export default function startGeneratingGameData() {
  gameEngine('What is the result of the expression?', generatingGameData());
}
