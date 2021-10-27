const baseValue = document.querySelector('#base');
const heightValue = document.querySelector('#height');
const calculateArea = document.querySelector('#calculate-area');
const showOutput = document.querySelector('#show-output');

showOutput.style.display = 'none';

function showMessage(message) {
  showOutput.style.display = 'block';
  showOutput.innerText = message;
}

function calculateAreaOfTraingle() {
  const area = (Number(baseValue.value) * Number(heightValue.value)) / 2;
  showMessage('Area of triangle is: ' + area + ' cm2.');
}

calculateArea.addEventListener('click', calculateAreaOfTraingle);
