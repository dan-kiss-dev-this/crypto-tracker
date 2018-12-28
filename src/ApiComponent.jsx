import React from 'react';
import CandleStickChart from './ChartComponent';
import { TypeChooser } from "react-stockcharts/lib/helper";
import logo from './logo.svg';
import './App.css';
import Skeleton from 'react-loading-skeleton';
import NewsComponent from './NewsComponent';

import { connect } from 'react-redux'; //we import the connect method from react-redux

//It's useful, but not necessary, to define your action types as variables and reference them when you define your actions
//maybe do this in a seperate file and import, you can then reference them here and also in your reducer
const CHANGE_COIN = "CHANGE_COIN";
const GET_NEWS = "GET_NEWS";

const change_coin = newCoin => {
    return {
        type: CHANGE_COIN,
        value: newCoin
    };
};

const get_news = news => {
    return {
        type: GET_NEWS,
        value: news
    }
}

// const remove_todo = indexOfTodo => {
//     return {
//         type: REMOVE_TODO,
//         value: indexOfTodo
//     };
// };

//we define the mapStateToProps function where we will pass in to the connect method further down
//We assign the entire state here to the todos property as we only contain the list of todos in the state
const mapStateToProps = state => {
    return {
        fullData: state
    };
};

//we aren't using mapDispatchToProps as we don't need it in this simple example
//const mapDispatchToProps = state => {
//    return{}; 
//};

class ApiComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log(53,this)
        this.state = {
            apiData: {},
            coinSelected: this.props.fullData.coin,
            // coinSelected: 'BTC',
            newsData: {},
        }
        console.log(60,props);
    }

    async handleChange (e) {
        await this.setState({
            coinSelected: e.target.value
        });
        await this.fetchData();
        await this.props.dispatch(change_coin(this.state.coinSelected));
    };

    async componentDidMount() {
        console.log(72,'mount');
        await this.fetchNews();
        this.fetchData();
    }

    async fetchNews() {
        const site = 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=be6a84f3238641c2b3eb13361beffc88';
        let response = await fetch(site)
        try {
            if (response.ok) {
                let newsData = await response.json();
                await this.setState({
                    newsData,
                });
                await this.props.dispatch(get_news(this.state.newsData));
            }
        } catch (error) {
            alert('Error occured reload page');
            console.error(error);
        }
    }


    async fetchData() {
        console.log(94,this.props);
        const coin = this.props.fullData.coin
        console.log(98,coin, this.props.fullData.coin);
        const site = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=30`;
        console.log(68,site);
        let response = await fetch(site);
        try {
            if (response.ok) {
                let apiData = await response.json()
                this.setState({
                    apiData,
                });
            }
        } catch (error) {
            alert('Error occured reload page');
            console.error(error);
        }
    }

    render() {
        console.log(100,'state', this.state,' props', this.props);
        return (
            // this.state.apiData.Data !== undefined ?
            this.state.apiData.Data !== undefined ?
                <div>
                    <div className="Chart-main">
                        {/* <input 
                            type="text"
                            name="todo"
                            onChange={e => {
                                return this.handleChange(e);
                            }}
                        /> */}
                        <h1>{this.state.coinSelected} Crypto Chart</h1>
                        <span>Select Coin </span><select onChange={e => {
                            this.handleChange(e); 
                        }}>
                            <option value='BTC'>Bitcoin</option>
                            <option value='ETH'>Ethereum</option>
                            <option value='XRP'>Ripple</option>
                        </select>
                        <TypeChooser >
                            {type => <CandleStickChart type={type} data={this.state.apiData.Data} />}
                        </TypeChooser>
                    </div>
                    <NewsComponent />
                </div>
                :
                <div className="App">
                    <h1><Skeleton count={1} height={70}/></h1>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <a
                            className="App-link"
                            href="https://github.com/dan-kiss-dev-this/crypto-tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Loading...
                        </a>
                    </div>
                    
                </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(ApiComponent)

//export default ApiComponent;

