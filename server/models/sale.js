// 首页--促销信息
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
  saleId: {
    type: String,
    unique: true,
    require: true
  },
  saleCont: String,
  crtTime: Date
})


const Sale = module.exports = mongoose.model('Sale', saleSchema)
