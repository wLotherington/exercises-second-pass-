STRING_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(number) {
  var digits = []
  var remainder;

  do {
    remainder = number % 10;
    digits.unshift(remainder);
    number = (number - remainder) / 10;
  } while (number > 0)

  return digits.map(n => STRING_DIGITS[n]).join('');
}

function signedIntegerToString(number) {
  if (number < 0) {
    return '-' + integerToString(-number);
  } else if (number > 0) {
    return '+' + integerToString(number);
  } else {
    return integerToString(number);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"