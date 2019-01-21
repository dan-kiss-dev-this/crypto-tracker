import React, { Component } from 'react';
import ApiComponent from './ApiComponent';
import { Provider } from 'react-redux';
import {createStore, Store } from 'redux';
import '../css/App.css';

interface actionObject {
  type: string,
  value: any[],
}

interface stateObject {
  initialCoin: string, 
  coinData: null | coinDataObject[],
  news: null | newsDataObject[], 
}

interface coinDataObject {
  close: number,
  high: number,
  low: number,
  open: number,
  time: number,
  volumefrom: number,
  volumeto: number,
}

interface newsDataObject {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: {
    id: string,
    name: string,
  },
  title: string,
  url: string,
  urlToImage: string,
}

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
const store: Store<stateObject, actionObject> = createStore(coinReducer);

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
