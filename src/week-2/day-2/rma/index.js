const express = require("express");

const app = express();
const port = 3002;
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/page-two", (req, res) => {
  res.send("This is page two!");
});
app.listen(port, () => {
  console.log("listening....");
  console.log(`listening on port at http://localhost${port}`);
});
