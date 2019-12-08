/*
PROBLEM
- given key (offset), replace a-z and A-Z
- all other chars are left the same
- maintain case

INPUT
- string and int

OUTPUT
- string

ALGORITHM
- create upper and lower case letter strings
- break string argument into individual chars
- iterate through all chars
- if char is in the upper case lookup string, replace with the upper table char idx positiong + offset % table length
- same for lower
- if not in either, leave as is
- join array and return
*/

function caesarEncrypt(str, key) {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = lower.toUpperCase();

  return str.split('').map(function(char) {
    if (lower.indexOf(char) !== -1) {
      let offset = (lower.indexOf(char) + key) % lower.length;
      return lower[offset];
    } else if (upper.indexOf(char) !== -1) {
      let offset = (upper.indexOf(char) + key) % upper.length;
      return upper[offset];
    } else {
      return char;
    }
  }).join('');
}

console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) ===
 "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) ===
 "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) ===
 "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");