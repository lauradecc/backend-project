const router = require("express").Router();

const Moment = require('./../models/Moment.model')


//ruta para acceder a la vista index de los momentos
router.get('/', (req, res) => {

    Moment
        .find()
        .then(allMoments => res.render('pages/moments/moments',{ allMoments }))
        .catch(err => console.log(err))
       
})


//ruta para acceder a la vista que crea los momentos
router.get('/create', (req, res) => res.render('pages/moments/create-moment'))


//ruta que recoge los datos del formulario de edición, actualiza los datos y redirige a la lista de momemntos
router.post('/create', (req, res) =>{

    const {date, phrase, lat, lng} = req.body 

    const location = { type: "Point", coordinates: [lat, lng] };

    const owner = req.session.currentUser._id

    Moment
        .create({ date, phrase, location, owner })
        .then(() => res.redirect('/moments'))
        .catch(err => console.log(err))
})


//ruta para acceder a la vista que edita los momentos
router.get('/:id/edit', (req, res) => {
    
    const {id} = req.params
    console.log(req.params)

    
    res.render('pages/moments/edit-moment')})


//ruta que recoge los datos del formulario de edición, actualiza los datos y redirige a la lista de momemntos
router.post('/:id/edit', (req, res) =>{
    

    res.redirect('/moments')})


//ruta que recoge los datos del momento a eliminar, elimina el momento y redirige a la lista de momemntos
router.post('/:id/delete', (req, res) => res.redirect('/moments'))


module.exports = router;