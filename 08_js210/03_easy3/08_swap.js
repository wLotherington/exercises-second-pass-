function swap(str) {
  let strArr = str.split(' ');
  return strArr.map(elem => swapFirstLast(elem)).join(' ');
}

function swapFirstLast(str) {
  let strArr = str.split('');
  let first = strArr[0];
  let last = strArr[strArr.length - 1]

  strArr[0] = last;
  strArr[strArr.length - 1] = first;
  
  return strArr.join('');
}

console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') === "ebcdA");
console.log(swap('a') === "a");