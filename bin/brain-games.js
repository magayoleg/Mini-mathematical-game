#!/usr/bin/env node
import * as user from '../src/cli.js';
import * as game from './brain-even.js';

console.log('Welcome to the Brain Games!');

user.userName();
game.game();
