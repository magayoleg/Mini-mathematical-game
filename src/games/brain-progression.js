import index, { numberRoundsGame } from '../index.js';
import generatNumber from '../generat-number.js';

const listNumbers = (start, iteration) => {
  const numbers = [];
  for (let i = 0; i < 10; i += 1) {
    const number = i === 0 ? start : numbers[i - 1] + iteration;
    numbers.push(number);
  }
  return numbers;
};

function generatingGameData() {
  const questionsAnswers = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number = generatNumber(1, 10);
    const iterationNumber = generatNumber(1, 10);
    const randomIndex = generatNumber(1, 9);
    const numbers = listNumbers(number, iterationNumber);
    const answer = numbers[randomIndex];
    numbers[randomIndex] = '..';
    const stringNumbers = numbers.join(' ');
    questionsAnswers.push([stringNumbers, String(answer)]);
  }
  return questionsAnswers;
}

const regulationGame = 'What number is missing in the progression?';

export default function startGeneratingGameData() {
  index(regulationGame, generatingGameData());
}
