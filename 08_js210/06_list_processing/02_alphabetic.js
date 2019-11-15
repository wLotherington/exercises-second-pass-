// const numberNames = ['zero', 'one', 'two', 'three', 'four', 'five',
//                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                      'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
//                      'seventeen', 'eighteen', 'nineteen'];

// function alphabeticNumberSort(arr) {
//   return arr.sort((i, j) => numberNames[i] < numberNames[j] ? -1 : 1);
// }


function wordSort(num1, num2) {
  const numberNames = ['zero', 'one', 'two', 'three', 'four', 'five',
                     'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                     'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                     'seventeen', 'eighteen', 'nineteen'];

  if (numberNames[num1] < numberNames[num2]) {
    return -1;
  } else if (numberNames[num1] > numberNames[num2]) {
    return 1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(arr) {
  return arr.sort(wordSort);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]