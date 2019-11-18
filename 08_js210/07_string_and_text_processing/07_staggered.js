function staggeredCase(str) {
  let upcase = true;

  return str.split('').map(function (char) {
    if (char.match(/[a-z]/gi)) {
      if (upcase) {
        upcase = false;
        return char.toUpperCase();
      } else {
        upcase = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
