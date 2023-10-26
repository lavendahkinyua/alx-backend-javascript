import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
    static getAllStudents(request, response, path) {
        readDatabase(path)
        .then((data) => {
            const students = [];
            for (const field in data) {
            if (VALID_MAJORS.includes(field)) {
                students.push(...data[field]);
            }
            }
            if (students.length > 0) {
            response.status(200).send(`Number of students in CS: ${students.length}. List: ${students.join(', ')}`);
            } else {
            response.status(500).send('Cannot load the database');
            }
        })
        .catch((err) => {
            response.status(500).send(err.message);
        });
    }
    
    static getAllStudentsByMajor(request, response, path) {
        const { major } = request.params;
        if (VALID_MAJORS.includes(major)) {
        readDatabase(path)
            .then((data) => {
            const students = data[major];
            if (students) {
                response.status(200).send(`List: ${students.join(', ')}`);
            } else {
                response.status(500).send('Cannot load the database');
            }
            })
            .catch((err) => {
            response.status(500).send(err.message);
            });
        } else {
        response.status(500).send('Major parameter must be CS or SWE');
        }
    }
    }

export default StudentsController;
module.exports = StudentsController;