// function calculateBonus(salary, receiveBonus) {
//   return receiveBonus ? salary / 2 : 0;
// }

// console.log(calculateBonus(2800, true) === 1400)
// console.log(calculateBonus(1000, false) === 0)
// console.log(calculateBonus(50000, true) === 25000)

// // the exercise was to use the arguments object


function calculateBonus(...args) {
  return args[1] ? args[0] / 2 : 0;
}

console.log(calculateBonus(2800, true) === 1400)
console.log(calculateBonus(1000, false) === 0)
console.log(calculateBonus(50000, true) === 25000)