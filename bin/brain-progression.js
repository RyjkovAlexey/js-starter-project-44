#!/usr/bin/env node

import { initGame, ROUND_COUNT } from './index.js'
import { brainProgressionGame } from './src/game/brain-progression.js'

const playGame = () => {
    brainProgressionGame(initGame(), ROUND_COUNT)
}

playGame()