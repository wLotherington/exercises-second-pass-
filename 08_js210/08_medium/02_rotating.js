/*
PROBLEM
- write function with 2 parameters
  - number - to be rotated
  - number - to indicate how many digits from the end will be rotated
- take n digits from the end of a number to create a subnumbers
- move the first digit of the subnumber to the end and rejoin to the original number

CLARIFICATIONS
- non number?
- second argument number is larger than the number of digits in first number
- second arg is 0
- not 2 arguments passed

INPUT
- int
- int

OUTPUT
- int

ALGORITHM
- change first argument to string
- split string into arr
- splice the string arr using the negated second arg (to count from end)
- pass the end of the arr substring to the rotateArray function
- concat with the beginning part of the string arr
- join and convert back to number
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

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);