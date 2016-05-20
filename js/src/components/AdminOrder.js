import React from 'react';

const AdminOrder = React.createClass({
  render: function() {
    return <li className="admin-order list-group-item">{this.props.order.get('item')} for {this.props.order.get('name')}</li>;
  }
});

export default AdminOrder;
