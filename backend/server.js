const express  = require('express')
const cors = require('cors')
const jimp =require('jimp')
const multer = require('multer')

const app = express()

app.use(cors())
app.use('/',require('./router/allRoutes'))
app.listen(5001,()=>{
    console.log('Server@5000')
})