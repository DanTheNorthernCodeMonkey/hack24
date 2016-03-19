var cronofyController = require('./controllers/cronofy/setController');
var essendexController = require('./controllers/essendex/sendSms');
module.exports.initRoutes = function (app){

        app.post('/api/mediator/cronofy', function (req, res, next) {
            console.log('cronofy service called');
            next();
        }, cronofyController.post);

        app.get('/api/mediator/essendex', function (req, res, next) {
        console.log('essendex service called');
        next();
    }, essendexController.get);
};