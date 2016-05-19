import React from 'react';

import OrderForm from './OrderForm';

const Item = React.createClass({
  getInitialState: function() {
    return {
      show: 'item'
    };
  },

  render: function() {
    let contents;
    if (this.state.show === 'item') {
      contents = <a href="#" onClick={this.showForm}>{this.props.item}</a>
    }
    else {
      contents = <OrderForm onSubmit={this.handleFormSubmit} />;
    };

    return (
      <li className="list-group-item">
        {contents}  
      </li>
    );
  },

  showForm: function() {
    this.setState({
      show: 'form'
    });
  },

  handleFormSubmit: function(name) {
    this.props.handleOrder(this.props.item, name);
    this.setState({
      show: 'item'
    });
  }
});

export default Item;
