import run from '../index.js';

import showRandomNumber from '../math.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionValue = () => {
  const randomNumber = showRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runEven = () => {
  run(gameRule, getQuestionValue);
};

export default runEven;
