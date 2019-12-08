/*
PROBLEM
- given an odd integer, create a grid n x x in size and display a diamond in it
  ..*..
  .***.
  *****
  .***.
  ..*..

- we will have n lines each with a length of n
- odd number of stars on each line, starting with 1, going up to n, then back to 1
  - star count
- padding = (n - starCount) / 2

INPUT
- positive odd integer

OUTPUT
- display diamond

CLARIFICATIONS
- always positive?
- should we return 1 string or can we log multiple lines?
- do we need to fill the array on the right hand of the diamond?

ALGORITHM
- create a variable to control incrementing or decrementing by 2 initialized at 2
- create a variable that will hold star count, initialized at 1
- loop n times
  - calculate buffer (n - starCount) / 2
  - build line and log to screen (buffer spaces + star times starCount)
  - check if starCount === n
    - if yes, change incrementer to a decrementer (-2)
    - increment/decrement
*/

function diamond(n) {
  let builder = 2;
  let starCount = 1;
  let buffer;

  for (let i = 0; i < n; i++) {
    buffer = (n - starCount) / 2;
    console.log(' '.repeat(buffer) + '*'.repeat(starCount));

    if (starCount === n) {
      builder = -2;
    }

    starCount += builder;
  }
}

diamond(1);
diamond(3);
diamond(9);
