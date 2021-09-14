const router = require("express").Router();
const { isLoggedIn } = require("./../middleware")



router.get('/places', isLoggedIn, (req, res) => res.render('pages/places/places'))



module.exports = router;
