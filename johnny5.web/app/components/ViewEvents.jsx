var React = require('react');
var Event = require('./Event.jsx');

var ViewEvents = React.createClass({
    getInitialState: function(){
        return {
            events: this.props.events
        }
    },
    componentWillReceiveProps : function(nextProps){
        this.setState({events: nextProps.events})
    },
  render: function() {
      var createEvent = function(event){
              return (
              <div>
                  <Event start={event.startDate} end={event.endDate} description={event.description} summaryInfo={event.summaryInfo} />
              </div>
          )
      }
          ;return (

          <div>
              <div className="row">
                  <div className="col-md-offset-3 col-md-5">
                      <h1>Upcoming Events</h1>
                  </div>
              </div>
              <div className="row">
                  {this.state.events.map(createEvent, this)}
              </div>
          </div>
    );
  }
});

module.exports = ViewEvents;