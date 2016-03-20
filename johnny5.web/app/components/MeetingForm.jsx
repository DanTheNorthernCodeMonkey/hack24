var React = require('react');
var SlotList = require('./SlotList.jsx');
var DateTimePicker = require('react-widgets').DateTimePicker
var Moment = require('moment')
var notify = require('react-notify-toast').notify;
var momentLocalizer = require('react-widgets/lib/localizers/moment')
var numberLocalizer = require('react-widgets/lib/localizers/simple-number')
numberLocalizer();
momentLocalizer(Moment);

var meetingForm = React.createClass({
    getInitialState: function(){
        return {
            description: '',
            summary: '',
            start: Date(),
            end: Date()
        }
    },
    addEvent: function(e){
        $.post('http://ec2-54-194-147-206.eu-west-1.compute.amazonaws.com:3002/api/mediator/cronofy', {startDate: this.state.start, endDate: this.state.end, description: this.state.description, summaryInfo: this.state.summary});

        //var self = this;
        //$.get('http://hack24cronofy.azurewebsites.net/api/availability' + '/20160319T0000Z' + '/20160320T0000Z' + '/60', function(data){
        //    self.setState( {slots: data});
        //});
    },
    onChange : function(event) {
            if (event.target.id == "summary")
                this.setState({summary: event.target.value});
            if (event.target.id == "description")
                this.setState({description: event.target.value});
    },
    onStartChange : function(date) {
            this.setState({start: date.toISOString()});
    },
    onEndChange : function(date) {
        this.setState({end: date.toISOString()});
    },
    render: function () {


        return (
            <div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-5">
                        <h1>New Event</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-5">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-4 control-label">Summary</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" id="summary" placeholder="Summary" value={this.state.summary} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Description</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" id="description" placeholder="Description" value={this.state.description} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Start Date</label>
                                <div className="col-md-8">
                                    <DateTimePicker
                                        id="startDate"
                                        defaultValue={new Date()}
                                    onChange={this.onStartChange}/>
                                </div>

                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">End Date</label>
                                <div className="col-md-8">
                                    <DateTimePicker
                                        id="endDate"
                                        defaultValue={new Date()}
                                        onChange={this.onEndChange}/>
                                </div>

                            </div>

                            <button id="submitEvent" type="submit" className="pull-right btn btn-default" onClick={this.addEvent}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = meetingForm;