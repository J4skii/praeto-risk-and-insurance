require('dotenv').config();
const express = require('express');
// const { Pool } = require('pg'); // Removed for simpler in-memory storage
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// In-memory storage for quotes (for MVP simplicity)
const quotes = [];

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Body parser for JSON requests

// @route   GET /api/quotes
// @desc    Get all submitted quote requests
// @access  Public
app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

// @route   POST /api/quotes
// @desc    Submit a new quote request
// @access  Public
app.post('/api/quotes', async (req, res) => {
  const { fullName, email, phoneNumber, requirement, message, popiaConsent } = req.body;

  // Basic server-side validation
  if (!fullName || !email || !phoneNumber || !requirement || popiaConsent === undefined) {
    return res.status(400).json({ msg: 'Please enter all required fields.' });
  }

  try {
    // Store quote request in-memory
    const newQuote = {
      id: quotes.length + 1,
      fullName,
      email,
      phoneNumber,
      requirement,
      message,
      popiaConsent,
      submissionDate: new Date().toISOString(),
    };
    quotes.push(newQuote);

    // TODO: Implement email notification here using a service like SendGrid or Mailgun
    console.log('New quote submitted:', newQuote);

    res.status(201).json({ msg: 'Quote request submitted successfully!', quote: newQuote });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
