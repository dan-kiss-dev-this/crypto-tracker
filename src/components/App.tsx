import React, { Component } from 'react';
import ApiComponent from './ApiComponent';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import '../css/App.css';

interface actionObject {
  type: string,
  value: any,
}

//We define the reducer here so that we can pass it in when we create the store
const coinReducer = (state = {
  initialCoin: 'BTC', 
  news: null, 
  coinData: null 
  }, action: actionObject) => {
    switch (action.type) {
      case "GET_COIN_DATA":
        let newCoinData = action.value;
        state.coinData = newCoinData;
        return state;
      case "GET_NEWS":
        let news = action.value;
        state.news = news.articles;
        return state;
      default:
      // if you wanted to destructure state into an array = [...state];
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
