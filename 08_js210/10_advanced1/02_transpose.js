function transpose(arr) {
  let transposed = [];

  arr.forEach(function(subArr, row) {
    subArr.forEach(function(ellem, col) {
      if (!transposed[col]) {
        transposed[col] = [];
      }
      transposed[col][row] = arr[row][col];
    });
  })

  return transposed;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]