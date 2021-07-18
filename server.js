// External packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Start web app
const app = express();

// Setup cors
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// Home route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to my rest api." });
});

// Set port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is up and running at ${PORT}`);
});