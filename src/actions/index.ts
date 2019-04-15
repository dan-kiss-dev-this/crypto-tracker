import { actionObject, coinDataObject, newsDataObject } from '../types';

//It's useful, but not necessary, to define your action types as variables and reference them when you define your actions
export const GET_COIN_DATA: string = "GET_COIN_DATA";
export const GET_NEWS: string = "GET_NEWS";

export const get_coin_data = (coinData: coinDataObject[]):actionObject => { 
    return {
        type: GET_COIN_DATA,
        value: coinData
    };
};

export const get_news = (news: newsDataObject[]):actionObject => {
    return {
        type: GET_NEWS,
        value: news
    }
}