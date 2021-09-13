const router = require("express").Router();
const { userIsModerator } = require("./../utils")
const User = require("../models/User.model");


router.get('/', (req, res, next) => {
  
  User
    .find({ role: 'MODERATOR' })
    .then(moderators => res.render('pages/moderators/moderators', { moderators }))
    .catch(err => console.log(err))
});


router.get('/:id/edit', (req, res) => {

  const { id } = req.params
  const isModerator = userIsModerator(req.session.currentUser)

  User
    .findById(id) // añadir select para traer solo los datos que queremos
    .then(moderator => console.log('hello'))
})


module.exports = router;