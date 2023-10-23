/**
 * create a small HTTP server using Node's HTTP module
 */
const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(error.message);
      });
  }
});
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
