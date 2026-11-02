const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Sample in-memory task data
let tasks = [
  { id: 1, title: 'Learn Node.js basics', completed: true },
  { id: 2, title: 'Build Express REST API', completed: false }
];

// 1. Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Backend Task Manager API!');
});

// 2. GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// 3. POST a new task
app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running live on http://localhost:${PORT}`);
});