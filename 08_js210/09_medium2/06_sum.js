/*
PROBLEM
- difference between (square of sum) and (sum of square)
- given n for the number of positinve ints to use

INPUT 
- positive int

OUTPUT
- positive int (difference)

ALGORITHM
- define squareSum and sumSquare. initialize both to 0
- loop from 1 to n
  - squareSum += n
  - sumSqare += n^2
return squareSum^2 - sumSquare
*/

function sumSquareDifference(n) {
  let squareSum = 0;
  let sumSquare = 0;

  for (let i = 1; i <= n; i++) {
    squareSum += i;
    sumSquare += Math.pow(i, 2);
  }

  return Math.pow(squareSum, 2) - sumSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150