const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual MongoDB connection string
const DB_URL = 'your_database_url';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db;
