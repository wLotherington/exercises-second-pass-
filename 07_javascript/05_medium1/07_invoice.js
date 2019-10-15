function invoiceTotal(...amounts) {
  let total = 0;

  for (let i = 0; i < amounts.length; i += 1) {
    total += amounts[i];
  }

  return total;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?


// use the arguments parameter
// use ...amounts