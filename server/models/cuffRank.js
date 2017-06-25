// 首页-- 排名 -- 手环
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cuffRankSchema = new Schema({
  cuffId: {
    type: String,
    unique: true,
    require: true
  },
  rankNum: Number,
  imgUrl: String,
  des: String, 
  crtTime: {
  	type: Date,
  	default: Date.now
  }
})


const CuffRank = module.exports = mongoose.model('CuffRank', cuffRankSchema)
