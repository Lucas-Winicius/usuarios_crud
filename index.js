require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.emit("connect");
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Unable to connect to the database"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.on("connect", () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
