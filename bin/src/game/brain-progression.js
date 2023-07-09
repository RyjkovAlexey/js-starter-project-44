import readlineSync from "readline-sync"
import { generateRandomNumber } from "../../index.js"

const generationProgression = () => {
    const length = generateRandomNumber(5, 10);
    const start = generateRandomNumber(1, 50);
    const diff = generateRandomNumber(1, 10);
    const progression = [];
    let hiddenIndex = generateRandomNumber(0, length - 1);

    for (let i = 0; i < length; i++) {
        if (i === hiddenIndex) {
            progression.push('..');
        } else {
            progression.push(start + i * diff);
        }
    }

    return progression;
}

const calculateMissingNumber = (progression) => {
    const index = progression.indexOf('..')
    if (index===0) {
        return progression[1] - (progression[2] - progression[1])
    } else if (index===progression.length-1) {
        return progression[progression.length-2] + (progression[progression.length-2] - progression[progression.length-3])
    } else {
        return progression[index+1] - (progression[index+2] - progression[index+1])
    }
}

export const brainProgressionGame = (name) => {
    console.log('What number is missing in the progression?')
    let correctAnswers = 0;
    let isGameOver = false;

    while (!isGameOver) {
        const progression = generationProgression();
        console.log(`Question: ${progression.join(' ')}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = calculateMissingNumber(progression);

        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            isGameOver = true;
        }

        if (correctAnswers === 3) {
            console.log(`Congratulations, ${name}!`);
            isGameOver = true;
        }
    }
}