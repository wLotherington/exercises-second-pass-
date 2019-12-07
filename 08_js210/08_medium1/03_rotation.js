/*
PROBLEM
- take an integer argument and return the maximum rotated version of it
- start by rotating the whole thing, then all but the first digit then all but the first 2 digits etc

INPUT
- int

OUTPUT
- max rotated int

ALGORITHM
- get number of digits by converting to string and getting length
- loop once for the each digits
  - overwrite the number by passing the number and the loop position to the rotateRightmostDigits function
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(number, n) {
  let strArr = number.toString().split('');
  let rotatedSubArr = rotateArray(strArr.splice(-n));
  let rotatedNumber = Number(strArr.concat(rotatedSubArr).join(''));

  return rotatedNumber;
}

function maxRotation(number) {
  let len = number.toString().length;

  for (let i = len; i > 0; i--) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15);
console.log(maxRotation(8703529146) === 7321609845);