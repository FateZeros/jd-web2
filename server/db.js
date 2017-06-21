// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const initData = require('./initData.json')

// const userSchema = new Schema({
//   username: String,
// 	passwd: String,
// 	mobile: String,
// 	email: String,
// 	roleId: String
// })


// const Models = {
//   User: mongoose.model('User', userSchema)
// }

// const initialize = function () {
//   Models.User.find(null, function (err, data) {
//     if (err) {
//       console.log(err)
//     } else if (!data.length) {
//       console.log('Database opens for the first time...')
//       Promise.all(initData.map(item => new Models[item.type](item).save()))
//         .then(() => console.log('Initialize successfully.'))
//         .catch(() => console.log('Something went wrong during initializing.'))
//     }
//   })
// }

// mongoose.connect('mongodb://localhost:27017/jd_db')

// const db = mongoose.connection

// db.on('error', function () {
//   console.log('Database connection error.')
// })

// db.once('open', function () {
//   console.log('The database has connected.')
//   initialize()
// })

// module.exports = Models


// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const initData = require('./initData.json')

// const userSchema = new Schema({
//   username: String,
//   passwd: String,
//   mobile: String,
//   email: String,
//   roleId: String
// })


// const Models = {
//   User: mongoose.model('User', userSchema)
// }

const mongoose = require('mongoose')
const config = require('./config.js') //连接数据库配置
const User = require('./models/user')
const initData = require('./initData.json')

const initialize = function () {
  User.find(null, function (err, data) {
    if (err) {
      console.log(err)
    } else if (!data.length) {
      console.log('Database opens for the first time...')
      Promise.all(initData.map(item => new User(item).save()))
        .then(() => console.log('Initialize successfully.'))
        .catch(() => console.log('Something went wrong during initializing.'))
    }
  })
}

mongoose.Promise = global.Promise
mongoose.connect(config.database) // 连接数据库

const db = mongoose.connection

db.on('error', function () {
  console.log('Database connection error.')
})

db.once('open', function () {
  console.log('The database has connected.')
  initialize()
})