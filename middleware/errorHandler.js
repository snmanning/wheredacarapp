module.exports = function errorHandler(err, req, res, next) {
    if(err.name === 'ValidationError') {
        res.status().json({
            msg: err.message
        });
    } else {
        res.status(500).json({
            msg: 'Please check your request and try again'
        });
    }
};