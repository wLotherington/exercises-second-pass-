function fridayThe13ths(year) {
  let friday13ths = 0;
  let date;

  for (let i = 0; i < 12; i+= 1) {
    date = new Date(year, i, 13);

    if (date.getDay() === 5) {
      friday13ths += 1;
    }
  }

  return friday13ths;
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);