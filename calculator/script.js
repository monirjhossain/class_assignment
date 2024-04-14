/*
    function calculate() {
      var num1 = parseFloat(document.getElementById('num1').value);
      var num2 = parseFloat(document.getElementById('num2').value);
      var operation = document.getElementById('operation').value;
      var result;

      switch(operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if(num2 !== 0) {
            result = num1 / num2;
          } else {
            result = 'Cannot divide by zero';
          }
          break;
        default:
          result = 'Invalid operation';
          break;
      }

      document.getElementById('result').style.display = 'block';
      document.getElementById('result').innerHTML = 'Result: ' + result;
    }
  */

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
