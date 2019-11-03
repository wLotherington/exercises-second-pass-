function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam') === true);
console.log(isPalindrome('Madam') === false);
console.log(isPalindrome("madam i'm adam") === false);
console.log(isPalindrome('356653') === true);