/** 
 * creating a small HTTP server using Node's HTTP module
 * 
 */
const http = require('http');

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;