const router = require("express").Router();

const Moment = require('./../models/Moment.model')


//ruta para acceder a la vista index de los momentos
router.get('/', (req, res) => res.render('pages/app/moments/moments'))


//ruta para acceder a la vista que crea los momentos
router.get('/create', (req, res) => res.render('pages/app/moments/create-moment'))


//ruta que recoge los datos del formulario de edición, actualiza los datos y redirige a la lista de momemntos
router.post('/create', (req, res) => res.redirect('/moments'))


//ruta para acceder a la vista que edita los momentos
router.get('/:id/edit', (req, res) => res.render('pages/app/moments/edit-moment'))


//ruta que recoge los datos del formulario de edición, actualiza los datos y redirige a la lista de momemntos
router.post('/:id/edit', (req, res) => res.redirect('/moments'))


//ruta que recoge los datos del momento a eliminar, elimina el momento y redirige a la lista de momemntos
router.post('/:id/delete', (req, res) => res.redirect('/moments'))


module.exports = router;