#!/usr/bin/env node
import readlineSync from 'readline-sync';

function mathExpression() {
  const arrayTest = [];
  
  for (let i = 0; i < 3; i += 1) {
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 10);
    const arraySign = [a + b, a - b, a * b];
    const arraySignString = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
    const valueArray = [];
    const mathSign = Math.round(Math.random() * 2);
    valueArray.push(arraySignString[mathSign], arraySign[mathSign])
    arrayTest.push(valueArray)
  }

  return arrayTest;
}

function game() {
  console.log('What is the result of the expression?');
  const numbers = mathExpression();
  /*eslint-disable */
  for (const [number, answer] of numbers) { 
    console.log(`Question: ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (question == answer) {
      console.log('Correct!');
    } else {
      return console.log(`${question} is wrong answer ;(. Correct answer was ${answer}.
      Let's try again, Sam!`);
    }
  }
  /*eslint-disable */
  return console.log('Congratulations, Bill!');
}

export { game }