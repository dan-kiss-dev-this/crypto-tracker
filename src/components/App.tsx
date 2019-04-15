import React, { Component } from 'react';
import ApiComponent from './ApiComponent';
import { Provider } from 'react-redux';
import {createStore, Store } from 'redux';
import '../css/App.scss';
import { actionObject, stateObjectToProp } from '../types';
import { coinReducer } from '../reducers/index'

//We instantiate the store by calling the createStore method we imported and passing in the reducer we defined
const store: Store<stateObjectToProp, actionObject> = createStore(coinReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <ApiComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
