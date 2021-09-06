#!/usr/bin/env node
import * as games from './brain-games.js';
import primeNumber from '../src/games/brain-prime.js';
import gameEngine from '../src/index.js';

games.game();
gameEngine(games.name, 'Answer "yes" if given number is prime. Otherwise answer "no".', primeNumber());
