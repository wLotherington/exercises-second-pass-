const READLINE = require('readline-sync');

let integer = Number(READLINE.question('Please enter an integer greater than 0: '));
let sumOrProduct = READLINE.question('Enter "s" to compute the sum, or "p" to compute the product. ');
let result = 1;

for (let i = 2; i <= integer; i++) {
  if (sumOrProduct.toLowerCase() === 's') {
    result += i;
  } else if (sumOrProduct.toLowerCase() === 'p') {
    result *= i;
  } else {
    console.log('Error');
  }
}

console.log(result);