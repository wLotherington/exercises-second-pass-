/*
PROBLEM
- take string argument and replace all number words with their corresponding digit

INPUT
- string

OUTPUT
- string
- number words replaced with digits

ALGORITHM
- create array with all number words
- loop through the arr keeping track of idx
- create new regex for each and use global replace to replace the word with the index
- return new str
*/

function wordToDigit(str) {
  let digitArr = ['zero', 'one', 'two', 'three',
                  'four', 'five', 'six', 'seven',
                  'eight', 'nine'];

  for (let i = 0; i < digitArr.length; i++) {
    let regex = new RegExp('\\b' + digitArr[i] + '\\b', 'gi');
    str = str.replace(regex, i);
  }

  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('one weight'));