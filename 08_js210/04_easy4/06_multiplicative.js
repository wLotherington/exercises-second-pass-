function showMultiplicativeAverage(arr) {
  let product = arr.reduce((a, b) => a * b);
  let multAvg = product / arr.length;

  return multAvg.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]) === "7.500");
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]) === "28361.667");