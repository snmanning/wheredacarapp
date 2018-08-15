const express = require('express');
const router = express.Router();
const Location = require('../models/location');
const auth = require('../middleware/auth');

router.use(auth); //protect all of these routes

//new location POST
router.post('/locations', async (req, res, next) => {
    const { lat, lon } = req.body;
    if(!lat || lon) {
        next({ msg: 'Need to supply lat and lon', status: 400});
    }
    try {
        const location = new Location({ lat, lon, user: req.id});
        await location.save();
        res.status(201).json({
            msg: 'You have saved where you parked'
        })
    } catch (err) {
        next(err);
    }
});

//delete old location DELETE
router.delete('/locations', async (req, res, next) => {
    try {
        await Location.findOneAndRemove({ user: req.id });
        res.status(200).json({
            msg: 'You have deleted a location',
        });
    } catch (err) {
        next (err);
    }
});

//retrieve the last location GET
router.get('/locations', async (req, res, next) => {
    try {
        const location = await Location.findOne({ user: req.id });
        res.status(200).json({
            location
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;