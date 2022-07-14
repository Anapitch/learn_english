const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const route = require('./src/routes')
const compression = require('compression')
const { response } = require('express')


const appname = "english"
const port = "8000"

const app = express()
  

app.use(logger('combined'))
app.use(compression())
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', '*')
  next()

})

app.use(route)


app.listen(port, () => console.log(`${appname} app listening on port ${port}!`))