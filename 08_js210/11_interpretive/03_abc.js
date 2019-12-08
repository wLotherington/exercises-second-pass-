/*
PROBLEM
- take word as argument
- check if the word can be spelled using the blocks
- if true, return true
- if false, return false
- ignore case

INPUT
- word string

OUTPUT
- boolean

CLARIFICATIONS
- empty string?
- not string arg?
- all letters only appear on 1 block

ALGORITHM
- create block array
  - array of strings representing blocks
- loop though word looking at each individual char
  - if availableBlock?
    - true - continue
    - false - return false
  - if you get to the end of the string, return true
- availableBlock?
  - loops through all blocks until it finds one that contains the char
    - splices out that block and returns true
    - returns false if no matches
*/

function isBlockWord(word) {
  word = word.toUpperCase();
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM',];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < blocks.length; j++) {
      if (blocks[j].indexOf(word[i]) !== -1) {
        blocks.splice(j, 1);
        break;
      } else if (j === blocks.length - 1) {
        return false
      }
    }
  }
  return true;
}

console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('jest') === true);