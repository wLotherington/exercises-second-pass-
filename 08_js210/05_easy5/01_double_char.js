function repeater(str) {
  return str.split('').map(char => char + char).join('');
}

console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('') === "");