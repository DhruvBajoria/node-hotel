const os = require("os");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to our Hotel");
});


const personRoutes = require('./Routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./Routes/menuRoutes');
app.use('/menu',menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
