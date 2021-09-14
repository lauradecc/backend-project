const router = require("express").Router();
const { isLoggedIn } = require("./../middleware")
const { getDaily } = require("./../utils") // si no lo usamos hay que meter axios



router.get("/", (req, res) => {

  getDaily('https://inspiration.goprogram.ai/')
    .then(response => res.render('pages/index', { response }))
    .catch(err => console.log(err))
});



router.get('/home', isLoggedIn, (req, res) => res.render('pages/home'))



module.exports = router;
