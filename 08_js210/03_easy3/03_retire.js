const readlineSync = require('readline-sync');

let age = Number(readlineSync.question('What is your age? '));
let retireAge = Number(readlineSync.question('At what age would you like to retire? '));

let currentYear = new Date().getFullYear();
let workYearsToGo = retireAge - age;
let retirementYear = currentYear + retireAge - age;

console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);