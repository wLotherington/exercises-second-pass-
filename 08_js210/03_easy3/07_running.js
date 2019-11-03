// function runningTotal(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     total += arr[i];
//     arr[i] = total;
//   }

//   return arr;
// }

function runningTotal(arr) {
  let total = 0;
  return arr.map(elem => total += elem);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []