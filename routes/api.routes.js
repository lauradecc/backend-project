const router = require("express").Router();
const Mood = require("./../models/Mood.model");
const Place = require("./../models/Place.model");

router.get("/places", (req, res) => {

  Place
    .find()
    .then(places => res.json(places))
    .catch((err) => console.log(err));
  });


router.get("/moods", (req, res) => {
  
  const id = req.session.currentUser._id

  Mood
    .find({ owner: id })
    .then(moods => res.json(moods))
    .catch(err => console.log(err))
});



module.exports = router;
