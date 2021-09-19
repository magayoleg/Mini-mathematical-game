import index, { numberRoundsGame } from '../index.js';
import generateNumber from '../generate-number.js';

const regulationGame = 'What number is missing in the progression?';

function generateProgression(start, iteration) {
  const numbers = [];
  for (let i = 0; i < 10; i += 1) {
    const number = i === 0 ? start : numbers[i - 1] + iteration;
    numbers.push(number);
  }
  return numbers;
}

function progressionToString(numbers) {
  const progression = [...numbers];
  const randomIndex = generateNumber(1, 9);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const stringNumbers = progression.join(' ');
  return [stringNumbers, String(answer)];
}

function generateGameData() {
  const rounds = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number = generateNumber(1, 10);
    const iterationNumber = generateNumber(1, 10);
    const numbers = generateProgression(number, iterationNumber);
    rounds.push(progressionToString(numbers));
  }
  return rounds;
}

export default () => {
  index(regulationGame, generateGameData());
};
