import React from 'react';
import CandleStickChart from './ChartComponent';
import { TypeChooser } from "react-stockcharts/lib/helper";
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'; //we import the connect method from react-redux

//It's useful, but not necessary, to define your action types as variables and reference them when you define your actions
//maybe do this in a seperate file and import, you can then reference them here and also in your reducer
const CHANGE_COIN = "CHANGE_COIN";

const change_coin = todo => {
    return {
        type: CHANGE_COIN,
        value: todo
    };
};

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
        todos: state
    };
};

//we aren't using mapDispatchToProps as we don't need it in this simple example
//const mapDispatchToProps = state => {
//    return{}; 
//};

class ApiComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiData: {},
            userSelection: 'BTC'
        }

    }

    async handleChange (e) {
        await this.setState({
            userSelection: e.target.value
        });
        await this.props.dispatch(change_coin(this.state.userSelection));
    };

    async fetchData() {
        const site = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.state.userSelection}&tsym=USD&limit=30`;
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
            console.error(error)
        }
    }

    render() {
        this.fetchData();
        console.log(86, this.state);
        return (
            this.state.apiData.Data !== undefined ?
                <div className="Chart-main">
                    {/* <input 
                        type="text"
                        name="todo"
                        onChange={e => {
                            return this.handleChange(e);
                        }}
                    /> */}
                    <h1>{this.state.userSelection} Crypto Chart</h1>
                    <select onChange={e => {
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
                :
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Loading...
                        </a>
                    </header>
                </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(ApiComponent)

//export default ApiComponent;

