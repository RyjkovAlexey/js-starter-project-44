#!/usr/bin/env node

import { initGame, ROUND_COUNT } from './index.js'
import { brainCalcGame } from './game/brain-calc-game.js'

const playGame = () => {
    brainCalcGame(initGame(), ROUND_COUNT)
}

playGame()