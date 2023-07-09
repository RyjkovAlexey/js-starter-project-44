import readlineSync from "readline-sync"
import { generateRandomNumber } from "../../index.js"

const generateRandomOperator = () => {
    const operators = ['+', '-', '*']
    const randomIndex = Math.floor(Math.random() * operators.length)
    return operators[randomIndex]
}

const calculateExpression = (number1, number2, operator) => {
    switch (operator) {
        case '+':
            return number1 + number2
        case '-':
            return number1 - number2
        case '*':
            return number1 * number2
    }
}

export const brainCalcGame = (name, roudCount) => {
    console.log('What is the result of the expression')
    let correctAnswers = 0
    while (correctAnswers < roudCount) {
        const number1 = generateRandomNumber(1, 100)
        const number2 = generateRandomNumber(1, 100)
        const operator = generateRandomOperator()
        const expression = `${number1} ${operator} ${number2}`

        console.log(`Question: ${expression}`)
        const userAnswer = readlineSync.question("Your answer: ")
        const correctAnswer = calculateExpression(number1, number2, operator).toString()

        if (userAnswer === correctAnswer) {
            console.log("Correct!")
            correctAnswers++
        } else {
            console.log(`'${userAnswer}' is wrong answer (. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`)
}