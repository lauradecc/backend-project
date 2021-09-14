module.exports = app => {

  app.use('/', require('./base.routes.js'))
  app.use('/', require('./auth.routes.js'))
  app.use('/my-profile', require('./user.routes.js'))
  app.use('/api', require('./api.routes.js'))
  app.use('/moderators', require('./moderators.routes.js'))
  app.use('/moments', require('./moments.routes.js'))
  app.use('/community-advice', require('./community-advice.routes.js'))
  app.use('/calendar', require('./calendar.routes.js'))
  app.use('/daily', require('./daily.routes.js'))
  app.use('/places', require('./places.routes.js'))
  
}