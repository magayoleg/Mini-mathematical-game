#!/usr/bin/env node
import * as games from './brain-games.js';
import progression from '../src/games/brain-progression.js';
import gameEngine from '../src/index.js';

games.game();
gameEngine(games.name, 'What number is missing in the progression?', progression());
