function centerOf(str) {
  let center = str.length / 2
  let idxStart = Math.ceil(center - 1);
  let idxEnd = Math.floor(center + 1)

  return str.slice(idxStart, idxEnd);
}

console.log(centerOf('I Love Ruby') === "e");
console.log(centerOf('Launch School') === " ");
console.log(centerOf('Launch') === "un");
console.log(centerOf('Launchschool') === "hs");
console.log(centerOf('x') === "x");