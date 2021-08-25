
const express = require('express')


const app = express()
const port = 3000


//create our web server app
app.get('/', (req, res) => {
    //send the body to our http response
  res.send('Hello World!')
})

app.get('/page-two', (req, res) => {
    //send the body to our http response
  res.send('Welcom in page 2!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})