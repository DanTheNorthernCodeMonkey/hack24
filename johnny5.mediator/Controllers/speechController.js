/**
 * Created by UNiDAYS on 20/03/2016.
 */
var say = require('say');

module.exports.greet = function (req, res) {

    say.speak('why aye man, what canny do for ye pet?');

    res.send(200);
};

module.exports.calendarSet = function (req, res) {

};

module.exports.listen = function (req, res) {

    if (req.body.message == undefined) {
        return res.send(400);
    }
    say.speak(req.body.message);
    res.send(200);
};
