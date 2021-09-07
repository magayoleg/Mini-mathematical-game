import gameEngine from '../index.js';

function progression() {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    const valueArray = [];
    let progress = '';
    let number = Math.ceil(Math.random() * 10);
    const iterationNumber = Math.ceil(Math.random() * 10);
    const randomIndex = Math.ceil(Math.random() * 5);
    progress += number;
    for (let j = 1; j <= 5; j += 1) {
      if (randomIndex === j) {
        number += iterationNumber;
        valueArray.push(String(number));
        progress += ' ..';
      } else {
        number += iterationNumber;
        progress += ` ${number}`;
      }
    }
    valueArray.unshift(progress);
    array.push(valueArray);
  }
  return array;
}

export default function startGameProgression() {
  gameEngine('What number is missing in the progression?', progression());
}
