/**
 * Created by UNiDAYS on 19/03/2016.
 */
var pusherService = require('../services/pusherService');
var pusher = pusherService.get();


var channel = pusher.subscribe('calendarEvents');

channel.bind('setCalendarEvent', function(data) {
    alert('An event was triggered with message: ' + data.message);
});