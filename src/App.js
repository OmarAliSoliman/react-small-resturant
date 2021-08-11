import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/style.css";
// component
import MyNavbar from "./Component/MyNavbar";
import Home from "./Pages/Home";
import ShoppingCart from "./Pages/ShoppingCart";

// api
import Product from "./Prouduct/Prouduct.json";

class App extends Component {
  state = {
    product: [],
    cartSopping: [],
    numberOfItem: 1,
    addAlert: false,

  };

  componentDidMount() {
    Promise.resolve(Product).then((res) => {
      this.setState({
        product: res,
      });
    });
  }

  render() {


    const addToCart = (prod, event) => {
      prod.count += 1;
      this.state.cartSopping.push(prod);
      var newCartShopping = [...this.state.cartSopping];
      const obj = [...new Map(newCartShopping.map(item => [JSON.stringify(item), item])).values()];
      this.setState({
        cartSopping: obj,
        addAlert: true,
      })

      setTimeout(()=>{
        this.setState({
          addAlert: false
        })
      }, 2000)

    };

    const addMore = (cartItem) => {
      var newCartShopping = [...this.state.cartSopping];
      newCartShopping.map((item, index) => {
        if (item.id === cartItem.id) {
          newCartShopping[index].count += 1;
        }
      });
      this.setState({
        cartSopping: newCartShopping,
      });
    };

    const minimizeItem = (cartItem) => {
      var newCartShopping = [...this.state.cartSopping];
      newCartShopping.map((item, index) => {
        if (item.id === cartItem.id) {
          newCartShopping[index].count -= 1;
          if (newCartShopping[index].count < 1) {
            newCartShopping[index].count = 1;
          }
        }
      });
      this.setState({
        cartSopping: newCartShopping,
      });
    };

    const deleteItem = (index, cart) => {
      var newCartShopping = [...this.state.cartSopping];
      newCartShopping.map((item, index) => {
        if (item.id === cart.id) {
          newCartShopping[index].count = 0;
        }
      });
      newCartShopping.splice(index, 1);
      this.setState({
        cartSopping: newCartShopping,
      });
    };

    return (
      <Router>
        <div className="App">
          <MyNavbar />
          <Switch>
            <Route
              path="/shopping-cart"
              render={(props) => (
                <ShoppingCart
                  {...props}
                  cartshoppin={this.state.cartSopping}
                  numberOfItem={this.state.numberOfItem}
                  addMore={addMore}
                  minimizeItem={minimizeItem}
                  deleteItem={deleteItem}
                />
              )}
            />
            <Route
              path="/"
              render={(props) => <Home {...props} addToCart={addToCart} addAlert={this.state.addAlert} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
