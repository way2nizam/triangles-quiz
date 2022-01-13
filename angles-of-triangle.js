const inputAngle1 = document.querySelector('#angle1');
const inputAngle2 = document.querySelector('#angle2');
const inputAngle3 = document.querySelector('#angle3');
const checkButton = document.querySelector('#check-triangle');
const showOutput = document.querySelector('#show-output');

showOutput.style.display = 'none';

const showMessage = (message) => {
  showOutput.style.display = 'block';
  showOutput.innerText = '--> ' + message;
};

const formTriangleHandler = () => {
  const sum =
    Number(inputAngle1.value) +
    Number(inputAngle2.value) +
    Number(inputAngle3.value);

  if (
    inputAngle1.value < 0 ||
    inputAngle1.value > 180 ||
    inputAngle1.value == '' ||
    inputAngle2.value < 0 ||
    inputAngle2.value > 180 ||
    inputAngle2.value == '' ||
    inputAngle3.value < 0 ||
    inputAngle3.value > 180 ||
    inputAngle3.value == ''
  ) {
    alert('Input field empty or incorrect, Please fill correct values.');
  } else if (sum === 180) {
    showMessage('Yes, these three angles forms a triangle.');
  } else {
    showMessage('NO, these three angles does not forms a triangle.');
  }
};

checkButton.addEventListener('click', formTriangleHandler);
