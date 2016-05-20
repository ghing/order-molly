import Immutable from 'immutable';
import React from 'react';
import {knuthShuffle} from 'knuth-shuffle';

import ItemList from './ItemList';
import NotificationCenter from './NotificationCenter';

const OrderMollyApp = React.createClass({
  getInitialState: function() {
    return {
      notifications: new Immutable.List() 
    };
  },

  componentDidMount: function() {
    this.props.socket.on('notify:order:complete', this.handleOrderCompleteNotification);
  },

  render: function() {
    let items = knuthShuffle(this.props.items).slice(0, 5);

    return (
      <div className="order-molly-app">
        <NotificationCenter notifications={this.state.notifications.toArray()} />
        <ItemList items={items} handleOrder={this.handleOrder} />
      </div>
    );
  },

  handleOrder: function(item, name) {
    this.props.socket.emit('order', this.props.socket.id, item, name);
  },

  handleOrderCompleteNotification: function(item, name) {
    let msg = "Your order for " + item + " is ready. Raise your hand!";
    this.setState({
      notifications: this.state.notifications.push(msg)
    });
  }
});

export default OrderMollyApp;
