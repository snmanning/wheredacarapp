//allows us to take and use a user name and password to authenticate

const LocalStrategy = require('passport-local').Strategy;
//const { Strategy as LocalStrategy } = require('passport-local');  NEW SYNTAX
const User = require('../models/users');

const configuration = {
    usernameField: 'email'
};
const handler = async function localHandler(email, password, done){
    try {
        const user = await User.find({ email: email });
        if(!user) {
            done(null, false);
        }
        if(user.password !== password) { //this will need to be adjusted - we're using hash
            done(null, false);
        }
        //this may also change
        done (null, user);
    } catch (error) {
        done(error);
    }
};
const strategy = new LocalStrategy(configuration, handler);

module.exports = strategy;
