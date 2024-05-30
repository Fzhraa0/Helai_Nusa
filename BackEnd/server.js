const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(cors());
app.use(express.json()); // Middleware untuk parsing JSON
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json("From BackEnd Side");
});

app.listen(8081, () => {
  console.log("listening");
});
