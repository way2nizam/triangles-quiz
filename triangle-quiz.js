const quizForm = document.querySelector('.quiz-form');
const submitButtonAnswer = document.querySelector('#submit-btn');
const showOutput = document.querySelector('#show-output');

showOutput.style.display = 'none';

const correctAnswers = [
  'reflex angle',
  'no',
  '2',
  '60',
  'no',
  'false',
  '6',
  'hypotenuse',
  'complementary',
  '30',
];

const calculateScore = () => {
  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    console.log(formResults.values());
    if (value === correctAnswers[index]) {
      score = score + 1;
    } else {
      score = score + 0;
    }
    index = index + 1;
  }
  showOutput.style.display = 'block';
  showOutput.innerText = 'Your Total Score is ' + score + '.';
};

submitButtonAnswer.addEventListener('click', calculateScore);
