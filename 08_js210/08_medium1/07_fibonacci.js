/*
PROBLEM
- calculate fib number without recursion

INPUT
- int

OUTPUT
- int

ALGORITHM
- create empty arr variable to hold fib numbers
- loop from 1 to n
  - idx <= 2, unshift 1 to fib arr
  - unshift sum of fib arr
  - fib arr pop (remove smallest)
- return fib arr[0]
*/

function fibonacci(n) {
  let fibNumbers = [];

  for (let i = 1; i <= n; i++) {
    if (i <= 2) {
      fibNumbers.unshift(1);
    } else {
      fibNumbers.unshift(fibNumbers[0] + fibNumbers[1]);
      fibNumbers.pop();
    }
  }

  return fibNumbers[0];
}

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);