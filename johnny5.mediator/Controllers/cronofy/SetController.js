/*var pusherService = require('../../services/pusherService');
var pusher = pusherService.get();*/
var request = require('request');

module.exports.post = function (req, res) {

    var url = 'http://hack24cronofy.azurewebsites.net/api/AddEvent/';

    url += req.body.startDate +"/";
    url += req.body.endDate +"/";
    url += req.body.description +"/";
    url += req.body.summary +"/";

    request({
        url: url,
        method: "POST"
    }, function (error, response, body){
        if (error){
            console.log(error);
            res.send(error);
        }
        else {
            console.log(body);
            res.send(body );
        }});
};
