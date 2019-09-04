var number1 = prompt('Enter the first number:');
var number2 = prompt('Enter the second number:');

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// answer the first statement outputs the 2 input numbers as a concatenated string.
// this is because all prompt inputs are strings and the + operator is used for
// both addition and concatenation. The rest of the operators are used for their
// expected arithematic uses only, so the input strings are converted to numbers
// automatically