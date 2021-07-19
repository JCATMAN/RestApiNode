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

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Sync db tables
const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// Home route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to my rest api." });
});

// Router
require("./app/routes/chats.routes")(app);


// Set port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is up and running at ${PORT}`);
});