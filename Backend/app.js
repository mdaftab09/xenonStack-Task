// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://amantech247:kingaman@cluster0.jnw4j7f.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notification of connection success)
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a schema for the contact model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(bodyParser.json());

// API endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact instance
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    // Respond with a success message
    res.json({ success: true, message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
