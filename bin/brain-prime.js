#!/usr/bin/env node

import { initGame } from "./index.js"
import { brainPrimeGame } from "./src/game/brain-prime-game.js"

const playGame = ()=>{
    brainPrimeGame(initGame())
}

playGame()