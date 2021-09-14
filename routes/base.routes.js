const router = require("express").Router();
const { isLoggedIn } = require("./../middleware")
const { getDailyPhrase } = require("./../utils") // si no lo usamos hay que meter axios



router.get("/", (req, res) => {

  getDailyPhrase()
    .then(response => res.render('pages/index', { response }))
    .catch(err => console.log(err))
});



router.get('/home', isLoggedIn, (req, res) => res.render('pages/home'))



module.exports = router;
