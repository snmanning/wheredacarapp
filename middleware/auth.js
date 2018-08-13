const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    const tokenWithBearer = req.headers.authorization;
    if(!tokenWithBearer) {
        return next({msg: 'Unauthorized', status: 401});
    }
    const isValid = tokenWithBearer.includes('Bearer');
    if(!isValid) {
        return next({msg: 'Unauthorized', status: 401});
    }
    //this removes the 'bearer' part leaving just the token
    const token = tokenWithBearer.slice(7)
    try{
        payload = jwt.verify(token, process.env.SECRET);
        req.email = payload.email;
        req.id = payload.id
        return next();
    } catch (err) {
        return next({msg: 'Unauthorized', status: 401});
    }
}