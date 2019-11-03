function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return isPalindrome(cleanedStr);
}

console.log(isRealPalindrome('madam') === true);
console.log(isRealPalindrome('Madam') === true);
console.log(isRealPalindrome("Madam, I'm Adam") === true);
console.log(isRealPalindrome('356653') === true);
console.log(isRealPalindrome('356a653') === true);
console.log(isRealPalindrome('123ab321') === false);