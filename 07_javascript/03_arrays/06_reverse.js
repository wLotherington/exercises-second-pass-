function reverse(inputForReversal) {
  let reversedArr = [];

  for (let i = 0; i < inputForReversal.length; i++) {
    reversedArr.unshift(inputForReversal[i]);
  }

  if (Array.isArray(inputForReversal)) {
    return reversedArr
  } else {
    return reversedArr.join(''); 
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
array;                      // [1, 2, 3]