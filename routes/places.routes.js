const router = require("express").Router();
const { isLoggedIn } = require("./../middleware")
const API_KEY = process.env.MAPS_API_KEY



router.get('/', isLoggedIn, (req, res) => res.render('pages/places/places', { API_KEY }))



module.exports = router;
