const baseValue = document.querySelector('#base');
const heightValue = document.querySelector('#height');
const calculateArea = document.querySelector('#calculate-area');
const showOutput = document.querySelector('#show-output');

showOutput.style.display = 'none';

const showMessage = (message) => {
  showOutput.style.display = 'block';
  showOutput.innerText = message;
};

const calculateAreaOfTraingle = () => {
  if (
    baseValue.value < 0 ||
    baseValue.value == '' ||
    heightValue.value < 0 ||
    heightValue.value == ''
  ) {
    alert(
      'Input field can not empty or negative. Please enter correct values.'
    );
  } else {
    const area = (Number(baseValue.value) * Number(heightValue.value)) / 2;
    showMessage('Area of triangle is: ' + area + ' cm2.');
  }
};

calculateArea.addEventListener('click', calculateAreaOfTraingle);
