/**
 * create afunction using database.csv
 */

const fs = require('fs');

const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        let count = 0;
        const fields = {};
        const students = {};
        for (let i = 0; i < lines.length; i += 1) {
        if (lines[i].length > 0) {
            count += 1;
            const line = lines[i].split(',');
            if (!fields[line[3]]) {
            fields[line[3]] = 1;
            } else {
            fields[line[3]] += 1;
            }
            if (!students[line[3]]) {
            students[line[3]] = [];
            }
            students[line[3]].push(line[0]);
        }
        }
        console.log(`Number of students: ${count}`);
        for (const field in fields) {
        if (field) {
            console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].toString().split(',').join(', ')}`);
        }
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
    };
