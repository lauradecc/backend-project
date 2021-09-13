const router = require("express").Router();
const Mood = require("../models/Mood.model");

router.get("/moods", (req, res, next) => {
  
  Mood
    .find()
    .then(moods => res.json(moods))
    .catch(err => console.log(err))
});

module.exports = router;