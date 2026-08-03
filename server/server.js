// Import the Express library
const express = require('express');

// Create an Express application
const app = express();

// Set the port for the server
const PORT = 5000;

// Define a GET route for the home page
app.get('/', (req, res) => {
  // Send a simple message back to the client
  res.send('🚀 Welcome to StudyOrbit Backend!');
});

// Start the server and listen on the chosen port
app.listen(PORT, () => {
  console.log(`StudyOrbit server is running at http://localhost:${PORT}`);
});
