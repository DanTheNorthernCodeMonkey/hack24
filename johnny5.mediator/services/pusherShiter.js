/**
 * Created by UNiDAYS on 19/03/2016.
 */
pusher.trigger('calendarEvents', 'setCalendarEvent', {
    "message": JSON.stringify(setCalendarEvent)
});

var channel = pusher.subscribe('calendarEvents');

channel.bind('setCalendarEvent', function(data) {
    console.log('An event was triggered with message: ' + data.message);
});