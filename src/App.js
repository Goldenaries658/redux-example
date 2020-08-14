import React, { Component } from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Dummy Blog</h1>
          <Postform />
          <br />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}
