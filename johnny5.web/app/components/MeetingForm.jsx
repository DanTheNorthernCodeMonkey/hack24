var React = require('react');
var SlotList = require('./SlotList.jsx');


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
        $.post("", {start: start, end: end, description: this.state.description, summary: this.state.summary})

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
            <div className="col-md-offset-3 col-md-5">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-4 control-label">Meeting Summary</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="summary" placeholder="Summary" value={this.state.summary} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Meeting Description</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="description" placeholder="Description" value={this.state.description} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Day</label>
                        <div className="col-md-1">
                            <input type="text" className="form-control" id="startdd" placeholder="DD" />
                        </div>
                        <div className="col-md-1">
                            <input type="text" className="form-control" id="startmm" placeholder="MM" />

                        </div>
                        <div className="col-md-1">
                            <input type="text" className="form-control" id="startyy" placeholder="YY" />

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Duration (increments of 15 minutes)</label>
                        <div className="col-md-1">
                            <input type="text" className="form-control" id="startyy" placeholder="00" />
                        </div>
                    </div>
                    <button type="submit" className="pull-right btn btn-default" onClick={this.getSlots}>Submit</button>
                </form>
                <div className="row results">
                    <SlotList slots={this.state.slots} MakeShitHappen={this.MakeShitHappen} />
                </div>

            </div>
        )
    }
});

module.exports = meetingForm;