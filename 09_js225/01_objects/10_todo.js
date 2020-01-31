function makeList() {
  var todos = [];

  return function(item) {
    if (!item) {
      if (todos.length === 0) {
        return 'The list is empty.';
      } else {
        return todos.join('\n');
      }
    }

    let index = todos.indexOf(item);

    if (index === -1) {
      todos.push(item);
      return item + ' added!';
    } else {
      todos.splice(index, 1);
      return item + ' removed!';
    }
  };
}

var list = makeList();
console.log(list());
console.log(list('make breakfast'));
console.log(list('read book'));
console.log(list());
console.log(list('make breakfast'));
console.log(list());