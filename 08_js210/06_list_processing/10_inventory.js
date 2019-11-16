var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, transactions) {
    return transactions.filter(transaction => transaction.id === inventoryItem);
}

// function isItemAvailable(inventoryItem, transactions) {
//    return transactionsFor(inventoryItem, transactions).map(function (transaction) {
//       return transaction.movement === 'in' ? transaction.quantity : -transaction.quantity;
//    }).reduce((a, b) => a + b) > 0;
// }

function isItemAvailable(inventoryItem, transactions) {
   let remaining = transactionsFor(inventoryItem, transactions).reduce(function (sum, transaction) {
      if (transaction.movement === 'in') {
         return sum += transaction.quantity;
      } else {
         return sum -= transaction.quantity;
      }
   }, 0);

   return remaining > 0;
}


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true