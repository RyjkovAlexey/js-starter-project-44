#!/usr/bin/env node

import { initGame, ROUND_COUNT } from './index.js'
import { brainCalcGame } from './src/game/brain-calc-game.js'

const playGame = () => {
    brainCalcGame(initGame(), ROUND_COUNT)
}

playGame()