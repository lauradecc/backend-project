const router = require("express").Router();
const { isLoggedIn } = require("../middleware");
const APIHandler = require("./../services/APIHandler");
const API = new APIHandler;



router.get('/phrase', isLoggedIn, (req, res) => {

  API
    .getPhrase()
    .then(response => res.render("pages/daily/phrase", { response }))
    .catch(err => console.log(err))
})



router.get('/activity', isLoggedIn, (req, res) => {

  API
    .getActivity()
    .then(response => res.render('pages/daily/activity', { response }))
    .catch(err => console.log(err))
})



module.exports = router;
