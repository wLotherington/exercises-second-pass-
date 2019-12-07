/*
PROBLEM
- use recursion, but replace fibonacci(n - 2) with memoization

ALGORITHM
fib(n - 1) is fib(n - 2) for next position
*/


function fibonacci1(n) {
  return (n <= 2) ? 1 : fibonacci1(n - 1) + fibonacci1(n - 2);
}


let fibNumbers = {
  1: 1,
  2: 1,
}

function fibonacci2(n) {
  if (n <= 2) {
    return 1;
  } else {
    fibNumbers[n] = fibonacci2(n - 1) + fibNumbers[n - 2]
    return fibNumbers[n];
  }
}

console.log(fibonacci2(1000));
// console.log(fibonacci1(45)); //102334155