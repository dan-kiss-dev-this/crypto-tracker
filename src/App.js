import React, { Component } from 'react';
import ApiComponent from './ApiComponent';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import './App.css';

//We define the reducer here so that we can pass it in when we create the store
const coinReducer = (state = 'BTC', action) => {
  switch (action.type) {
    case "CHANGE_COIN":
      // let newState = [...state, action.value];
      let newState = action.value
      return newState;
    default:
      return state;
  }
}

//We instantiate the store by calling the createStore method we imported and passing in the reducer we defined
const store = createStore(coinReducer);

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
