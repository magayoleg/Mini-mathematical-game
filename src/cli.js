import readlineSync from 'readline-sync';

function userName() {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
}

export {userName}






