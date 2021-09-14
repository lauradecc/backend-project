const router = require("express").Router();
const Moment = require('./../models/Moment.model')
const Place = require('./../models/Place.model')
const { isLoggedIn, checkId } = require("./../middleware")
const { formatDate, isBlank } = require('./../utils/index')


// Hay que cambiar el formato de las fechas
// Mostrar solo los momentos del usuario activo!!!!
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

    /* obligatorio name place? (is required en model, pero no es obligatorio crear lugar)
    esto hace que haya que poner nombre de lugar, pero al no haber coordenadas no puede crearse un lugar
    por tanto, no sale nada después aunque se meta, porque no se guarda
    podría meterse en nombre del sitio en el modelo de moment... */
    if (isBlank(date) || isBlank(phrase) || isBlank(name)) {
        res.render('pages/moments/create-moment', { errorMsg: 'Fill Date, Phrase and Place Name' })
        return
    }

    /* mejorable? esto y lo de debajo. Si no hay latitud y longitud, no puede crearse lugar, 
    lo de abajo no serviría */
    if (isBlank(lat) || isBlank(lng)) {
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


// FALTA?????????
router.post('/:id/edit', isLoggedIn, checkId, (req, res) => res.redirect('/moments'))



router.post('/:id/delete', isLoggedIn, checkId, (req, res) =>{
    
    const { id } = req.params
   
    Moment
        .findByIdAndRemove(id)
        .then(() => res.redirect('/moments'))
        .catch(err => console.log(err))
})



module.exports = router;
