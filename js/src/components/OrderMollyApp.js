import React from 'react';

import ItemList from './ItemList';

const OrderMollyApp = React.createClass({
  render: function() {
    return (
      <div className="order-molly-app">
        <ItemList items={this.props.items} handleOrder={this.handleOrder} />
      </div>
    );
  },

  handleOrder: function(item, name) {
    this.props.socket.emit('order', this.props.socket.id, item, name);
  }
});

export default OrderMollyApp;
