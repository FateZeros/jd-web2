const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const router = express.Router()

const User = require('../models/user')
const config = require('../config')

require('../passport')(passport)

//登录
router.post('/login', (req, res) => {
  const { username, pwd } = req.body
  User.findOne({ username }, 'passwd', (err, user) => {
    if (err) {
      res.send({ code: 50003, msg: '未知错误' })
    }
    if (!user) {
      res.send({ code: 40001, msg: '用户名不存在' })
    } else if (user) {
      console.log(pwd, user.passwd)
      //$2a$10$cF79WkIhVeM95ktWyPZh8.iZIGXc2sfQNvd351TBDb6RzNmm.xsQm
      user.comparePassword(pwd, (err, isMatch) => {
        if (isMatch && !err) {
          var token = jwt.sign({ name: user.username }, config.secret, {
            expiresIn: 10080
          })
          user.token = token
          user.save(err => {
            if (err) {
              res.send(err)
            }
          })
          res.json({
            code: 200,
            message: '验证成功',
            token: 'Bearer' + token,
            name: username
          })
        } else {
          res.send({ code: 40002, msg: '密码错误' })
        }
      })
    }
  	// switch (true) {
  	// 	case !!err: 
  	// 		res.send({ code: 50003, msg: '未知错误' })
  	// 		break
  	// 	case !data:
  	// 		res.send({ code: 40001, msg: '用户名不存在' })
  	// 		break
  	// 	case data.passwd === pwd:
  	// 		res.send({ code: 200, msg: '登录成功' })
  	// 		break
  	// 	case data.passwd !== pwd:
  	// 		res.send({ code: 40002, msg: '密码错误' })
  	// 		break
  	// 	default:
  	// 		res.send({ code: 50003, msg: '未知错误' })
  	// }
  })
})

//注册
router.post('/register', (req, res) => {
  const {
    username,
    pwd,
    mobile,
    email
  } = req.body
  // 后台也需验证 手机号和邮箱是否合法 暂不做
  User.findOne({ username }, (err, data) => {
    if (data) {
      res.json({ code: 40003, msg: '用户名已存在' })
    } else {
      // 写入参数过多时 普通用户注册
      // const params = {
      //   passwd: pwd,
      //   mobile,
      //   email,
      //   roleId: 'role_9'
      // }

      // User.update(
      //   { username: username },
      //   params, 
      //   { upsert: true },
      //   (err) => {
      //     if (err) {
      //       res.send({ code: 50001, msg: '数据库故障' })
      //     }
      //     res.send({ code: 200, msg: '注册成功' })
      //   }
      // )
      const newUser = new User({
        username: username,
        passwd: pwd,
        mobile,
        email,
        roleId: 'role_9'
      })
      newUser.save((err) => {
        if (err) {
          res.json({ code: 50001, msg: '数据库故障' })
        }
        res.json({ code: 200, msg: '注册成功' })
      }) 
    }
  })

})


module.exports = router
