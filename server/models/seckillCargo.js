// 首页--商品秒杀信息
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seckillCargoSchema = new Schema({
  seckillId: {
    type: String,
    unique: true,
    require: true
  },
  seckillEndtime: String,
  seckillRight: String,
  seckillRecords: [{
  	cargoId: {
  		type: String,
  		unique: true,
  		require: true
  	},
  	imgUrl: String,
  	seckillPrice: String,
  	seckillType: Number,
  	seckillTypeName: String,
  	price: String,
  	description: String
  }],
  crtTime: {
  	type: Date,
  	default: Date.now
  }
})


const SeckillCargo = module.exports = mongoose.model('SeckillCargo', seckillCargoSchema)
