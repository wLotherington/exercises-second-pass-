function union(arr1, arr2) {
  let combined = arr1.concat(arr2);
  let unique = [...new Set(combined)]
  console.log(unique);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]