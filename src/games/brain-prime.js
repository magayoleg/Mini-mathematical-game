import { gameEngine, numberRoundsGame } from '../index.js';

function generatingRandomNumber(minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.ceil(randomNumber + 3);
}

function generatingGameData() {
  const arrayTest = [];

  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number1 = generatingRandomNumber(1, 50);
    const number2 = Math.ceil(number1 / 2);
    for (let j = 2; j <= number2; j += 1) {
      if (number1 % j === 0) {
        arrayTest.push([number1, 'no']);
        break;
      }
      if (j === number2) {
        arrayTest.push([number1, 'yes']);
        break;
      }
    }
  }
  return arrayTest;
}

export default function startGeneratingGameData() {
  gameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generatingGameData());
}
