const express = require('express')
const router = express.Router()
const db = require('./db')

router.post('/api/login', (req, res) => {
  const { username, pwd } = req.body
  db.User.findOne({ username }, (err, data) => {
  	switch (true) {
  		case !!err: 
  			console.log(err)
  			break
  		case !data:
  			res.send({ code: 40001, msg: '账号不存在' })
  			break
  		case data.pwd === pwd:
  			res.send({ code: 200, msg: '登录成功' })
  			break
  		case data.pwd !== pwd:
  			res.send({ code: 40002, msg: '密码错误' })
  			break
  		default:
  			res.send({ code: 50003, msg: '未知错误' })
  	}
  })
})


module.exports = router
