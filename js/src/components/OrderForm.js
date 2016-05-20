import React from 'react';

const OrderForm = React.createClass({
  render: function() {
    return(
      <form className="order-form" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Your name" ref="name" />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Order</button>
            <button type="button" className="btn btn-secondary" onClick={this.handleReset}>Cancel</button>

          </span>  
        </div>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs.name.value);
  },

  handleReset: function() {
    this.props.onReset();
  }
});

export default OrderForm;
