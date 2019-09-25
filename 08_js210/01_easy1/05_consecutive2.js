const READLINE = require('readline-sync');

function getInteger() {
  let integerInput;
  let invalidInteger;

  do {
    integerInput = READLINE.question('Please enter an integer greater then 0: ');
    invalidInteger = !String(integerInput).match(/[0-9]/g);
  } while (invalidInteger)

  return Number(integerInput);
}

function getOperation() {
  let operationInput;
  let invalidOperation;

  do {
    operationInput = READLINE.question('Enter "s" to compute the sum, or "p" to compute the product. ');
    invalidOperation = !String(operationInput).match(/^(p|s){1}$/igm);
    console.log(operationInput);
  } while (invalidOperation)

  return operationInput.toLowerCase();
}

function computeResult(integer, operation) {
  let result = 1;

  for (let i = 2; i <= integer; i++) {
    if (operation === 's') {
      result += i;
    } else if (operation === 'p') {
      result *= i;
    }
  }

  if (operation === 's') {
    console.log('The sum of the integers between 1 and ' + integer + ' is ' + result + '.');
  } else if (operation === 'p') {
    console.log('The product of the integers between 1 and ' + integer + ' is ' + result + '.');
  }
}

let integer = getInteger();
let operation = getOperation();
computeResult(integer, operation);
