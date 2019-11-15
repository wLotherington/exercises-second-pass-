function multiplyAllPairs(arr1, arr2) {
  let combinations = [];

  arr1.forEach(function (num1) {
    arr2.forEach(function (num2) {
      combinations.push(num1 * num2);
    });
  });

  return combinations.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]