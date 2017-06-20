const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  passwd: {
    type: String,
    require: true
  },
  mobile: String,
  email: String,
  roleId: String,
  token: {
    type: String
  }
})

//添加用户保存时中间件对password进行bcrypt加密,这样保证用户密码只有用户本人知道
userSchema.pre('save', function (next) {
  var user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.passwd, salt, function (err, hash) {
      if (err) {
        return next(err)
      }
      user.passwd = hash
      next()
    })
  })
})

// 校验用户输入密码是否正确
userSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.passwd, (err, isMatch) => {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}


const User = module.exports = mongoose.model('User', userSchema)
