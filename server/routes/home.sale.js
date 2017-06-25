const express = require('express')
const router = express.Router()

const Sale = require('../models/sale')

// 首页--促销
router.get('/home/sale', (req, res) => {
  Sale.find(null, (err, saleList) => {
    if (err) {
      res.send({ code: 50003, msg: '未知错误' })
    } else {
      res.send({
        code: 200,
        records: saleList
      })
    }  
  })
})


module.exports = router
