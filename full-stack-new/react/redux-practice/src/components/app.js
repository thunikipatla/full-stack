import React, { Component } from 'react';
import BooksList from '../containers/bookslist';
import Activebook from '../containers/activebook';

export default class App extends Component {
  render() {
    return (
      <div>
        Books demo
        <BooksList/>
        <Activebook/>
      </div>
    );
  }
}
