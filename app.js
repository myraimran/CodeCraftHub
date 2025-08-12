require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./user-service/src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/users', userRoutes);

module.exports = app; // Export the app for use in server.js