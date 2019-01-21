/**
 * @file
 * Shared types between components and blocks
 */

export interface actionObject {
    type: string,
    value: any[],
}
  
export interface stateObject {
    initialCoin: string, 
    coinData: null | coinDataObject[],
    news: null | newsDataObject[], 
}

export interface coinDataObject {
    close: number,
    high: number,
    low: number,
    open: number,
    time: number,
    volumefrom: number,
    volumeto: number,
}

export interface newsDataObject {
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

export interface stateObjectToProp {
    fullData?: stateObject,
    fire_get_coin_data?: any,
    fire_get_news?: any,
}

export interface localStateApiComponent {
    coinSelected: string,
    showMobileMenu: boolean,
    apiLoaded: boolean,
}