import { actionObject, stateObject, coinDataObject, newsDataObject } from '../types';

//We define the reducer here so that we can pass it in when we create the store
export const coinReducer = (state: stateObject = {
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