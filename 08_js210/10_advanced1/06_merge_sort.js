/*
PROBLEM
- accept arrray
- split array into 2 sub arrs, split each sub arr into 2
- continue until sub arr length of deepenst arr is 1
- move back up sorting as you remerge

INPUT
- arr

OUTPUT
- sorted arr

ALGORITHM
- if arr.length === 1 return arr
  - else return arr with 2 sub arrs containing original elements split in half

*/

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let half = Math.ceil(arr.length / 2);
    let arr1 = arr.slice(0, half);
    let arr2 = arr.slice(half);

    return merge(mergeSort(arr1), mergeSort(arr2));
  }
}

function merge(arr1, arr2) {
  // console.log()

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

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]