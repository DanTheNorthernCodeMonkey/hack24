/**
 * Created by UNiDAYS on 20/03/2016.
 */
var say = require('say');

var queue = [];

module.exports.greet = function (req, res) {

    say.speak('why aye man, what canny do for ye pet?');

    res.send(200);
};

module.exports.calendarSet = function (req, res) {

};

module.exports.listen = function (req, res) {

    var message = req.message.body;
    if (queue.length > 0) {
        if (queue.length < 10) {
            var next = queue.pop();
            say.speak(next);
        }
    } else {
        say.speak(message);
    }
};
