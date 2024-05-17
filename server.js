const os = require("os");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const MenuItem = require("./Models/MenuItem");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to our Hotel");
});


const personRoutes = require('./Routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./Routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
