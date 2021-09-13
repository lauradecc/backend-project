const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("../models/User.model")


// Signup
router.get('/signup', (req, res) => res.render('pages/auth/signup'))
router.post('/signup', (req, res) => {

  const { email, name, userPwd } = req.body

  if (userPwd.length === 0 || email.length === 0) {      
    res.render('pages/auth/signup', { errorMsg: 'Rellena todos los campos' }) // añadir en las vistas
    return
  }

  User
    .findOne({ email })
    .then(user => {

      if (user) {                  
        res.render('pages/auth/signup', { errorMsg: 'Usuario ya registrado' })
        return
      }

      const bcryptSalt = 10
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(userPwd, salt)    

      User
        .create({ email, name, password: hashPass })         
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})



// Login
router.get('/login', (req, res) => res.render('pages/auth/login'))
router.post('/login', (req, res) => {

  const { email, userPwd } = req.body

  if (userPwd.length === 0 || email.length === 0) {     
    res.render('pages/auth/login', { errorMsg: 'Rellena los campos' })
    return
  }

  User
    .findOne({ email })
    .then(user => {

      if (!user) {
        res.render('pages/auth/login', { errorMsg: 'Usuario no reconocido' })
        return
      }

      if (bcrypt.compareSync(userPwd, user.password) === false) {
        res.render('pages/auth/login', { errorMsg: 'Contraseña incorrecta' })
        return
      }

      req.session.currentUser = user
      res.redirect('/home')
    })
    .catch(err => console.log(err))

})


// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'))
})


module.exports = router
