#!/usr/bin/env node
import * as games from './brain-games.js';
import randomNumber from '../src/games/brain-even.js';
import gameEngine from '../src/index.js';

games.game();
gameEngine(games.name, 'Answer "yes" if the number is even, otherwise answer "no".', randomNumber());
