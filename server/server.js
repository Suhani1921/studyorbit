// Load environment variables from the .env file
require('dotenv').config();

// Import the Express library
const express = require('express');

// Import cors to allow requests from the frontend
const cors = require('cors');

// Create an Express application
const app = express();

// Enable CORS so the frontend can talk to the backend
app.use(cors());

// Allow the server to read JSON data from requests
app.use(express.json());

// Use the port from the environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Define a GET route for the home page
app.get('/', (req, res) => {
  // Send a simple message back to the client
  res.send('🚀 Welcome to StudyOrbit Backend!');
});

// Start the server and listen on the chosen port
app.listen(PORT, () => {
  console.log(`StudyOrbit server is running at http://localhost:${PORT}`);
});
