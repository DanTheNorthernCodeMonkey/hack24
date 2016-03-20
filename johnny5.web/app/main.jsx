var React = require('react');
var ReactDOM = require('react-dom');
var MeetingForm = require('./components/MeetingForm.jsx');
var Login = require('./components/Login.jsx');
var ViewEvents = require('./components/ViewEvents.jsx');

function render() {
    ReactDOM.render(<MeetingForm />, document.getElementById('add'));
    ReactDOM.render(<Login />, document.getElementById('login'));

    $.get('http://ec2-54-194-147-206.eu-west-1.compute.amazonaws.com:3002/api/mediator/upcomming').success(function(data){
        ReactDOM.render(<ViewEvents events={data}/>, document.getElementById('view'));
    })



}

render();