#!/usr/bin/env node
import * as games from './brain-games.js';
import * as progression from '../games/brain-progression.js';

games.game();
progression.game(games.name);
