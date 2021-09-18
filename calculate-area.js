const baseValue = document.querySelector('#base');
const heightValue = document.querySelector('#height');
const calculateArea = document.querySelector('#calculate-area');
const outputDiv = document.querySelector('#output-div');

outputDiv.style.display = 'none';

function showMessage(message) {
  outputDiv.style.display = 'block';
  outputDiv.innerText = message;
}

function calculateAreaOfTraingle() {
  const area = (Number(baseValue.value) * Number(heightValue.value)) / 2;
  showMessage('Area of triangle is: ' + area + ' cm2.');
}

calculateArea.addEventListener('click', calculateAreaOfTraingle);
