#!/usr/bin/env node
import * as games from './brain-games.js';
import * as primeNumber from '../games/brain-prime.js';

games.game();
primeNumber.game(games.name);
