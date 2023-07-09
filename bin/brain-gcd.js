#!/usr/bin/env node

import { initGame, ROUND_COUNT } from './index.js'
import { brainGcd } from './game/brain-gcd-game.js'

const playGame = () => {
  brainGcd(initGame(), ROUND_COUNT)
}

playGame()