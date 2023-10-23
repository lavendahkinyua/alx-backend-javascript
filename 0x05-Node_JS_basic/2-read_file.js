/**
 * create afunction using database.csv
 */

const fs = require('fs');

const countStudents = (path) => {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  data = data.split('\n');

  let students = data.filter((line) => line)

  .map((line) => line.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => student[3]);

  console.log(`Number of students: ${students.length}`);
  let csStudents = students.filter((student) => student.includes('CS'));
  let sweStudents = students.filter((student) => student.includes('SWE'));
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
}

module.exports = countStudents;
