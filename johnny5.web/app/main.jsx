var React = require('react');
var ReactDOM = require('react-dom');
var MeetingForm = require('./components/MeetingForm.jsx');
var Login = require('./components/Login.jsx');
var Notifications = require('react-notify-toast').notify;

function render() {
    ReactDOM.render(<MeetingForm />, document.getElementById('add'));
    ReactDOM.render(<Login />, document.getElementById('login'));
}

render();