import React from 'react';
import CandleStickChart from './CandleStickChart';
import { TypeChooser } from "react-stockcharts/lib/helper";
import logo from '../images/logo.svg';
import '../css/App.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import NewsComponent from './NewsComponent';

import { connect } from 'react-redux'; //we import the connect method from react-redux

//It's useful, but not necessary, to define your action types as variables and reference them when you define your actions
const GET_COIN_DATA = "GET_COIN_DATA";
const GET_NEWS = "GET_NEWS";

const get_coin_data = CoinData => { 
    return {
        type: GET_COIN_DATA,
        value: CoinData
    };
};

const get_news = news => {
    return {
        type: GET_NEWS,
        value: news
    }
}

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
            coinSelected: this.props.fullData.initialCoin,
            showMobileMenu: false
        }
    }

    async handleChange (e) {
        await this.setState({
            coinSelected: e.target.value
        });
        await this.fetchCoinData();
    };

    async handleMobileMenu () {
        await this.setState({
            showMobileMenu: !this.state.showMobileMenu
        });
    }

    async componentDidMount() {
        await this.fetchNews();
        await this.fetchCoinData();
    }

    async fetchCoinData() {
        const coin = this.state.coinSelected;
        const site = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=30&api_key={42fe264b1c5770a241062077c69f096b9548e03d7b37b634e9fc2c736d33ec98}`;
        const response = await fetch(site);
        try {
            if (response.ok) {
                const apiData = await response.json();
                const { Data } = apiData;
                await this.props.dispatch(get_coin_data(Data));
                await this.forceUpdate();
            }
        } catch (error) {
            alert('Error occured Coin Data API reload page');
            console.error(error);
        }
    }

    async fetchNews() {
        const site = 'https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=be6a84f3238641c2b3eb13361beffc88';
        const response = await fetch(site)
        try {
            if (response.ok) {
                const newsData = await response.json();
                await this.props.dispatch(get_news(newsData));
            }
        } catch (error) {
            alert('Error occured News Data API reload page');
            console.error(error);
        }
    }

    render() {
        const navBar =  <div>
            <div className="navBar">
                <h1>CryptoLive</h1>
                <div>
                    <a href="https://github.com/dan-kiss-dev-this/crypto-tracker">Github</a>
                    <a href="https://www.linkedin.com/in/dan-kiss-dev-this/">Author</a>
                </div>
            </div>
            <div>
                <div className="navBarMobile">
                    <h1>CryptoLive</h1>
                    <div onClick={() => {this.handleMobileMenu() }} >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            {this.state.showMobileMenu ?
                <div className="dropDown">
                    <div>
                        <a className="github" href="https://github.com/dan-kiss-dev-this/crypto-tracker">
                            Github
                        </a>
                    </div>
                    <div className="author">
                        <a  href="https://www.linkedin.com/in/dan-kiss-dev-this/">
                            Author
                        </a>
                    </div>
                </div>
                :
                <div className="dropDown">
                    {null}   
                </div>
            }
        </div>      

        console.log(141,this.state, this.props);
        return (
            this.props.fullData.coinData !== null && this.props.fullData.coinData.length > 0 && 
            this.props.fullData.news !== null && 
            this.props.fullData.news.length > 0 ?
            <div>
                {navBar}
                <div className="Dropdown-main">
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
                </div>
                <div className="Chart-main">
                    <TypeChooser >
                        {type => <CandleStickChart 
                        type={type} 
                        data={this.props.fullData.coinData} 
                        />}
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
                    <a  className="App-link"
                        href="https://github.com/dan-kiss-dev-this/crypto-tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        APIs Loading...
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

