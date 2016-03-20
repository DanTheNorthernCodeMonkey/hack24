var React = require('react');
var Moment = require('moment');

var Slot = React.createClass({
    MakeShitHappen: function(){
        this.props.MakeShitHappen(this.props.start, this.props.end);
    },
    render: function() {

    return (


      <div className="row slot">
          <div className="col-md-offset-4 col-md-7">
              Between {Moment(this.props.start).format('hh:mma')} and {Moment(this.props.end).format('hh:mma')}
              <button className="pull-right btn btn-primary" onClick={this.MakeShitHappen}>[ ]</button>

          </div>
      </div>
    );
  }
});

module.exports = Slot;