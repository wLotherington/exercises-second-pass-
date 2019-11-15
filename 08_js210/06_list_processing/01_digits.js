function sum(num) {
  return num.toString().split('').reduce((a, b) => Number(a) + Number(b));
}

console.log(sum(23) === 5);
console.log(sum(496) === 19);
console.log(sum(123456789) === 45);