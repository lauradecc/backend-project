module.exports = app => {

  app.use('/', require('./base.routes.js'))
  app.use('/api', require('./api.routes.js'))
  app.use('/', require('./auth.routes.js'))
  app.use('/', require('./user.routes.js'))
  app.use('/moderators', require('./moderators.routes.js'))
<<<<<<< HEAD
  app.use('/moments', require('./moments.routes.js'))
=======
  app.use('/community-advice', require('./community-advice.routes.js'))
  
>>>>>>> c858bb1b4470565dc82fecef750f45f2e7a2dd6f
}