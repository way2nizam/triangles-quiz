const baseValue = document.querySelector('#base');
const heightValue = document.querySelector('#height');
const calculateArea = document.querySelector('#calculate-area');
const outputDiv = document.querySelector('#output-div');

function showMessage(message) {
  outputDiv.innerText = message;
}

function calculateAreaOfTraingle() {
  const area = (Number(baseValue.value) * Number(heightValue.value)) / 2;
  showMessage('Area of triangle is: ' + area + ' cm2.');
}

calculateArea.addEventListener('click', calculateAreaOfTraingle);
