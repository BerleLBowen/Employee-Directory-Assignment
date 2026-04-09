const express = require('express');
const app = express();


const data = require('./db/employees'); 
.
const employees = data.default || data;


app.get('/', (req, res) => {
  res.send("Hello employees!");
});


app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

app.get('/employees/:id', (req, res) => {
  const { id } = req.params;
  
  const employee = employees.find(e => e.id == id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send("Employee not found");
  }
});

module.exports = app;