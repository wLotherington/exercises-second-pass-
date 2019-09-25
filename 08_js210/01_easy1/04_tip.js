var readlineSync = require('readline-sync');

var bill = Number(readlineSync.question('What is the bill? '));
var tipPercentage = Number(readlineSync.question('What is the tip percentage? '));

var tip = bill * tipPercentage / 100;
var totalBill = bill + tip;

console.log('\n')
console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + totalBill.toFixed(2));


