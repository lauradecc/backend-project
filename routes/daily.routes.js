const router = require("express").Router();



router.get('/advice', (req, res) => res.render('pages/daily/advice'))


router.get('/phrase', (req, res) => res.render('pages/daily/phrase'))


router.get('/activity', (req, res) => res.render('pages/daily/activity'))



module.exports = router;
