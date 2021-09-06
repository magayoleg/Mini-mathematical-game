export default function randomNumber() {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    const valueArray = [];
    valueArray.push(Math.ceil(Math.random() * 100));
    if (valueArray[0] % 2) {
      valueArray.push('no');
    } else {
      valueArray.push('yes');
    }
    array.push(valueArray);
  }
  return array;
}
