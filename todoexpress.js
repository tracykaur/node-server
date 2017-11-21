const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

let todos = [
  {id : 0,  item :'wash clothes', done: false},
  {id : 1, item :'drink coffee', done:true}
];

let id = 2;

app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
  res.send(todos);
})
app.get('/api/todos/:id', (req, res) => {
  res.send(todos.filter(todo => {
    return todo.id === parseInt(req.params.id)
  }));
});

app.post('/api/todos', (req, res) => {
  req.body.id = id++;
  todos.push(req.body);
  res.send(todos);
})

app.put('/api/todos/:id', (req, res) => {
  todosIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));
  todos[todosIndex].item = req.body.item;
  todos[todosIndex].done = req.body.done;
  res.send(todos);
})

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.findIndex(todo => todo.id !== parseInt(req.params.id));

  res.send(todos);
})

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})
app.listen(port);
