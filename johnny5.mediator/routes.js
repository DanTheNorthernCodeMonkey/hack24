var cronofyController = require('./controllers/cronofy/setController');
var essendexController = require('./controllers/essendex/sendSMS');
var speechController = require('./controllers/speechController');
var upComingController = require('./controllers/cronofy/upcomingController');
module.exports.initRoutes = function (app) {

    app.post('/api/mediator/cronofy', function (req, res, next) {
        console.log('cronofy service called');
        next();
    }, cronofyController.post);

    app.post('/api/mediator/essendex', function (req, res, next) {
        console.log('essendex service called');
        next();
    }, essendexController.post);

    app.get('/api/mediator/greeting', function (req, res, next) {
        console.log('greeting called');
        next();
    }, speechController.greet);

    app.post('/api/mediator/listen', function (req, res, next) {
        console.log('listen called');
        next();
    }, speechController.listen);

    app.get('/api/mediator/upcomming', function (req, res, next) {
        console.log('upcomming called');
        next();
    }, upComingController.get);
};