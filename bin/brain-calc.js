#!/usr/bin/env node
import * as games from './brain-games.js';
import mathExpression from '../src/games/brain-calc.js';
import gameEngine from '../src/index.js';

games.game();
gameEngine(games.name, 'What is the result of the expression?', mathExpression());
