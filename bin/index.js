import readlineSync from "readline-sync"

const WELCOME_MESSAGE = "Welcome to the Brain Games!"
export const ROUND_COUNT = 3

const askName = () => {
    const name = readlineSync.question("May I have your name? ")
    return name
}

const sayHello = name => console.log(`Hello, ${name}!`)
const sayWelcome = () => console.log(WELCOME_MESSAGE)
export const initGame = () => {
    sayWelcome()
    const name = askName()
    sayHello(name)
    console.log("What is the result of the expression?")
    return name
}
export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min