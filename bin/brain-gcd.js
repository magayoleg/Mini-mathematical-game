#!/usr/bin/env node
import * as games from './brain-games.js';
import * as gcd from '../games/brain-gcd.js';

games.game();
gcd.game(games.name);
