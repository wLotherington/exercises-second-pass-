function twice(n) {
  let numberString = String(n);
  let halfLength = Math.ceil(numberString.length / 2);
  let regex = new RegExp('.{1,' + halfLength + '}' ,'g')
  let halves = numberString.match(regex);

  if (halves[0] === halves[1]) {
    return n;
  } else {
    return n * 2;
  }
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);