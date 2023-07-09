import readlineSync from "readline-sync"
import { generateRandomNumber } from "../index.js";

const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
}

const generateQuestion = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  return [num1, num2];
}

export const brainGcd = (name) => {
  let correctAnswers = 0;
  let isGameOver = false;

  while (!isGameOver) {
    const [num1, num2] = generateQuestion();
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateGCD(num1, num2);

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