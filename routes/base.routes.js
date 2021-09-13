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

// Ruta para acceder al home del usuario
router.get('/home', (req, res) => res.render('pages/app/home'))

//ruta para acceder a la vista que te dice la frase del dia
router.get('/daily-phrase', (req, res) => res.render('pages/app/daily-phrase'))

//ruta para acceder a la vista que te ofrece actividades para realizar cada dia
router.get('/activity', (req, res) => res.render('pages/app/activity'))

// ruta para acceder a la vista que te ofrece un consejo diario
router.get('/daily-advice', (req, res) => res.render('pages/app/daily-advice'))

// ruta para acceder a la vista que muestra tus lugares creados
router.get('/places', (req, res) => res.render('pages/app/places'))


router.get('/calendar', (req, res) => res.render('pages/app/calendar'))


module.exports = router;
