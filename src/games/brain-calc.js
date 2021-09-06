export default function mathExpression() {
  const arrayTest = [];

  for (let i = 1; i <= 3; i += 1) {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 10);
    const arraySign = [a + b, a - b, a * b];
    const arraySignString = [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];
    const valueArray = [];
    const mathSign = Math.ceil(Math.random() * 2);
    valueArray.push(arraySignString[mathSign], arraySign[mathSign]);
    arrayTest.push(valueArray);
  }

  return arrayTest;
}
