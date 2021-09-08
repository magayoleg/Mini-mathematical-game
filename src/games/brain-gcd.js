import { gameEngine, numberRoundsGame } from '../index.js';

function generatingRandomNumber(minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(randomNumber);
}

function generatingGameData() {
  const arrayQuestionsAndAnswers = [];

  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number1 = generatingRandomNumber(1, 30);
    const number2 = generatingRandomNumber(1, 10);
    const minNumber = number1 < number2 ? number1 : number2;
    for (let j = minNumber; j > 0; j -= 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        arrayQuestionsAndAnswers.push([`${number1} ${number2}`, String(j)]);
        break;
      }
    }
  }

  return arrayQuestionsAndAnswers;
}

export default function startGeneratingGameData() {
  gameEngine('Find the greatest common divisor of given numbers.', generatingGameData());
}
