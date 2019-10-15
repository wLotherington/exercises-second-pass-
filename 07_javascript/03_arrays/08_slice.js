function slice(array, begin, end) {
  let result = [];

  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;
  for (let i = begin; i < end; i++) result.push(array[i]);

  return result;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// arr;                                  // [1, 2, 3]

function splice(array, start, deleteCount) {
  let elements = [];
  let removed = [];
  let kept = [];

  for (let i = 3; i < arguments.length; i++) {
    elements.push(arguments[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (i === start) {
      for (let j = 0; j < elements.length; j++) {
        kept.push(elements[j]);
      }
    }

    if (i >= start && i < start + deleteCount) {
      removed.push(array[i]);
    } else {
      kept.push(array[i]);
    }
  }

  array.length = kept.length;

  for (let i = 0; i < array.length; i++) {
    array[i] = kept[i];
  }

  return removed;
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 1, 'two'));             // [2]
// console.log(arr);                                  // [1, "two", 3]

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr);                                  // [1, "two", "three"]

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 0));                    // []
// console.log(splice(arr, 1, 0, 'a'));               // []
// console.log(arr);                                  // [1, "a", 2, 3]

// var arr = [1, 2, 3];
// console.log(splice(arr, 0, 0, 'a'));               // []
// console.log(arr);                                  // ["a", 1, 2, 3]
