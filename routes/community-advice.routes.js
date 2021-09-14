const router = require("express").Router();
const Advice = require("../models/Advice.model")
const { isBlank } = require("./../utils")
const { isLoggedIn, checkRoles} = require("./../middleware")   // usar checkroles



router.get("/", isLoggedIn, (req, res) => {
  
  Advice
    .find({ hasBeenAccepted: true })
    .select('phrase rating') // TO_DO rating? No lo estamos pasando, aún no está creado
    .then(advice => res.render('pages/community-advice/advice', { advice }))
    .catch(err => console.log(err))
});



router.post("/", isLoggedIn, (req, res) => {

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
    .then(() => res.redirect('/community-advice'))
    .catch(err => console.log(err))
});



router.get("/control", isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  Advice
    .find({ hasBeenAccepted: false, hasBeenRejected: false })
    .select('phrase')
    .then(advice => res.render('pages/community-advice/control', { advice }))
    .catch(err => console.log(err))
});



router.post("/control/:id", isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  const { id } = req.params
  const { hasBeenAccepted, hasBeenRejected } = req.body
  console.log(req.body)
  
  Advice
    .findByIdAndUpdate(id, { hasBeenAccepted, hasBeenRejected }, { new: true })
    .then(() => res.redirect('/community-advice/control'))
    .catch(err => console.log(err))  
});



router.get("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  const { id } = req.params

  Advice
    .findById(id)
    .select('phrase')
    .then(advice => res.render('pages/community-advice/edit-advice', advice))
    .catch(err => console.log(err))
});



router.post("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

  const { id } = req.params
  const { phrase } = req.body

  Advice
    .findByIdAndUpdate(id, { phrase })
    .then(() => res.redirect('/community-advice/control'))
    .catch(err => console.log(err))
});



module.exports = router;
