import readlineSync from 'readline-sync';

export default function gameEngine(name, massage, callback) {
  console.log(massage);
  /*eslint-disable */
  for (const [number, answer] of callback) { 
    console.log(`Question: ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (question == answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.
      Let's try again, ${name}!`);
    }
  }
  /*eslint-disable */
  return console.log(`Congratulations, ${name}!`);
}

