const router = require("express").Router();
const Advice = require("../models/Advice.model")
const { isLoggedIn, checkRoles} = require("./../middleware")   // usar checkroles



router.get("/", isLoggedIn, (req, res, next) => {
  
  Advice
    .find({ hasBeenAccepted: true })
    .select('phrase rating') // TO_DO rating? No lo estamos pasando, aún no está creado
    .then(advice => res.render('pages/community-advice/advice', { advice }))
    .catch(err => console.log(err))
});



module.exports = router;
