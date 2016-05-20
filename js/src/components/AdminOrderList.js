import React from 'react';

import AdminOrder from './AdminOrder';

const AdminOrderList = React.createClass({
  render: function() {
    let orderComponents = this.props.orders.map(order => {
      return <AdminOrder order={order} key={order.get('orderId')}/>;
    });

    return (
      <ul className="admin-order-list list-group">
        {orderComponents}
      </ul>
    )
  }
});

export default AdminOrderList;
