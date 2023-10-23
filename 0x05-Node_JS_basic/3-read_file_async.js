/**
 * using the same database.csv file, create a function named countStudents
 */
const fs = require('fs');

const countStudents = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
            }
            if (data) {
                const lines = data.split('\n').filter((line) => line);
                const students = lines.map((line) => line.split(',')).filter((student) => student.length === 4 && student[0] !== 'firstname').map((student) => student[3]);
                console.log(`Number of students: ${students.length}`);
                const csStudents = students.filter((student) => student.includes('CS'));
                const sweStudents = students.filter((student) => student.includes('SWE'));
                console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
                console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
            }
            resolve();
        });
    });
};

module.exports = countStudents;