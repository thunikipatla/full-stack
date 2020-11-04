import React, { Component } from 'react';
import BookList from '../containers/BookList';
import Activebook from '../containers/Activebook';

export default class App extends Component {
  render() {
    return (
      <div>
      Books Demo using redux
      <BookList/>
      <Activebook/>
      </div>
    );
  }
}
