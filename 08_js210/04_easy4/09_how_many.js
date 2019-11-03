function countOccurrences(arr) {
  let occurrences = {};

  for (let i = 0; i < arr.length; i += 1) {
    occurrences[arr[i]] = occurrences[arr[i]] || 0;
    occurrences[arr[i]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + ' => ' + occurrences[item]);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2