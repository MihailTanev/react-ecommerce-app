import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Default from "./components/Deafault";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Autoplay from "./components/Autoplay";

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <React.Fragment>
            <Navbar />
            <Autoplay />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
            <Modal />
          </React.Fragment>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
