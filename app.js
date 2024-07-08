const { books } = require("./utils/constants");

const express = require("express");

const app = express();

// Sample book data
app.get("/", (req, res) => {
  res.send(`Hello World, This is a node app ${Date.now()}`);
});

// Books endpoint
app.get("/books", (req, res) => {
  res.json(books);
});

// Start the server
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
