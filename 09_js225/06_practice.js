var turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  },
};

function logReturnVal(func) {
  var returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);