var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName;
// without the parens it doesnt execute the function and instead just returns it
// note, it does return the actial function, not the string representation