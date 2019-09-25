function findFibonacciIndexByLength(n) {
  let sequence = [1, 1];

  while (String(sequence[0]).length < n) {
    sequence.unshift(sequence[0] + sequence[1])
  }

  return sequence.length;
}

console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);