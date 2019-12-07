/*
PROBLEM
- classify triangles based on side lengths passed in
- invalid
  - more than 3 sides
  - all sides are numbers
  - any side <= 0
  - and 2 sides >= length of 3rd side
- equilateral
  - all three sides are equal
- Isosceles
  - two sides are qual and third is different
- scalene
  - all sides are different lengths

INPUT
- 2 numbers

OUTPUT
- string classification

ALGORITHM
- store arguments into arr
- create arr to hold sides later
- store total length as variable
- check for valid triangle. 
  - arr length is 3
  - iterate using for loop to allow early break
    - arr all arguments are positive numbers
    - each side is shorter than the other 2 put together (total - side)
  - while iterating
    - if the side is invalid, return invalid
    - if the side it valid, add side to arr if it doesnt exist
- case for arr length
  - if 1 then return equal
  - if 2 then return iso
  - if 3 then scal
*/

function triangle(...sides) {
  if (sides.length !== 3 || !sides.every(input => input > 0)) {
    return 'invalid';
  }

  let uniqueSides = [];
  let totalLength = sides.reduce((a, b) => a + b);

  for (let i = 0; i < sides.length; i++) {
    if (totalLength - sides[i] <= sides[i]) {
      return 'invalid';
    }

    if (uniqueSides.indexOf(sides[i]) === -1) {
      uniqueSides.push(sides[i]);
    }
  }

  switch(uniqueSides.length) {
    case 1:
      return 'equilateral';
      break;
    case 2:
      return 'isosceles';
      break;
    case 3:
      return 'scalene';
      break;
  };
}

// console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 3, 1.5) === "isosceles");
// console.log(triangle(3, 4, 5) === "scalene");
// console.log(triangle(0, 3, 3) === "invalid");
// console.log(triangle(3, 1, 1) === "invalid");
// console.log(triangle(3, 1) === "invalid");
// console.log(triangle(3, 1, 3, 4) === "invalid");
// console.log(triangle(3, 'a', 4) === "invalid");
// console.log(triangle() === "invalid");