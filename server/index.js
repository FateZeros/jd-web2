// const fs = require('fs')
// const path = require('path')
// const express = require('express')
// const favicon = require('serve-favicon')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')

// const db = require('./db')
// const resolve = file => path.resolve(__dirname, file)
// const api = require('./api')
// const app = express()

// app.set('port', (process.env.port || 2121))
// app.use(favicon(resolve('../favicon.ico')))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use('/dist', express.static(resolve('../dist')))
// app.use(api)

// app.use(function(req, res) {
//   res.status(404).end()
// })

// app.listen(app.get('port'), function () {
//   console.log('Visit http://localhost:' + app.get('port'))
// })

const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const passport = require('passport') // 用户认证模块passport
const Strategy = require('passport-http-bearer').Strategy // token验证模块

const db = require('./db')
const routes = require('./routes')

const app = express()

app.set('port', (process.env.port || 2121))
app.use(favicon(path.resolve(__dirname, '../favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/dist', express.static(path.resolve(__dirname, '../dist')))
app.use(passport.initialize());// 初始化passport模块

routes(app)
app.use(function(req, res) {
  res.status(404).end()
})


app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
