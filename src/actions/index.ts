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

export const get_news2 = () => {
    return (dispatch: any) => {
        const site = 'https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=be6a84f3238641c2b3eb13361beffc88';
        fetch(site)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_NEWS,
                payload: data
            })
        });

    }
}