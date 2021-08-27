var express = require("express");
const fs = require('fs')




const app = express()
const port = 8888

fs.readFile('names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    //console.log(data)


    app.get('/', (req, res) => {
        res.send(data)
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

})