function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.bio = function() {
  console.log(this.name.first);
};


Person.prototype.greeting = function() {
  console.log('hi');
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
  console.log('hi, im a teacher')
}

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

teacher1.greeting();