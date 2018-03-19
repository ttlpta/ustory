import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
