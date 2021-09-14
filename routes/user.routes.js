const router = require("express").Router()
const { isLoggedIn } = require("./../middleware")
const User = require("../models/User.model")
const { isBlank } = require("./../utils")



router.get('/', isLoggedIn, (req, res) => {

    res.render('pages/user/profile', { user: req.session.currentUser })
})



router.get('/edit', isLoggedIn, (req, res) => {

    const user = req.session.currentUser

    res.render('pages/user/edit-profile', user )
})



router.post('/edit', isLoggedIn, (req, res) => {

    const user = req.session.currentUser
    const { name, lastname, email } = req.body

    if (isBlank(name) || isBlank(lastname) || isBlank(email)) { 
       res.render('pages/user/edit-profile', { name, lastname, email, errorMsg: 'Fill in all the fields' })
       return
    }
    
    User
        .findByIdAndUpdate(user._id, { name, lastname, email }, { new: true })
        .then(updatedUser => {
            req.session.currentUser = updatedUser
            res.redirect('/my-profile')
        })
        .catch(err => console.log(err))
})



router.post('/delete', isLoggedIn, (req, res) => {

    const user = req.session.currentUser
    
    // TO_DO delete user o active false???
    User
    .findByIdAndRemove(user._id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})



module.exports = router
