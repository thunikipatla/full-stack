import React, { Component } from 'react';
import ProductsList from '../containers/productslist';
import ActiveProduct from '../containers/activeproduct';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h2>Products Demo from react</h2> */}
        <ProductsList/>
        <ActiveProduct/>
      </div>
    );
  }
}
