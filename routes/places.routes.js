const router = require("express").Router();



router.get('/places', (req, res) => res.render('pages/places/places'))



module.exports = router;
