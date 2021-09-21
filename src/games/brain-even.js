import index, { numberRoundsGame } from '../index.js';
import generateNumber from '../generate-number.js';

const regulationGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (!(number % 2));

function generateGameData() {
  const rounds = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number = generateNumber(1, 100);
    const verify = isEven(number) ? 'yes' : 'no';
    rounds.push([number, verify]);
  }
  return rounds;
}

export default () => {
  index(regulationGame, generateGameData());
};
