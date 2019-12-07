/*
PROBLEM
- featured number
  - odd
  - multiple of 7
  - each digit only appears once
- take int argument and return the next featured number (largest possible is 9876543201)
- error message if no next number

INPUT
- int

OUTPUT
- int (featured number)

ALGORITHM
- you could brute force and iterate over all odd numbers

- check if too large and return invalid error
- get odd version of argument
  - add 1, devide by 2, round down, multiply by 2, add 1
- from that to the highest possible, iterate by 2
  - check if multiple of 7
  - check for unique digits
    - make string, loop, populate array as long index === -1
    - return true if all are unique else false
  - if both are true, return else continue
*/

function featured(n) {
  const MAX = 9876543201;

  for (let i = odd7Multiple(n); i <= MAX; i += 14) {
    if (i > n && uniqueDigits(i)) {
      return i;
    }
  }

  return 'error';
}

function odd7Multiple(n) {
  if (n <= 7) return 7;

  let remainderOf7 = Math.ceil(8 / 7);
  if (remainderOf7 % 2 === 0) remainderOf7 += 1;

  return remainderOf7 * 7;
}

function uniqueDigits(n) {
  let nStr = n.toString();
  let nDigits = [];

  for (let i = 0; i < nStr.length; i++) {
    if (nDigits.indexOf(nStr[i]) === -1) {
      nDigits.push(nStr[i]);
    } else {
      return false;
    }
  }

  return true;
}

console.log(featured(0) === 7);
console.log(featured(1) === 7);
console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543201) === 'error');