import gameEngine from '../index.js';

function mathExpression() {
  const arrayTest = [];

  for (let i = 1; i <= 3; i += 1) {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 10);
    const arraySign = [a + b, a - b, a * b];
    const arraySignString = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
    const valueArray = [];
    const mathSign = Math.ceil(Math.random() * 2);
    valueArray.push(arraySignString[mathSign], String(arraySign[mathSign]));
    arrayTest.push(valueArray);
  }

  return arrayTest;
}
export default function startGameMathExpression() {
  gameEngine('What is the result of the expression?', mathExpression());
}
