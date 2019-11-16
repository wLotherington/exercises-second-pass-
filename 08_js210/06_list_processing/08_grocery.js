function buyFruit(list) {
  return list.map(item => Array(item[1]).fill(item[0])).reduce((items, item) => items.concat(item));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]