const sideOne = document.querySelector('#side1');
const sideTwo = document.querySelector('#side2');
const checkButton = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output-div');

outputDiv.style.display = 'none';

function showMessage(message) {
  outputDiv.style.display = 'block';

  outputDiv.innerText = message;
}

function checkHypotenuse() {
  const triangleSide1 = Number(sideOne.value);
  const triangleSide2 = Number(sideTwo.value);

  const sumOfSquareOfTwoSide =
    triangleSide1 * triangleSide1 + triangleSide2 * triangleSide2;

  const squareRoot = Math.sqrt(sumOfSquareOfTwoSide);

  showMessage('The lenght of hypotenuse is ' + squareRoot + ' cm.');
}
checkButton.addEventListener('click', checkHypotenuse);
