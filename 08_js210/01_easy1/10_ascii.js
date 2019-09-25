function asciiValue(str) {
  let asciiSum = 0;

  for (let i = 0; i < str.length; i++) {
    asciiSum += str.charCodeAt(i);
  }

  return asciiSum;
}

console.log(asciiValue('Four score') === 984);
console.log(asciiValue('Launch School') === 1251);
console.log(asciiValue('a') === 97);
console.log(asciiValue('') === 0);