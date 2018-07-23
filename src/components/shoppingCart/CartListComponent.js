import React, {Component} from 'react'
import CartComponent from './cartComponent'

class CartListComponent extends Component{
    render() {
        return (
          <div className="row">
            {
               this.props.lista.map((product, index) => {
                    return <CartComponent product={product} key={index} />
                })
            }
          </div>
        );
      }
}

export default CartListComponent;
