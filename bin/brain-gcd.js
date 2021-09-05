#!/usr/bin/env node
import readlineSync from 'readline-sync';

function maxDivider() {
  const arrayTest = [];

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = Math.ceil(Math.random() * 50);
    const secondNumber = Math.ceil(Math.random() * 40);
    const minNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
    for (let j = minNumber; j > 0; j -= 1) {
      const valueArray = [];
      if (firstNumber % j === 0 && secondNumber % j === 0) {
        valueArray.push(firstNumber, secondNumber, j);
        arrayTest.push(valueArray);
        break;
      }
    }
  }

  return arrayTest;
}

function game() {
  console.log('Find the greatest common divisor of given numbers.');
  const numbers = maxDivider();
  /*eslint-disable */
  for (const [firstNumber, secondNumber, divider] of numbers) {
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const question = readlineSync.question('Your answer: ');
    if (question == divider) {
      console.log('Correct!'); 
    } else {
      return console.log(`${question} is wrong answer ;(. Correct answer was ${divider}.
Let's try again, Sam!`);
    }
  }
  /*eslint-disable */
  return console.log('Congratulations, Bill!');
}
game();
export { game };