import readlineSync from 'readline-sync';

const numberRoundsGame = 3;

function gameEngine(massage, callback) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(massage);
  // eslint-disable-next-line no-restricted-syntax
  for (const [number, answer] of callback) {
    console.log(`Question: ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (question === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { gameEngine, numberRoundsGame };
