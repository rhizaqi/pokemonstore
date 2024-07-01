if(process.env.NODE_ENV !== "production"){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./middleware/errorHandler')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/", router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(123,`Example app listening on port ${port}`)
})