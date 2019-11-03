const readlineSync = require('readline-sync');
const numberWithSuffix = ['1st', '2nd', '3rd', '4th', '5th'];
let numbers = [];

for (let i = 0; i < 5; i += 1) {
  numbers.push(Number(readlineSync.question(`Enter the ${numberWithSuffix[i]} number: `)));
}

searchNumber = Number(readlineSync.question(`Enter the last number: `));

if (numbers.indexOf(searchNumber) !== -1) {
  console.log(`The number ${searchNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${searchNumber} does not appear in [${numbers.join(', ')}].`);
}
