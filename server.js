process.env.NODE_ENV = process.env.NODE_ENV || 'development';
'use strict';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');
//express = require('./config/passport');


var db = mongoose(),
    app = express();
//passport = passport();

app.listen(8080, function() {
    console.log('Sevidor ejecutándose en http://localhost:8080');
});

module.exports = app;
