import React, { Component } from 'react';
import ItemComponent from "../item/ItemComponent"

import products from './products.json'
import './item-list.css';

class ItemListComponent extends Component {
  render() {
    return (
      <div className="row">
        {
            products.filter((product) => {
                return product.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1
            }).map((product, index) => {
                return <ItemComponent product={product} key={index} handleBuy={this.props.handleBuy}/>
            })
        }
      </div>
    );
  }
}

export default ItemListComponent;
