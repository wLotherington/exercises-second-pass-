function shortLongShort(str1, str2) {
  let shortStr = str1.length < str2.length ? str1 : str2;
  let longStr = str1.length >= str2.length ? str1 : str2;

  return shortStr + longStr + shortStr;
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");