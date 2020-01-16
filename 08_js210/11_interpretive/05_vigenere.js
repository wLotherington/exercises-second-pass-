/*
PROBLEM
- given keyword instead of offset key, use the letters position in alphabet
  (case insenitive) to encrypt test following caeserEncrypt
- if the char is not a a-zA-Z char, don't advance the key

INPUT
- string to encrypt and string as key

OUTPUT
- encrypted string

ALGORITHM
- declare variable for tracking offset initialized to 0
- make keyword lowercase
- in the caeser cipher, if it is a valid letter, use the keyword tracker to grab letter from keyword
  - find index in lowercase letters
*/

function vigenereEncrypt(str, key) {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = lower.toUpperCase();
  let keyPos = 0;
  key = key.toLowerCase();

  return str.split('').map(function(char) {
    if (lower.indexOf(char) !== -1) {
      let offset = (lower.indexOf(char) + lower.indexOf(key[keyPos])) % lower.length;
      keyPos = (keyPos + 1) % key.length;
      return lower[offset];
    } else if (upper.indexOf(char) !== -1) {
      let offset = (upper.indexOf(char) + lower.indexOf(key[keyPos])) % upper.length;
      keyPos = (keyPos + 1) % key.length;
      return upper[offset];
    } else {
      return char;
    }
  }).join('');
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "meat") === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "MEAT") === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "mEaT") === "Bmnxmtpeqw dhz'x gh ar pbldal!");