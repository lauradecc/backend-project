const router = require("express").Router();
const bcrypt = require('bcrypt')
const { userIsModerator } = require("./../utils") // utilizar
const User = require("../models/User.model");
const { isLoggedIn, checkId, checkRoles } = require("./../middleware")



router.get('/', isLoggedIn, checkRoles('ADMIN, MODERATOR'), (req, res) => {

  //const isModerator = userIsModerator(req.session.currentUser)

  User
    .find({ role: 'MODERATOR' })
    .then(moderators => res.render('pages/moderators/moderators', { moderators }))
    .catch(err => console.log(err))
});



router.get('/:id/edit', isLoggedIn, checkId, checkRoles('ADMIN'), (req, res) => {

  const { id } = req.params

  User
    .findById(id)
    .select('name lastname email role')
    .then(moderator => res.render('pages/moderators/edit-moderator', moderator))
    .catch(err => console.log(err))
})


router.post('/:id/edit', isLoggedIn, checkId, checkRoles('ADMIN'), (req, res) => {

  const { id } = req.params
  const { name, lastname, email, role } = req.body

  User
    .findByIdAndUpdate(id, { name, lastname, email, role }, { new: true })
    .then(() => res.redirect('/moderators'))
    .catch(err => console.log(err))
})



router.post('/:id/delete', isLoggedIn, checkId, checkRoles('ADMIN'), (req, res) => {

  const { id } = req.params

  //TO_DO delete del user, actualmente active to false,
  //en ese caso gestionar signup y login, si no eliminar del todo

  // User
  //   .findByIdAndUpdate(id, { active: false })
  //   .then(() => res.redirect('/moderators'))
  //   .catch(err => console.log(err))

  User
    .findByIdAndRemove(id)
    .then(() => res.redirect('/moderators'))
    .catch(err => console.log(err))
})



// TO_DO: Crear nuevo moderador es repetir bastante código (sign up)
router.get('/moderators/create', isLoggedIn, checkRoles('ADMIN'), (req, res) => {

  const { name, lastname, email, moderatorPwd } = req.body

  // User
  //   .create({ name, lastname, email })
})


router.post('/moderators/create', isLoggedIn, checkRoles('ADMIN'), (req, res) => {

})



module.exports = router;
