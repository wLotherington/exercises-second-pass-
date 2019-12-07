/*
PROBLEM
- accept 3 angles and classify triangle as right, acute, or obtuse
- 
*/

function triangle(...sides) {
  let [a, b, c] = sides.sort((m, n) => m - n);

  if (a <= 0 || sides.reduce((m, n) => m + n) !== 180) return 'invalid';
  if (c === 90) return 'right';
  if (c > 90) return 'obtuse';
  if (c < 90) return 'acute';
}

console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");