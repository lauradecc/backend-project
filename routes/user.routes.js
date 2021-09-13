const router = require("express").Router()

const { isLoggedIn } = require("./../middleware")


// User's profile
router.get('/my-profile', isLoggedIn, (req, res) => {

    console.log(req.session.currentUser)
    res.render('/pages/user/profile', { user: req.session.currentUser })
})


// Edit user's profile: rendering
router.get('/edit-profile', isLoggedIn, (req, res) => {
    res.render('user/edit-profile', { user: req.session.currentUser })
})


// Edit user's profile: management
router.post('/edit-profile', isLoggedIn, (req, res) => {

    const user = req.session.currentUser
    const { username, name, profileImg, description } = req.body
    
    User
        .findByIdAndUpdate(user._id, { username, name, profileImg, description }, { new: true })
        .then(updatedUser => {
            req.session.currentUser = updatedUser
            res.redirect('/my-profile')
        })
        .catch(err => console.log(err))
})


// Delete user's profile
router.post('/delete-profile', isLoggedIn, (req, res) => {

    const user = req.session.currentUser
    
    User
    .findByIdAndRemove(user._id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})


module.exports = router