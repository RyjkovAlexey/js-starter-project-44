import readlineSync from 'readline-sync'
import { generateRandomNumber } from "../../index.js"

const isPrime = number => {
    if (number < 2) return false;
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number & i === 0) return false
    }
    return true;
}

export const brainPrimeGame = (name) => {
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)
    while (true) {
        const number = generateRandomNumber(1, 100)
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');

        const isCorrect = isPrime(number) ? 'yes' : 'no';
        if (answer.toLowerCase() === isCorrect) {
            console.log('Correct!');
        } else {
            console.log(`Wrong! Correct answer is "${isCorrect}".`);
            break;
        }
    }
}