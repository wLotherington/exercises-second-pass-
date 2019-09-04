var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
}

var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
}

function stringToInteger(number) {
  var integer = 0;
  var power = 1;

  stringDigits = number.split('').reverse();

  for (var i = 0; i < stringDigits.length; i++) {
    integer += stringDigits[i] * power;
    power *= 10;
  }

  return integer;
}

function stringToSignedInteger(number) {
  var sign = 1;

  if (number[0] === '-' || number[0] === '+') {
    if (number[0] === '-') { sign = -1 }
    number = number.slice(1, number.length);
  }

  return stringToInteger(number) * 1;
}

// function stringToSignedInteger(number) {
//   var integer = 0;
//   var power = 1;
//   var sign = 1;

//   var stringDigits = number.split('');

//   if (stringDigits[0] === '-' || stringDigits[0] === '+') {
//     sign = stringDigits[0] === '-' ? -1 : 1;
//     stringDigits = stringDigits.slice(1, stringDigits.length).reverse();

//   } else {
//     stringDigits = stringDigits.reverse();
//   }

//   for (var i = 0; i < stringDigits.length; i++) {
//     integer += stringDigits[i] * power;
//     power *= 10;
//   }

//   return integer * sign;
// }


console.log(stringToSignedInteger('4321'));     // 4321
console.log(stringToSignedInteger('-570'));     // -570
console.log(stringToSignedInteger('+100'));      // 100