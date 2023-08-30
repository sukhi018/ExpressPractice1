const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/task')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
app.use(express.static('./public'))

const {connectDb} = require('./db/connect.js')

app.use(express.json())
app.use('/api/v1/tasks',routes)
app.use(errorHandler)


const start = async()=>{
    try
    {
    await connectDb(process.env.mongoString)
    app.listen(port,()=>{
        console.log('Listening to request')
    })
    }
    catch(err)
    {
        console.log(err)
    }
}

start()
