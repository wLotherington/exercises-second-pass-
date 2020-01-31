var school = {
  students: [],

  addStudent: function(name, grade, courses) {
    const GRADES = ['1st', '2nd', '3rd', '4th', '5th'];

    if (GRADES.indexOf(grade) === -1) {
      return 'Invalid Year';
    }

    let student = createStudent(name, grade);
    this.students.push(student);
    
    return student;
  },

  enrollStudent: function(name, course) {
    let student = this.getStudent(name);
    
    student.addCourse(course);
  },

  addGrade: function(name, code, grade) {
    let student = this.getStudent(name);
    let course = this.getCourse(student, code);

    course.grade = grade;
  },

  getReportCard: function(name) {
    let student = this.getStudent(name);

    student.courses.forEach(function(course) {
      let grade = course.grade || 'In progress';
      console.log(course.name + ': ' + grade)
    });
  },

  courseReport: function(courseName) {
    let enrolledStudents = this.students.filter(function(student) {
      for (let i = 0; i < student.courses.length; i++) {
        if (student.courses[i].name === courseName && !!student.courses[i].grade) {
          return true;
        }
      }
    });

    if (enrolledStudents.length === 0) {
      console.log(undefined);
    } else {
      let grades = [];
      let gradeAverage;

      console.log('=' + courseName + ' Grades=');
      
      enrolledStudents.forEach(function(student) {
        let courseGrade = student.courses.filter(course => course.name === courseName)[0].grade;
        grades.push(courseGrade);
        console.log(student.name + ': ' + courseGrade);
      });

      console.log('---');

      gradeAverage = grades.reduce((a, b) => a + b) / grades.length;
      console.log('Course Average: ' + gradeAverage);
    }
  },

  getStudent: function(name) {
    return this.students.filter(student => student.name === name)[0];
  },

  getCourse: function(student, code) {
    return student.courses.filter(course => course.code === code)[0];
  },
};

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

school.addStudent('foo', '3rd');
school.addStudent('bar', '1st');
school.addStudent('qux', '2nd');

school.enrollStudent('foo', { name: 'Math', code: 101, });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102, });
school.enrollStudent('foo', { name: 'Physics', code: 202, });
school.enrollStudent('bar', { name: 'Math', code: 101, });
school.enrollStudent('qux', { name: 'Math', code: 101, });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102, });

school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);
school.addGrade('bar', 101, 91);
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

// school.getReportCard('foo');

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');



// console.log(school.students[0])