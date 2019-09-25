function getGrade() {
  let average = Array.from(arguments).reduce((a, b) => a + b) / arguments.length;

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C'
  } else if (average >= 60) {
    return 'D'
  } else if (average >= 0) {
    return 'F'
  }
}

console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");