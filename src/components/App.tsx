import React, { Component } from 'react';
import ApiComponent from './ApiComponent';
import { Provider } from 'react-redux';
import {createStore, Store } from 'redux';
import '../css/App.scss';
import { actionObject, stateObject, coinDataObject, newsDataObject, stateObjectToProp } from '../types';

//We define the reducer here so that we can pass it in when we create the store
const coinReducer = (state: stateObject = {
  initialCoin: 'BTC', 
  news: null, 
  coinData: null 
  }, action: actionObject): stateObject => {
    switch (action.type) {
      case "GET_COIN_DATA":
        let newCoinData: coinDataObject[] = action.value;
        state.coinData = newCoinData;
        return state;
      case "GET_NEWS":
        let news: newsDataObject[] = action.value;
        state.news = news;
        return state;
      default:
      // if you wanted to destructure state into an array = [...state];
        return state;
  }
}

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
