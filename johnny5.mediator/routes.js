var cronofyController = require('./controllers/cronofy/setController');
var essendexController = require('./controllers/essendex/sendSms');
var speechController = require('./controllers/speechController');
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
};