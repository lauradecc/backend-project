const router = require("express").Router();
const { isLoggedIn } = require("./../middleware")



router.get("/", (req, res) => {
  res.render("pages/index");
});



router.get('/home', isLoggedIn, (req, res) => res.render('pages/home'))



module.exports = router;
