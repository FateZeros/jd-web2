const express = require('express')
const router = express.Router()

const CuffRank = require('../models/cuffRank')

// 首页--排名--手环
router.get('/home/cuffRank', (req, res) => {
  CuffRank.find({}, (err, data) => {
    if (err) {
      res.send({ code: 50003, msg: '未知错误' })
    } else {
      res.send({
        code: 200,
        data: data
      })
    }  
  }).sort({ rankNum: 'asc' })
})


module.exports = router
