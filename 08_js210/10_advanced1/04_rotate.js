/*
PROBLEM
- rotate array of arbitrary size by 90 degrees
- do not mutate the original array

INPUT
- 2 dimensional array of arbitrary size

OUTPUT
- 2 dimensional array with all elements from input, but different position
- new array

EXAMPLES
[[1, 2, 3]]

[[1],
 [2],
 [3]]

ALGORITHM
- transpose
- reverse each row
*/

function rotate90(matrix) {
  return rotated = transpose(matrix).map(arr => arr.reverse());
}

function transpose(arr) {
  let transposed = [];

  arr.forEach(function(subArr, row) {
    subArr.forEach(function(ellem, col) {
      transposed[col] = transposed[col] || [];
      transposed[col][row] = arr[row][col];
    });
  })

  return transposed;
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]