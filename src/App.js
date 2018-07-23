import React, { Component } from 'react';
import SearchComponent from './components/search/SearchComponent'
import ItemListComponent from './components/item-list/ItemListComponent'
import './App.css';
import './animate.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      buyList: []
    }
  }

  handleFilter(event) {
    this.setState({filter: event.target.value})
  }

  handleBuy(product) {
    this.setState({buyList: [
      ...this.state.buyList,
      product
    ]})
  }

  render() {
    return (
      <div className="App container-fluid">
      <nav className="navbar navbar-default bg-default justify-content-between">
          <a className="navbar-brand">Smart Shop</a>
          <form className="form-inline">
            <SearchComponent handleFilter={this.handleFilter.bind(this)}/>
            <span className="badge">{this.state.buyList.length}</span>
            <i className="fas fa-cart-plus shop-icon"></i>
          </form>
      </nav>
        <ItemListComponent filter={this.state.filter} handleBuy={this.handleBuy.bind(this)}/>
      </div>
    );
  }
}

export default App;
