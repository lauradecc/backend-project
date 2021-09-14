const router = require("express").Router();



router.get("/", (req, res) => {
  res.render("pages/index");
});



router.get('/home', (req, res) => res.render('pages/home'))



module.exports = router;
