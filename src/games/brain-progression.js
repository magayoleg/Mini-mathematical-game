import { gameEngine, numberRoundsGame } from '../index.js';

function generatingRandomNumber(minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(randomNumber);
}

function generatingGameData() {
  const arrayQuestionsAndAnswers = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    let number = generatingRandomNumber(1, 10);
    const iterationNumber = generatingRandomNumber(1, 10);
    const randomIndex = generatingRandomNumber(1, 5);
    let progress = String(number);
    let answer = '';
    for (let j = 0; j < 6; j += 1) {
      if (randomIndex === j) {
        number += iterationNumber;
        answer = String(number);
        progress += ' ..';
      } else {
        number += iterationNumber;
        progress += ` ${number}`;
      }
    }
    arrayQuestionsAndAnswers.push([progress, answer]);
  }
  return arrayQuestionsAndAnswers;
}

export default function startGeneratingGameData() {
  gameEngine('What number is missing in the progression?', generatingGameData());
}
