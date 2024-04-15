
function logic() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const logicApply = document.getElementById('operate').value;
  let result; 


  switch (logicApply) {
    case 'add':
      result = number1 + number2;
      break;
    case 'subtract':
      result = number1 - number2;
      break;
    case 'multiply':
      result = number1 * number2;
      break;
    case 'divide':
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        result = 'Can not divide by Zero';
      }
      break;
    default:
      result = 'Invalid Operation';
      break;
  }

  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = 'Your Result is = ' + result;
}
