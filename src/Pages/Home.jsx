import React, { Component } from "react";

// api
import Product from "../Prouduct/Prouduct.json";

// Bootstrap
import { Table } from "react-bootstrap";

class Home extends Component {
  state = {
    product: [],
    isChoose: false,
  };

  componentDidMount() {
    Promise.resolve(Product).then((res) => {
      this.setState({
        product: res,
      });
    });
  }



  render() {
    return (
      <div className="homPage">
        <div className="container">
          <div className={this.props.addAlert ? "alert alert-success mt-3 alertactive" : "alert alert-success mt-3"} role="alert">
            success adding to the cart
          </div>
          <h5 className="pageheader">Our Menue</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Oprion</th>
              </tr>
            </thead>
            <tbody>
              {this.state.product.map((pro, index) => (
                <tr key={pro.id}>
                  <td>{pro.id}</td>
                  <td>{pro.name}</td>
                  <td>{pro.price}</td>
                  <td>
                    <button
                      className={
                        this.state.isChoose
                          ? "btn btn-primary p-2"
                          : "btn btn-dark p-2"
                      }
                      onClick={() => this.props.addToCart(pro)}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Home;
