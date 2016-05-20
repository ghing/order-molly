import Immutable from 'immutable';
import React from 'react';
import uuid from 'uuid';

import AdminOrderList from './AdminOrderList';

// TODO: Add logic to complete orders
const OrderMollyAdminApp = React.createClass({
  getInitialState: function() {
    return {
      orders: new Immutable.OrderedMap() 
    };
  },

  render: function() {
    let newOrdersHeading = false;
    let newOrders = [];
    let filledOrdersHeading = false;
    let filledOrders = [];

    this.state.orders.forEach(order => {
      if (order.get('status') == 'new') {
        newOrders.push(order);
      }
      else {
        filledOrders.push(order);
      }
    });

    if (newOrders.length) {
      newOrdersHeading = <h2>New orders</h2>;
    }

    if (filledOrders.length) {
      filledOrdersHeading = <h2>Filled orders</h2>;
    }

    return (
      <div className="order-molly-admin-app">
        {newOrdersHeading}
        <AdminOrderList orders={newOrders} handleComplete={this.handleComplete} />
        {filledOrdersHeading}
        <AdminOrderList orders={filledOrders} handleComplete={this.handleComplete} />
      </div>
    );
  },

  componentDidMount: function() {
    this.props.socket.emit('add:admin');
    this.props.socket.on('receive:order', this.handleOrder);
  },

  handleOrder: function(userId, item, name) {
    let orderId = uuid.v1();
    this.setState({
      orders: this.state.orders.set(orderId, Immutable.Map({
        orderId: orderId,
        userId: userId,
        item: item,
        name: name,
        status: 'new'
      }))
    });
  },

  handleComplete: function(order) {
    this.setState({
      orders: this.state.orders.set(order.get('orderId'), order.set('status', 'complete'))
    });
    this.props.socket.emit('complete:order', order.get('userId'), order.get('item'), order.get('name'));
  }
});

export default OrderMollyAdminApp;
