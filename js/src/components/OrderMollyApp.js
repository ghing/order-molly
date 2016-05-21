import Immutable from 'immutable';
import React from 'react';

import ItemList from './ItemList';
import NotificationCenter from './NotificationCenter';

const OrderMollyApp = React.createClass({
  getDefaultProps: function() {
    return {
      numItems: 5
    };
  },

  getInitialState: function() {
    return {
      notifications: new Immutable.List(),
      ordered: new Immutable.Set()
    };
  },

  componentDidMount: function() {
    this.props.socket.on('notify:order:complete', this.handleOrderCompleteNotification);
  },

  getItems: function(allItems, numItems, ordered) {
    let items = [],
        i,
        item; 

    for (i = 0; items.length < numItems && i < allItems.length; i++) {
      item = allItems[i];
      if (!ordered.has(item)) {
        items.push(item);
      }
    }

    return items;
  },

  render: function() {
    let items = this.getItems(this.props.items, this.props.numItems, this.state.ordered);

    return (
      <div className="order-molly-app">
        <NotificationCenter notifications={this.state.notifications.toArray()} />
        <ItemList items={items} handleOrder={this.handleOrder} />
      </div>
    );
  },

  handleOrder: function(item, name) {
    this.setState({
      ordered: this.state.ordered.add(item)
    });
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
