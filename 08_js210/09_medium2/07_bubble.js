/*
PROBLEM
- bubble sort
- repeatedly iterate through array until no swaps are made
  - compare each pair of elements and SWAP if the lower idx element is larger than the higher idx element
- mutate and return the original array
- there will always be at least 2 elements

CLARIFICATIONS
- should numbers be treated as numbers or follow standard sort?

INPUT
- arr

OUTPUT
- sorted arr

ALGORITHM
- do while loop that has condition based on "swap count" variable that is initialized at 0
- loop through all but last element of arr
  - use idx and idx + 1 to compare elements
  - if elem[idx] > elem[idx + 1]
    - swap count gets incremented
    - swap the values using temp variable holder
*/

function bubbleSort(arr) {
  let swapped = false;
  let temp;

  do {
    swapped = false;

    for (let i = 0; i < (arr.length - 1); i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  } while (swapped)

  return arr;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]