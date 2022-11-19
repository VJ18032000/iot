const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost/iot"

const app = express()
const bodyParser=require('body-parser')
const cors=require('cors')
app.use(cors())
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('database connection....')
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())


const iot=require('./routes/iot')
app.use('/', iot)

app.listen(5555, () => console.log('server connection...5555'))