const express = require('express')
const app = express()
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const port = 3000

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, '../var/log/access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function (req, res) {
    res.send('Hi Temporal!\n')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





