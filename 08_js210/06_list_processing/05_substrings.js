// function substringsAtStart(str) {
//   let substrings = [];

//   for (let i = 1; i <= str.length; i++) {
//     substrings.push(str.substring(0, i));
//   }

//   return substrings;
// }

function substringsAtStart(str) {
  return str.split('').map((_, i) => str.substring(0, i + 1));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]