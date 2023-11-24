const express  = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.use('/api',require('./router/allRoutes'))

app.listen(5000,()=>{
    console.log('Server@5000')
})