/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// In-memory user store (for simplicity, in a real application you would use a database)
let users = [];

// Signup route
app.post('/signup', (req, res) => {
  const { name, age, phone, username, password } = req.body;

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ name, age, phone, username, password });
  res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  //console.log(user.name);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});
app.get('/signup',(req,res)=>{
  res.json(users);
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// In-memory user store (for simplicity, in a real application you would use a database)
let users = [];
let loggedInUser = null;
// In-memory pets store
let pets = [];

// Signup route
app.post('/signup', (req, res) => {
  const { name, age, phone, username, password } = req.body;

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ name, age, phone, username, password });
  res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }
  loggedInUser = user;
  res.status(200).json({ message: 'Login successful' });
});
// Logout route
app.post('/logout', (req, res) => {
  if (!loggedInUser) {
    return res.status(400).json({ message: 'No user is currently logged in' });
  }

  loggedInUser = null; // Clear the logged-in user
  res.status(200).json({ message: 'Logout successful' });
});

// Get logged-in user route
app.get('/loggedinuser', (req, res) => {
  res.json(loggedInUser);
});
// Get all users route (for testing)
app.get('/users', (req, res) => {
  res.json(users);
});

// POST route to add a new pet for adoption
app.post('/api/pets', (req, res) => {
  const { name, type, age, gender, description,logo } = req.body;

  // For simplicity, generate a unique ID (in real scenarios, you would use a database with auto-increment IDs)
  const petId = pets.length + 1;

  const newPet = {
    id: petId,
    name,
    type,
    age,
    gender,
    description,logo
  };

  pets.push(newPet);
  res.status(201).json({ message: 'Pet posted successfully', pet: newPet });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api/pets', (req, res) => {
  res.json(pets);
});*/


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// In-memory user store (for simplicity, in a real application you would use a database)
let users = [];
let loggedInUser = null;
// In-memory pets store
let pets = [];

// Signup route
app.post('/signup', (req, res) => {
  const { name, age, phone, username, password } = req.body;

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ name, age, phone, username, password });
  res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }
  loggedInUser = user;
  res.status(200).json({ message: 'Login successful' });
});
// Logout route
app.post('/logout', (req, res) => {
  if (!loggedInUser) {
    return res.status(400).json({ message: 'No user is currently logged in' });
  }

  loggedInUser = null; // Clear the logged-in user
  res.status(200).json({ message: 'Logout successful' });
});

// Get logged-in user route
app.get('/loggedinuser', (req, res) => {
  res.json(loggedInUser);
});
// Get all users route (for testing)
app.get('/users', (req, res) => {
  res.json(users);
});

// POST route to add a new pet for adoption
app.post('/api/pets', (req, res) => {
  const { name, type, age, gender, description,logo } = req.body;

  // For simplicity, generate a unique ID (in real scenarios, you would use a database with auto-increment IDs)
  const petId = pets.length + 1;

  const newPet = {
    id: petId,
    name,
    type,
    age,
    gender,
    description,logo
  };

  pets.push(newPet);
  res.status(201).json({ message: 'Pet posted successfully', pet: newPet });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api/pets', (req, res) => {
  res.json(pets);
});







