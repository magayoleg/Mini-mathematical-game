#!/usr/bin/env node
import user from '../src/cli.js';

function game() {
  console.log('Welcome to the Brain Games!');
}

const name = user();

export { game, name };
