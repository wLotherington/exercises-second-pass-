function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// it will ont work since you must explicitely return values. the function total does not return a value.
// also, the variable sum should be assigned the value 0 since it will otherwise default to undefined
