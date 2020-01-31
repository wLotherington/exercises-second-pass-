function makeList() {
  var items = [];

  return {
    list: function() {
      console.log(items.join('\n'));
    },

    add: function(item) {
      if (items.indexOf(item) === -1) {
        items.push(item);
        console.log(item + ' added!');
      } else {
        console.log(item + ' already on list.');
      }
    },

    remove: function(item) {
      var index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      } else {
        console.log(item + ' not on list.');
      }
    },
  };
}

var list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();