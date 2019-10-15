function shift(arr) {
  arr = arr.reverse();
  let removed = arr.pop();
  arr = arr.reverse();

  return removed;
}

function unshift() {
  let arr = arguments[0].reverse();

  for (let i = 1; i < arguments.length; i++) {
    arr[arr.length] = arguments[i];
  }

  arr = arr.reverse();
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]