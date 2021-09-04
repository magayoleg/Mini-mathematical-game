#!/usr/bin/env node
import * as user from '../src/cli.js';

function game() {
  console.log('Welcome to the Brain Games!');
}

user.userName();

export { game };
