console.log("This is Express Hello World: ");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!');
})

app.get('/page-2', function(req, res){
  res.send("This is Page 2 of my express Hello-World Website!");
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})