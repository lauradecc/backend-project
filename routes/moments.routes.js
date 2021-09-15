const router = require("express").Router();
const Moment = require('./../models/Moment.model')
const Place = require('./../models/Place.model')
const { isLoggedIn, checkId } = require("./../middleware")
const { formatDate, isBlank } = require('./../utils/index')



router.get('/', isLoggedIn, (req, res) => {

    Moment
        .find()
        .populate('place')
        .then(moments => res.render('pages/moments/moments', { moments }))
        .catch(err => console.log(err)) 
})



router.get('/create', isLoggedIn, (req, res) => res.render('pages/moments/create-moment'))



router.post('/create', isLoggedIn, (req, res) => {

    const { date, phrase, name, lat, lng } = req.body 
    const location = { type: "Point", coordinates: [ lat, lng ] }
    const owner = req.session.currentUser._id

    if (isBlank(date) || isBlank(phrase)) {
        res.render('pages/moments/create-moment', { errorMsg: 'Fill Date and Moment' })
        return
    }

    // TO_DO: Mejorable????
    if ((!isBlank(lat) && (isBlank(lng) || isBlank(name))) ||
        (!isBlank(lng) && (isBlank(lat) || isBlank(name))) ||
        (!isBlank(name) && (isBlank(lat) || isBlank(lng)))) {
        res.render('pages/moments/create-moment', { errorMsg: 'Must fill Place Name, Latitude and Longitud to save a place in a Moment' })
        return
    }
    
    if (isBlank(lat) && isBlank(lng) && isBlank(name)) {
        Moment
            .create({ date, phrase, owner })
            .then(() => res.redirect('/moments'))
            .catch(err => console.log(err))
        return
    }

    Place.create({ name, location })
    .then(newPlace => {

        const place = newPlace._id

        Moment
            .create({ date, phrase, place, owner })
            .then(() => res.redirect('/moments'))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})



router.get('/:id/edit', isLoggedIn, checkId, (req, res) => {

    const { id } = req.params

    Moment
        .findById(id)
        .populate('place')
        .then(moment => {
            
            const { date } = moment
            const dateISO = formatDate(date)

            res.render('pages/moments/edit-moment', { moment, dateISO })
        })
        .catch(err => console.log(err))
})



router.post('/:id/edit', isLoggedIn, checkId, (req, res) => {

    const { id } = req.params
    const { date, phrase, name, lat, lng } = req.body

    Moment
        .findByIdAndUpdate(id, { date, phrase, name, lat, lng }, { new: true })
        .then(() => res.redirect('/moments'))
        .catch(err => console.log(err))
})



router.post('/:id/delete', isLoggedIn, checkId, (req, res) =>{
    
    const { id } = req.params
   
    Moment
        .findByIdAndRemove(id)
        .then(() => res.redirect('/moments'))
        .catch(err => console.log(err))
})



module.exports = router;
