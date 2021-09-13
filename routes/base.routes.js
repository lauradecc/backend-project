const router = require("express").Router();

const Mood = require("../models/Mood.model");


router.get("/", (req, res, next) => {
  res.render("pages/index");
});

// For calendar testing purposes
router.post("/", (req, res, next) => {

  const { date, rating } = req.body
  const allDay = true // solo para un día sería esto
  const display = 'background'
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
    .create({ date, rating, allDay, display, color})
    .then(newMood => {
      console.log(newMood)
      res.redirect('/')
    })
    .catch(err => console.log(err))

});


router.get('/home',(req,res)=>res.render('pages/app/home'))


module.exports = router;
