//allows us to take and use a user name and password to authenticate

const LocalStrategy = require('passport-local').Strategy;
//const { Strategy as LocalStrategy } = require('passport-local');  NEW SYNTAX
const User = require('../models/users');

const configuration = {
    usernameField: 'email'
};
const handler = async function localHandler(email, password, done) {
    User.findOne({ email: email })
        .then(user => {
            if(!user) {
                return done(null, false);
            }
            if(!user.isValidPassword(password)) {
                return done(null, false);
            }
            const token = user.generateJWT();
            return done (null, user, { token });
        })
         .catch(done);    
    };

const strategy = new LocalStrategy(configuration, handler);

module.exports = strategy;
