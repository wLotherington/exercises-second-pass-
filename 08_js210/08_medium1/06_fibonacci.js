/*
PROBLEM
- calculate nth Fibonacci number
- fib number = sum of previous 2 fib numbers

INPUT
- n

OUTPUT
- number

ALGORITHM
fib (n) = fib(n-1) + fib(n-2)
if n === 1 then 1
*/

// function fibonacci(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

function fibonacci(n) {
  return (n <= 2) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765