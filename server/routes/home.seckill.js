const express = require('express')
const router = express.Router()

const SeckillCargo = require('../models/seckillCargo')

// 首页--促销
router.get('/home/seckill', (req, res) => {
  SeckillCargo.find({}, (err, data) => {
    if (err) {
      res.send({ code: 50003, msg: '未知错误' })
    } else {
      res.send({
        code: 200,
        data: data[0]
      })
    }  
  })
})


module.exports = router
