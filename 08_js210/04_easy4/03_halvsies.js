function halvsies(arr) {
  let half = Math.ceil(arr.length / 2)
  let firstHalf = arr.slice(0, half);
  let secondHalf = arr.slice(half);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]