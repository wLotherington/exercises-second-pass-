const CONSONANTS_REGEX = new RegExp('[bcdfghjklmnpqrstvwxyz]', 'ig')

function doubleConsonants(str) {
  return str.replace(CONSONANTS_REGEX, '$&$&')
}

// function doubleConsonants(str) {
//   let chars = str.split('').map(char => double(char));

//   return chars.join('');
// }

// function double(char) {
//   return char.match(CONSONANTS_REGEX) ? char.repeat(2) : char;
// }


console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");