const router = require("express").Router();
const Mood = require("./../models/Mood.model");
const User = require("./../models/User.model");
const Moment = require('./../models/Moment.model');



router.get("/places", (req, res) => {

  const id = req.session.currentUser._id

  Moment
    .find({ owner: id })
    .populate('place')
    .select('place')
    .then(places => {
      const filteredPlaces = places.filter(moment => moment.place).map(e => e.place)
      res.json(filteredPlaces)
    })
    .catch((err) => console.log(err));
});



router.get("/moods", (req, res) => {

  const id = req.session.currentUser._id

  Mood
    .find({ owner: id })
    .then(moods => res.json(moods))
    .catch(err => console.log(err))
});



router.get("/users", (req, res) => {

  User
    .find({ role: 'USER' })
    .select('email name lastname')
    .then(users => res.json(users))
    .catch((err) => console.log(err));
});



module.exports = router;
