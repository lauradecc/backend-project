const router = require("express").Router();
const bcrypt = require('bcrypt')
const { isBlank, userIsAdmin } = require("./../utils")
const { isLoggedIn, checkId, checkRoles } = require("./../middleware")
const User = require("../models/User.model");
const APIHandler = require("./../services/APIHandler");
const API = new APIHandler;



router.get('/', isLoggedIn, checkRoles('ADMIN', 'MODERATOR'), (req, res) => {

	const isAdmin = userIsAdmin(req.session.currentUser)
	const users = API.getUsersRoleUSER()
	const moderators = User.find({ role: 'MODERATOR' }).select('name lastname email')

	Promise.all([users, moderators]).then(data => {

		const [users, moderators] = data

		res.render('pages/moderators/moderators', { users, moderators, isAdmin })
	})
		.catch(err => console.log(err))
});



router.get('/:id/edit', isLoggedIn, checkId, checkRoles('ADMIN'), (req, res) => {

	const { id } = req.params

	User
		.findById(id)
		.select('name lastname email role')
		.then(moderator => res.render('pages/moderators/edit-moderator', moderator))
		.catch(err => console.log(err))
})



router.post('/:id/edit', isLoggedIn, checkId, checkRoles('ADMIN'), (req, res) => {

	const { id } = req.params
	const { name, lastname, email, role } = req.body

	if (isBlank(name) || isBlank(lastname) || isBlank(email)) {
		res.render('pages/moderators/edit-moderator', { name, lastname, email, errorMsg: 'Fill in all the fields' })
		return
	}

	User
		.findByIdAndUpdate(id, { name, lastname, email, role }, { new: true })
		.then(() => res.redirect('/moderators'))
		.catch(err => console.log(err))
})



router.post('/:id/delete', isLoggedIn, checkId, checkRoles('ADMIN'), (req, res) => {

	const { id } = req.params

	User
		.findByIdAndRemove(id)
		.then(() => res.redirect('/moderators'))
		.catch(err => console.log(err))
})



module.exports = router;
