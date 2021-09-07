import gameEngine from '../index.js';

function randomNumber() {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    const valueArray = [];
    valueArray.push(Math.ceil(Math.random() * 100));
    if (valueArray[0] % 2) {
      valueArray.push('no');
    } else {
      valueArray.push('yes');
    }
    array.push(valueArray);
  }
  return array;
}

export default function startGameRandomNumber() {
  gameEngine('Answer "yes" if the number is even, otherwise answer "no".', randomNumber());
}
