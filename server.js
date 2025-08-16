const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON bodies

// Establish database connection to MongoDB
mongoose.connect('mongodb://localhost/personal-budget', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Datenbankverbindung erfolgreich!'); // Log successful connection
}).catch((err) => {
  console.error('Fehler bei der Datenbankverbindung:', err); // Log connection error
});

// Define the route for the homepage
app.get('/', (req, res) => {
  res.send('API läuft!'); // Send response when root route is accessed
});

// Start the server on the specified port or port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`); // Log the server port
});