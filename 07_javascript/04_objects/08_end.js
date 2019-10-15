function penultimate(string) {
  return string.split(' ').reverse()[1];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"