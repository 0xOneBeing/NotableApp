const express = require('express')
const MongoClient =  require('mongodb').MongoClient
const bodyParser = require('body-parser')
// const { urlencoded } = require('body-parser')

const app = express()

const hostname = "127.0.0.1"
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log("We are live on: 'http://"+hostname+":"+port+"/'")
})
