const router = require("express").Router();
const Advice = require("../models/Advice.model")
const { isBlank } = require("./../utils")
const { isLoggedIn, checkRoles } = require("./../middleware")



router.get('/', isLoggedIn, (req, res) => {

  Advice
    .find({ hasBeenAccepted: true })
    .select('phrase rating') // TO_DO rating? No lo estamos pasando, aún no está creado
    .then(advice => res.render('pages/community-advice/advice', { advice }))
    .catch(err => console.log(err))
});



router.post('/', isLoggedIn, (req, res) => {

  const { phrase } = req.body
  const owner = req.session.currentUser._id

  if (isBlank(phrase)) {

    Advice            // mismo código que en get (arriba)
      .find({ hasBeenAccepted: true })
      .select('phrase rating') // TO_DO rating? No lo estamos pasando, aún no está creado
      .then(advice => res.render('pages/community-advice/advice', { advice, errorMsg: 'Please provide an advice' }))
      .catch(err => console.log(err))

    return
  }

  Advice
    .create({ phrase, owner })
    .then(() => Advice.find({ hasBeenAccepted: true }).select('phrase rating'))
    .then(advice => res.render('pages/community-advice/advice', { advice, successMsg: 'Advice successfully sent to validate' }))
    .catch(err => console.log(err))
});



router.get('/control', isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  Advice
    .find({ hasBeenAccepted: false, hasBeenRejected: false })
    .select('phrase')
    .then(advice => res.render('pages/community-advice/control', { advice }))
    .catch(err => console.log(err))
});



router.post('/control/:id', isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  const { id } = req.params
  const { hasBeenAccepted, hasBeenRejected } = req.body
  console.log(req.body)

  Advice
    .findByIdAndUpdate(id, { hasBeenAccepted, hasBeenRejected }, { new: true })
    .then(() => res.redirect('/community-advice/control'))
    .catch(err => console.log(err))
});



router.get('/:id/edit', isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  const { id } = req.params

  Advice
    .findById(id)
    .select('phrase')
    .then(advice => res.render('pages/community-advice/edit-advice', advice))
    .catch(err => console.log(err))
});



router.post('/:id/edit', isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  const { id } = req.params
  const { phrase } = req.body

  Advice
    .findByIdAndUpdate(id, { phrase })
    .then(() => res.redirect('/community-advice/control'))
    .catch(err => console.log(err))
});



router.post('/delete', isLoggedIn, (req, res) => {

  const id = req.session.currentUser

  Advice
    .remove({ owner: id, hasBeenRejected: true })
    .then(() => res.redirect('/my-profile'))
    .catch(err => console.log(err))
});



router.post('/:id/vote', isLoggedIn, (req, res) => {

  const { id } = req.params
  const { rating } = req.body
  
  Advice
    .findByIdAndUpdate(id, { $push: { rating }}, { new: true })
    .then(() => Advice.find({ hasBeenAccepted: true }).select('phrase rating'))
    .then(advice => res.render('pages/community-advice/advice', { advice, successMsg: 'Successfully voted' }))
    .catch(err => console.log(err))
})



module.exports = router;
