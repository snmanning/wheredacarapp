const express = require('express');
const router = express.Router();
const User = require('../models/users');

//signup POST
router.post('/signup', async (req, res, next) => {
    const { email, hash, salt } = req.body;
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
router.post('/login', async (req, res, next) => {
    try {
        res.status(200).json({
            msg: 'You are now logged in. Go find yo car'
        })
    } catch (err) {
        next (err);
    }
});
//delete DELETE
router.delete('/users/:email', async (req, res, next) => {
    try {
        res.status(200).json({
            msg: 'Your account has been deleted'
        })
    } catch (err) {
        next(err);
    }
});

module.exports = router;