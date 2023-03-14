const express = require('express')
const app = express()
const showRouter = require('./routes/shows.js')
const userRouter = require('./routes/users.js')
const port = 3000

app.use('/user',userRouter)
app.use('/show',showRouter)

app.listen(port,()=>{
console.log('listening on port 3000')
})

