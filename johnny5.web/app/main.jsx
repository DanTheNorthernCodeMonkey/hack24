var React = require('react');
var ReactDOM = require('react-dom');
var MeetingForm = require('./components/MeetingForm.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">

                </div>
                <div className="row">
                    <MeetingForm/>
                </div>
            </div>
        )
    }
});


function render() {
    ReactDOM.render(<App />, document.getElementById('app'));
}

render();