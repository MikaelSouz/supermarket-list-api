const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./src/routes");
const port = 3333;

app.use(express.json());

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017");
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connectDB().catch((error) => {
    console.log(`Error connecting database: ${error}`);
  });
  app.use("/", router);
  console.log(`Example app listening on port ${port}`);
});
