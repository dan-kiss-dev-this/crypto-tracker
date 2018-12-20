import React from 'react';
import CandleStickChart from './ChartComponent';
import { TypeChooser } from "react-stockcharts/lib/helper";
import logo from './logo.svg';
import './App.css';

class ApiComponent extends React.Component {

    state = {
        apiData: {}
    }

    async fetchData() {
        let response = await fetch(this.props.site);
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

    componentDidMount() {
        this.fetchData();
    }

    render() {
        console.log(37, this.state);
        return (
            this.state.apiData.Data !== undefined ?
                <div className="Chart-main">
                    <h1>Crypto Chart</h1>
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

export default ApiComponent;

