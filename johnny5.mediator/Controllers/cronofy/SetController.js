/*var pusherService = require('../../services/pusherService');
var pusher = pusherService.get();*/
var request = require('request');

module.exports.post = function (req, res) {

    var url = 'http://hack24cronofy.azurewebsites.net/api/availability/daterange/';

    url += req.body.startDate +"/";
    url += req.body.endDate +"/";
    url += req.body.duration +"/";

    request({
        url: url,
        method: "GET"
    }, function (error, response, body){
        if (error){
            console.log(error);
            res.send(error);
        }
        else {
            console.log(body);
            res.send(body);
        }});

    res.send(200);
};
