const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

let todos = [
  {item :'wash clothes', done: false},
  {item :'drink coffee', done:true}
];

app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
  res.send(todos);
})

app.post('/api/todos', (req, res) => {
  todos.push(req.body.name);
  res.send(todos);
})


app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})
app.listen(port);
