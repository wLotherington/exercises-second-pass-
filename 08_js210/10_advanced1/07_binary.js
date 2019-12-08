/*
PROBLEM
- make binary search function
- take array as arg and search item as second arg
- return index of search item
- return -1 if not found
- assume arr arguments will always be sorted

INPUT
- sorted array & searchItem

OUTPUT
- index of search item in sorted array or -1 if not found

ALGORITHM
- get half length (rounded up) of arr
- compare item at array[halfLength] to searchItem
  - if searchItem === array element => return idx (which is half length at this time)
  - if searchItem > array item
    - add 50% of current index to the index and repeat
  - if searchItem < array item
    - subtract 50% of array index and repeat
*/

function binarySearch(array, searchItem) {
  let halfLength = Math.ceil(array.length / 2);
  let idx = halfLength;

  while (halfLength > 0) {
    if (halfLength === 1) {
      halfLength = 0;
    } else {
      halfLength = Math.ceil(halfLength / 2);
    }

    if (array[idx] === searchItem) {
      return idx;
    } else if (array[idx] < searchItem) {
      idx += halfLength;
    } else if (array[idx] > searchItem) {
      idx -= halfLength;
    }
  }

  return -1;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6