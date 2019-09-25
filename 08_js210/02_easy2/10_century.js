function century(year) {
  let centuryNumber = Math.ceil(year / 100)
  return centuryNumber + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  const ENDINGS = { 1: 'st', 2: 'nd', 3: 'rd' };

  if ([11, 12, 13].includes(centuryNumber % 100)) { return 'th'; }
  return ENDINGS[centuryNumber % 10] || 'th';
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");
