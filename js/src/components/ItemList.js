import React from 'react';

import Item from './Item';

const ItemList = React.createClass({
  render: function() {
    let itemComponents = this.props.items.map(item => {
      return <Item key={item} item={item} handleOrder={this.props.handleOrder} />;
    });
    
    return(
      <ul className="item-list list-group">
        {itemComponents}
      </ul>
    );
  }
});

export default ItemList;
