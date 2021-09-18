const inputAngle1 = document.querySelector('#angle1');
const inputAngle2 = document.querySelector('#angle2');
const inputAngle3 = document.querySelector('#angle3');
const checkButton = document.querySelector('#check-triangle');
const outputDiv = document.querySelector('#output-div');

outputDiv.style.display = 'none';

function showMessage(message) {
  outputDiv.style.display = 'block';
  outputDiv.innerText = '--> ' + message;
}

function formTriangleHandler() {
  const sum =
    Number(inputAngle1.value) +
    Number(inputAngle2.value) +
    Number(inputAngle3.value);

  if (sum === 180) {
    showMessage('Yes, these three angles forms a triangle.');
  } else {
    showMessage('NO, these three angles does not forms a triangle.');
  }
}

checkButton.addEventListener('click', formTriangleHandler);
