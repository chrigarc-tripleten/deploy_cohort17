const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/cohort17");

const app = express();

const { PORT = 3000 } = process.env;

app.use(
  cors({
    origin: ["https://cohort17.desarrollointerno.com", "http://localhost:5173"],
  })
);

app.get('/hello', (req, res) => {
    res.send({
        message: 'Hello world'
    })
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
