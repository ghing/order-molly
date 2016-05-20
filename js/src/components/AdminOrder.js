import React from 'react';

const AdminOrder = React.createClass({
  render: function() {
    return (
      <button className="btn list-group-item" type="button" onClick={this.handleClickComplete} disabled={this.props.order.get('status') == 'complete'}>{this.props.order.get('item')} for {this.props.order.get('name')}</button>
    );
  },

  handleClickComplete: function(e) {
    this.props.handleComplete(this.props.order);
  }
});

export default AdminOrder;
