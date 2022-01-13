const sideOne = document.querySelector('#side1');
const sideTwo = document.querySelector('#side2');
const checkButton = document.querySelector('#check-btn');
const showOutput = document.querySelector('#show-output');

showOutput.style.display = 'none';

const showMessage = (message) => {
  showOutput.style.display = 'block';
  showOutput.innerText = message;
};

const checkHypotenuse = () => {
  const triangleSide1 = Number(sideOne.value);
  const triangleSide2 = Number(sideTwo.value);

  if (
    triangleSide1 < 0 ||
    triangleSide1 == '' ||
    triangleSide2 < 0 ||
    triangleSide2 == ''
  ) {
    alert(
      'Input field can not be empty or negative. Please enter correct values.'
    );
  } else {
    const sumOfSquareOfTwoSide =
      triangleSide1 * triangleSide1 + triangleSide2 * triangleSide2;

    const squareRoot = Math.sqrt(sumOfSquareOfTwoSide).toFixed(2);

    showMessage('The lenght of hypotenuse is ' + squareRoot + ' cm.');
  }
};
checkButton.addEventListener('click', checkHypotenuse);
