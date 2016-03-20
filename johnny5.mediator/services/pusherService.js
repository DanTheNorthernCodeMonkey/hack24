/**
 * Created by UNiDAYS on 19/03/2016.
 */

var pusher = require('pusher');

var pusherObject;

var pusherSingleton = function () {

    if (pusherObject !== undefined){
        return pusherObject
    }
    else {
        return new pusher({
            appId: '188224',
            key: '62639e20112bbe71197e',
            secret: '8d11632c3c1dcc5d0742',
            cluster: 'eu',
            encrypted: true
        });
    }
};

module.exports.get = function () {
    return pusherSingleton();
};