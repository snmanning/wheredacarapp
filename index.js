const express = require('express');
const server = express();
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/404');
const localStrategy = require('./strategies/local');

//environment variables
dotenv.config();

//passport configuration
passport.use(localStrategy);

//passport initialize
server.use(passport.initialize());

//connect database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

//port
const port = process.env.PORT || 8050;

//routes
const userRouter = require('./router/users');
const locationRouter = require('./router/locations');

//middleware
server.use(helmet());
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

//routers
server.use('/api', userRouter);
server.use('/api', locationRouter);

//404 handler
server.use(notFoundHandler);

//err handler
server.use(errorHandler);

//show time
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});