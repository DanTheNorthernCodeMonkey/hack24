var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var routes = require('./routes');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

routes.initRoutes(app);

app.use(function (req, res, next) {
    var oneof = false;
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*');
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if (oneof) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && (req.method == 'OPTIONS')) {
        res.status(200).end();
    }
    else {
        res.header('Access-Control-Expose-Headers', 'authtoken');
        next();
    }
});
/*
app.get('/api/mediator/essendex', function (req, res, next) {
    console.log('essendex service called');
    next();
}, essendexController.get);

app.post('/api/mediator/cronofy', function (req, res, next) {
    console.log('cronofy service called');
    next();
}, cronofyController.post);*/


module.exports = app;
