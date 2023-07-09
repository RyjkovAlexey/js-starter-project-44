#!/usr/bin/env node

import { initGame, ROUND_COUNT } from './index.js'
import { brainEvenGame } from './src/game/brain-even-game.js'

const playGame = () => {
  brainEvenGame(initGame(), ROUND_COUNT)
}

playGame()