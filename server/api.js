const express = require('express')
const router = express.Router()
const db = require('./db')

//登录
router.post('/api/login', (req, res) => {
  const { username, pwd } = req.body
  db.User.findOne({ username }, 'passwd', (err, data) => {
  	switch (true) {
  		case !!err: 
  			console.log(err)
  			break
  		case !data:
  			res.send({ code: 40001, msg: '用户名不存在' })
  			break
  		case data.passwd === pwd:
  			res.send({ code: 200, msg: '登录成功' })
  			break
  		case data.passwd !== pwd:
  			res.send({ code: 40002, msg: '密码错误' })
  			break
  		default:
  			res.send({ code: 50003, msg: '未知错误' })
  	}
  })
})

//注册
router.post('/api/register', (req, res) => {
  const {
    username,
    pwd,
    mobile,
    email
  } = req.body
  // 后台也需验证 手机号和邮箱是否合法 暂不做
  db.User.findOne({ username }, (err, data) => {
    if (data) {
      res.send({ code: 40003, msg: '用户名已存在' })
    } else {
      // 写入参数过多时 普通用户注册
      const params = {
        passwd: pwd,
        mobile,
        email,
        roleId: 'role_9'
      }

      db.User.update(
        { username: username },
        params, 
        { upsert: true },
        (err) => {
          if (err) {
            res.send({ code: 50001, msg: '数据库故障' })
          }
          res.send({ code: 200, msg: '注册成功' })
        }
      )
    }
  })

})


module.exports = router
