import React, { Component } from 'react';
import './item.css';

class ItemComponent extends Component {
  render() {
    return (
      <div className="search panel panel-default col-md-2 animated fadeIn">
        <div className="panel-heading">
            <h4>{this.props.product.name}</h4>
        </div>
        <div className="panel-body">
            <img className="product-image" src={this.props.product.image} />
        </div>
        <div className="panel-footer">
            <span className="label label-info">{this.props.product.price} {this.props.product.currency}</span>
            <button className="btn btn-success buy-btn" onClick={() => this.props.handleBuy(this.props.product)}> BUY </button>
        </div>
      </div>
    );
  }
}

export default ItemComponent;
