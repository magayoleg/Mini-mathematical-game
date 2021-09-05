#!/usr/bin/env node
import readlineSync from 'readline-sync';

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
        valueArray.push(number);
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

function game(name) {
  console.log('What number is missing in the progression?');
  const numbers = progression();
  /*eslint-disable */
  for (const [progression, answer] of numbers) {
    console.log(`Question: ${progression}`);
    const question = readlineSync.question('Your answer: ');
    if (question == answer) {
      console.log('Correct!'); 
    } else {
      return console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.
Let's try again, ${name}!`);
    }
  }
  /*eslint-disable */
  return console.log(`Congratulations, ${name}!`);
}

export { game };