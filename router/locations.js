const express = require('express');
const router = express.Router();
const Location = require('../models/location');
const auth = require('../middleware/auth');

router.use(auth); //protect all of these routes

//new location POST
router.post('/locations', async (req, res, next) => {
    try {
        res.status(201).json({
            msg: 'You have saved where you parked'
        })
    } catch (err) {
        next(err);
    }
});
//delete old location DELETE
router.delete('/locations/:email', async (req, res, next) => {
    try {
        res.status(200).json({
            msg: 'You have deleted a location',
            foundCar
        })
    } catch (err) {
        next (err);
    }
});
//retrieve the last location GET
router.get('/locations/:email', async (req, res, next) => {
    try {
        res.status(200).json({
            msg: 'Here is where you parked',
            whereDaCar
        })
    } catch (err) {
        next(err);
    }
});

module.exports = router;