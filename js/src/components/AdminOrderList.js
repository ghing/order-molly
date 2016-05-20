import React from 'react';

import AdminOrder from './AdminOrder';

const AdminOrderList = React.createClass({
  render: function() {
    let orderComponents = this.props.orders.map(order => {
      return <AdminOrder order={order} key={order.get('orderId')} handleComplete={this.props.handleComplete} />;
    });

    return (
      <div className="admin-order-list list-group">
        {orderComponents}
      </div>
    )
  }
});

export default AdminOrderList;
