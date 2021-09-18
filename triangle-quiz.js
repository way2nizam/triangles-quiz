const quizForm = document.querySelector('.quiz-form');
const submitButtonAnswer = document.querySelector('#submit-btn');
const outputDiv = document.querySelector('#output-div');

outputDiv.style.display = 'none';

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

function calculateScore() {
  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputDiv.style.display = 'block';
  outputDiv.innerText = 'Your Total Score is ' + score + '.';
}

submitButtonAnswer.addEventListener('click', calculateScore);
