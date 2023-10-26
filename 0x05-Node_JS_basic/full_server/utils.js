import fs from 'fs';

/**
 * function called readDatabase
 * reads database asycnronously
 * return promise
 * 
 */

const  readDatabase = (path) => new Promise((resolve, reject) => {
    if (!path) {
        reject(Error('No path provided'));
    }
    if (path) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
            }
            if (data) {
                const fileLines = data
                  .toString('utf-8')
                  .trim()
                  .split('\n');
                const studentGroups = {};
                const dbFieldNames = fileLines[0].split(',');
                const studentPropNames = dbFieldNames
                  .slice(0, dbFieldNames.length - 1);
        
                for (const line of fileLines.slice(1)) {
                  const studentRecord = line.split(',');
                  const studentPropValues = studentRecord
                    .slice(0, studentRecord.length - 1);
                  const field = studentRecord[studentRecord.length - 1];
                  if (!Object.keys(studentGroups).includes(field)) {
                    studentGroups[field] = [];
                  }
                  const studentEntries = studentPropNames
                    .map((propName, idx) => [propName, studentPropValues[idx]]);
                  studentGroups[field].push(Object.fromEntries(studentEntries));
                }
                resolve(studentGroups);
              }
            });
          }
        });
        
        export default readDatabase;
        module.exports = readDatabase; 
