/**
 * Created by UNiDAYS on 20/03/2016.
 */


module.exports.get = function (req, res) {

    var events = [

        {
            startDate: "201603122T1800Z",
            endDate: "20161005T0230Z",
            description: "Gary's house warming, bring beers, dancing shoes and plenty of laughs",
            summary: "Gary's house warming",
            attendees: "30"
        },
        {
            startDate: "20160325T0900Z",
            endDate: "20161005T0230Z",
            description: "Paint balling with the lads, £10 each at Sherwood Forrest",
            summary: "Paint ball",
            attendees: "15"
        },
        {
            startDate: "20160405T0215Z",
            endDate: "20161005T0230Z",
            description: "Curry at lunch",
            summary: "Dirty Food Friday",
            attendees: "8"
        },
        {
            startDate: "20160510T0215Z",
            endDate: "20161005T0230Z",
            description: "Shaun's birthday, Barcelona",
            summary: "",
            attendees: "12"
        }

    ];

    res.json(events);

};