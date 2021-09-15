const router = require("express").Router();
const { isLoggedIn } = require("./../middleware")
const APIHandler = require("./../services/APIHandler");
const API = new APIHandler;



router.get("/", (req, res) => {

  API
    .getPhrase()
    .then(response => res.render('pages/index', { response }))
    .catch(err => console.log(err))
});



router.get('/home', isLoggedIn, (req, res) => res.render('pages/home'))



module.exports = router;
