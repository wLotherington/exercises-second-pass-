/*
PROBLEM
- odd int argument
- display 8 pointed star in n x n grid
- buffers
  - inner - (n - 3) / 2 - row
  - outer - row
- when the row is the middle one, print all stars
- seconod half is the same as the first, but flip buffers

*...*...* 0
.*..*..*. 1
..*.*.*.. 2
...***... 3
********* 4
...***... 5
..*.*.*.. 6
.*..*..*. 7
*...*...* 8

INPUT
- positive odd int >= 7

OUPUT
- displayed 8 pointed star (single str)

ALGORITHM
- build first half of star Math.floor(n / 2)
- add a solid star line for middle of n length
- build second half of star by reversing first half star arr
*/

function star(n) {
  let topHalf = [];

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let buffer = (n - 3) / 2 - i;
    topHalf.push(`${' '.repeat(i)}*${' '.repeat(buffer)}*${' '.repeat(buffer)}*${' '.repeat(i)}`);
  }

  let bottomHalf = topHalf.slice().reverse();

  console.log(topHalf.concat('*'.repeat(n)).concat(bottomHalf).join('\n'));
}

star(7);