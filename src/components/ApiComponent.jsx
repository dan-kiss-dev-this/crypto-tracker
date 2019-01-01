import React from 'react';
import CandleStickChart from './ChartComponent';
import { TypeChooser } from "react-stockcharts/lib/helper";
import logo from '../images/logo.svg';
import '../css/App.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import NewsComponent from './NewsComponent';

import { connect } from 'react-redux'; //we import the connect method from react-redux

//It's useful, but not necessary, to define your action types as variables and reference them when you define your actions
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

const navBar = <div className="navBar">
        <h1>CryptoLive</h1>
        <div>
            <a href="https://github.com/dan-kiss-dev-this">Home</a>
            <a href="https://github.com/dan-kiss-dev-this">About</a>
        </div>
    </div>;

//we define the mapStateToProps function where we will pass in to the connect method further down
//We assign the entire state here to the fullData property 
const mapStateToProps = state => {
    return {
        fullData: state
    };
};

//we aren't using mapDispatchToProps as we don't need it in this basic example
//const mapDispatchToProps = state => {
//    return{}; 
//};

class ApiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: {},
            coinSelected: this.props.fullData.coin,
        }
    }

    async handleChange (e) {
        await this.setState({
            coinSelected: e.target.value
        });
        await this.fetchCoinData();
        await this.props.dispatch(change_coin(this.state.coinSelected));
    };

    async componentDidMount() {
        await this.fetchNews();
        await this.fetchCoinData();
    }

    async fetchCoinData() {
        const coin = this.state.coinSelected;
        const site = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=30&api_key={42fe264b1c5770a241062077c69f096b9548e03d7b37b634e9fc2c736d33ec98}`;
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

    async fetchNews() {
        const site = 'https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=be6a84f3238641c2b3eb13361beffc88';
        let response = await fetch(site)
        try {
            if (response.ok) {
                let newsData = await response.json();
                await this.props.dispatch(get_news(newsData));
            }
        } catch (error) {
            alert('Error occured reload page');
            console.error(error);
        }
    }

    render() {
        console.log('state', this.state,' props', this.props);
        return (
            this.state.apiData.Data !== undefined ?
            <div>
                {navBar}
                <div className="Chart-main">
                    <h4>Select Coin:
                        <select onChange={e => {
                            this.handleChange(e); 
                        }}>
                            <option value='BTC'>Bitcoin</option>
                            <option value='ETH'>Ethereum</option>
                            <option value='XRP'>Ripple</option>
                            <option value='LTC'>Litecoin</option>
                            <option value='USDT'>Tether</option>
                            <option value='XLM'>Stellar</option>
                            <option value='XMR'>Monero</option>
                        </select>
                    </h4>
                    <TypeChooser >
                        {type => <CandleStickChart type={type} data={this.state.apiData.Data} />}
                    </TypeChooser>
                </div>
                <NewsComponent /> 
            </div>
            :
            <div className="App">
                <SkeletonTheme color='gray' highlightColor='white'>
                    <h1><Skeleton count={1} height={70}/></h1>
                </SkeletonTheme>
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

