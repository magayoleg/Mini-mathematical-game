#!/usr/bin/env node
import * as games from './brain-games.js';
import maxDivider from '../src/games/brain-gcd.js';
import gameEngine from '../src/index.js';

games.game();
gameEngine(games.name, 'Find the greatest common divisor of given numbers.', maxDivider());
