/*
PROBLEM
- take 2 sorted array arguments
- return new array that contains elements of both arrays in sorted order
- you can't combine then sort, you have to build it 1 elements at a time
- don't mutate the original arrays

INPUT
- 2 sorted arrays

OUTOUT
- 1 sorted array with all elements from both arrays
- input arrays are not mutated

ALGORITHM
- create result array variable initialized with empty array
- initialize idx1 and idx2 to 0
- do while idx1 < arr1.length || idx2 < arr2.length
  - if arr1[idx1] <= arr2[idx2]
    - copy arr1[idx1] to result arr
    - increment idx1
  - opposite for idx2
- return result arr
*/


function merge(arr1, arr2) {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (!arr2[idx2] || arr1[idx1] <= arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1 += 1;
    } else {
      result.push(arr2[idx2]);
      idx2 += 1;
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]