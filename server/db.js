const mongoose = require('mongoose')
const Schema = mongoose.Schema
const initData = require('./initData.json')

const userSchema = new Schema({
  name: String,
	passwd: String,
	mobile: String,
	email: String,
	roleId: String
})


const Models = {
  User: mongoose.model('User', userSchema)
}

const initialize = function () {
  Models.User.find(null, function (err, data) {
    if (err) {
      console.log(err)
    } else if (!data.length) {
      console.log('Database opens for the first time...')
      Promise.all(initData.map(item => new Models[item.type](item).save()))
        .then(() => console.log('Initialize successfully.'))
        .catch(() => console.log('Something went wrong during initializing.'))
    } else {
      Models.initialized = true
    }
  })
}

mongoose.connect('mongodb://127.0.0.1/jd_db')

const db = mongoose.connection

db.on('error', function () {
  console.log('Database connection error.')
})

db.once('open', function () {
  console.log('The database has connected.')
  initialize()
})

module.exports = Models
