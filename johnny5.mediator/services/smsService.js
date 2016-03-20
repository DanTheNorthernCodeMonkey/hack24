/**
 * Created by UNiDAYS on 19/03/2016.
 */
var js2xmlparser = require("js2xmlparser");
var request = require('request');

module.exports.send = function (message) {

    var sms = {
        accountreference: "EX0207704",
        message: {
            to: "447413628822",
            body: message
        }
    };

    var xmlMessage = js2xmlparser("messages", sms);

    var basicAuthString = new Buffer("dan.ian.shea@gmail.com:ANeadwxdGWC1").toString('base64');

    request({
        url: 'https://api.esendex.com/v1.0/messagedispatcher',
        method: "POST",
        headers: {
            "content-type": "application/xml",
            "accept": "application/xml",
            Authorization: "Basic " + basicAuthString
        },
        body: xmlMessage
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(body);
        }
    });
};