const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');

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
        next(err);
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
                    next({ msg: 'Either your username or password is incorrect', status: 400 });
                }
});

const jwt = require('jsonwebtoken');
function auth(req, res, next) {
    const tokenWithBearer = req.headers.authorization;
    if(!tokenWithBearer) {
        next({msg: 'Unauthorized', status: 401});
    }
    const isValid = tokenWithBearer.includes('Bearer');
    if(!isValid) {
        next({msg: 'Unauthorized', status: 401});
    }
    //this removes the 'bearer' part leaving just the token
    const token = tokenWithBearer.slice(7)
    try{
        console.log(token);
        payload = jwt.verify(token, process.env.SECRET);
        console.log(payload);
        req.email = payload.email;
        req.id = payload.id
        next();
    } catch (err) {
        next({msg: 'Unauthorized', status: 401});
    }
}

//delete DELETE
router.delete('/users/:email', auth, async (req, res, next) => {
    try {
        res.status(200).json({
            msg: 'Your account has been deleted'
        })
    } catch (err) {
        next(err);
    }
});

module.exports = router;