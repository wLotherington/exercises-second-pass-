function negative(n) {
  return Math.min(n, -n);
}

console.log(negative(5) === -5);
console.log(negative(-3) === -3);
console.log(negative(0) === -0);