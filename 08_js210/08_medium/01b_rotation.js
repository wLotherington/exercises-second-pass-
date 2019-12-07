
/*
PROBLEM
- write a function that moves the element of an array to the end
- don't modify the original array
- return undefined if the input is not an array
- if the input is an empty array, return an empty array

INPUT
- array
- if not array, it is invalid and undefined should be returned

OUTPUT
- new array
- should have same elements as original, but the first element should be at the end

ALGORITHM
- check for valid input
  - if empty array, return empty array
  - if not an array, return undefined
- slice the first element and add it to a slice of the rest of the elements
- return
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]