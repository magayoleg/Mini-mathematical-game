export default function maxDivider() {
  const arrayTest = [];

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = Math.ceil(Math.random() * 50);
    const secondNumber = Math.ceil(Math.random() * 40);
    const minNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
    for (let j = minNumber; j > 0; j -= 1) {
      const valueArray = [];
      if (firstNumber % j === 0 && secondNumber % j === 0) {
        const string = `${firstNumber} ${secondNumber}`;
        valueArray.push(string, j);
        arrayTest.push(valueArray);
        break;
      }
    }
  }

  return arrayTest;
}
