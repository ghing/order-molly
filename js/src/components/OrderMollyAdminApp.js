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
    return (
      <div className="order-molly-admin-app">
        <AdminOrderList orders={this.state.orders.toList()} />
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
  }
});

export default OrderMollyAdminApp;
