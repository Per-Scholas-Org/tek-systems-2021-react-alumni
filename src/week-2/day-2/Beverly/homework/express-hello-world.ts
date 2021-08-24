const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Beverly said: Hello World!')
})

app.listen(port, () => {
    console.log(`Beverly's example app listening at http://localhost:${port}`);
})