var React = require('react');
var SlotList = require('./SlotList.jsx');
var DateTimePicker = require('react-widgets').DateTimePicker
var Moment = require('moment')
var momentLocalizer = require('react-widgets/lib/localizers/moment')
var numberLocalizer = require('react-widgets/lib/localizers/simple-number')

numberLocalizer();
momentLocalizer(Moment);

var meetingForm = React.createClass({
    getInitialState: function(){
        var slots = [];


        return {
            description: '',
            summary: '',
            slots: slots
        }
    },
    MakeShitHappen: function(start, end){
        debugger;
        $.post("http://localhost:3002/api/mediator/cronofy", {start: start, end: end, description: this.state.description, summary: this.state.summary})

    },
    getSlots: function(e){
        e.preventDefault();
        var self = this;
        $.get('http://hack24cronofy.azurewebsites.net/api/availability' + '/20160319T0000Z' + '/20160320T0000Z' + '/60', function(data){
            self.setState( {slots: data});
        });
    },
    onChange : function(event){
        if(event.target.id == "summary")
            this.setState({summary: event.target.value});
        if(event.target.id == "description")
            this.setState({description: event.target.value});
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
                                <label className="col-md-4 control-label">Start Date and Time</label>
                                <div className="col-md-8">
                                    <DateTimePicker
                                        defaultValue={new Date()}/>
                                </div>

                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">End Date and Time</label>
                                <div className="col-md-8">
                                    <DateTimePicker
                                        defaultValue={new Date()}/>
                                </div>

                            </div>

                            <button type="submit" className="pull-right btn btn-default" onClick={this.getSlots}>Submit</button>
                        </form>
                        <div className="row results">
                            <SlotList slots={this.state.slots} MakeShitHappen={this.MakeShitHappen} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});

module.exports = meetingForm;