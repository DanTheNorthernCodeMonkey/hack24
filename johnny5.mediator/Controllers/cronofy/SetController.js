var pusherService = require('../../services/pusherService');
var pusher = pusherService.get();
var request = require('request');
var smsService = require('../../services/smsService');

module.exports.post = function (req, res) {

    var url = 'http://hack24cronofy.azurewebsites.net/api/AddEvent/';

    url += req.body.startDate + "/";
    url += req.body.endDate + "/";
    url += req.body.description + "/";
    url += req.body.summaryInfo;

    request({
        url: url,
        method: "POST"
    }, function (error, response, body) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            console.log(body);

            pusher.trigger('calendar', 'eventAdded', {
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                description: req.body.description,
                summaryInfo: req.body.summaryInfo
            });

            smsService.send("You're friend just created a new event, don't miss out");

            res.send(body);
        }
    });
};
