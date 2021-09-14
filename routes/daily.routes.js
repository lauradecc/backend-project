const router = require("express").Router();
const { isLoggedIn } = require("./../middleware")



router.get('/advice', isLoggedIn, (req, res) => res.render('pages/daily/advice'))


router.get('/phrase', isLoggedIn, (req, res) => res.render('pages/daily/phrase'))


router.get('/activity', isLoggedIn, (req, res) => res.render('pages/daily/activity'))



module.exports = router;
