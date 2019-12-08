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

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]