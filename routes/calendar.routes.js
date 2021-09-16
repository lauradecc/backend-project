const router = require("express").Router();
const Mood = require("../models/Mood.model");
const { isLoggedIn } = require("./../middleware")



router.get('/', isLoggedIn, (req, res) => res.render('pages/calendar/calendar'))



router.post('/', isLoggedIn, (req, res) => {

  const { date, rating } = req.body
  const owner = req.session.currentUser._id
  let color = ''

  switch (rating) {
    case '1':
      color = '#FF0000';
      break;
    case '2':
      color = '#FF741E';
      break;
    case '3':
      color = '#1EA8FF';
      break;
    case '4':
      color = '#8DE50D';
      break;
    case '5':
      color = '#29B618';
      break;
    default:
      color = '#FFFF';
      break;
  }

  let moodAlreadyExists = false


  Mood
    .find({ owner, date })
    .then(mood => moodAlreadyExists = mood.length === 1)
    .then(() => Mood.updateOne({ owner, date }, { date, rating, color, owner }, { new: true, upsert: true, setDefaultsOnInsert: true }))
    .then(() => {
      if (!moodAlreadyExists) res.render('pages/home', { successMsg: 'Mood saved successfully' })
      else res.render('pages/home', { successMsg: 'Mood updated successfully' })
    })
    .catch(err => console.log(err))
});



module.exports = router;
