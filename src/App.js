import React, { Component } from 'react';
import SearchComponent from './components/search/SearchComponent'
import ItemListComponent from './components/item-list/ItemListComponent'
import CartListComponent from './components/shoppingCart/CartListComponent'
import './App.css';
import './animate.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      buyList: [],
      changeUrl: true,
      totalPrice: 0
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
   this.setState({totalPrice : this.state.totalPrice+ product.price})
  }
  changeUrlOnClick(){
    this.setState({changeUrl: false})
  }
  render() {
    return (

      <div className="App container-fluid">
      <div>
            <nav className="navbar navbar-default bg-default justify-content-between">
              <a className="navbar-brand">Smart Shop</a>
              <form className="form-inline">
                <SearchComponent handleFilter={this.handleFilter.bind(this)}/>
                <span className="badge">{this.state.buyList.length}</span>
                <i className="fas fa-cart-plus shop-icon" onClick={this.changeUrlOnClick.bind(this)} ></i>
              </form>
          </nav>
          </div>
          {this.state.changeUrl ?
            (<ItemListComponent filter={this.state.filter} handleBuy={this.handleBuy.bind(this)}/>


        )
     :
      (<div>
        <CartListComponent lista={this.state.buyList}   />
        <h3>Total is: {this.state.totalPrice} EUR </h3>
      </div>  )

    }

      </div>
    );
  }
}

export default App;
