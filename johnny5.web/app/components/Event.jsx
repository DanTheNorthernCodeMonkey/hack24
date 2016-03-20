var React = require('react');
var Moment = require('moment');

var Event = React.createClass({
  render: function() {
    return (
        <div className="row">
            <div className="col-md-offset-1 col-md-9 summary">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-4 control-label">Summary</label>
                        <div className="col-md-8 summaryText">
                            {this.props.description}
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Date</label>
                        <div className="col-md-8 summaryText">
                            {Moment(this.props.start).format('DD/MM/YYYY hh:mma')} - {Moment(this.props.end).format('DD/MM/YYYY hh:mma')}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
});

module.exports = Event;