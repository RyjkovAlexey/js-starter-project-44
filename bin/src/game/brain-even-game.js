import readlineSync from "readline-sync"

const isEven = number => number % 2 === 0

export const brainEvenGame = (name, roudCount) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let correctAnswers = 0

    while (correctAnswers < roudCount) {
        const number = Math.floor(Math.random() * 100) + 1
        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question("Your answer: ")

        if (
            (isEven(number) && userAnswer.toLowerCase() === "yes") ||
            (!isEven(number) && userAnswer.toLowerCase() === "no")
        ) {
            console.log("Correct!")
            correctAnswers++
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(number) ? "no" : "yes"}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`);
}