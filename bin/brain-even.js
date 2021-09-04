#!/usr/bin/env node
/* eslint-disable-next-line */
import readlineSync from 'readline-sync';

function randomNumber() {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    const valueArray = [];
    valueArray.push(Math.round(Math.random() * 100));
    if (valueArray[0] % 2) {
      valueArray.push('no');
    } else {
      valueArray.push('yes');
    }
    array.push(valueArray);
  }
  return array;
}

function game() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numbers = randomNumber();
  /*eslint-disable */
  for (const [number, answer] of numbers) { 
    console.log(`Question: ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (question === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(.
Correct answer was 'no'. Let's try again, Bill!`);
    }
  }
  /*eslint-disable */
  return console.log('Congratulations, Bill!');
}

export { game };
