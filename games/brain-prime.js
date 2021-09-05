#!/usr/bin/env node
import readlineSync from 'readline-sync';

function primeNumber() {
  const arrayTest = [];

  for (let i = 1; i <= 3; i += 1) {
    const valueArray = [];
    const randomNumber = Math.ceil(Math.random() * 30 + 3);
    const halfRandomNumber = Math.ceil(randomNumber / 2);
    valueArray.push(randomNumber);
    for (let j = 2; j <= halfRandomNumber; j += 1) {
      if (randomNumber % j === 0) {
        valueArray.push('no');
        break;
      }
      if (j === halfRandomNumber) {
        valueArray.push('yes');
      }
    }
    arrayTest.push(valueArray);
  }
  return arrayTest;
}

function game() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const numbers = primeNumber();
  /*eslint-disable */
  for (const [number, answer] of numbers) { 
    console.log(`Question: ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (question == answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${question}" is wrong answer ;(. Correct answer was "${answer}".
Let's try again, Sam!`);
    }
  }
  /*eslint-disable */
  return console.log('Congratulations, Bill!');
}

export { game }