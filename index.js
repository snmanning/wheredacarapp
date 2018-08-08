const express = require('express');
const server = express();
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//environment variables
dotenv.config();

//connect database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

//port
const port = process.env.PORT || 8050;

//routes
const carRouter = require('./router/cars');

//middleware
server.use(helmet());
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParsesr.urlencoded({extended:true}));

//routers
server.use();

//404 handler
server.use();

//err handler
server.use();

//show time
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});