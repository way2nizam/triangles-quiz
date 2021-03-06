const circleRadius = document.querySelector('#circle-radius');
const calculateArea = document.querySelector('#calculate-area');
const showOutput = document.querySelector('#show-output');

const valueOfPie = 3.14;

showOutput.style.display = 'none';

const showMessage = (msg) => {
  showOutput.style.display = 'block';
  showOutput.innerText = 'Area of Circle = ' + msg + 'cm2';
};

const calculateCircleArea = () => {
  const radiusOfCircle = circleRadius.value;

  if (radiusOfCircle < 0 || radiusOfCircle == '') {
    alert('Input can not be empty or negative. Please enter correct values');
    showOutput.style.display = 'none';
  } else {
    const circleArea = valueOfPie * radiusOfCircle * radiusOfCircle;
    showMessage(circleArea);
  }
};

calculateArea.addEventListener('click', calculateCircleArea);
