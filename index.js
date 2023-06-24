const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./src/routes");
const port = 3333;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017");
}

app.listen(port, () => {
  connectDB().catch((error) => {
    console.log(`Error connecting database: ${error}`);
  });
  app.use("/", routes);
  console.log(`Example app listening on port ${port}`);
});
