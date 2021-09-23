import index from '../index.js';
import generateNumber from '../generate-number.js';
import generateGameData from '../generate-game.js';

const regulationGame = 'What number is missing in the progression?';
const progressionLength = 10;

function generateProgression(start, step) {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const number = i === 0 ? start : progression[i - 1] + step;
    progression.push(number);
  }
  return progression;
}

function progressionToString(numbers, step) {
  const progression = [...numbers];
  progression[step] = '..';
  const stringNumbers = progression.join(' ');
  return stringNumbers;
}

function oneRound() {
  const firstNumber = generateNumber(1, 10);
  const step = generateNumber(1, 10);
  const randomIndex = generateNumber(1, 9);
  const numbers = generateProgression(firstNumber, step);
  const answer = String(numbers[randomIndex]);
  const stringNumbers = progressionToString(numbers, randomIndex);
  const questionAnswer = [stringNumbers, answer];
  return questionAnswer;
}

export default () => {
  index(regulationGame, generateGameData(oneRound));
};
