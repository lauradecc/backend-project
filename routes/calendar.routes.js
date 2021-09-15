const router = require("express").Router();
const Mood = require("../models/Mood.model");
const { isLoggedIn } = require("./../middleware")



router.get('/', isLoggedIn, (req, res) => res.render('pages/calendar/calendar'))


router.post('/', isLoggedIn, (req, res) => {

  const { date, rating } = req.body
  const owner = req.session.currentUser._id
  let color = ''

  switch(rating) {
    case '1':
      color = '#FF0000';
      break;
    case '2':
      color = '#D07D20';
      break;
    case '3':
      color = '#E3E50D';
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
  
  Mood 
    .create({ date, rating, color, owner})
    .then(() => res.render('pages/home', { successMsg: 'Mood saved successfully' }))
    .catch(err => console.log(err))
});



module.exports = router;
