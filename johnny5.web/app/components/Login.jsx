var React = require('react');

var Login = React.createClass({
    moveIt: function(e) {
   e.preventDefault;
            $('html, body').animate({
                scrollTop: $('#add').offset().top
            }, 2000);
    },
  render: function() {
    return (
        <div>
            <div className="row">
                <div className="col-md-offset-3 col-md-5">
                    <h1>Login</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-3 col-md-5">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="col-md-4 control-label">Username</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="summary" placeholder="Username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Password</label>
                            <div className="col-md-8">
                                <input type="password" className="form-control" id="description" placeholder="Password" />
                            </div>
                        </div>
                        <button type="submit" className="pull-right btn btn-default" onClick={this.moveIt}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    );
  }
});

module.exports = Login;