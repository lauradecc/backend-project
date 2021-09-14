const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("../models/User.model")
const { isBlank } = require("./../utils")



// Sign up
router.get('/signup', (req, res) => res.render('pages/auth/signup'))
router.post('/signup', (req, res) => {

  const { email, name, lastname, userPwd } = req.body

  if (isBlank(name) || isBlank(lastname) || isBlank(email) || isBlank(userPwd)) { 
    res.render('pages/auth/signup', { email, name, lastname, errorMsg: 'Fill in all the fields' }) // añadir en las vistas
    return
  }

  User
    .findOne({ email })
    .then(user => {

      if (user) {                  
        res.render('pages/auth/signup', { errorMsg: 'User already registered' })
        return
      }

      const bcryptSalt = 10
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(userPwd, salt)    

      User
        .create({ email, name, lastname, password: hashPass })         
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})



// Log in
router.get('/login', (req, res) => res.render('pages/auth/login'))
router.post('/login', (req, res) => {

  const { email, userPwd } = req.body

  if (userPwd.length === 0 || email.length === 0) {     
    res.render('pages/auth/login', { errorMsg: 'Fill in all the fields' })
    return
  }

  User
    .findOne({ email })
    .then(user => {

      if (!user) {
        res.render('pages/auth/login', { errorMsg: 'Unrecognized user' })
        return
      }

      if (bcrypt.compareSync(userPwd, user.password) === false) {
        res.render('pages/auth/login', { errorMsg: 'Incorrect password' })
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
