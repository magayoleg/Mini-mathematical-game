import readlineSync from 'readline-sync';

export default function gameEngine(massage, callback) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(massage);
  for (const [number, answer] of callback) {
    console.log(`Question: ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (question === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.
      Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
}
