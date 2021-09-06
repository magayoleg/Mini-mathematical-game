export default function primeNumber() {
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
