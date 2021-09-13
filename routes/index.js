module.exports = app => {

  app.use('/', require('./base.routes.js'))
  app.use('/api', require('./api.routes.js'))
  app.use('/', require('./auth.routes.js'))
  app.use('/', require('./user.routes.js'))
  app.use('/moderators', require('./moderators.routes.js'))
  
}