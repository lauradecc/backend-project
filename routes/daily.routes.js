const router = require("express").Router();
const { isLoggedIn } = require("../middleware")
const axios = require('axios')
const { getDailyPhrase } = require("./../utils") // dejamos este?


// Se ha caído el servidor de la API, volveremos a mirar
router.get('/advice', isLoggedIn, (req, res) => res.render('pages/daily/advice'))



router.get('/phrase', isLoggedIn, (req, res) => {

    getDailyPhrase()
        .then(response => res.render('pages/daily/phrase', { response }))
        .catch(err => console.log(err))


    // axios
    //     .get('https://inspiration.goprogram.ai/')
    //     .then(response => res.render('pages/daily/phrase', { response }))
    //     .catch(err => console.log(err))
})



router.get('/activity', isLoggedIn, (req, res) => {

    axios
        .get('http://www.boredapi.com/api/activity/')
        .then(response => res.render('pages/daily/activity', { response }))
        .catch(err => console.log(err))
})



module.exports = router;
