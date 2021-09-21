import index, { numberRoundsGame } from '../index.js';
import generateNumber from '../generate-number.js';

const regulationGame = 'What number is missing in the progression?';
const progressionLength = 10;

function generateProgression(start, step) {
  const numbers = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const number = i === 0 ? start : numbers[i - 1] + step;
    numbers.push(number);
  }
  return numbers;
}

function progressionToString(numbers, step) {
  const progression = [...numbers];
  progression[step] = '..';
  const stringNumbers = progression.join(' ');
  return stringNumbers;
}

function generateGameData() {
  const rounds = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const firstNumber = generateNumber(1, 10);
    const step = generateNumber(1, 10);
    const randomIndex = generateNumber(1, 9);
    const numbers = generateProgression(firstNumber, step);
    const answer = String(numbers[randomIndex]);
    const stringNumbers = progressionToString(numbers, randomIndex);
    rounds.push([stringNumbers, answer]);
  }
  return rounds;
}

export default () => {
  index(regulationGame, generateGameData());
};
