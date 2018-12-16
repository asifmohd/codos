import * as React from 'react';
import './App.css';
import { MedicinesCollection } from './components/MedicinesCollection';
import { SearchBar } from './components/SearchBar';
import { StoreState, Drug } from './types';

class App extends React.Component<{}, StoreState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchText: '',
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateCartVal = this.updateCartVal.bind(this);
  }

  updateCartVal(id: number, val: number) {
    function mapCount(currentValue: Drug) {
      if (currentValue.id !== id) {
        return currentValue;
      }
      let newCount = currentValue.cart_count + val;
      if (newCount < 0) {
        return currentValue;
      }
      let newVal = currentValue;
      newVal.cart_count = newCount;
      return newVal;
    }
    var newItems = this.state.items.map(mapCount);
    this.setState({
      searchText: this.state.searchText,
      items: newItems
    });
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      searchText: e.currentTarget.value,
      items: []
    });
    if (e.currentTarget.value.length > 0) {
      // use proxy to bypass CORS limitations on the practo API
      const proxyurl = 'https://cors-anywhere.herokuapp.com/';
      const baseURL = 'https://www.practo.com/dose/api/v1/drugs';
      const lat = '12.8845097';
      const long = '77.60355219999997';
      const pincode = '560076';
      const url = `${baseURL}?filter=${e.currentTarget.value}&latitude=${lat}&longitude=${long}&pincode=${pincode}`;
      fetch(proxyurl + url)
        .then(result => result.json())
        .then(items => { 
          let drugs: Drug[] = items.drugs as Drug[];
          drugs.forEach(element => {
            element.cart_count = 0;
          });
          if (!drugs) {
            drugs = [];
          }
          this.setState({searchText: this.state.searchText, items: drugs}); 
      });
    }
  }

  render() {
    const cartItems = this.state.items.filter(element => { return element.cart_count > 0; });
    const totalAmount = cartItems.reduce((val, element) => { return (element.mrp * element.cart_count) + val; }, 0);
    // only show the cart listing if user has atleast one medicine in cart
    var cartItemListComp;
    var cartTotalAmountComp;
    if (cartItems.length > 0) {
      cartItemListComp = <MedicinesCollection items={cartItems} update={this.updateCartVal}/>;
      cartTotalAmountComp = <p>Total to pay = <b>₹{totalAmount}</b></p>;
    } else if (this.state.items.length > 0) {
      // show help text if nothing in cart while search results are displayed
      cartTotalAmountComp = <p>Add medicines to cart by clicking on the <b>+</b> button</p>;
    }
    return (
      <div className="App">
        <h4>Enter search text</h4>
        <SearchBar onChange={this.handleChange} text={this.state.searchText} />
        <div className="ResultAndCartDiv">
          <h3 id="itemListHeading">Search Results</h3>
          <hr />
          <h3 id="cartListHeading">Your Cart</h3>
        </div>
        <div className="ResultAndCartDiv">
          <div className="ItemList">
            <MedicinesCollection items={this.state.items} update={this.updateCartVal}/>
          </div>
          <hr />
          <div className="CartList">
            {cartItemListComp}
            {cartTotalAmountComp}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
