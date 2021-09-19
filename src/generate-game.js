import { numberRoundsGame } from './index.js';

export default (func) => {
  const rounds = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    rounds.push(func());
  }
  return rounds;
};
