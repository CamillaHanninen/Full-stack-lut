const http = require('http');


// Creating a server object
http
  .createServer((req, res) => {
  // Writes a response
  res.write('Hello world');
  res.end();
})
  .listen(5000, () => console.log('Server running..'));
