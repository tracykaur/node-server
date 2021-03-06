const http = require('http');
const port = 3000;

let todos = [
  {item :'wash clothes', done: false},
  {item :'drink coffee', done:true}
];

function handleMyRequest(request, response) {
  if ((request.url === '/api/todos') && (request.method === 'GET')) {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(todos));
  } else if (request.url === '/api/teapot') {
    response.writeHead(418);
    response.end('Im a teapot')

  } else if (request.method === "POST" && request.url === '/api/todos') {
    response.writeHead(200);
    let body = ""
    request.on ("data", (chunk) => {
      console.log (`body is ${chunk}`)
      body += chunk
    });
    request.on ("end",()=>{
      todos.push(JSON.parse(body));
    });
    response.end('Successful post')

  } else if (request.url === '/bye') {
    response.end('Goodbye')
  } else {
    response.writeHead(404);
    response.end();
  }
}

const server = http.createServer(handleMyRequest)

console.log(`Server is running on port ${port}`)
server.listen(port);
