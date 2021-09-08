import { gameEngine, numberRoundsGame } from '../index.js';

function generatingRandomNumber(minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(randomNumber);
}

function generatingGameData() {
  const arrayQuestionsAndAnswers = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number = generatingRandomNumber(1, 100);
    if (number % 2 === 0) {
      arrayQuestionsAndAnswers.push([number, 'yes']);
    } else {
      arrayQuestionsAndAnswers.push([number, 'no']);
    }
  }
  return arrayQuestionsAndAnswers;
}

export default function startGeneratingGameData() {
  gameEngine('Answer "yes" if the number is even, otherwise answer "no".', generatingGameData());
}
