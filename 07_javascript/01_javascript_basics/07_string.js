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


console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570