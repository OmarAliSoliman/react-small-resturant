import React, { Component } from "react";

import { Table } from "react-bootstrap";

class ShoppingCart extends Component {
  componentDidMount() {
    console.log(this.props.cartshoppin);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h5 className="pageheader">Shopping Cart</h5>
          <div>
            {this.props.cartshoppin.length === 0 ? (
              <h3 className="noItem">There is no item to show</h3>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Oprion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cartshoppin.map((cart, index) => (
                    <tr key={cart.id} className="items">
                      <td>{cart.id}</td>
                      <td className="name">{cart.name}</td>
                      <td>{cart.count}</td>
                      <td>
                        <button
                          className="addMore btn btn-primary"
                          onClick={() => this.props.addMore(cart)}
                        >
                          +
                        </button>
                        <button
                          className="addMore btn btn-warning"
                          onClick={()=>this.props.minimizeItem(cart)}
                        >
                          -
                        </button>
                        <button
                          className="deleteItem btn btn-danger"
                          onClick={() => this.props.deleteItem(index,cart)}
                        >
                          <i className="fi-rr-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
