module.exports = app => {
  app.use('/api', require('./login'))
  app.use('/api', require('./home.sale'))
  app.use('/api', require('./home.seckill'))
  app.use('/api', require('./home.cuffRank'))
}
