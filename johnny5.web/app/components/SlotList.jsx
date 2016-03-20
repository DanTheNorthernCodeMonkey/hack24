var React = require('react');
var Slot = require('./Slot.jsx');



var SlotList = React.createClass({
    getInitialState: function(){
        return {
            slots: this.props.slots
        }
    },
    componentWillReceiveProps : function(nextProps){
        this.setState({slots: nextProps.slots})
    },
    render: function() {

        var createSlot = function(slot){
            return (
                <div>
                    <Slot start={slot.StartDate} end={slot.EndDate} MakeShitHappen={this.props.MakeShitHappen} />
                </div>
            )
        };

        return (
          <div>
              {this.state.slots.map(createSlot, this)}
          </div>
        );
    }
});

module.exports = SlotList;