const router = require("express").Router();
const Moment = require('./../models/Moment.model')
const Place = require('./../models/Place.model')
const { isLoggedIn, checkId } = require("./../middleware")
const { formatDate } = require('./../utils/index')

//ruta para acceder a la vista index de los momentos
router.get('/', isLoggedIn, (req, res) => {


    Moment
        .find()
        .populate('place')
        .then(allMoments =>{
            console.log('esto es allmoment',allMoments)
            res.render('pages/moments/moments',{ allMoments })
        })
        .catch(err => console.log(err))
       
})


//ruta para acceder a la vista que crea los momentos
router.get('/create', isLoggedIn, (req, res) => res.render('pages/moments/create-moment'))


//ruta que recoge los datos del formulario de edición, actualiza los datos y redirige a la lista de momemntos
router.post('/create', isLoggedIn, (req, res) =>{


    const { date, phrase, name, lat, lng } = req.body 
    const location = { type: "Point", coordinates: [ lat, lng ] }
    const owner = req.session.currentUser._id


    Place.create({ name, location })
    .then(placeCreated => {

       let place = placeCreated._id
       console.log('esto es placeCreated id',place)

            Moment
                .create({ date, phrase, place, owner })
                .then(() => res.redirect('/moments'))
                .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

})


//ruta para acceder a la vista que edita los momentos
router.get('/:id/edit', isLoggedIn, checkId, (req, res) => {

    const {id} = req.params

    Moment
        .findById(id)
        .populate('place')
        .then(moment =>{
            
             const { date } = moment

            const dateISO = formatDate(date)

            res.render('pages/moments/edit-moment',{ moment, dateISO })

        })
        .catch(err => console.log(err))

})


//ruta que recoge los datos del formulario de edición, actualiza los datos y redirige a la lista de momemntos
router.post('/:id/edit', isLoggedIn, checkId, (req, res) => res.redirect('/moments'))


//ruta que recoge los datos del momento a eliminar, elimina el momento y redirige a la lista de momemntos
router.post('/:id/delete', isLoggedIn, checkId, (req, res) =>{
    
    const {id} = req.params
   
    Moment
        .findByIdAndDelete(id)
        .then(() => res.redirect('/moments'))
        .catch(err => console.log(err))

})



module.exports = router;
