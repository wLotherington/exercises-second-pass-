// function MyClass() {
//   //
// }

// myClass.prototype.method = function() {
//   //
// };

// function MySubClass() {
//   MyClass.call(this);
//   //
// }

// MySubClass.prototype = Object.create(MyClass.prototype);
// MySubClass.prototype.constructor = MySubClass;

// MySubClass.prototype.method = function() {
//   MyClass.prototype.method.call(this);
// }


// Person
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

// Doctor
function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

// Professor
function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
}

// Professional
var professional = {
  invoice: function() {},
  payTax: function() {},
};

function delegate(callingObject, methodOwner, methodName) {
  var args = Array.prototype.slice.call(arguments, 3)
  return function() {
    return methodOwner[methodName].apply(callingObject, args);
  };
}

function extend(object, mixin) {
  var methodNames = Object.keys(mixin);

  methodNames.forEach(function(name) {
    object[name] = delegate(object, mixin, name);
  });

  return object;
}

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
// console.log(professor instanceof Person);     // logs true
// console.log(professor instanceof Professor);  // logs true
// professor.eat();                              // logs 'Eating'
// professor.communicate();                      // logs 'Communicating'
// professor.sleep();                            // logs 'Sleeping'
// console.log(professor.fullName());            // logs 'foo bar'
// professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'