// const MIN_AGE = 20;
// const MAX_AGE = 200;


// let age = Math.ceil(Math.random() * (MAX_AGE - MIN_AGE) + MIN_AGE)
// console.log(`Teddy is ${age} years old!`);



// solution had function created for returning random between 2 numbers
function randomBetween(a, b) {
  let max = a;
  let min = b;

  if (a < b) {
    max = b;
    min = a;
  }

  return Math.ceil(Math.random() * (max - min) + min);
}

let age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);