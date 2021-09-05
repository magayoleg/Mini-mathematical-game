#!/usr/bin/env node
import * as games from './brain-games.js';
import * as calc from '../games/brain-calc.js';

games.game();
calc.game(games.name);
