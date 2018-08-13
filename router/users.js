const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');
const auth = require('../middleware/auth')

//signup POST
router.post('/signup', async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) {
        next({ msg: 'You have not submitted an email and password', status: 400 });
    }
    try {
        const user = new User({ email });
        user.setPassword(password);
        await user.save();
        res.redirect('/login');
    } catch (err) {
        next(err);
    }
});
//logout GET
router.get('/logout', async (req, res, next) => {
    try {
        res.status(200).json({
            msg: 'You have logged out'
        })
    } catch (err) {
       return next(err);
    }
});
//login POST
router.post('/login',
             passport.authenticate('local', { failureRedirect: '/login', session: false }), 
             async (req, res, next) => {
                if(req.isAuthenticated()) {
                    res.status(200).json({
                        token: req.authInfo.token
                    })
                } else {
                    return next({ msg: 'Either your username or password is incorrect', status: 400 });
                }
});

//TODO: Still need to implement and fix this
//delete DELETE
router.delete('/users/:email', auth, async (req, res, next) => {
    //you should check that req.email is the same as req.params.email
    //if they are, delete
    //if not then error
    try {
        res.status(200).json({
            msg: 'Your account has been deleted'
        })
    } catch (err) {
        return next(err);
    }
});

module.exports = router;