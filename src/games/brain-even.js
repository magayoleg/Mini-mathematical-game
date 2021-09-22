import index from '../index.js';
import generateNumber from '../generate-number.js';
import generateGameData from '../generate-game.js';

const regulationGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (!(number % 2));

function oneRound() {
  const number = generateNumber(1, 100);
  const verify = isEven(number) ? 'yes' : 'no';
  return [number, verify];
}

export default () => {
  index(regulationGame, generateGameData(oneRound));
};
