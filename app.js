const http = require('http');
const port = 3000;

let students = ['Simon', 'Scott'];

function handleMyRequest(request, response) {
  if (request.url === '/students') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(students));
  } else if (request.url === '/bye') {
    response.end('Goodbye')
  } else {
    response.writeHead(404);
    response.end();
  }
}
// /simon tagging
const server = http.createServer(handleMyRequest)

console.log(`Server is running on port ${port}`)
server.listen(port);
