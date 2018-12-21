import React, { Component } from 'react';
import ApiComponent from './ApiComponent';
import { Provider } from 'react-redux';
import {createStore } from 'redux';

//We define the reducer here so that we can pass it in when we create the store
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      let newState = [...state, action.value];
      return newState;
    case "REMOVE_TODO":
      return [
        ...state.slice(0, action.value),
        ...state.slice(action.value + 1, state.length -1)
      ];
    default:
      return state;
  }
}

//We instantiate the store by calling the createStore method we imported and passing in the reducer we defined
const store = createStore(todoReducer);

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <div className="App">
            <ApiComponent site='https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30'/>
        </div>
      </Provider>
    );
  }
}

export default App;
