function cleanUp(str) {
  str = str.replace(/[^a-z]/gi, ' ');

  while (str.match(/\s\s/g)) {
    str = str.replace(/\s\s/g, ' ');
  }

  return str;
}


// better version
// function cleanUp(string) {
//   return string.replace(/[^A-Z]+/gi, " ");
// }

console.log(cleanUp("---what's my +*& line?") === " what s my line ");