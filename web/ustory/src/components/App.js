import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BaseController from './Controller/BaseController';
import Home from './Home';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact={false} path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <BaseController />
          <App />
        </div>
      </Provider>
    );
  }
}
