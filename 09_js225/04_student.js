function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info: function() {
      console.log(this.name + ' is a ' + this.year + ' year student');
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    listCourses: function() {
      console.log(this.courses);
    },

    addNote: function(code, note) {
      let course = this.courseFromCode(code);
      course.notes = course.notes || [];
      course.notes.push(note);
    },

    updateNote: function(code, note) {
      this.courses.filter(course => course.code === code)[0].notes = [note];
    },

    viewNotes: function() {
      this.courses.forEach(function(course) {
        if (!!course.notes) {
          console.log(course.name + ': ' + course.notes.join('; '))
        }
      });
    },

    courseFromCode: function(code) {
      return this.courses.filter(course => course.code === code)[0];
    },
  };
}

foo = createStudent('Foo', '1st');
// foo.info();
// 'Foo is a 1st year student'
// foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// "Math: Fun Course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun Course; Remember to study for algebra"
// // "Advance Math: Difficult Subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// // "Math: Fun Course"
// // "Advance Math: Difficult Subject"