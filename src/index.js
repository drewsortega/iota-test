'use strict';

//ensure env variables
process.env.PORT = process.env.PORT || 3000;

//set up basic dependencies
const  express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

var server = app.listen(process.env.PORT, () => {
    app.use('/iota', routes.iota);
});

module.exports = server;