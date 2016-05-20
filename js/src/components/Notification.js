import React from 'react';

const Notification = React.createClass({
  render: function() {
    return <div className="alert alert-success" role="alert">{this.props.notification}</div>;
  }
});

export default Notification;
