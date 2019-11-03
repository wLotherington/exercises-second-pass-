function reverseNumber(n) {
  return Number(String(n).split('').reverse().join(''))
}

console.log(reverseNumber(12345) === 54321);
console.log(reverseNumber(12213) === 31221);
console.log(reverseNumber(456) === 654);
console.log(reverseNumber(12000) === 21);
console.log(reverseNumber(1) === 1);