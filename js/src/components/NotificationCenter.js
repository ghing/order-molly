import React from 'react';

import Notification from './Notification';

const NotificationCenter = React.createClass({
  render: function() {
    if (this.props.notifications.length === 0) {
      return false;
    }

    let notificationComponents = this.props.notifications.map((notification, i) => {
      return <Notification notification={notification} key={i} />;
    });

    return (
      <div className="notification-center">
        {notificationComponents}
      </div>
    );
  }
});

export default NotificationCenter;
