require('dotenv').config();
console.log('USERNAME:', process.env.USERNAME);
console.log('PASSWORD:', process.env.PASSWORD);
const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Basic Auth middleware for /secret route
const authMiddleware = basicAuth({
  users: { [process.env.USERNAME]: process.env.PASSWORD },
  challenge: true,
  unauthorizedResponse: 'Unauthorized access. Invalid credentials.'
});

// Protected secret route
app.get('/secret', authMiddleware, (req, res) => {
  res.send(process.env.SECRET_MESSAGE);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});