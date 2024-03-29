const router = require("express").Router()
const User = require("../models/User.model")
const Advice = require("../models/Advice.model")
const { isLoggedIn } = require("./../middleware")
const { isBlank } = require("./../utils")



router.get('/', isLoggedIn, (req, res) => {

  const user = req.session.currentUser

  Advice
    .find({ owner: user._id })
    .select('phrase hasBeenAccepted hasBeenRejected')
    .then(advice => {
      let thereAreRejected = false
      advice.forEach(advice => advice.hasBeenRejected ? thereAreRejected = true : null)
      res.render('pages/user/profile', { user, advice, thereAreRejected })
    })
    .catch(err => console.log(err))
})



router.get('/edit', isLoggedIn, (req, res) => {

  const user = req.session.currentUser

  res.render('pages/user/edit-profile', user)
})



router.post('/edit', isLoggedIn, (req, res) => {

  const user = req.session.currentUser
  const { name, lastname, email } = req.body

  if (isBlank(name) || isBlank(lastname) || isBlank(email)) {
    res.render('pages/user/edit-profile', { name, lastname, email, errorMsg: 'Fill in all the fields' })
    return
  }

  User
    .findByIdAndUpdate(user._id, { name, lastname, email }, { new: true })
    .then(updatedUser => {
      req.session.currentUser = updatedUser
      res.redirect('/my-profile')
    })
    .catch(err => console.log(err))
})



router.post('/delete', isLoggedIn, (req, res) => {

  const user = req.session.currentUser

  User
    .findByIdAndRemove(user._id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})



module.exports = router
